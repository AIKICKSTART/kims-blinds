import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const inventoryPath = path.join(root, "public", "site-route-inventory.json");
const indexPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexPath)) {
  throw new Error("dist/index.html does not exist. Run the Vite build before generate:static.");
}

if (!fs.existsSync(inventoryPath)) {
  throw new Error("public/site-route-inventory.json does not exist. Run generate:seo before generate:static.");
}

const inventory = JSON.parse(fs.readFileSync(inventoryPath, "utf8"));
const shell = fs.readFileSync(indexPath, "utf8");
const publicRoutes = Array.isArray(inventory.routes) ? inventory.routes : [];
const internalRoutes = Array.isArray(inventory.internalRoutes) ? inventory.internalRoutes : [];
const routes = [...new Set([...publicRoutes, ...internalRoutes])];
const internalRouteSet = new Set(internalRoutes);
const baseUrl = inventory.baseUrl ?? "https://kimsblinds.com.au";

function assertInside(parent, child) {
  const relative = path.relative(parent, child);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to write outside ${parent}: ${child}`);
  }
}

function titleCaseSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function displayTitleForSlug(slug) {
  return titleCaseSlug(slug).replace(/\bKims\b/g, "Kim's");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeJson(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function localBusinessSchema() {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "Kim's Blinds",
    url: baseUrl,
    telephone: "+61242561297",
    email: "info@kimsblinds.com.au",
    image: `${baseUrl}/brand/kims/generated/homepage-roller-blind-hero.webp`,
    logo: `${baseUrl}/brand/kims/kims-blinds-logo-2026.png`,
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/p/Kims-Blinds-61576949375188/",
      "https://reviews.birdeye.com/kims-blinds-170038323965589",
      "https://www.localsearch.com.au/profile/kim-s-blinds/oak-flats-nsw/hrYg",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "39",
      bestRating: "5",
      worstRating: "1",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 5, 147 Industrial Rd",
      addressLocality: "Oak Flats",
      addressRegion: "NSW",
      postalCode: "2529",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.564,
      longitude: 150.818,
    },
    areaServed: [
      { "@type": "City", name: "Oak Flats" },
      { "@type": "City", name: "Shellharbour" },
      { "@type": "City", name: "Wollongong" },
      { "@type": "City", name: "Kiama" },
      { "@type": "AdministrativeArea", name: "Sutherland Shire" },
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "16:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "15:30" },
    ],
  };
}

function schemaForRoute(route, meta) {
  const parts = route.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  const nodes = [
    localBusinessSchema(),
    {
      "@type": "WebPage",
      "@id": `${meta.canonical}#webpage`,
      url: meta.canonical,
      name: meta.title,
      description: meta.description,
      isPartOf: { "@type": "WebSite", "@id": `${baseUrl}/#website`, name: "Kim's Blinds", url: baseUrl },
      inLanguage: "en-AU",
    },
  ];
  if (parts[0] === "services" && parts[1]) {
    nodes.push({
      "@type": "Service",
      name: serviceNameFor(parts[1]),
      provider: { "@id": `${baseUrl}/#localbusiness` },
      areaServed: parts[2] ? { "@type": "City", name: displayTitleForSlug(parts[2]) } : { "@type": "AdministrativeArea", name: "Illawarra" },
    });
  }
  return { "@context": "https://schema.org", "@graph": nodes };
}

function staticFallbackForRoute(route, meta) {
  const parts = route.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  let heading = meta.title;
  let body = meta.description;
  let links = [
    ["Products and services", "/services"],
    ["Main suburb hubs", "/suburbs"],
    ["Buying guides", "/blog"],
    ["Contact", "/contact"],
  ];

  if (route === "/") {
    heading = "Kim's Blinds - blinds, awnings, shutters and security screens";
    body = "Kim's Blinds is based at Unit 5, 147 Industrial Rd, Oak Flats NSW. The business supplies blinds, awnings, fly screens, security doors and windows, panel glides, plantation shutters and curtains, with a free measure and quote.";
  } else if (parts[0] === "services" && parts.length === 2) {
    const serviceName = serviceNameFor(parts[1]);
    heading = `${serviceName} from Kim's Blinds`;
    body = `Kim's Blinds provides measured ${serviceName.toLowerCase()} advice from Oak Flats. The quote checks the opening, room use, sun, privacy, airflow, access and product finish before final pricing.`;
  } else if (parts[0] === "suburbs" && parts[1]) {
    const suburbName = displayTitleForSlug(parts[1]);
    heading = `${suburbName} suburb hub`;
    body = `Kim's Blinds uses main suburb hubs rather than thin pages for every possible suburb. This hub helps ${suburbName} customers compare blinds, awnings, shutters, curtains, fly screens and security screens before booking a measured quote.`;
  } else if (parts[0] === "blog" && parts[1]) {
    heading = displayTitleForSlug(parts[1]);
    body = `Kim's Blinds buying guide for practical local decisions before requesting a measured quote. The guide focuses on room use, product fit, privacy, shade, airflow, installation details and quote preparation.`;
    links = [["All buying guides", "/blog"], ["Products and services", "/services"], ["Contact", "/contact"]];
  }

  return `<main class="static-seo-fallback" aria-label="Static SEO content">
      <h1>${escapeHtml(heading)}</h1>
      <p>${escapeHtml(body)}</p>
      <p>Call Kim's Blinds on <a href="tel:0242561297">02 4256 1297</a> or request a free measure and quote.</p>
      <nav aria-label="Key pages">${links.map(([label, href]) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`).join(" ")}</nav>
    </main>`;
}

const coreMeta = new Map([
  [
    "/",
    {
      title: "Blinds Wollongong & Oak Flats Quote | Kim's Blinds",
      description:
        "Kim's Blinds supplies blinds, awnings, shutters, curtains, fly screens and security doors from Oak Flats. Book a free measure and quote.",
    },
  ],
  ["/services", { title: "Blinds, Awnings & Security Screens | Kim's Blinds", description: "Compare blinds, awnings, shutters, curtains, fly screens and security doors from Kim's Blinds before booking a measured quote." }],
  ["/suburbs", { title: "Main Suburb Hubs | Kim's Blinds Oak Flats", description: "Main Kim's Blinds suburb hubs for Oak Flats, Shellharbour, Wollongong, Kiama, Dapto and selected Sutherland Shire areas." }],
  ["/blog", { title: "Blinds Buying Guides | Kim's Blinds", description: "In-depth local buying guides for blinds, awnings, shutters, curtains, fly screens and security doors around the Illawarra." }],
  ["/pricing", { title: "Blinds Quote Pricing Guide | Kim's Blinds", description: "Learn what affects measured quote pricing for blinds, awnings, shutters, curtains, fly screens and security doors." }],
  ["/faq", { title: "Blinds, Awnings & Security FAQ | Kim's Blinds", description: "Straight answers about Kim's Blinds products, hours, service areas, free measure and quote process, and quote preparation." }],
  ["/comparison/product-options", { title: "Blinds, Shutters & Screens Compared | Kim's Blinds", description: "Compare blinds, shutters, awnings, outdoor blinds, fly screens and security screens by privacy, shade, airflow and fit." }],
  ["/contact", { title: "Free Measure and Quote | Kim's Blinds Oak Flats", description: "Call Kim's Blinds on 02 4256 1297 or request a free measure and quote from the Oak Flats showroom." }],
  ["/about", { title: "About Kim's Blinds Oak Flats", description: "Kim's Blinds is a family-owned Oak Flats business supplying blinds, awnings, screens, shutters and curtains." }],
  ["/warranty", { title: "Quality Assurance | Kim's Blinds Oak Flats", description: "Kim's Blinds quality assurance and measured installation process for blinds, awnings, shutters, curtains and screens." }],
  ["/testimonials", { title: "Kim's Blinds Customer Reviews", description: "Real customer review excerpts for Kim's Blinds from public review profiles connected to the Oak Flats business." }],
  ["/privacy-policy", { title: "Privacy Policy | Kim's Blinds", description: "How Kim's Blinds handles information submitted for a quote." }],
  ["/terms-of-service", { title: "Terms of Service | Kim's Blinds", description: "Service terms for Kim's Blinds quotes, measures and installations." }],
  ["/design-system", { title: "Kim's Blinds Design System", description: "Internal Kim's Blinds design-system review surface." }],
  ["/components", { title: "Kim's Blinds Components", description: "Internal Kim's Blinds component specimen board." }],
]);

const serviceNames = new Map([
  ["blinds", "Blinds"],
  ["roller-blinds", "Roller Blinds"],
  ["venetian-blinds", "Venetian Blinds"],
  ["vertical-blinds", "Vertical Blinds"],
  ["vision-blinds", "Vision Blinds"],
  ["awnings", "Awnings"],
  ["outdoor-blinds", "Outdoor Blinds & Retractable Awnings"],
  ["plantation-shutters", "Plantation Shutters"],
  ["curtains", "Curtains"],
  ["panel-glides", "Panel Glides"],
  ["fly-screens", "Fly Screens"],
  ["security-doors", "Security Doors & Windows"],
  ["security-screens", "Security Screens"],
]);

function serviceNameFor(slug) {
  return serviceNames.get(slug) ?? titleCaseSlug(slug);
}

function routeMeta(route) {
  const canonical = `${baseUrl}${route === "/" ? "" : route}`;
  const core = coreMeta.get(route);
  if (core) return { ...core, canonical, noindex: internalRouteSet.has(route) };

  const parts = route.replace(/^\/+|\/+$/g, "").split("/");
  if (parts[0] === "services" && parts.length === 3) {
    const serviceName = serviceNameFor(parts[1]);
    const suburbName = displayTitleForSlug(parts[2]);
    return {
      title: `${serviceName} ${suburbName} | Kim's Blinds`,
      description: `Free measure and quote for ${serviceName.toLowerCase()} in ${suburbName}. Kim's Blinds services selected Illawarra and Sutherland Shire suburbs from Oak Flats.`,
      canonical,
      noindex: internalRouteSet.has(route),
    };
  }
  if (parts[0] === "services" && parts.length === 2) {
    const serviceName = serviceNameFor(parts[1]);
    return {
      title: `${serviceName} Wollongong | Kim's Blinds Oak Flats`,
      description: `Measured ${serviceName.toLowerCase()} from Kim's Blinds. Free measure and quote from Oak Flats for selected Illawarra and Sutherland Shire hubs.`,
      canonical,
      noindex: false,
    };
  }
  if (parts[0] === "suburbs" && parts.length === 2) {
    const suburbName = displayTitleForSlug(parts[1]);
    return {
      title: `Blinds ${suburbName} | Kim's Blinds Oak Flats`,
      description: `Kim's Blinds suburb hub for ${suburbName}: compare blinds, awnings, shutters, curtains, fly screens and security doors before a measured quote.`,
      canonical,
      noindex: internalRouteSet.has(route),
    };
  }
  if (parts[0] === "blog" && parts.length === 2) {
    const postTitle = displayTitleForSlug(parts[1]);
    return {
      title: `${postTitle} | Kim's Blinds`,
      description: `Kim's Blinds buying guide: ${postTitle}.`,
      canonical,
      noindex: false,
    };
  }
  return {
    title: "Kim's Blinds",
    description: "Blinds, awnings, security doors and screens from Oak Flats.",
    canonical,
    noindex: internalRouteSet.has(route),
  };
}

function htmlWithMeta(route) {
  const meta = routeMeta(route);
  const robots = meta.noindex ? `\n    <meta name="robots" content="noindex, follow" />` : "";
  const schema = safeJson(schemaForRoute(route, meta));
  const metaBlock = `    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}" />${robots}
    <link rel="canonical" href="${escapeHtml(meta.canonical)}" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(meta.canonical)}" />
    <meta property="og:site_name" content="Kim's Blinds" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <script id="kims-json-ld" type="application/ld+json">${schema}</script>`;

  return shell
    .replace(/\s*<title>.*?<\/title>/s, () => `\n${metaBlock}`)
    .replace('<div id="root"></div>', `<div id="root">\n    ${staticFallbackForRoute(route, meta)}\n    </div>`);
}

let written = 0;
for (const route of routes) {
  const routeShell = htmlWithMeta(route);
  if (route === "/") {
    fs.writeFileSync(indexPath, routeShell);
    written += 1;
    continue;
  }
  const cleanRoute = route.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!cleanRoute || cleanRoute.includes("..")) continue;
  const outDir = path.join(distDir, ...cleanRoute.split("/"));
  assertInside(distDir, outDir);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), routeShell);
  written += 1;
}

console.log(
  `Generated ${written.toLocaleString("en-AU")} static route shells from Kim's route inventory, including ${internalRoutes.length} internal noindex route shells.`,
);
