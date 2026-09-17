// Hilfsskript für visuelle Reviews (nicht Teil der Website).
// Aufruf: node shot.mjs <url> <out.png> [breite] [höhe] [fullPage 0|1]
import { chromium } from "playwright";

const [, , url, out, w = "1440", h = "1000", full = "1"] = process.argv;

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const page = await browser.newPage({ viewport: { width: +w, height: +h } });

await page.goto(url, { waitUntil: "load" });

// Endzustand zeigen: Reveal-Animationen überspringen und alle Bilder laden.
await page.addStyleTag({
  content: "html.js [data-reveal]{opacity:1!important;transform:none!important}",
});
await page.evaluate(() => {
  for (const img of document.images) img.loading = "eager";
});
await page.evaluate(
  () =>
    new Promise((resolve) => {
      const pending = [...document.images].filter((i) => !i.complete);
      if (!pending.length) return resolve();
      let left = pending.length;
      const done = () => --left <= 0 && resolve();
      for (const i of pending) {
        i.addEventListener("load", done, { once: true });
        i.addEventListener("error", done, { once: true });
      }
      setTimeout(resolve, 8000);
    }),
);
// Alle Bilder wirklich dekodieren lassen, sonst bleiben in sehr langen
// fullPage-Screenshots einzelne Kacheln leer.
await page.evaluate(() =>
  Promise.all([...document.images].map((i) => i.decode().catch(() => {}))),
);
await page.waitForTimeout(1200);

await page.screenshot({ path: out, fullPage: full === "1" });
await browser.close();
