import { BadgeCheck, MapPin, Phone, SlidersHorizontal } from "lucide-react";
import { CustomerReviewCard } from "../../components/shared/DataDisplay";
import { ContactForm, QuoteApprovalPanel } from "../../components/shared/Quote";
import { FeatureCard, PricingCard, ReportInsightCard } from "../../components/shared/WebsiteCards";
import { CardGrid, FAQAccordion, PageSection, ProcessSteps, SEOContentBlock, TrustBar } from "../../components/shared/WebsiteSections";
import { CONTENT_DATE, blogPosts, business, comparisonFaqItems, comparisonRows, faqItems, indexableSuburbs, services, suburbContent, suburbIntro, suburbs80km, type BlogPostRecord, type FaqItem, type SuburbRecord } from "../../data/seoSite";
import { customerReviews, pillarServices, reviewSourceStats } from "./websiteData";
import { ArticleGrid, LocalHero, ServiceGrid, SuburbLinkGrid, formatDate } from "./WebsiteShared";

export function SuburbsPage() {
  return (
    <>
      <LocalHero title="Main suburb hubs" description="Kim's Blinds is based in Oak Flats and focuses its public local content on useful suburb hubs, not thin pages for every possible suburb." />
      <PageSection title={`${indexableSuburbs.length.toLocaleString("en-AU")} main local hubs`} description={`The broader service dataset contains ${suburbs80km.length.toLocaleString("en-AU")} suburbs, but the indexable hub set is deliberately smaller so each local page can carry useful context.`}>
        <SEOContentBlock title="Why the site uses hubs">
          <p>Kim's Blinds services homes from the Oak Flats base, but publishing every service and suburb combination would create thin local pages. These hub pages group the areas customers actually search and recognise, then link into the core product range.</p>
          <p>Use a hub page to compare blinds, awnings, shutters, curtains, fly screens and security screens by local conditions, then request a measured quote for the actual opening.</p>
        </SEOContentBlock>
        <SuburbLinkGrid suburbs={indexableSuburbs} />
      </PageSection>
    </>
  );
}

export function SuburbPage({ suburb }: { suburb: SuburbRecord }) {
  const content = suburbContent[suburb.slug];
  return (
    <>
      <LocalHero title={`${business.name} in ${suburb.name}`} description={suburbIntro(suburb)} />
      {content ? (
        <PageSection title={`Living in ${suburb.name}`} description={content.localContext}>
          <SEOContentBlock title="Typical local enquiries">
            <p>{content.localProjects}</p>
          </SEOContentBlock>
          <SEOContentBlock title="Product focus for this hub">
            <p>{content.productFocus}</p>
          </SEOContentBlock>
          <SEOContentBlock title="What to send before a quote">
            <p>{content.quotePrep}</p>
          </SEOContentBlock>
        </PageSection>
      ) : null}
      <PageSection title={`Products available in ${suburb.name}`} description={`Choose a product below to request advice for a ${suburb.name} home.`}>
        <ServiceGrid services={pillarServices} suburb={suburb} />
      </PageSection>
      {content?.faq?.length ? (
        <PageSection title={`${suburb.name} FAQ`} description="Local questions before booking a free measure and quote.">
          <FAQAccordion items={content.faq} />
        </PageSection>
      ) : null}
    </>
  );
}

export function BlogPage() {
  return (
    <>
      <LocalHero title="Buying guides" description="Practical guides for blinds, awnings, shutters, curtains, fly screens and security doors." />
      <PageSection title="Latest Kim's Blinds guides" description={`Last updated ${formatDate(CONTENT_DATE)}.`}>
        <ArticleGrid posts={blogPosts} />
      </PageSection>
    </>
  );
}

export function BlogPostPage({ post }: { post: BlogPostRecord }) {
  const related = blogPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 3);
  return (
    <>
      <LocalHero title={post.title} description={post.summary} />
      <PageSection title="Guide overview" description={`Category: ${post.category}. Last updated ${formatDate(post.datePublished ?? CONTENT_DATE)}.`}>
        {post.articleBlocks?.length ? (
          post.articleBlocks.map((block) => (
            <SEOContentBlock key={block.title} title={block.title}>
              {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {block.bullets?.length ? <ul>{block.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </SEOContentBlock>
          ))
        ) : (
          <SEOContentBlock title="Key points">
            <ul>{post.sections.map((section) => <li key={section}>{section}</li>)}</ul>
          </SEOContentBlock>
        )}
      </PageSection>
      {post.keyQuestions?.length ? (
        <PageSection title="Questions answered" description="Common decisions before requesting a measure.">
          <FAQAccordion items={post.keyQuestions} />
        </PageSection>
      ) : null}
      <PageSection title="Related guides" description="Continue comparing product options.">
        <ArticleGrid posts={related} />
      </PageSection>
    </>
  );
}

export function PricingPage() {
  return (
    <>
      <LocalHero title="Pricing and quote guidance" description="Every product is measured to fit, so final pricing depends on opening size, material choice, hardware, access and installation detail." />
      <PageSection title="Measured quote categories" description="Use these cards as planning guidance before the free measure and quote.">
        <CardGrid columns={3}>
          {services.map((service) => (
            <PricingCard key={service.slug} title={service.name} price="Measured quote" description={service.costNote} inclusions={service.idealFor} actionLabel="Request quote" actionHref="/contact" />
          ))}
        </CardGrid>
      </PageSection>
      <PageSection title="Approval-ready quote direction" description="The final quote still depends on the measure, but the next-step panel keeps product choices, inclusions and exclusions clear.">
        <QuoteApprovalPanel
          title="Free measure and product direction"
          price="No-obligation measure"
          scope={["Opening, room use and access check", "Product family and finish recommendation", "Measured pricing after site details are confirmed"]}
          inclusions={["Blinds, awnings, shutters, curtains and screens", "Residential and commercial installation discussion", "Clear next step during Kim's business hours"]}
          exclusions={["Final price before measure", "Unverified dealer or manufacturer claims"]}
          nextStep="Send the product, suburb, opening photos if available and preferred timing. Kim's Blinds can then confirm the right measure and quote appointment."
        />
      </PageSection>
    </>
  );
}

export function FaqPage() {
  const categories = faqItems.reduce<Record<string, FaqItem[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});

  return (
    <>
      <LocalHero title="Blinds and security FAQ" description="Straight answers about products, pricing, installation, quality assurance, hours and service areas." />
      {Object.entries(categories).map(([category, items]) => (
        <PageSection key={category} title={category} description="">
          <FAQAccordion items={items.map(({ question, answer }) => ({ question, answer }))} />
        </PageSection>
      ))}
    </>
  );
}

export function ComparisonPage() {
  return (
    <>
      <LocalHero title="Product options compared" description="Compare indoor window furnishings with shutters, awnings, outdoor blinds, fly screens and security screens before booking a measure." />
      <PageSection title="Side-by-side product planning" description="The right answer depends on whether the room needs soft interior control, exterior shade, airflow, privacy or a stronger barrier.">
        <div className="comparison-table comparison-table--labelled">
          <div className="comparison-table__head">
            <strong>Decision</strong>
            <span>Interior furnishings</span>
            <span>Exterior or screen products</span>
          </div>
          {comparisonRows.map(([label, interior, exterior]) => (
            <div key={label}>
              <strong>{label}</strong>
              <span>{interior}</span>
              <span>{exterior}</span>
            </div>
          ))}
        </div>
      </PageSection>
      <PageSection title="Decision signals" description="Use these status cards to decide what needs a measure first.">
        <CardGrid columns={3}>
          <ReportInsightCard title="Privacy and glare" metric="Interior priority" status="active" severity="Ready" recommendation="Start with roller, Venetian, vertical, vision blinds, curtains or shutters when the main issue is light and privacy inside the room." />
          <ReportInsightCard title="Shade and exposure" metric="Exterior priority" status="pending" severity="Measure" recommendation="Use awnings or outdoor blinds when heat, glare and alfresco comfort are driven by sun exposure outside the glass." />
          <ReportInsightCard title="Airflow and barrier" metric="Screen priority" status="info" severity="Compare" recommendation="Use fly screens, security doors or security window screens where ventilation and a stronger opening barrier are both important." />
        </CardGrid>
      </PageSection>
      <PageSection title="Comparison questions" description="Common questions before selecting a product path.">
        <FAQAccordion items={comparisonFaqItems} />
      </PageSection>
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <LocalHero title="About Kim's Blinds" description="Kim's Blinds is a family-owned Oak Flats business supplying blinds, awnings, fly screens, security doors and windows, panel glides, plantation shutters and curtains." />
      <PageSection title="Local service from Oak Flats" description="The official Kim's Blinds site positions the business around free measure and quote, locally made products, quality assurance and friendly service.">
        <CardGrid columns={3}>
          <FeatureCard icon={<MapPin size={28} />} title="Showroom" description={business.address} />
          <FeatureCard icon={<Phone size={28} />} title="Phone" description={business.phone} />
          <FeatureCard icon={<BadgeCheck size={28} />} title="Business hours" description="Mon-Thu 9am-4.30pm, Fri 9am-3.30pm, Sat-Sun closed." />
        </CardGrid>
      </PageSection>
    </>
  );
}

export function WarrantyPage() {
  return (
    <>
      <LocalHero title="Quality assurance" description="Kim's Blinds promotes 100% quality assurance across its residential and commercial installation, maintenance and repair services." />
      <PageSection title="What quality assurance means here" description="This page keeps the promise aligned to Kim's official website copy and avoids unverified dealer or manufacturer claims.">
        <ProcessSteps
          steps={[
            { title: "Measure accurately", description: "Confirm the opening, controls, exposure and product use before quoting.", icon: <MapPin size={22} /> },
            { title: "Specify clearly", description: "Match fabric, mesh, frame, hardware or operating method to the product and room.", icon: <SlidersHorizontal size={22} /> },
            { title: "Install cleanly", description: "Finish the job with practical aftercare and a clear point of contact.", icon: <BadgeCheck size={22} /> },
          ]}
        />
      </PageSection>
    </>
  );
}

export function TestimonialsPage() {
  return (
    <>
      <LocalHero title="Customer feedback" description="Real public review excerpts from customers linked to Kim's Blinds in Oak Flats." />
      <PageSection title="Public review profile snapshot" description="These public profiles identify the same Kim's Blinds business and Oak Flats address.">
        <TrustBar items={reviewSourceStats.map((item) => ({ ...item, icon: <BadgeCheck size={22} /> }))} />
      </PageSection>
      <PageSection title="What customers value" description="Customers repeatedly call out prompt responses, fair quotes, practical product advice and clean installation work.">
        <div className="blog-grid">
          {customerReviews.map((review) => <CustomerReviewCard key={review.name} {...review} photoConsent="pending" />)}
        </div>
      </PageSection>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <LocalHero title="Book a free measure and quote" description="Call Kim's Blinds or send your product interest, suburb and opening details. The team responds during business hours." />
      <PageSection title="Contact Kim's Blinds" description="Use the quote form or call the Oak Flats showroom.">
        <div className="contact-layout">
          <ContactForm />
          <address className="contact-proof-card">
            <h3>Kim's Blinds</h3>
            <a href={business.phoneHref}><Phone size={17} /> {business.phone}</a>
            <a href={business.mapUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> {business.address}</a>
            <p>Monday to Thursday 9am-4.30pm<br />Friday 9am-3.30pm<br />Saturday and Sunday closed</p>
          </address>
        </div>
      </PageSection>
    </>
  );
}

export function PrivacyPage() {
  return (
    <>
      <LocalHero title="Privacy Policy" description="How Kim's Blinds collects, uses and protects the personal information you share when requesting a quote." />
      <PageSection title="Privacy policy" description="Your details are used to respond to your enquiry, prepare a measure and quote, and arrange any service you proceed with.">
        <SEOContentBlock title="Information we collect">
          <p>Name, phone number, email address, suburb, service interest and message details submitted through the contact form.</p>
        </SEOContentBlock>
        <SEOContentBlock title="How it is used">
          <p>Information is used to respond to enquiries, prepare quotes, arrange appointments and keep records for the services requested.</p>
        </SEOContentBlock>
      </PageSection>
    </>
  );
}

export function TermsPage() {
  return (
    <>
      <LocalHero title="Terms of Service" description="The terms that apply to quotes, measures and installations provided by Kim's Blinds." />
      <PageSection title="Service terms" description="Quotes are subject to final measure, product choice, access and installation requirements.">
        <SEOContentBlock title="Free measure and quote">
          <p>The measure and quote process is free and carries no obligation. Final pricing depends on the measured opening and selected product.</p>
        </SEOContentBlock>
        <SEOContentBlock title="Installation responsibilities">
          <p>Customers should provide safe, clear access to work areas. Pre-existing structural issues may affect final installation advice.</p>
        </SEOContentBlock>
      </PageSection>
    </>
  );
}

export function NotFoundPage({ title = "Page not found" }: { title?: string }) {
  return (
    <LocalHero
      title={title}
      description="The requested page is not available on this Kim's Blinds site. Return home or browse the service pages."
      actions={[{ label: "Go home", href: "/" }, { label: "View services", href: "/services", variant: "outline" }]}
    />
  );
}
