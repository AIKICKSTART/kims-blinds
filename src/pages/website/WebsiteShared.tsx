import type { ReactNode } from "react";
import { ServiceCard } from "../../components/shared/WebsiteCards";
import { FAQAccordion, Hero, PageSection } from "../../components/shared/WebsiteSections";
import { serviceFaq, serviceSuburbIntro, type BlogPostRecord, type ServiceRecord, type SuburbRecord } from "../../data/seoSite";
import { productImages, type ProductImageAsset } from "./websiteData";

export function LocalHero({ title, description, actions }: { title: ReactNode; description: ReactNode; actions?: Array<{ label: string; href?: string; variant?: "outline" | "primary" }> }) {
  return (
    <Hero
      eyebrow="Kim's Blinds"
      title={<>{title}<span className="heading-emphasis-punctuation">.</span></>}
      description={<span>{description}</span>}
      actions={actions}
      media={{ src: "/brand/kims/generated/local-hero-product-showroom.webp", alt: "Kim's Blinds showroom product wall with blind, shutter, curtain and screen samples", focalPoint: "50% 50%" }}
    />
  );
}

export function ServiceGrid({ services: items, suburb }: { services: ServiceRecord[]; suburb?: SuburbRecord }) {
  return (
    <div className="service-showcase-grid">
      {items.map((service) => {
        const media = productImageFor(service);
        return (
          <ServiceCard
            key={service.slug}
            title={suburb ? `${service.name} ${suburb.name}` : service.name}
            description={suburb ? serviceSuburbIntro(service, suburb) : service.summary}
            href={suburb ? `/services/${service.slug}/${suburb.slug}` : `/services/${service.slug}`}
            badge={service.primaryKeyword}
            media={media}
            revealMedia={media.reveal}
            mediaLabel={media.cardLabel}
            revealLabel={media.revealLabel}
          />
        );
      })}
    </div>
  );
}

export function SuburbLinkGrid({ suburbs }: { suburbs: SuburbRecord[] }) {
  return (
    <div className="suburb-link-grid">
      {suburbs.map((suburb) => (
        <a key={suburb.slug} href={`/suburbs/${suburb.slug}`}>
          <strong>{suburb.name}</strong>
          <span>{suburb.postcode}</span>
        </a>
      ))}
    </div>
  );
}

export function SuburbServiceLinkGrid({ service, suburbs }: { service: ServiceRecord; suburbs: SuburbRecord[] }) {
  return (
    <div className="suburb-link-grid">
      {suburbs.map((suburb) => (
        <a key={`${service.slug}-${suburb.slug}`} href={`/suburbs/${suburb.slug}`}>
          <strong>{suburb.name} hub</strong>
          <span>{service.shortName} quote planning · {suburb.postcode}</span>
        </a>
      ))}
    </div>
  );
}

export function ArticleGrid({ posts }: { posts: BlogPostRecord[] }) {
  return (
    <div className="blog-grid blog-grid--compact">
      {posts.map((post) => (
        <article className="seo-card" key={post.slug}>
          <p>{post.category}</p>
          <h3><a href={`/blog/${post.slug}`}>{post.title}</a></h3>
          <span>{post.summary}</span>
        </article>
      ))}
    </div>
  );
}

export function ServiceFaqSection({ service }: { service: ServiceRecord }) {
  const items = serviceFaq[service.slug];
  if (!items?.length) return null;
  return (
    <PageSection title="Frequently asked questions" description={`Common questions before booking a ${service.shortName.toLowerCase()} measure.`}>
      <FAQAccordion items={items} />
    </PageSection>
  );
}

export function Breadcrumbs({ crumbs }: { crumbs: Array<{ name: string; url: string }> }) {
  if (crumbs.length <= 1) return null;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        {crumbs.map((crumb, index) => (
          <li className="breadcrumbs__item" key={crumb.url}>
            {index === crumbs.length - 1 ? <span aria-current="page">{crumb.name}</span> : <a href={crumb.url}>{crumb.name}</a>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function productImageFor(service: Pick<ServiceRecord, "slug" | "name">): ProductImageAsset {
  return productImages[service.slug] ?? {
    src: "/brand/kims/generated/lifestyle-companion/coastal-luxury-roller-blinds-open-day-landscape.webp",
    focalPoint: "50% 50%",
    alt: `${service.name} supplied and installed by Kim's Blinds`,
  };
}

export function titleCase(value: string) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}
