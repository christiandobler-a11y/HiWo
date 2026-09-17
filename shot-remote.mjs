// Screenshot-Helfer für externe URLs über den Agent-Proxy (nicht Teil der Website).
import { chromium } from "playwright";

const [, , url, out, w = "390", h = "844", full = "1"] = process.argv;

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  proxy: { server: process.env.HTTPS_PROXY || process.env.HTTP_PROXY },
  args: [
    "--ignore-certificate-errors",
    "--disable-background-networking",
    "--disable-sync",
    "--disable-gpu",
    "--disable-breakpad",
    "--disable-client-side-phishing-detection",
    "--disable-component-update",
    "--disable-domain-reliability",
    "--disable-default-apps",
    "--no-first-run",
    "--no-default-browser-check",
  ],
});
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
await page.screenshot({ path: out, fullPage: full === "1" });
console.log("SCREENSHOT_OK");
process.exit(0);
