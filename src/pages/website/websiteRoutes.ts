import { getBlogPost, getService, getSuburb, pageUrl } from "../../data/seoSite";
import type { RouteMatch } from "./websiteTypes";

export function matchRoute(pathname: string): RouteMatch {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  const parts = cleanPath.split("/").filter(Boolean);

  if (cleanPath === "/") return { kind: "home" };
  if (cleanPath === "/services") return { kind: "services" };
  if (cleanPath === "/suburbs") return { kind: "suburbs" };
  if (cleanPath === "/blog") return { kind: "blog" };
  if (cleanPath === "/pricing") return { kind: "pricing" };
  if (cleanPath === "/faq") return { kind: "faq" };
  if (cleanPath === "/comparison/product-options") return { kind: "comparison" };
  if (cleanPath === "/contact") return { kind: "contact" };
  if (cleanPath === "/about") return { kind: "about" };
  if (cleanPath === "/warranty") return { kind: "warranty" };
  if (cleanPath === "/testimonials") return { kind: "testimonials" };
  if (cleanPath === "/privacy-policy") return { kind: "privacy" };
  if (cleanPath === "/terms-of-service") return { kind: "terms" };

  if (parts[0] === "services" && parts.length === 2) {
    const service = getService(parts[1]);
    return service ? { kind: "service", service } : { kind: "notFound", title: "Service not found" };
  }

  if (parts[0] === "services" && parts.length === 3) {
    const service = getService(parts[1]);
    const suburb = getSuburb(parts[2]);
    return service && suburb ? { kind: "serviceSuburb", service, suburb } : { kind: "notFound", title: "Service area not found" };
  }

  if (parts[0] === "suburbs" && parts.length === 2) {
    const suburb = getSuburb(parts[1]);
    return suburb ? { kind: "suburb", suburb } : { kind: "notFound", title: "Suburb not found" };
  }

  if (parts[0] === "blog" && parts.length === 2) {
    const post = getBlogPost(parts[1]);
    return post ? { kind: "post", post } : { kind: "notFound", title: "Article not found" };
  }

  return { kind: "notFound" };
}

export function activeHref(route: RouteMatch): string | undefined {
  if (route.kind === "home") return "/";
  if (route.kind === "service") return navHrefForService(route.service.slug);
  if (route.kind === "serviceSuburb") return navHrefForService(route.service.slug);
  if (route.kind === "services") return "/services";
  if (route.kind === "contact") return "/contact";
  return undefined;
}

export function navHrefForService(slug: string): string | undefined {
  if (["blinds", "roller-blinds", "venetian-blinds", "vertical-blinds", "vision-blinds"].includes(slug)) return "/services/blinds";
  if (["awnings", "outdoor-blinds"].includes(slug)) return "/services/awnings";
  if (["security-doors", "security-screens", "fly-screens"].includes(slug)) return "/services/security-doors";
  if (["plantation-shutters", "curtains", "panel-glides"].includes(slug)) return "/services/plantation-shutters";
  return undefined;
}

export function breadcrumbsFor(route: RouteMatch): Array<{ name: string; url: string }> {
  const home = { name: "Home", url: pageUrl("/") };
  switch (route.kind) {
    case "home":
      return [home];
    case "services":
      return [home, { name: "Services", url: pageUrl("/services") }];
    case "service":
      return [home, { name: "Services", url: pageUrl("/services") }, { name: route.service.name, url: pageUrl(`/services/${route.service.slug}`) }];
    case "serviceSuburb":
      return [home, { name: route.service.name, url: pageUrl(`/services/${route.service.slug}`) }, { name: route.suburb.name, url: pageUrl(`/services/${route.service.slug}/${route.suburb.slug}`) }];
    case "suburbs":
      return [home, { name: "Service areas", url: pageUrl("/suburbs") }];
    case "suburb":
      return [home, { name: "Service areas", url: pageUrl("/suburbs") }, { name: route.suburb.name, url: pageUrl(`/suburbs/${route.suburb.slug}`) }];
    case "blog":
      return [home, { name: "Buying guides", url: pageUrl("/blog") }];
    case "post":
      return [home, { name: "Buying guides", url: pageUrl("/blog") }, { name: route.post.title, url: pageUrl(`/blog/${route.post.slug}`) }];
    default:
      return [home, { name: pageTitleFor(route), url: pageUrl(window.location.pathname) }];
  }
}

export function pageTitleFor(route: RouteMatch): string {
  switch (route.kind) {
    case "pricing":
      return "Pricing";
    case "faq":
      return "FAQ";
    case "comparison":
      return "Product options";
    case "contact":
      return "Contact";
    case "about":
      return "About";
    case "warranty":
      return "Quality assurance";
    case "testimonials":
      return "Testimonials";
    case "privacy":
      return "Privacy";
    case "terms":
      return "Terms";
    case "notFound":
      return route.title ?? "Page not found";
    default:
      return "Kim's Blinds";
  }
}

