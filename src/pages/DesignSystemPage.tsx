import { useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  DoorOpen,
  FileCode2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Alert } from "../components/shared/Alert";
import { Badge, Tag } from "../components/shared/BadgeTag";
import { Button } from "../components/shared/Button";
import { Avatar, DataTable } from "../components/shared/DataDisplay";
import { CheckboxField, RadioField, SelectField, TextInput } from "../components/shared/FormControls";
import { IconButton } from "../components/shared/IconButton";
import { KimsLogo } from "../components/shared/Logo";
import { ProgressBar, Stepper } from "../components/shared/Progress";
import { StatusDot, StatusPill } from "../components/shared/Status";
import { Accordion, Tabs } from "../components/shared/TabsAccordion";
import { SegmentedControl, ToggleSwitch } from "../components/shared/Toggle";
import { AppShell } from "../components/shared/AppShell";
import { ContactDock } from "../components/shared/ContactDock";
import { ComponentPreview, TokenSwatchGrid } from "../components/shared/DesignSystem";
import {
  BrochureModule,
  FleetBrandingCard,
  ProductRangeCard,
  ProductTechnologyGrid,
  ProofBadge,
  SpecTileGrid,
  productRangeItems,
  shutterItems,
} from "../components/shared/ProductContent";
import { ContactForm, QuoteApprovalPanel, RoadmapTimeline } from "../components/shared/Quote";
import { SiteFooter, SiteHeader, defaultContactItems } from "../components/shared/SiteChrome";
import {
  Card,
  CaseStudyCard,
  FeatureCard,
  ImageCard,
  PricingCard,
  ReportInsightCard,
  ServiceCard,
  StatCard,
} from "../components/shared/WebsiteCards";
import {
  CardGrid,
  CTASection,
  FAQAccordion,
  Hero,
  PageSection,
  ProcessSteps,
  SEOContentBlock,
  TrustBar,
} from "../components/shared/WebsiteSections";
import {
  websiteNavItems,
  footerColumns,
  tokens,
  tableRows,
  timeline,
  steps,
  guideSpecItems,
  productSystemFlow,
  cardMaterialVariants,
  brandImageAssets,
  brandAvatarAssets,
  standardSources,
  completionLedger,
  sectionAlignmentAudit,
  typographyPairs,
  typeScale,
  typeStyleRules,
  typeMotionRules,
  foundationContracts,
  componentContracts,
  accessibilityChecklist,
  contentRules,
  adoptionCandidates,
  handoffFiles,
  buildReadinessLinks
} from "./design-system/designSystemData";
import { ReviewAvatarStudio } from "./design-system/ReviewAvatarStudio";
import { renderStyledType } from "./design-system/typeRendering";

export function DesignSystemPage() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(id))?.scrollIntoView({ block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <AppShell
      className="design-system-site website-root"
      header={
        <SiteHeader
          nav={websiteNavItems}
          primaryAction={{ label: "Free Measure & Quote", href: "/contact", iconRight: <ArrowRight size={17} /> }}
          utilityActions={[
            { label: "Call", href: "tel:0242561297", ariaLabel: "Call Kim's Blinds", iconLeft: <Phone size={19} />, variant: "light" },
          ]}
        />
      }
      footer={
        <SiteFooter
          columns={footerColumns}
          summary="Reusable component library for the Kim's Blinds website, proposal and quote-approval flow."
          contact={defaultContactItems}
          legal={[{ label: "Design approval", href: "#quote-approval" }, { label: "Build notes", href: "#build-notes" }]}
        />
      }
    >
      <Hero
        eyebrow="Quote-approval-ready shared component library"
        title={
          <>
            Kim's Blinds website design
            <span> system.</span>
          </>
        }
        description="A production-ready component system for the public website, proposal pages, report modules and quote approval flow. The system uses the supplied Kim's logo, graphite surfaces and blue/orange action language throughout."
        media={{
          src: "/brand/kims/generated/homepage-roller-blind-hero.webp",
          alt: "Modern home with blinds, security doors and screens illuminated at night",
          focalPoint: "48% 50%",
        }}
        priority={false}
        actions={[
          { label: "Review components", href: "#components", iconRight: <ArrowRight size={17} /> },
          { label: "Approve quote", href: "#quote-approval", variant: "outline", iconRight: <BadgeCheck size={17} /> },
        ]}
        stats={[
          { value: "40+", label: "Reusable components" },
          { value: "7", label: "Industry sources mapped" },
          { value: "WCAG 2.2", label: "Accessibility target" },
        ]}
      />

      <PageSection
        id="components"
        eyebrow="Industry standard audit"
        title="Complete design-system operating model"
        description="A complete design system needs more than a visual board. It needs foundations, tokens, components, patterns, accessibility criteria, governance, adoption rules and verification evidence. This section maps the Kim's system to those industry expectations before any further main-website promotion."
      >
        <div className="standards-source-grid">
          {standardSources.map((source) => (
            <article className="standard-source-card" key={source.name}>
              <p>{source.name}</p>
              <h3>{source.focus}</h3>
              <span>{source.applied}</span>
              <a href={source.href}>Review source <ArrowRight size={15} aria-hidden="true" /></a>
            </article>
          ))}
        </div>

        <div className="completion-ledger" aria-label="Design system completeness ledger">
          {completionLedger.map((item) => (
            <article key={item.area}>
              <Badge variant={item.status === "Gated" ? "warning" : "success"}>{item.status}</Badge>
              <h3>{item.area}</h3>
              <p>{item.evidence}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="section-alignment"
        eyebrow="Alignment audit"
        title="Every design-system section checked against the final website chrome"
        description="This is the working alignment ledger for the page. It records which surfaces match the approved header/dock/material system, which are newly formalised and which still need a production gate before promotion."
      >
        <div className="section-alignment-board">
          {sectionAlignmentAudit.map((item) => (
            <article key={item.section}>
              <div>
                <Badge variant={item.status === "Needs backend gate" ? "warning" : item.status === "New standard" ? "info" : "success"}>{item.status}</Badge>
                <a href={item.anchor}>Inspect <ArrowRight size={14} aria-hidden="true" /></a>
              </div>
              <h3>{item.section}</h3>
              <p>{item.proof}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="brand"
        eyebrow="Brand foundation"
        title="Logo, material and trust language"
        description="The full lockup leads major website surfaces. The icon mark supports mobile nav, badges, cards and compact quote states."
      >
        <div className="brand-foundation">
          <div>
            <KimsLogo variant="full" size="hero" />
          </div>
          <div>
            <KimsLogo variant="icon" size="sample" />
            <KimsLogo variant="wordmark" size="sample" />
            <KimsLogo variant="monochrome" size="sample" />
          </div>
        </div>
        <TrustBar
          items={[
            { value: "Secure", label: "door and screen positioning", icon: <ShieldCheck size={22} /> },
            { value: "Local", label: "service and installation flow", icon: <MapPin size={22} /> },
            { value: "Quote", label: "approval-ready proposal modules", icon: <BadgeCheck size={22} /> },
          ]}
        />
      </PageSection>

      <PageSection
        id="brand-images"
        eyebrow="Brand image system"
        title="Website image assets and usage"
        description="These are the approved visual assets currently powering the main website. Portrait assets are raw inputs only; customer-facing review images must go through the Avatar component and consent rules below."
      >
        <div className="brand-asset-system">
          <div className="brand-asset-rules" aria-label="Image usage rules">
            <article>
              <Badge variant="success">Approved media</Badge>
              <strong>Product and proof images</strong>
              <span>Use these directly in service cards, route heroes and guide content when the asset shows the actual product context.</span>
            </article>
            <article>
              <Badge variant="warning">Portrait gate</Badge>
              <strong>Review photos are never raw cards</strong>
              <span>Portraits must render through Avatar or CustomerReviewCard with consent state, crop control and initials fallback.</span>
            </article>
          </div>

          <div className="brand-image-grid">
            {brandImageAssets.map((asset) => (
              <figure key={asset.src} className="brand-image-card">
                <img src={asset.src} alt="" loading="lazy" />
                <figcaption>
                  <span>{asset.group}</span>
                  <strong>{asset.name}</strong>
                  <small>{asset.role}</small>
                  <code>{asset.src}</code>
                </figcaption>
              </figure>
            ))}
          </div>

          <section className="brand-avatar-panel" aria-label="Avatar portrait assets">
            <div className="brand-avatar-panel__header">
              <Badge variant="warning">Raw portrait inputs</Badge>
              <div>
                <h3>Avatar-only portrait assets</h3>
                <p>These replacement portraits are synthetic placeholders for component testing. Public testimonial photos stay initials-only until the customer has approved the exact image.</p>
              </div>
            </div>
            <div className="brand-avatar-grid">
              {brandAvatarAssets.map((asset) => (
                <figure key={asset.name} className="brand-avatar-card">
                  <Avatar label={asset.name} image={asset.image} size="xl" shape="squircle" tone="chrome" consent="placeholder" status="pending" badgeLabel="Synthetic placeholder image" />
                  <figcaption>
                    <strong>{asset.name}</strong>
                    <span>{asset.role}</span>
                    <code>{asset.source}</code>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </PageSection>

      <PageSection
        id="review-avatar"
        eyebrow="Review avatar system"
        title="Customer profile pictures and review capture"
        description="The review flow needs an actual avatar tool, not loose portrait cards. This design-system specimen defines the shared Avatar component, local image preview, crop controls, size controls, review copy and privacy gate before it is used on testimonial pages."
      >
        <ReviewAvatarStudio />
      </PageSection>

      <PageSection
        id="tokens"
        eyebrow="Tokens"
        title="Header-matched brand and material tokens"
        description="These tokens now mirror the actual website header and dock materials: action blue depth, dark graphite chrome, metal edge rings, logo capsule glass and the header image wash."
      >
        <TokenSwatchGrid tokens={tokens} />
        <div className="token-alignment-strip" aria-label="Header token alignment">
          <article>
            <strong>Header shell</strong>
            <code>--metal-graphite + header image wash</code>
            <span>Dark chrome base, real house photo and controlled image wash stay together.</span>
          </article>
          <article>
            <strong>Nav controls</strong>
            <code>--theme-button-secondary-background</code>
            <span>Secondary chrome buttons use the light ring and dark raised gradient.</span>
          </article>
          <article>
            <strong>Primary CTA</strong>
            <code>--theme-button-primary-background</code>
            <span>Quote and call actions use the full blue depth stack and chrome ring.</span>
          </article>
          <article>
            <strong>Logo capsule</strong>
            <code>.site-header__brand</code>
            <span>The logo lives on a glass/metal capsule, not on a flat white patch.</span>
          </article>
          <article>
            <strong>Contact dock</strong>
            <code>ContactDock</code>
            <span>The bottom dock inherits the same primary and secondary chrome materials.</span>
          </article>
        </div>
      </PageSection>

      <PageSection
        id="typography"
        eyebrow="Typography"
        title="Premium type system"
        description={renderStyledType("A finished type standard for the Kim's Blinds website: Source Serif 4 carries the premium trust moments, Söhne is the intended body and interface face, Manrope protects the hosted preview until the licensed Söhne webfonts are supplied, and IBM Plex Mono handles proof metadata.", ["Source Serif 4", "Söhne", "Manrope", "IBM Plex Mono"])}
      >
        <div className="typography-showcase">
          <article className="typography-showcase__hero">
            <div className="typography-showcase__copy">
              <p>Recommended lockup</p>
              <h3>{renderStyledType("Security that still feels architectural.", ["Security"])}</h3>
              <span>
                {renderStyledType("The serif headline gives the brand a calm, established voice. The Söhne-led text stack keeps quote steps, service cards, navigation and mobile controls exact, readable and practical.", ["Söhne-led", "quote"])}
              </span>
            </div>
            <div className="typography-showcase__roles" aria-label="Typography role stack">
              <span><strong>Display</strong> Source Serif 4</span>
              <span><strong>Body/UI</strong> Söhne then Manrope</span>
              <span><strong>Proof</strong> IBM Plex Mono</span>
            </div>
          </article>
          <aside className="typography-showcase__spec" aria-label="Live typography scale specimen">
            <p>Scale snapshot</p>
            <strong>Aa</strong>
            <dl>
              <div><dt>Hero</dt><dd>72 / 42</dd></div>
              <div><dt>H1</dt><dd>56 / 38</dd></div>
              <div><dt>Body</dt><dd>15 / 18</dd></div>
              <div><dt>Meta</dt><dd>10</dd></div>
            </dl>
          </aside>
        </div>

        <div className="font-pairing-grid" aria-label="Typography pair choices">
          {typographyPairs.map((pair, index) => (
            <article className={index === 0 ? "font-pairing-card font-pairing-card--primary" : "font-pairing-card"} key={pair.name}>
              <p>{pair.name}</p>
              <h3>{pair.faces}</h3>
              <span>{renderStyledType(pair.reason)}</span>
              <strong>{renderStyledType(pair.use)}</strong>
            </article>
          ))}
        </div>
        <div className="type-specimen-board">
          <article className="type-specimen-card type-specimen-card--display">
            <p>Source Serif 4 display</p>
            <h3>{renderStyledType("Shape light beautifully.", ["matters"])}</h3>
            <span>{renderStyledType("Use for home, service and proof-led page hierarchy only.")}</span>
          </article>
          <article className="type-specimen-card type-specimen-card--body">
            <p>Söhne body and UI</p>
            <h3>{renderStyledType("Measured quotes. Clear next steps. Practical product advice.", ["Measured", "Clear"])}</h3>
            <span>{renderStyledType("Use for readable quote copy, navigation, forms, controls and service guidance.", ["quote"])}</span>
          </article>
          <article className="type-specimen-card type-specimen-card--meta">
            <p>IBM Plex Mono metadata</p>
            <h3>{renderStyledType("custom fit / free measure / WCAG 2.2 AA.")}</h3>
            <span>{renderStyledType("Use for short proof labels, specifications, source paths and QA states.")}</span>
          </article>
        </div>
        <div className="type-scale-grid" aria-label="Typography scale">
          {typeScale.map((item) => (
            <article className={`type-ramp-card type-ramp-card--${item.tone}`} key={item.role}>
              <div className="type-ramp-card__top">
                <p>{item.token}</p>
                <strong>{item.role}</strong>
              </div>
              <h3 className={`type-ramp-sample type-ramp-sample--${item.tone}`}>{renderStyledType(item.sample, item.emphasis)}</h3>
              <dl>
                <div><dt>Size</dt><dd>{item.size}</dd></div>
                <div><dt>Line</dt><dd>{item.line}</dd></div>
                <div><dt>Weight</dt><dd>{item.weight}</dd></div>
              </dl>
              <span>{renderStyledType(item.usage)}</span>
            </article>
          ))}
        </div>

        <div className="type-contract-panel">
          <div>
            <p>Usage contract</p>
            <h3>How type stays premium across the website</h3>
          </div>
          <div className="type-style-grid">
            {typeStyleRules.map((item) => (
              <article key={item.style}>
                <strong>{item.style}</strong>
                <span>{renderStyledType(item.rule)}</span>
              </article>
            ))}
          </div>
        </div>

        <p className="font-asset-note">
          {renderStyledType("Söhne webfont binaries are not present in the supplied asset folder yet. The stack already prefers Söhne and falls back to Manrope on the hosted preview.", ["Söhne", "Manrope"])}
        </p>
      </PageSection>

      <PageSection
        id="font-animation"
        eyebrow="Font animation"
        title="Typography motion specimens"
        description="Motion should make premium typography feel deliberate, not busy. These specimens define when text can animate, how it moves and where reduced-motion rules apply."
      >
        <div className="font-animation-grid">
          {typeMotionRules.map((item, index) => (
            <article key={item.name}>
              <p>{item.target}</p>
              <h3 className={index === 0 ? "type-motion-sample type-motion-sample--reveal" : index === 1 ? "type-motion-sample type-motion-sample--lock" : "type-motion-sample type-motion-sample--pulse"}>
                {item.name}
              </h3>
              <dl>
                <div><dt>Duration</dt><dd>{item.duration}</dd></div>
                <div><dt>Easing</dt><dd>{item.easing}</dd></div>
              </dl>
              <span>{renderStyledType(item.rule)}</span>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="foundation-contract"
        eyebrow="Foundation contract"
        title="Typography, token and material rules"
        description="These rules convert the visual direction into implementation guidance. Use this contract before adding new components or promoting design-system decisions into the public website."
      >
        <div className="foundation-contract-grid">
          {foundationContracts.map((contract) => (
            <article className="foundation-contract-card" key={contract.title}>
              <p>{contract.meta}</p>
              <h3>{contract.title}</h3>
              <ul>
                {contract.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection id="buttons" eyebrow="UI primitives" title="Final button styles, icon buttons, badges and states">
        <ComponentPreview
          title="Final chrome button matrix"
          description="Primary, secondary and tertiary actions should share the same material logic as the website header and contact dock: chrome edge, controlled gloss, compact text and clear icon affordances."
          usage="Use primary blue for quote/phone intent, dark chrome for secondary navigation, and light/ghost only for low-pressure system controls."
        >
          <div className="website-root button-style-specimen">
            <Button iconRight={<ArrowRight size={17} />}>Request a Quote</Button>
            <Button variant="secondary" iconLeft={<Phone size={17} />}>Talk to an Expert</Button>
            <Button variant="tertiary">View Details</Button>
            <Button variant="outline">Download Scope</Button>
            <Button variant="danger">Remove Item</Button>
            <Button loading>Preparing</Button>
          </div>
        </ComponentPreview>
        <ComponentPreview title="Icon Buttons and Tags" description="Circular controls remain large enough for mobile touch targets and carry accessible labels.">
          <div className="preview-row">
            <IconButton icon={<Phone size={23} />} label="Call" />
            <IconButton icon={<Mail size={23} />} label="Email" />
            <IconButton icon={<CalendarDays size={23} />} label="Schedule" />
            <Badge variant="success">Approved</Badge>
            <Badge variant="warning">Review</Badge>
            <Tag>Blinds</Tag>
            <Tag>Installation</Tag>
          </div>
        </ComponentPreview>
      </PageSection>

      <PageSection id="navigation" eyebrow="Navigation" title="Final website chrome">
        <ComponentPreview
          title="Main website navigation header"
          description="The design-system page now uses the same header configuration as the public website: logo lockup, product navigation, utility call control and Free Measure & Quote action."
          usage="Shared component: SiteHeader. Header nav should stay website-facing; internal design-system anchors belong in page content and footer links."
        >
          <div className="chrome-specimen chrome-specimen--desktop">
            <SiteHeader
              nav={websiteNavItems}
              activeHref="/services/security-doors"
              primaryAction={{ label: "Free Measure & Quote", href: "/contact", iconRight: <ArrowRight size={17} /> }}
              utilityActions={[
                { label: "Call", href: "tel:0242561297", ariaLabel: "Call Kim's Blinds", iconLeft: <Phone size={19} />, variant: "light" },
              ]}
              compact
            />
          </div>
        </ComponentPreview>
        <ComponentPreview
          title="Mobile header and drawer"
          description="Phone-width header state for the same shared SiteHeader: compact logo, menu control, chrome drawer links and full-width quote/call actions."
          usage="Click the menu control in this specimen to inspect the production mobile drawer styling."
        >
          <div className="chrome-specimen chrome-specimen--mobile">
            <SiteHeader
              nav={websiteNavItems}
              activeHref="/services/security-screens"
              primaryAction={{ label: "Free Measure & Quote", href: "/contact", iconRight: <ArrowRight size={17} /> }}
              utilityActions={[
                { label: "Call", href: "tel:0242561297", ariaLabel: "Call Kim's Blinds", iconLeft: <Phone size={19} />, variant: "light" },
              ]}
              compact
            />
          </div>
        </ComponentPreview>
        <ComponentPreview
          title="Quick contact bottom dock"
          description="The final website dock gives returning visitors persistent call, contact and email actions after scroll. It replaces the older generic mobile dock pattern."
          usage="Shared component: ContactDock. Website uses scroll-triggered visibility; this design-system specimen forces visibility for review."
        >
          <div className="website-root dock-preview-surface">
            <ContactDock forceVisible className="contact-dock--preview" />
          </div>
        </ComponentPreview>
        <CardGrid columns={3}>
          <Card eyebrow="Shared chrome" title="SiteHeader" description="Use for desktop navigation, mobile drawer navigation, utility phone action and primary quote CTA. Do not rebuild page-specific headers." />
          <Card eyebrow="Shared chrome" title="ContactDock" description="Use for persistent quote/contact actions. Keep labels short: Call now, Contact us, Email." />
          <Card eyebrow="Shared chrome" title="SiteFooter" description="Use for footer columns, contact details and legal links so service pages do not drift." />
        </CardGrid>
      </PageSection>

      <PageSection
        id="component-contracts"
        eyebrow="Component contracts"
        title="Source, states, accessibility and adoption"
        description="Every production component needs a contract: where it lives, which states are supported, what accessibility behaviour is required and whether it is already safe for the main website."
      >
        <div className="component-contract-table" role="table" aria-label="Component contract matrix">
          <div role="row" className="component-contract-table__head">
            <span role="columnheader">Component</span>
            <span role="columnheader">State coverage</span>
            <span role="columnheader">Accessibility contract</span>
            <span role="columnheader">Adoption</span>
          </div>
          {componentContracts.map((contract) => (
            <article role="row" key={contract.component}>
              <div role="cell">
                <strong>{contract.component}</strong>
                <code>{contract.source}</code>
              </div>
              <p role="cell">{contract.states}</p>
              <p role="cell">{contract.accessibility}</p>
              <p role="cell">{contract.adoption}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection id="cards" eyebrow="Cards" title="Cards for services, features, media, stats and reports">
        <CardGrid columns={3}>
          <ServiceCard
            title="Blinds"
            description="Premium hinged and sliding blinds, security doors and screens with a clear quote path from enquiry to installation."
            href="#forms"
            badge="Primary service"
            media={{ src: "/brand/kims/generated/homepage-roller-blind-hero.webp", alt: "Kim's Blinds installation context", focalPoint: "45% 52%" }}
          />
          <FeatureCard icon={<DoorOpen size={28} />} title="Measured Fit" description="Quote flow captures opening type, service area and preferred timing without extra page-specific UI." />
          <ImageCard
            media={{ src: "/brand/kims/generated/homepage-roller-blind-hero.webp", alt: "Kim's Blinds product image", focalPoint: "42% 50%" }}
            title="Hero image treatment"
            caption="Dark overlay, left copy, no text embedded in images."
          />
          <StatCard value="24h" label="Response target" description="Used for trust bars, report modules and proposal summaries." />
          <ReportInsightCard title="Local service visibility" metric="High opportunity" status="pending" recommendation="Use service-area copy and crawlable service pages for blinds, security doors and screens." />
          <PricingCard
            title="Website and quote system"
            price="$5,500 inc GST"
            description="Completion price shown for approval."
            inclusions={["Reusable shared component library", "Design-system page", "Website sections", "Quote approval module"]}
            actionLabel="Approve this scope"
          />
        </CardGrid>
      </PageSection>

      <PageSection
        id="card-system"
        eyebrow="Card material system"
        title="Shared card backgrounds, hierarchy and product variants"
        description="All product-library and content cards now use the same card material contract. The base token controls the surface, shadow and chrome rail; each variant only changes the restrained accent used for product family context."
      >
        <div className="card-material-grid">
          {cardMaterialVariants.map((item) => (
            <article
              className={`card-material-card card-material-card--${item.variant}`}
              key={item.variant}
            >
              <p>{item.meta}</p>
              <h3>{item.title}</h3>
              <span>{item.description}</span>
              <code>{item.token}</code>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="product-library"
        eyebrow="Product library"
        title="Old product content rebuilt as current Kim's components"
        description="These components capture the useful items from the old images: vehicle proof, supplier badges, security mesh ranges, outdoor blind guides, plantation shutter configurations, technology claims and brochure modules. They are now wired to the card material system above, so changing one core card token updates the full product library."
      >
        <div className="product-system-flow" aria-label="Product component wiring map">
          {productSystemFlow.map((item) => (
            <article key={item.step}>
              <p>{item.step}</p>
              <h3>{item.title}</h3>
              <span>{item.detail}</span>
              <code>{item.controls}</code>
            </article>
          ))}
        </div>

        <article className="product-library-note">
          <ShieldCheck size={24} aria-hidden="true" />
          <div>
            <h3>Content source rule</h3>
            <p>
              Keep the product facts, proof points and configuration choices. Present them through the current chrome,
              graphite and Kim's blue system so future product pages stay consistent.
            </p>
          </div>
        </article>

        <div className="product-proof-grid">
          <FleetBrandingCard />
          <ProofBadge
            title="locally made product supplier"
            label="Brand proof"
            description="Reusable trust badge for supplier and dealer proof, scaled for cards, footers and product pages."
          />
          <ProofBadge
            tone="warranty"
            title="Lock and warranty proof"
            label="Hardware assurance"
            description="Use for lock hardware, manufacturer warranty and after-care proof points."
          />
          <ProofBadge
            tone="technology"
            title="Outdoor blind technology"
            label="Fabric and motorisation"
            description="Reusable component for motor options, fabric properties and performance claims."
          />
        </div>

        <div className="product-content-grid">
          {[...productRangeItems, ...shutterItems].map((item) => (
            <ProductRangeCard key={item.title} item={item} />
          ))}
        </div>

        <SpecTileGrid title="Guide, mounting and sizing components" items={guideSpecItems} />

        <div className="brochure-grid">
          <BrochureModule
            title="External screening product guide"
            summary="Turns Ombr and Vistawave-style brochure content into clean modules for outdoor blind pages."
            items={["Zip guide", "Wire guide", "Straight drop", "Motorisation", "Fabric technology"]}
          />
          <BrochureModule
            title="Security screen product guide"
            summary="Converts National Fly Screen style product ranges into consistent reusable cards."
            items={[
              "Security screen mesh",
              "Privacy screen option",
              "Window screen option",
              "Decorative grille option",
              "Kim's Blinds logo proof",
              "Hardware and aftercare",
            ]}
          />
          <BrochureModule
            title="Plantation shutter configuration guide"
            summary="Keeps old shutter education content but turns diagrams and dimensions into reusable selectors."
            items={["Thermopoly material", "Superior construction", "Sliding", "Hinged", "Bifold", "Bay window", "63 / 89 / 114mm blades"]}
          />
        </div>

        <ComponentPreview title="Technology icon set" description="Reusable performance claims for screens, blinds and shutters. Icons stay in the Kim's material system instead of old brochure artwork.">
          <ProductTechnologyGrid />
        </ComponentPreview>
      </PageSection>

      <PageSection id="website-sections" eyebrow="Website sections" title="Production page building blocks">
        <ProcessSteps
          steps={[
            { title: "Enquire", description: "Customer selects product, property type and preferred contact method.", icon: <Phone size={22} /> },
            { title: "Measure", description: "Team confirms opening details and installation requirements.", icon: <Wrench size={22} /> },
            { title: "Approve", description: "Quote panel gives clear scope, inclusions and next step.", icon: <BadgeCheck size={22} /> },
          ]}
        />
        <CTASection
          title="Ready to build the full website from this system"
          description="Every major website surface now has a reusable component: header, hero, cards, sections, forms, FAQ, report modules, timeline and footer."
          actions={[
            { label: "Approve direction", href: "#quote-approval" },
            { label: "Review form", href: "#forms", variant: "outline" },
          ]}
          trustNote="No placeholder copy, no one-off quote modules."
        />
        <FAQAccordion
          items={[
            { question: "Can the full website be built from this system?", answer: "Yes. The page demonstrates the shared header, footer, hero, CTA, form, report, card, table, timeline and approval components in production usage." },
            { question: "Does the quote form submit to a backend?", answer: "The form is accessible and integration-ready. It prevents fake success messaging until CRM, email or API handling is connected." },
            { question: "Can the client approve from this page?", answer: "Yes. The quote approval panel includes scope, inclusions, exclusions, price and next step." },
          ]}
        />
      </PageSection>

      <PageSection id="forms" eyebrow="Forms and inputs" title="Quote request form and input states">
        <div className="forms-grid">
          <ContactForm />
          <ComponentPreview title="Controls" description="Input, select, checkbox, radio, toggles, tabs, accordion, progress and table states.">
            <div className="control-stack">
              <TextInput label="Focused quote note" placeholder="Enter project detail..." status="focused" />
              <SelectField label="Product type" options={[{ label: "Blinds", value: "doors" }, { label: "Fly Screens", value: "screens" }]} />
              <div className="preview-row">
                <CheckboxField label="Installation required" checked onChange={() => undefined} />
                <RadioField label="Selected quote option" checked name="quote-option" onChange={() => undefined} />
                <ToggleSwitch checked label="Include follow-up" onChange={() => undefined} />
              </div>
              <SegmentedControl options={["Supply", "Install", "Both"]} value="Both" onChange={() => undefined} />
              <Tabs options={["Quote", "Measure", "Approve"]} value="Quote" onChange={() => undefined} />
              <Accordion items={[{ title: "What is included in installation?" }, { title: "How are changes requested?" }]} />
              <ProgressBar value={60} />
            </div>
          </ComponentPreview>
        </div>
      </PageSection>

      <PageSection id="report-modules" eyebrow="Report and proposal modules" title="Tables, alerts, status and insight panels">
        <div className="report-grid">
          <DataTable rows={tableRows} />
          <div className="alert-stack">
            <Alert variant="success">Design system components are ready for quote review.</Alert>
            <Alert variant="info">Vercel output target is static `dist` with SPA rewrite.</Alert>
            <Alert variant="warning">Form submission needs CRM or email integration before launch.</Alert>
          </div>
        </div>
        <div className="status-demo__dots">
          <StatusDot tone="active" label="Approved" />
          <StatusDot tone="pending" label="Review" />
          <StatusDot tone="inactive" label="Optional" />
          <StatusDot tone="info" label="Information" />
        </div>
      </PageSection>

      <PageSection
        id="accessibility-governance"
        eyebrow="Accessibility and governance"
        title="WCAG 2.2 AA, contribution rules and content guidance"
        description="Accessibility and governance are part of the system, not a final pass. These checks must be satisfied before a component moves from the design-system page into the public website."
      >
        <div className="quality-grid">
          <article className="quality-panel">
            <p>Accessibility checklist</p>
            <h3>Minimum QA before website promotion</h3>
            <ul>
              {accessibilityChecklist.map((check) => (
                <li key={check.title}>
                  <strong>{check.title}</strong>
                  <span>{check.details}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="quality-panel">
            <p>Content rules</p>
            <h3>Voice, labels and service copy</h3>
            <ul>
              {contentRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="governance-strip">
          <span><strong>Owner</strong> Kim's Blinds website design system</span>
          <span><strong>Target</strong> WCAG 2.2 AA</span>
          <span><strong>Release rule</strong> Build, browser QA, accessibility pass, approval</span>
          <span><strong>Deprecation rule</strong> Replace one-off website UI with shared components only after confirmation</span>
        </div>
      </PageSection>

      <PageSection
        id="website-adoption"
        eyebrow="Website adoption gate"
        title="Main website improvements staged from this system"
        description="The main website can improve from this work, but the source of truth is this page first. These candidates should be confirmed here before changing production pages."
      >
        <div className="adoption-board">
          {adoptionCandidates.map((candidate) => (
            <article key={candidate.item}>
              <Badge variant="warning">Needs confirmation</Badge>
              <h3>{candidate.item}</h3>
              <p>{candidate.impact}</p>
              <strong>{candidate.gate}</strong>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="roadmap"
        eyebrow="Roadmap"
        title="Approval runway for the production build"
        description="A governed sequence for moving from this design-system page into the production website. Each phase has a decision gate so the live site only inherits confirmed components."
      >
        <div className="roadmap-command-panel">
          <article>
            <Badge variant="success">Current gate</Badge>
            <h3>Design-system lock</h3>
            <p>Header colors, typography, navigation, mobile drawer, dock and component contracts are reviewed here first.</p>
          </article>
          <article>
            <Badge variant="warning">Promotion rule</Badge>
            <h3>No one-off website UI</h3>
            <p>Only shared, approved components move into home, service, contact and service-area routes.</p>
          </article>
          <article>
            <Badge variant="info">Launch evidence</Badge>
            <h3>Proof before sharing</h3>
            <p>Build output, responsive screenshots, accessibility pass and deployment notes are captured before client handoff.</p>
          </article>
        </div>
        <RoadmapTimeline items={timeline} />
        <div className="roadmap-stepper-panel">
          <div>
            <p>Release sequence</p>
            <h3>Approval to launch gate</h3>
            <span>Current state: design-system lock is being refined before quote review and page build.</span>
          </div>
          <Stepper steps={steps} currentStep={1} />
        </div>
      </PageSection>

      <PageSection id="quote-approval" eyebrow="Approval" title="Quote approval panel">
        <QuoteApprovalPanel
          id="quote-approval-panel-specimen"
          title="Shared component library and design-system page"
          price="$5,500 inc GST"
          scope={["Reusable website component layer", "Client-facing design-system page", "Website sections", "Quote approval flow components"]}
          inclusions={["Brand tokens and logo usage", "Header/footer/mobile navigation", "Cards, forms, tables and report modules", "Vercel build verification"]}
          exclusions={["CRM/email backend integration", "New client photography", "Final legal copy review"]}
          nextStep="Approve this direction to move from component system into complete production website pages."
        />
      </PageSection>

      <PageSection id="build-notes" eyebrow="Production readiness" title="Responsive, accessible and Vercel-ready">
        <div className="readiness-grid" aria-label="Production readiness links">
          {buildReadinessLinks.map((item) => (
            <a className={`readiness-card readiness-card--${item.variant}`} href={item.href} key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>
                Review linked system <ArrowRight size={15} aria-hidden="true" />
              </strong>
            </a>
          ))}
        </div>
        <article className="implementation-panel">
          <span className="chrome-icon" aria-hidden="true">
            <FileCode2 size={22} />
          </span>
          <div>
            <p>Linked implementation note</p>
            <h3>Build notes inherit the same system as cards, forms and product modules</h3>
            <span>
              Components live in <code>src/components/shared</code>, exports are grouped in <code>src/components/index.ts</code>,
              and this page is available at <code>/design-system</code>. The links below route back into the design-system
              sections that own each production surface.
            </span>
          </div>
        </article>
        <div className="handoff-map">
          {handoffFiles.map((item) => (
            <a className={`handoff-map__card handoff-map__card--${item.variant}`} href={item.href} key={item.label}>
              <strong>{item.label}</strong>
              <code>{item.value}</code>
              <span>
                Open section <ArrowRight size={14} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
        <div className="avatar-row">
          <Avatar label="Design consultant" image="man" />
          <Avatar label="Quote coordinator" image="woman" />
          <Avatar label="QA" dark />
          <Avatar label="+5" dark />
        </div>
      </PageSection>
    </AppShell>
  );
}





