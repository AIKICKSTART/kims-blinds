import { BadgeCheck, CalendarCheck, MapPin, Phone, ShieldCheck, SlidersHorizontal, Sparkles } from "lucide-react";
import { CustomerReviewCard } from "../../components/shared/DataDisplay";
import { ProductRangeCard, ProductTechnologyGrid, SpecTileGrid, productRangeItems, shutterItems, type ProductRangeItem } from "../../components/shared/ProductContent";
import { FeatureCard } from "../../components/shared/WebsiteCards";
import { CardGrid, CTASection, Hero, PageSection, ProcessSteps, SEOContentBlock, TrustBar } from "../../components/shared/WebsiteSections";
import { business, localProfile, serviceContent, serviceSuburbIntro, services, type ServiceRecord, type SuburbRecord } from "../../data/seoSite";
import { customerReviews, ctaTrustNote, pillarServices, popularGuides, prioritySuburbs, trustHighlights } from "./websiteData";
import { ArticleGrid, LocalHero, ServiceFaqSection, ServiceGrid, SuburbLinkGrid, SuburbServiceLinkGrid, productImageFor, titleCase } from "./WebsiteShared";

export function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Kim's Blinds · Oak Flats"
        title={<>Blinds, awnings and security doors for coastal homes<span className="heading-emphasis-punctuation">.</span></>}
        description={
          <>
            <span>Family-owned specialists supplying locally made blinds, awnings, fly screens, security doors and windows, panel glides, plantation shutters and curtains.</span>
            <span className="hero-proof-row">
              <span className="hero-proof-logo"><img src="/brand/kims/kims-blinds-logo-2026.webp" alt="" width={1120} height={524} /></span>
              <span className="hero-proof-copy">
                Free measure and quote · 100% quality assurance · Oak Flats showroom.
                <span className="hero-payment-logo" aria-label="Afterpay available">
                  <img src="/brand/kims/afterpay/afterpay-logo-black.svg" alt="" />
                </span>
              </span>
            </span>
          </>
        }
        media={productImageFor({ slug: "blinds", name: "Blinds" } as ServiceRecord)}
        actions={[
          { label: "Call Now", href: business.phoneHref, iconLeft: <Phone size={17} /> },
          { label: "Get My Free Measure & Quote", href: "/contact", variant: "outline" },
        ]}
        stats={trustHighlights}
      />
      <PageSection eyebrow="Why choose Kim's Blinds" title="Measured products without the sales runaround." description="Local trust, product fit and practical installation details stay visible before you ask for a quote.">
        <CardGrid columns={3}>
          <FeatureCard icon={<MapPin size={28} />} title="Oak Flats showroom" description="Visit Unit 5, 147 Industrial Rd, Oak Flats NSW, or request a measured quote at your home." />
          <FeatureCard icon={<BadgeCheck size={28} />} title="Locally made products" description="The quote starts with the opening, room use, sun, privacy, airflow and the finish you want." />
          <FeatureCard icon={<ShieldCheck size={28} />} title="Family-owned service" description="Clear advice across residential and commercial installation, maintenance and repair needs." />
        </CardGrid>
      </PageSection>
      <PageSection eyebrow="Products" title="Light, shade, comfort and security under one local installer." description="Choose the product family first, then book a measured quote for your opening, suburb and finish preference.">
        <ServiceGrid services={pillarServices} />
      </PageSection>
      <PageSection eyebrow="Service areas" title="Selected Illawarra and Sutherland Shire suburbs." description="Kim's Blinds is based in Oak Flats and services local Illawarra homes while also covering key Sutherland Shire suburbs.">
        <SuburbLinkGrid suburbs={prioritySuburbs} />
      </PageSection>
      <PageSection eyebrow="Customer proof" title="Trusted local service, measured advice." description="Real customer review excerpts show why local homeowners choose Kim's Blinds for measured product advice.">
        <CustomerReviewCard
          {...customerReviews[0]}
          photoConsent="pending"
          variant="feature"
        />
      </PageSection>
      <PageSection eyebrow="Popular guides" title="Read before you choose a product." description="Practical buying guides for comparing products, pricing and local installation choices.">
        <ArticleGrid posts={popularGuides} />
      </PageSection>
      <CTASection
        title="Book a free measure and quote."
        description="Call Kim's Blinds or send the product, suburb and opening details. The next step is simple: call, measure, quote."
        actions={[{ label: "Call Now", href: business.phoneHref }, { label: "Get My Free Measure & Quote", href: "/contact", variant: "outline" }]}
        trustNote={ctaTrustNote}
      />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <LocalHero title="Products and services" description="Choose the product family that fits your home, then request a measured quote for your opening and suburb." />
      <PageSection title="Kim's Blinds product range" description="Choose the product family first, then request advice for your opening, suburb and preferred finish.">
        <ServiceGrid services={services} />
      </PageSection>
    </>
  );
}

export function ServicePage({ service }: { service: ServiceRecord }) {
  const image = productImageFor(service);
  const contentBlocks = serviceContent[service.slug] ?? [];
  return (
    <>
      <Hero
        eyebrow={service.primaryKeyword}
        title={<>{service.name}<span className="heading-emphasis-punctuation">.</span></>}
        description={<span>{service.summary}</span>}
        media={image}
        actions={[{ label: "Get My Free Measure & Quote", href: "/contact" }, { label: "Call Now", href: business.phoneHref, variant: "outline" }]}
        stats={[
          { value: "Measured", label: "custom fit" },
          { value: "Local", label: "Oak Flats base" },
          { value: "Free", label: "measure and quote" },
        ]}
      />
      <PageSection title={`${service.name} service details`} description={service.localAngle}>
        <ProcessSteps
          steps={[
            { title: "Measure", description: `Confirm the opening, room use, suburb, access and whether ${service.plural} are the right product.`, icon: <MapPin size={22} /> },
            { title: "Specify", description: service.technicalProof, icon: <SlidersHorizontal size={22} /> },
            { title: "Quote", description: service.costNote, icon: <BadgeCheck size={22} /> },
          ]}
        />
        <TrustBar
          items={[
            { value: "Free", label: "measure and quote", icon: <CalendarCheck size={22} /> },
            { value: "Quality", label: "100% assurance", icon: <ShieldCheck size={22} /> },
            { value: "Local", label: "Illawarra and Sutherland Shire coverage", icon: <MapPin size={22} /> },
          ]}
        />
      </PageSection>
      <PageSection title={`Common ${service.shortName.toLowerCase()} uses`} description="The recommendation changes by room, exposure, privacy, airflow and operation.">
        <CardGrid columns={3}>
          {service.idealFor.map((item) => (
            <FeatureCard key={item} icon={<Sparkles size={28} />} title={titleCase(item)} description={`A measured ${service.shortName.toLowerCase()} quote can be specified around ${item}.`} />
          ))}
        </CardGrid>
      </PageSection>
      {contentBlocks.length ? (
        <PageSection title={`${service.shortName} buying advice`} description={`Detailed, practical guidance for choosing ${service.plural} without relying on thin product copy.`}>
          {contentBlocks.map((block) => (
            <SEOContentBlock key={block.title} title={block.title}>
              {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {block.bullets?.length ? <ul>{block.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </SEOContentBlock>
          ))}
        </PageSection>
      ) : null}
      <ProductModuleSection service={service} />
      <PageSection title={`Popular suburbs for ${service.shortName.toLowerCase()}`} description="Use these links to jump into local service pages for Illawarra and selected Sutherland Shire suburbs.">
        <SuburbServiceLinkGrid service={service} suburbs={prioritySuburbs} />
      </PageSection>
      <ServiceFaqSection service={service} />
      <CTASection
        title={`Request a ${service.shortName.toLowerCase()} quote.`}
        description="Send the product, suburb, opening photos if available, and any timing preference. Kim's Blinds will respond during business hours."
        actions={[{ label: "Get My Free Measure & Quote", href: "/contact" }, { label: "Call Now", href: business.phoneHref, variant: "outline" }]}
        trustNote={ctaTrustNote}
      />
    </>
  );
}

export function ProductModuleSection({ service }: { service: ServiceRecord }) {
  const items = productModulesFor(service);

  return (
    <PageSection
      title={`${service.shortName} product specification`}
      description="Detailed product modules keep measurements, options and quote decisions clear on each service page."
    >
      <div className="product-content-grid">
        {items.map((item) => (
          <ProductRangeCard key={item.title} item={item} />
        ))}
      </div>
      <SpecTileGrid
        title="Measure, fit and finish checks"
        items={[
          {
            title: "Opening and access",
            description: "Confirm the opening size, mounting surface, access and product clearance before final quoting.",
            icon: <MapPin size={24} />,
          },
          {
            title: "Light, shade and airflow",
            description: "Balance privacy, glare, ventilation and room use before choosing mesh, fabric, frame or blade details.",
            icon: <SlidersHorizontal size={24} />,
          },
          {
            title: "Finish and aftercare",
            description: "Match frame colour, fabric, mesh, hardware and care notes to the selected Kim's Blinds product.",
            icon: <BadgeCheck size={24} />,
          },
        ]}
      />
      <ProductTechnologyGrid />
    </PageSection>
  );
}

export function productModulesFor(service: ServiceRecord): ProductRangeItem[] {
  if (service.slug.includes("shutter")) return shutterItems.slice(0, 3);
  if (service.slug.includes("security") || service.slug.includes("fly")) return productRangeItems.slice(0, 3);
  if (service.slug.includes("awning") || service.slug.includes("outdoor")) {
    return [shutterItems[3], productRangeItems[1], productRangeItems[0]].filter(isProductRangeItem);
  }
  if (service.slug.includes("curtain") || service.slug.includes("panel")) {
    return [shutterItems[0], shutterItems[2], productRangeItems[1]].filter(isProductRangeItem);
  }
  return [productRangeItems[1], shutterItems[0], shutterItems[3]].filter(isProductRangeItem);
}

export function isProductRangeItem(item: ProductRangeItem | undefined): item is ProductRangeItem {
  return Boolean(item);
}

export function ServiceSuburbPage({ service, suburb }: { service: ServiceRecord; suburb: SuburbRecord }) {
  return (
    <>
      <LocalHero title={`${service.name} ${suburb.name}`} description={serviceSuburbIntro(service, suburb)} />
      <PageSection title={`Measured ${service.shortName.toLowerCase()} advice in ${suburb.name}`} description={`${suburb.name} homes need product choices shaped around ${localProfile(suburb)}.`}>
        <CardGrid columns={3}>
          <FeatureCard icon={<MapPin size={28} />} title="Local conditions" description={localProfile(suburb)} />
          <FeatureCard icon={<SlidersHorizontal size={28} />} title="Specification" description={service.technicalProof} />
          <FeatureCard icon={<BadgeCheck size={28} />} title="Quote focus" description={service.costNote} />
        </CardGrid>
      </PageSection>
      <CTASection
        title={`Book a free ${suburb.name} measure.`}
        description={`Kim's Blinds can quote ${service.plural} for ${suburb.name} homes using Kim's current product range and the local service-area page set.`}
        actions={[{ label: "Get My Free Measure & Quote", href: "/contact" }, { label: "Call Now", href: business.phoneHref, variant: "outline" }]}
        trustNote={ctaTrustNote}
      />
    </>
  );
}
