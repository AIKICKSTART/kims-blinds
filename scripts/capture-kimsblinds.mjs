import crypto from "node:crypto";
import fs from "node:fs/promises";
import fss from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const startUrl = "https://kimsblinds.com.au/";
const origin = new URL(startUrl).origin;
const outDir = path.join(root, "contents", "kimsblinds");
const pageDir = path.join(outDir, "pages");
const imageDir = path.join(outDir, "images");
const rawDir = path.join(outDir, "raw");
const logoReference = "C:/Users/verri/Downloads/ChatGPT Image Jun 23, 2026, 11_28_48 PM.png";
const maxPages = 80;

await fs.mkdir(pageDir, { recursive: true });
await fs.mkdir(imageDir, { recursive: true });
await fs.mkdir(rawDir, { recursive: true });

const visited = new Set();
const queued = new Set([startUrl]);
const queue = [startUrl];
const pages = [];
const imageMap = new Map();

function normalizeUrl(value, base = startUrl) {
  try {
    const url = new URL(value, base);
    url.hash = "";
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    if (url.origin !== origin) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function slugForUrl(url) {
  const parsed = new URL(url);
  const parts = parsed.pathname.split("/").filter(Boolean);
  return (parts.join("-") || "home")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function filenameFromUrl(url, contentType = "") {
  const parsed = new URL(url);
  const baseName = path.basename(parsed.pathname).split("?")[0] || "image";
  const extFromUrl = path.extname(baseName).toLowerCase();
  const extFromType = contentType.includes("webp")
    ? ".webp"
    : contentType.includes("png")
      ? ".png"
      : contentType.includes("jpeg") || contentType.includes("jpg")
        ? ".jpg"
        : contentType.includes("gif")
          ? ".gif"
          : contentType.includes("svg")
            ? ".svg"
            : "";
  const ext = extFromUrl || extFromType || ".bin";
  const stem = baseName.replace(extFromUrl, "") || "image";
  const hash = crypto.createHash("sha1").update(url).digest("hex").slice(0, 8);
  return `${stem.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${hash}${ext}`;
}

function markdownText(text) {
  return String(text ?? "").replace(/\r\n/g, "\n").trim();
}

async function downloadImage(url, pageUrl, alt = "") {
  if (!url || url.startsWith("data:") || url.startsWith("blob:")) return null;

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  if (!["http:", "https:"].includes(parsed.protocol)) return null;

  if (imageMap.has(url)) {
    const record = imageMap.get(url);
    record.usedOn = Array.from(new Set([...record.usedOn, pageUrl]));
    if (alt && !record.alt.includes(alt)) record.alt.push(alt);
    return record;
  }

  try {
    const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 KimBlindsContentCapture/1.0" } });
    if (!res.ok) return null;
    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.startsWith("image/") && !/\.(png|jpe?g|webp|gif|svg)(\?|$)/i.test(url)) return null;

    const fileName = filenameFromUrl(url, contentType);
    const buffer = Buffer.from(await res.arrayBuffer());
    await fs.writeFile(path.join(imageDir, fileName), buffer);

    const record = {
      sourceUrl: url,
      file: `images/${fileName}`,
      contentType,
      bytes: buffer.length,
      alt: alt ? [alt] : [],
      usedOn: [pageUrl],
    };
    imageMap.set(url, record);
    return record;
  } catch {
    return null;
  }
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1100 },
  userAgent: "Mozilla/5.0 KimBlindsContentCapture/1.0",
});
const page = await context.newPage();

while (queue.length && visited.size < maxPages) {
  const url = queue.shift();
  if (!url || visited.has(url)) continue;
  visited.add(url);

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(700);
  } catch (error) {
    pages.push({ url, slug: slugForUrl(url), error: String(error) });
    continue;
  }

  const data = await page.evaluate(() => {
    const pick = (selector) => Array.from(document.querySelectorAll(selector));
    const clean = (value) => (value || "").replace(/\s+/g, " ").trim();
    const links = pick("a[href]").map((anchor) => ({ href: anchor.href, text: clean(anchor.textContent) }));
    const headings = pick("h1,h2,h3,h4")
      .map((heading) => ({ level: heading.tagName.toLowerCase(), text: clean(heading.textContent) }))
      .filter((heading) => heading.text);
    const images = pick("img").map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt || "",
      width: img.naturalWidth,
      height: img.naturalHeight,
    }));
    const backgroundImages = [];

    for (const el of pick("body *")) {
      const bg = getComputedStyle(el).backgroundImage;
      if (!bg || bg === "none" || !bg.includes("url(")) continue;
      const matches = Array.from(bg.matchAll(/url\(["']?([^"')]+)["']?\)/g)).map((match) => new URL(match[1], document.baseURI).href);
      for (const match of matches) {
        backgroundImages.push({
          src: match,
          alt: clean(el.getAttribute("aria-label") || el.textContent).slice(0, 140),
          width: 0,
          height: 0,
        });
      }
    }

    const main = document.querySelector("main") || document.body;
    return {
      title: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
      h1: clean(document.querySelector("h1")?.textContent),
      headings,
      text: main.innerText.replace(/\n{3,}/g, "\n\n").trim(),
      links,
      images: [...images, ...backgroundImages],
    };
  });

  for (const link of data.links) {
    const normalized = normalizeUrl(link.href, url);
    if (normalized && !visited.has(normalized) && !queued.has(normalized)) {
      queued.add(normalized);
      queue.push(normalized);
    }
  }

  const imageRecords = [];
  for (const img of data.images) {
    const record = await downloadImage(img.src, url, img.alt);
    if (record) imageRecords.push({ ...record, width: img.width, height: img.height });
  }

  const pageRecord = { ...data, url, slug: slugForUrl(url), images: imageRecords };
  pages.push(pageRecord);

  const headingList = data.headings
    .map((heading) => `${"#".repeat(Math.min(6, Number(heading.level.slice(1)) + 1))} ${markdownText(heading.text)}`)
    .join("\n");
  const md = `# ${markdownText(data.title || data.h1 || url)}\n\nSource: ${url}\n\nMeta description: ${markdownText(data.metaDescription)}\n\n## Headings\n\n${headingList}\n\n## Page Text\n\n${markdownText(data.text)}\n`;
  await fs.writeFile(path.join(pageDir, `${pageRecord.slug}.md`), md, "utf8");
}

await browser.close();

if (fss.existsSync(logoReference)) {
  await fs.copyFile(logoReference, path.join(imageDir, "kims-blinds-logo-reference.png"));
}

const manifest = {
  capturedAt: new Date().toISOString(),
  source: startUrl,
  pagesCaptured: pages.length,
  imagesCaptured: imageMap.size,
  pages: pages.map((capturedPage) => ({
    url: capturedPage.url,
    slug: capturedPage.slug,
    title: capturedPage.title,
    headings: capturedPage.headings,
    imageCount: capturedPage.images?.length ?? 0,
    error: capturedPage.error,
  })),
  images: Array.from(imageMap.values()),
};

const summary = `# Kim's Blinds Content Capture\n\nSource: ${startUrl}\nCaptured: ${manifest.capturedAt}\n\n- Pages captured: ${manifest.pagesCaptured}\n- Images captured: ${manifest.imagesCaptured}\n\n## Pages\n\n${manifest.pages.map((capturedPage) => `- [${capturedPage.title || capturedPage.slug}](${capturedPage.url}) - ${capturedPage.imageCount} images`).join("\n")}\n`;

await fs.writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
await fs.writeFile(path.join(rawDir, "pages.json"), JSON.stringify(pages, null, 2), "utf8");
await fs.writeFile(path.join(outDir, "README.md"), summary, "utf8");

console.log(JSON.stringify({ pagesCaptured: manifest.pagesCaptured, imagesCaptured: manifest.imagesCaptured, output: outDir }, null, 2));
