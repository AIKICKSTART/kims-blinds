import type { BlogPostRecord, ServiceRecord, SuburbRecord } from "../../data/seoSite";

export type PageMeta = {
  title: string;
  description: string;
  canonical: string;
  ogType?: "website" | "article";
  schema?: object;
  noindex?: boolean;
};

export type RouteMatch =
  | { kind: "home" }
  | { kind: "services" }
  | { kind: "service"; service: ServiceRecord }
  | { kind: "suburbs" }
  | { kind: "suburb"; suburb: SuburbRecord }
  | { kind: "serviceSuburb"; service: ServiceRecord; suburb: SuburbRecord }
  | { kind: "blog" }
  | { kind: "post"; post: BlogPostRecord }
  | { kind: "pricing" }
  | { kind: "faq" }
  | { kind: "comparison" }
  | { kind: "contact" }
  | { kind: "about" }
  | { kind: "warranty" }
  | { kind: "testimonials" }
  | { kind: "privacy" }
  | { kind: "terms" }
  | { kind: "notFound"; title?: string };
