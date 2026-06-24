import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandDir = path.join(root, "public", "brand");
const QUALITY = 80;
const SOURCE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch (error) {
    console.warn(`[generate-webp] sharp unavailable, skipping WebP generation: ${error.message}`);
    return;
  }

  let sourcePaths;
  try {
    sourcePaths = collectSourceImages(brandDir);
  } catch (error) {
    console.warn(`[generate-webp] could not read ${brandDir}, skipping: ${error.message}`);
    return;
  }

  let generated = 0;
  for (const sourcePath of sourcePaths) {
    const webpPath = path.join(path.dirname(sourcePath), `${path.basename(sourcePath, path.extname(sourcePath))}.webp`);

    if (fs.existsSync(webpPath)) continue;

    try {
      await sharp(sourcePath).webp({ quality: QUALITY }).toFile(webpPath);
      generated += 1;
    } catch (error) {
      console.warn(`[generate-webp] failed to convert ${sourcePath}: ${error.message}`);
    }
  }

  console.log(`[generate-webp] generated ${generated} WebP file(s)`);
}

function collectSourceImages(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectSourceImages(entryPath);
    if (!entry.isFile()) return [];
    return SOURCE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) ? [entryPath] : [];
  });
}

main().catch((error) => {
  console.warn(`[generate-webp] unexpected error, skipping: ${error.message}`);
});

