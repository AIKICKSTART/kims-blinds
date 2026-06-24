import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const seoSitePath = path.join(root, "src", "data", "seoSite.ts");
const suburbPath = path.join(root, "src", "data", "suburbs80km.ts");
const baseUrl = "https://kimsblinds.com.au";

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function between(text, startMarker, endMarker) {
  const start = text.indexOf(startMarker);
  const end = text.indexOf(endMarker, start + startMarker.length);
  if (start === -1 || end === -1) {
    throw new Error(`Could not read block between ${startMarker} and ${endMarker}`);
  }
  return text.slice(start, end);
}

function unique(values) {
  return [...new Set(values)].filter(Boolean);
}

const seoSite = readText(seoSitePath);
const suburbsSource = readText(suburbPath);

const serviceBlock = between(seoSite, "export const services", "export const blogPosts");
const blogBlock = between(seoSite, "export const blogPosts", "export const faqItems");
const indexableSuburbBlock = between(seoSite, "export const indexableSuburbSlugs", "] as const;");

const serviceSlugs = unique([...serviceBlock.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
const blogSlugs = unique([...blogBlock.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
const suburbSlugs = unique([...suburbsSource.matchAll(/"slug":\s*"([^"]+)"/g)].map((match) => match[1]));
const indexableSuburbSlugs = unique([...indexableSuburbBlock.matchAll(/"([^"]+)"/g)].map((match) => match[1]));
const indexableSuburbSet = new Set(indexableSuburbSlugs);

const publicCoreRoutes = [
  "/",
  "/services",
  "/suburbs",
  "/blog",
  "/pricing",
  "/faq",
  "/comparison/product-options",
  "/contact",
  "/about",
  "/warranty",
  "/testimonials",
  "/privacy-policy",
  "/terms-of-service",
];

const internalRoutes = [
  "/design-system",
  "/components",
];

const serviceRoutes = serviceSlugs.map((slug) => `/services/${slug}`);
const suburbRoutes = indexableSuburbSlugs.map((slug) => `/suburbs/${slug}`);
const nonIndexableSuburbRoutes = suburbSlugs.filter((slug) => !indexableSuburbSet.has(slug)).map((slug) => `/suburbs/${slug}`);
const serviceSuburbRoutes = serviceSlugs.flatMap((service) => suburbSlugs.map((suburb) => `/services/${service}/${suburb}`));
const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`);
const routes = unique([...publicCoreRoutes, ...serviceRoutes, ...suburbRoutes, ...blogRoutes]);
const noindexRoutes = unique([...internalRoutes, ...nonIndexableSuburbRoutes, ...serviceSuburbRoutes]);

fs.mkdirSync(publicDir, { recursive: true });

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map((route) => {
    const loc = `${baseUrl}${route === "/" ? "" : route}`;
    return `  <url><loc>${loc}</loc></url>`;
  })
  .join("\n")}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\nDisallow: /design-system\nDisallow: /components\nSitemap: ${baseUrl}/sitemap.xml\n`;

const llms = `# Kim's Blinds\n\n> Kim's Blinds supplies blinds, awnings, security doors and screens, fly screens, panel glides, plantation shutters and curtains from Oak Flats NSW.\n\n## Verified business details\n- Phone: 02 4256 1297\n- Email: info@kimsblinds.com.au\n- Address: Unit 5, 147 Industrial Rd, Oak Flats NSW 2529\n- Hours: Monday to Thursday 9am-4.30pm, Friday 9am-3.30pm, Saturday and Sunday closed\n- Offers: free measure and quote, locally made products, family owned and operated, 100% quality assurance\n\n## Indexable content policy\n- Main service pages: ${serviceSlugs.length}\n- Main suburb hubs: ${indexableSuburbSlugs.length}\n- In-depth buying guides: ${blogSlugs.length}\n- Broader suburb and service-suburb combinations exist for users but stay out of the sitemap unless they add genuine local value.\n\n## Primary pages\n- [Home](${baseUrl}/)\n- [Products and services](${baseUrl}/services)\n- [Main suburb hubs](${baseUrl}/suburbs)\n- [Buying guides](${baseUrl}/blog)\n- [Contact](${baseUrl}/contact)\n`;

const inventory = {
  generatedAt: new Date().toISOString(),
  brand: "Kim's Blinds",
  baseUrl,
  counts: {
    core: publicCoreRoutes.length,
    internal: noindexRoutes.length,
    services: serviceRoutes.length,
    suburbs: suburbRoutes.length,
    noindexSuburbs: nonIndexableSuburbRoutes.length,
    noindexServiceSuburb: serviceSuburbRoutes.length,
    blog: blogRoutes.length,
    total: routes.length,
  },
  serviceSlugs,
  suburbSlugs,
  indexableSuburbSlugs,
  blogSlugs,
  routes,
  internalRoutes: noindexRoutes,
};

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);
fs.writeFileSync(path.join(publicDir, "llms.txt"), llms);
fs.writeFileSync(path.join(publicDir, "site-route-inventory.json"), `${JSON.stringify(inventory, null, 2)}\n`);

console.log(
  `Generated ${routes.length.toLocaleString("en-AU")} indexable routes: ${serviceRoutes.length} services, ${suburbRoutes.length} suburb hubs, ${blogRoutes.length} blogs. Marked ${noindexRoutes.length.toLocaleString("en-AU")} utility routes as noindex.`,
);
