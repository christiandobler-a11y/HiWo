// Pixelbasierte Kontrastprüfung für Text auf dem neuen Bild-Hintergrund im
// Hero (nicht Teil der Website). Die normale CSS-Kontrastprüfung in qa.mjs
// geht von einer flachen background-color aus -- hier liegt Text aber auf
// einem Foto + Muster, deshalb wird der tatsächliche Hintergrund aus dem
// gerenderten Screenshot ausgelesen (Pixel direkt neben den Textzeilen,
// dort wo garantiert kein Glyph liegt).
import { chromium } from "playwright";
import { PNG } from "pngjs";
import fs from "node:fs";

const [, , url = "http://127.0.0.1:3211/", width = "1440"] = process.argv;

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
const page = await browser.newPage({ viewport: { width: +width, height: 1000 } });
await page.goto(url, { waitUntil: "load" });
await page.waitForTimeout(600);

const targets = await page.evaluate(() => {
  const els = document.querySelectorAll(
    "section:first-of-type h1, section:first-of-type p, section:first-of-type dt, section:first-of-type dd, section:first-of-type span.text-ink, section:first-of-type a",
  );
  return [...els]
    .filter((el) => (el.textContent ?? "").trim().length > 1)
    .map((el) => {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        text: (el.textContent ?? "").trim().slice(0, 40),
        color: cs.color,
        size: parseFloat(cs.fontSize),
        weight: Number(cs.fontWeight) || 400,
        x: r.x,
        y: r.y,
        w: r.width,
        h: r.height,
      };
    })
    .filter((t) => t.w > 0 && t.h > 0);
});

const shotPath = "/tmp/contrast_shot.png";
await page.screenshot({ path: shotPath });
await browser.close();

const png = PNG.sync.read(fs.readFileSync(shotPath));
const getPixel = (x, y) => {
  x = Math.max(0, Math.min(png.width - 1, Math.round(x)));
  y = Math.max(0, Math.min(png.height - 1, Math.round(y)));
  const idx = (png.width * y + x) << 2;
  return [png.data[idx], png.data[idx + 1], png.data[idx + 2]];
};

let worst = null;
const seen = new Set();
for (const t of targets) {
  const key = `${t.text}|${t.color}|${t.size}`;
  if (seen.has(key)) continue;
  seen.add(key);

  // Hintergrundpixel knapp ober- und unterhalb der Textbox sampeln -- dort
  // liegt garantiert kein Glyph, aber derselbe lokale Bildbereich.
  const samples = [];
  for (let fx = 0.1; fx <= 0.9; fx += 0.2) {
    samples.push(getPixel(t.x + t.w * fx, t.y - 2));
    samples.push(getPixel(t.x + t.w * fx, t.y + t.h + 2));
  }
  const avg = [0, 1, 2].map((i) => samples.reduce((s, p) => s + p[i], 0) / samples.length);

  const px = t.size;
  const large = px >= 24 || (px >= 18.66 && t.weight >= 700);
  const need = large ? 3 : 4.5;
  const ratio = contrast(parseRgb(t.color), avg);
  const status = ratio >= need ? "OK  " : "FAIL";
  console.log(
    `${status} ${ratio.toFixed(2)}:1 (nötig ${need}) – "${t.text}" bg≈rgb(${avg.map((v) => Math.round(v)).join(",")})`,
  );
  if (!worst || ratio < worst.ratio) worst = { ratio, need, text: t.text };
}

console.log(`\nSchlechtester Wert: ${worst.ratio.toFixed(2)}:1 (nötig ${worst.need}) – "${worst.text}"`);
process.exit(worst.ratio >= worst.need ? 0 : 1);
