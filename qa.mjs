// Automatisierter QA-Durchlauf über den statischen Export (nicht Teil der Website).
// Prüft: horizontales Überlaufen, Überschriftenhierarchie, Alt-Texte,
// Touch-Ziele, Kontraste und alle internen Links.
import { chromium } from "playwright";

const BASE = process.argv[2] ?? "http://127.0.0.1:3211";
const PAGES = [
  "/",
  "/leistungen/",
  "/services/",
  "/unternehmen/",
  "/team/",
  "/karriere/",
  "/kontakt/",
  "/impressum/",
  "/datenschutz/",
];
const WIDTHS = [320, 390, 768, 1024, 1440, 1920];

const problems = [];
const note = (page, kind, msg) => problems.push({ page, kind, msg });

const srgb = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const luminance = ([r, g, b]) =>
  0.2126 * srgb(r / 255) + 0.7152 * srgb(g / 255) + 0.0722 * srgb(b / 255);
const contrast = (a, b) => {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};
const parseRgb = (s) => (s.match(/\d+(\.\d+)?/g) ?? []).slice(0, 3).map(Number);

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});

for (const path of PAGES) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const url = BASE + path;
  page.on("pageerror", (e) => note(path, "js-error", e.message));
  const resp = await page.goto(url, { waitUntil: "load" });
  if (!resp || resp.status() >= 400) {
    note(path, "http", `Status ${resp?.status()}`);
    await page.close();
    continue;
  }

  // --- Überschriftenhierarchie --------------------------------------------
  const headings = await page.evaluate(() =>
    [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => ({
      level: Number(h.tagName[1]),
      text: (h.textContent ?? "").trim().slice(0, 60),
    })),
  );
  const h1s = headings.filter((h) => h.level === 1);
  if (h1s.length !== 1) note(path, "heading", `${h1s.length} × <h1> (erwartet: 1)`);
  let prev = 0;
  for (const h of headings) {
    if (prev && h.level > prev + 1) {
      note(path, "heading", `Sprung h${prev} → h${h.level}: "${h.text}"`);
    }
    prev = h.level;
  }

  // --- Alt-Texte -----------------------------------------------------------
  const badAlt = await page.evaluate(() =>
    [...document.images]
      .filter((i) => i.getAttribute("alt") === null || i.alt.trim() === "")
      .map((i) => i.currentSrc || i.src),
  );
  for (const src of badAlt) note(path, "alt", `Bild ohne Alt-Text: ${src}`);

  // --- Bilder ohne width/height (Layout-Sprünge) ---------------------------
  const noDims = await page.evaluate(() =>
    [...document.images]
      .filter((i) => !i.getAttribute("width") || !i.getAttribute("height"))
      .map((i) => i.src),
  );
  for (const src of noDims) note(path, "cls", `Bild ohne width/height: ${src}`);

  // --- Links ---------------------------------------------------------------
  const links = await page.evaluate(() =>
    [...document.querySelectorAll("a[href]")].map((a) => ({
      href: a.getAttribute("href"),
      text: (
        (a.textContent ?? "").trim() ||
        a.getAttribute("aria-label") ||
        [...a.querySelectorAll("img")].map((i) => i.alt).join(" ")
      ).trim().slice(0, 40),
      target: a.getAttribute("target"),
      rel: a.getAttribute("rel"),
    })),
  );
  for (const l of links) {
    if (!l.text) note(path, "link", `Link ohne Beschriftung: ${l.href}`);
    if (l.target === "_blank" && !(l.rel ?? "").includes("noopener")) {
      note(path, "link", `target=_blank ohne rel=noopener: ${l.href}`);
    }
  }

  // --- Kontraste (sichtbarer Text) ----------------------------------------
  const samples = await page.evaluate(() => {
    const out = [];
    const toRgb = (value) => {
      const probe = document.createElement("span");
      probe.style.color = value;
      document.body.appendChild(probe);
      const out = getComputedStyle(probe).color;
      probe.remove();
      return out;
    };
    const bgOf = (el) => {
      let n = el;
      while (n && n !== document.documentElement) {
        const bg = getComputedStyle(n).backgroundColor;
        if (bg && !/rgba?\(\s*0,\s*0,\s*0,\s*0\s*\)/.test(bg)) return toRgb(bg);
        n = n.parentElement;
      }
      return toRgb(getComputedStyle(document.body).backgroundColor);
    };
    const nodes = [...document.querySelectorAll("p,a,li,h1,h2,h3,h4,dt,dd,span,th,td,button")];
    for (const el of nodes) {
      const own = [...el.childNodes].some(
        (n) => n.nodeType === 3 && (n.textContent ?? "").trim().length > 1,
      );
      if (!own) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) continue;
      const cs = getComputedStyle(el);
      if (cs.visibility === "hidden" || cs.opacity === "0") continue;
      out.push({
        color: toRgb(cs.color),
        bg: bgOf(el),
        size: parseFloat(cs.fontSize),
        weight: Number(cs.fontWeight) || 400,
        text: (el.textContent ?? "").trim().slice(0, 45),
      });
    }
    return out;
  });
  const seen = new Set();
  for (const s of samples) {
    const key = `${s.color}|${s.bg}|${s.size}|${s.weight}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const px = s.size;
    const large = px >= 24 || (px >= 18.66 && s.weight >= 700);
    const need = large ? 3 : 4.5;
    const ratio = contrast(parseRgb(s.color), parseRgb(s.bg));
    if (ratio < need) {
      note(
        path,
        "contrast",
        `${ratio.toFixed(2)}:1 (nötig ${need}) – ${s.color} auf ${s.bg}, ${px}px/${s.weight} – "${s.text}"`,
      );
    }
  }

  await page.close();

  // --- Horizontaler Überlauf + Touch-Ziele über alle Breiten ---------------
  for (const w of WIDTHS) {
    const p = await browser.newPage({ viewport: { width: w, height: 900 } });
    await p.goto(url, { waitUntil: "load" });
    const overflow = await p.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    if (overflow > 1) note(path, "overflow", `${w}px: ${overflow}px horizontaler Überlauf`);

    if (w <= 768) {
      const small = await p.evaluate(() =>
        [...document.querySelectorAll("a,button")]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            if (r.width < 1 || r.height < 1) return false;
            const cs = getComputedStyle(el);
            // Links mitten im Fließtext sind keine eigenständigen Tap-Ziele.
            if (el.closest("p,li,figcaption,address,.prose-hiwo")) return false;
            if (cs.display === "inline") return false;
            return r.height < 40;
          })
          .map((el) => `${el.tagName} "${(el.textContent ?? "").trim().slice(0, 30)}"`),
      );
      for (const s of new Set(small)) note(path, "touch", `${w}px: Ziel < 40px hoch – ${s}`);
    }
    await p.close();
  }
}

// --- Interne Links auflösen -------------------------------------------------
const checkPage = await browser.newPage();
const internal = new Set();
for (const path of PAGES) {
  await checkPage.goto(BASE + path, { waitUntil: "load" });
  const hrefs = await checkPage.evaluate(() =>
    [...document.querySelectorAll("a[href]")]
      .map((a) => a.getAttribute("href"))
      .filter((h) => h && h.startsWith("/")),
  );
  hrefs.forEach((h) => internal.add(h.split("#")[0]));
}
for (const href of internal) {
  const r = await checkPage.request.get(BASE + href);
  if (r.status() >= 400) note("global", "link-404", `${href} → ${r.status()}`);
}
await checkPage.close();
await browser.close();

// --- Bericht ----------------------------------------------------------------
const byKind = problems.reduce((m, p) => ((m[p.kind] ??= []).push(p), m), {});
const kinds = Object.keys(byKind).sort();
if (!kinds.length) {
  console.log("QA: keine Befunde.");
} else {
  for (const k of kinds) {
    console.log(`\n### ${k} (${byKind[k].length})`);
    for (const p of byKind[k].slice(0, 25)) console.log(`  [${p.page}] ${p.msg}`);
    if (byKind[k].length > 25) console.log(`  … ${byKind[k].length - 25} weitere`);
  }
}
console.log(`\nSumme: ${problems.length} Befunde über ${PAGES.length} Seiten.`);
