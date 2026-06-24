import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { classNames } from "../../lib/classNames";
import { webpFrom } from "../../lib/webpFrom";
import type { ActionItem, MediaAsset, StatItem } from "./types";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={classNames("site-container", className)}>{children}</div>;
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="section-header">
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{renderHeadingTitle(title)}</h2>
      {description ? <div>{description}</div> : null}
    </header>
  );
}

function renderHeadingTitle(title: ReactNode) {
  if (typeof title !== "string") return title;

  const match = title.match(/^(.+\s)(\S+)$/);
  if (!match) return title;
  const [, leadingText, finalWord] = match;
  const punctuationMatch = finalWord.match(/^(.+?)([.!?]+)$/);

  return (
    <>
      {leadingText}
      {punctuationMatch ? (
        <>
          <span className="heading-emphasis">{punctuationMatch[1]}</span>
          <span className="heading-emphasis-punctuation">{punctuationMatch[2]}</span>
        </>
      ) : (
        <span className="heading-emphasis">{finalWord}</span>
      )}
    </>
  );
}

type PageSectionProps = SectionHeaderProps & {
  id?: string;
  children: ReactNode;
  tone?: "default" | "muted" | "dark";
  layout?: "stack" | "grid" | "split";
};

export function PageSection({ id, eyebrow, title, description, children, tone = "default", layout = "stack" }: PageSectionProps) {
  return (
    <section id={id} className={classNames("page-section", `page-section--${tone}`, `page-section--${layout}`)}>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        {children}
      </Container>
    </section>
  );
}

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ActionItem[];
  media?: MediaAsset;
  stats?: StatItem[];
  /** Opt in only when the image itself is the expected LCP element. */
  priority?: boolean;
};

export function Hero({ eyebrow, title, description, actions = [], media, stats = [], priority = false }: HeroProps) {
  return (
    <section className="site-hero">
      <Container className="site-hero__inner">
        <div className="site-hero__copy">
          {eyebrow ? <p>{eyebrow}</p> : null}
          <h1>{title}</h1>
          <div className="site-hero__description">{description}</div>
          <ActionGroup actions={actions} />
          {stats.length ? (
            <div className="site-hero__stats">
              {stats.map((stat) => (
                <span key={stat.label}>
                  <strong>{stat.value}</strong>
                  {stat.label}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {media ? (
          <div className="site-hero__media">
            <picture>
              <source type="image/webp" srcSet={webpFrom(media.src)} />
              <img
                src={media.src}
                alt={media.alt}
                width={1200}
                height={800}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={priority ? "high" : "auto"}
                style={{ objectPosition: media.focalPoint }}
              />
            </picture>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

type SplitHeroProps = HeroProps & {
  reverse?: boolean;
};

export function SplitHero({ reverse = false, ...props }: SplitHeroProps) {
  return <Hero {...props} media={props.media} actions={props.actions} stats={props.stats} />;
}

type CtaSectionProps = {
  title: ReactNode;
  description: ReactNode;
  actions: ActionItem[];
  trustNote?: ReactNode;
};

export function CTASection({ title, description, actions, trustNote }: CtaSectionProps) {
  return (
    <section className="cta-section">
      <Container>
        <div>
          <h2>{renderHeadingTitle(title)}</h2>
          <p>{description}</p>
          {trustNote ? <span>{trustNote}</span> : null}
        </div>
        <ActionGroup actions={actions} />
      </Container>
    </section>
  );
}

export function FooterCTA(props: CtaSectionProps) {
  return <CTASection {...props} />;
}

type TrustBarProps = {
  items: Array<{ label: string; value?: string; icon?: ReactNode }>;
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="trust-bar" aria-label="Trust highlights">
      {items.map((item) => (
        <span className="trust-bar__item" key={item.label}>
          {item.icon ? <span className="trust-bar__icon" aria-hidden="true">{item.icon}</span> : null}
          <span className="trust-bar__copy">
            {item.value ? <strong>{item.value}</strong> : null}
            <span>{item.label}</span>
          </span>
        </span>
      ))}
    </div>
  );
}

type ProcessStepsProps = {
  steps: Array<{ title: string; description: ReactNode; icon?: ReactNode }>;
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="process-steps">
      {steps.map((step, index) => (
        <li className="process-steps__item" key={step.title}>
          <span className="process-step__icon" aria-hidden="true">{step.icon ?? index + 1}</span>
          <div className="process-step__copy">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

type FAQAccordionProps = {
  items: Array<{ question: string; answer: ReactNode }>;
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.question} open={index === 0}>
          <summary>{item.question}</summary>
          <div>{item.answer}</div>
        </details>
      ))}
    </div>
  );
}

export function SEOContentBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="seo-content-block">
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

export function CardGrid({ children, columns = 3 }: { children: ReactNode; columns?: 2 | 3 | 4 }) {
  return <div className={classNames("card-grid", `card-grid--${columns}`)}>{children}</div>;
}

export function ActionGroup({ actions }: { actions: ActionItem[] }) {
  if (!actions.length) return null;

  return (
    <div className="action-group">
      {actions.map((action) => (
        <a
          key={action.label}
          className={classNames("site-action", `site-action--${action.variant ?? "primary"}`)}
          href={action.href ?? "#"}
          onClick={action.onClick}
          aria-label={action.ariaLabel}
        >
          {action.iconLeft ? <span aria-hidden="true">{action.iconLeft}</span> : null}
          {action.label}
          {action.iconRight ?? <ArrowRight size={17} aria-hidden="true" />}
        </a>
      ))}
    </div>
  );
}
