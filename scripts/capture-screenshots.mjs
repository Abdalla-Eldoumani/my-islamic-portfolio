// Captures the plate images in public/projects/ as WebP.
//
//   node scripts/capture-screenshots.mjs              capture every live site
//   node scripts/capture-screenshots.mjs --only id    capture one site
//   node scripts/capture-screenshots.mjs --import id file.png
//                                                      optimise an existing image
//
// Playwright is imported from the PLAYWRIGHT_MODULE path when that is set,
// otherwise from the installed `playwright` package. Chromium also does the
// WebP encoding, so no image library is needed.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../public/projects/", import.meta.url));
const SIZE = { width: 1440, height: 900 };
const QUALITY = 0.8;

const SITES = [
  {
    id: "tajweed-trainer",
    url: "https://tajweedtrainer.vercel.app/",
    // A first-visit tour covers the home page.
    prepare: (page) => page.getByRole("button", { name: "Skip" }).click({ timeout: 5000 }),
  },
  { id: "seerah", url: "https://noor-al-seerah.vercel.app/" },
  { id: "asmaa", url: "https://asmaa-alpha.vercel.app/" },
  { id: "noor-guide", url: "https://noor-guide-dusky.vercel.app/" },
  {
    id: "maqra",
    url: "https://huggingface.co/datasets/maqra-project/mishari-alafasy-64kbps",
  },
];

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? "playwright");

async function toWebp(browser, png) {
  const page = await browser.newPage();
  const b64 = await page.evaluate(
    async ([src, quality]) => {
      const img = new Image();
      img.src = src;
      await img.decode();
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext("2d").drawImage(img, 0, 0);
      return canvas.toDataURL("image/webp", quality).split(",")[1];
    },
    [`data:image/png;base64,${png.toString("base64")}`, QUALITY],
  );
  await page.close();
  return Buffer.from(b64, "base64");
}

async function capture(browser, { url, prepare }) {
  const context = await browser.newContext({
    viewport: SIZE,
    colorScheme: "light",
    reducedMotion: "reduce",
    locale: "en-US",
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 45_000 });
  await page.evaluate(() => document.fonts.ready);
  await prepare?.(page);
  await page.waitForTimeout(1000);
  const covered = await page.evaluate(() =>
    [...document.querySelectorAll('[aria-modal="true"]')].some(
      (el) => !el.closest("[inert]") && getComputedStyle(el).opacity !== "0",
    ),
  );
  if (covered) throw new Error("a modal is covering the page");
  const png = await page.screenshot();
  await context.close();
  return png;
}

async function save(browser, id, png) {
  const webp = await toWebp(browser, png);
  await writeFile(`${OUT}${id}.webp`, webp);
  console.log(`${id}.webp  ${(webp.length / 1024).toFixed(0)} KB`);
}

const args = process.argv.slice(2);
const flag = (name) => args.indexOf(name);
await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
let failed = false;

if (flag("--import") !== -1) {
  const [id, file] = args.slice(flag("--import") + 1);
  await save(browser, id, await readFile(file));
} else {
  const only = flag("--only") !== -1 ? args[flag("--only") + 1] : null;
  for (const site of SITES.filter((s) => !only || s.id === only)) {
    try {
      await save(browser, site.id, await capture(browser, site));
    } catch (error) {
      failed = true;
      console.error(`${site.id}: ${error.message}; the existing image is kept`);
    }
  }
}

await browser.close();
process.exitCode = failed ? 1 : 0;
