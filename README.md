# Kim's Blinds Website

Production website build for Kim's Blinds, an Oak Flats blinds, awnings, shutters, curtains, fly screens, security doors, and outdoor shade business.

## Stack

- React 19
- TypeScript
- Vite
- Static SEO route generation

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build runs:

1. `scripts/generate-seo-files.mjs` for sitemap, robots, `llms.txt`, and route inventory.
2. `scripts/generate-webp.mjs` for image conversion.
3. TypeScript compile.
4. Vite production build.
5. `scripts/generate-static-pages.mjs` for per-route static HTML shells.

## SEO Notes

The public sitemap intentionally includes main service pages, main suburb hubs, articles, and conversion pages. Broad service-suburb routes are generated as noindex utility pages unless they carry enough unique local value to justify indexing.

`llms.txt` is generated for AI-search/GEO discovery.
