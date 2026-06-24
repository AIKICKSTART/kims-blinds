import { ArrowRight, Phone } from "lucide-react";
import { ContactDock } from "../components/shared/ContactDock";
import { SiteFooter, SiteHeader, defaultContactItems, defaultCredentialBadges } from "../components/shared/SiteChrome";
import { business } from "../data/seoSite";
import { Breadcrumbs } from "./website/WebsiteShared";
import { renderRoute } from "./website/WebsiteRouteRenderer";
import { footerColumns, navItems } from "./website/websiteData";
import { activeHref, breadcrumbsFor, matchRoute } from "./website/websiteRoutes";
import { getMeta, useSeo } from "./website/websiteSeo";

export function WebsitePage() {
  const route = matchRoute(window.location.pathname);
  const meta = getMeta(route);
  useSeo(meta);

  return (
    <main className="website-root">
      <SiteHeader
        nav={navItems}
        activeHref={activeHref(route)}
        primaryAction={{ label: "Free Measure & Quote", href: "/contact", iconRight: <ArrowRight size={17} /> }}
        utilityActions={[{ label: business.phone, href: business.phoneHref, ariaLabel: `Call Kim's Blinds on ${business.phone}`, iconLeft: <Phone size={19} />, variant: "light" }]}
      />
      <Breadcrumbs crumbs={breadcrumbsFor(route)} />
      {renderRoute(route)}
      <SiteFooter
        columns={footerColumns}
        summary="Family-owned blinds, awnings, shutters, curtains, fly screen and security door specialists from Oak Flats, serving the Illawarra and selected Sutherland Shire suburbs."
        contact={defaultContactItems}
        credentials={defaultCredentialBadges}
        legal={[{ label: "Privacy", href: "/privacy-policy" }, { label: "Terms", href: "/terms-of-service" }]}
      />
      <ContactDock />
    </main>
  );
}
