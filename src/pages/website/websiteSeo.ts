import { useEffect } from "react";
import {
  CONTENT_DATE,
  business,
  comparisonFaqItems,
  faqItems,
  isIndexableSuburb,
  metaDesc,
  pageUrl,
  serviceSuburbIntro,
  services,
  suburbIntro,
  type BlogPostRecord,
  type ServiceRecord,
  type SuburbRecord,
} from "../../data/seoSite";
import { SOCIAL_IMAGE } from "./websiteData";
import { breadcrumbsFor } from "./websiteRoutes";
import type { PageMeta, RouteMatch } from "./websiteTypes";

export function getMeta(route: RouteMatch): PageMeta {
  const canonical = pageUrl(window.location.pathname);
  if (route.kind === "service") {
    return {
      title: `${titleCaseKeyword(route.service.primaryKeyword)} | Kim's Blinds Oak Flats`,
      description: metaDesc(`${route.service.summary} Book a free measure and quote from Oak Flats.`),
      canonical,
      schema: graph(localBusinessNode(), serviceNode(route.service), breadcrumbNode(breadcrumbsFor(route))),
    };
  }
  if (route.kind === "serviceSuburb") {
    return {
      title: `${route.service.name} ${route.suburb.name} | Kim's Blinds`,
      description: metaDesc(serviceSuburbIntro(route.service, route.suburb)),
      canonical,
      noindex: true,
      schema: graph(localBusinessNode(), serviceNode(route.service, route.suburb), breadcrumbNode(breadcrumbsFor(route))),
    };
  }
  if (route.kind === "suburb") {
    return {
      title: `Blinds ${route.suburb.name} | Kim's Blinds Oak Flats`,
      description: metaDesc(suburbIntro(route.suburb)),
      canonical,
      noindex: !isIndexableSuburb(route.suburb.slug),
      schema: graph(localBusinessNode({ "@type": "City", name: route.suburb.name }), breadcrumbNode(breadcrumbsFor(route))),
    };
  }
  if (route.kind === "post") {
    return {
      title: route.post.title,
      description: route.post.metaDescription ?? metaDesc(route.post.summary),
      canonical,
      ogType: "article",
      schema: graph(articleNode(route.post, canonical), breadcrumbNode(breadcrumbsFor(route))),
    };
  }

  const titleMap = {
    home: "Blinds Wollongong & Oak Flats Quote | Kim's Blinds",
    services: "Blinds, Awnings & Security Screens | Kim's Blinds",
    suburbs: "Main Suburb Hubs | Kim's Blinds Oak Flats",
    blog: "Blinds Buying Guides | Kim's Blinds",
    pricing: "Blinds Quote Pricing Guide | Kim's Blinds",
    faq: "Blinds, Awnings & Security FAQ | Kim's Blinds",
    comparison: "Blinds, Shutters & Screens Compared | Kim's Blinds",
    contact: "Free Measure and Quote | Kim's Blinds Oak Flats",
    about: "About Kim's Blinds Oak Flats",
    warranty: "Quality Assurance | Kim's Blinds Oak Flats",
    testimonials: "Kim's Blinds Customer Reviews",
    privacy: "Privacy Policy | Kim's Blinds",
    terms: "Terms of Service | Kim's Blinds",
    notFound: "Page Not Found | Kim's Blinds",
  } as const;

  const descriptionMap = {
    home: "Kim's Blinds supplies blinds, awnings, shutters, curtains, fly screens and security doors from Oak Flats. Book a free measure and quote.",
    services: "Compare blinds, awnings, shutters, curtains, fly screens and security doors from Kim's Blinds before booking a measured quote.",
    suburbs: "Main Kim's Blinds suburb hubs for Oak Flats, Shellharbour, Wollongong, Kiama, Dapto and selected Sutherland Shire areas.",
    blog: "In-depth local buying guides for blinds, awnings, shutters, curtains, fly screens and security doors around the Illawarra.",
    pricing: "Learn what affects measured quote pricing for blinds, awnings, shutters, curtains, fly screens and security doors.",
    faq: "Straight answers about Kim's Blinds products, hours, service areas, free measure and quote process, and quote preparation.",
    comparison: "Compare blinds, shutters, awnings, outdoor blinds, fly screens and security screens by privacy, shade, airflow and fit.",
    contact: "Call Kim's Blinds on 02 4256 1297 or request a free measure and quote from the Oak Flats showroom.",
    about: "Kim's Blinds is a family-owned Oak Flats business.",
    warranty: "Kim's Blinds quality assurance and measured installation process.",
    testimonials: "Real customer review excerpts for Kim's Blinds from public review profiles connected to the Oak Flats business.",
    privacy: "How Kim's Blinds handles information submitted for a quote.",
    terms: "Service terms for Kim's Blinds quotes, measures and installations.",
    notFound: "Return to the Kim's Blinds home page or browse services.",
  } as const;

  const key = route.kind in titleMap ? (route.kind as keyof typeof titleMap) : "notFound";
  const faq = route.kind === "faq" ? faqNode(faqItems) : route.kind === "comparison" ? faqNode(comparisonFaqItems) : null;
  return {
    title: titleMap[key],
    description: metaDesc(descriptionMap[key]),
    canonical,
    schema: graph(websiteNode(), localBusinessNode(), breadcrumbNode(breadcrumbsFor(route)), faq),
  };
}

export function useSeo(meta: PageMeta) {
  useEffect(() => {
    document.title = meta.title;
    setMeta("description", meta.description);
    setLink("canonical", meta.canonical);
    setMetaProperty("og:title", meta.title);
    setMetaProperty("og:description", meta.description);
    setMetaProperty("og:type", meta.ogType ?? "website");
    setMetaProperty("og:url", meta.canonical);
    setMetaProperty("og:image", SOCIAL_IMAGE);
    setMetaProperty("og:site_name", business.name);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", SOCIAL_IMAGE);
    setRobots(meta.noindex);

    document.getElementById("kims-json-ld")?.remove();
    if (meta.schema) {
      const script = document.createElement("script");
      script.id = "kims-json-ld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(meta.schema);
      document.head.appendChild(script);
    }
  }, [meta.title, meta.description, meta.canonical, meta.noindex, meta.ogType, meta.schema]);
}

function setMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

function setMetaProperty(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setLink(rel: string, href: string) {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function setRobots(noindex?: boolean) {
  let element = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (noindex) {
    if (!element) {
      element = document.createElement("meta");
      element.name = "robots";
      document.head.appendChild(element);
    }
    element.content = "noindex, follow";
    return;
  }
  if (element?.content === "noindex, follow") {
    element.remove();
  }
}

function titleCaseKeyword(value: string): string {
  return value.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}

type SchemaNode = Record<string, unknown>;
type AreaNode = { "@type": string; name: string };

function graph(...nodes: Array<SchemaNode | null>): SchemaNode {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}

function defaultAreaServed(): AreaNode[] {
  return [
    { "@type": "City", name: "Oak Flats" },
    { "@type": "City", name: "Shellharbour" },
    { "@type": "City", name: "Wollongong" },
    { "@type": "AdministrativeArea", name: "Sutherland Shire" },
    { "@type": "State", name: "New South Wales" },
  ];
}

function websiteNode(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": `${business.baseUrl}/#website`,
    name: business.name,
    url: business.baseUrl,
    description: "Blinds, awnings, shutters, curtains, fly screens and security doors from Oak Flats.",
    inLanguage: "en-AU",
  };
}

function localBusinessNode(areaServed?: AreaNode): SchemaNode {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${business.baseUrl}/#localbusiness`,
    name: business.name,
    url: business.baseUrl,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: business.priceRange,
    image: SOCIAL_IMAGE,
    logo: `${business.baseUrl}/brand/kims/kims-blinds-logo-2026.png`,
    sameAs: business.sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "39",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kim's Blinds product range",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          serviceType: service.primaryKeyword,
          description: service.summary,
        },
      })),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.addressCountry,
    },
    geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lon },
    areaServed: areaServed ? [areaServed, ...defaultAreaServed()] : defaultAreaServed(),
    openingHoursSpecification: business.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
  };
}

function serviceNode(service: ServiceRecord, suburb?: SuburbRecord): SchemaNode {
  return {
    "@type": "Service",
    name: suburb ? `${service.name} ${suburb.name}` : service.name,
    serviceType: service.primaryKeyword,
    provider: { "@id": `${business.baseUrl}/#localbusiness` },
    areaServed: suburb ? { "@type": "City", name: suburb.name } : defaultAreaServed(),
    description: suburb ? serviceSuburbIntro(service, suburb) : service.summary,
  };
}

function articleNode(post: BlogPostRecord, canonical: string): SchemaNode {
  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    mainEntityOfPage: canonical,
    datePublished: post.datePublished ?? CONTENT_DATE,
    dateModified: CONTENT_DATE,
    author: { "@type": "Organization", name: business.name },
    publisher: { "@id": `${business.baseUrl}/#localbusiness` },
  };
}

function faqNode(items: ReadonlyArray<{ question: string; answer: string }>): SchemaNode {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function breadcrumbNode(crumbs: ReadonlyArray<{ name: string; url: string }>): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
