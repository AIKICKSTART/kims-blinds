/**
 * Returns the WebP sibling path for a raster image source by swapping the
 * extension to `.webp`. Only `.jpg`/`.jpeg`/`.png` are converted; `.webp`,
 * `.svg` and anything else are returned unchanged. Safe at runtime: if the
 * WebP file does not exist, the browser falls back to the original via
 * `<picture>`.
 */
export function webpFrom(src: string): string {
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}
