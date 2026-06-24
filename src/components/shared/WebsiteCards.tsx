import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { classNames } from "../../lib/classNames";
import { webpFrom } from "../../lib/webpFrom";
import { Badge } from "./BadgeTag";
import { StatusPill, type StatusTone } from "./Status";
import type { MediaAsset } from "./types";

type BaseCardProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  variant?: "default" | "elevated" | "glass" | "metallic" | "dark" | "quote" | "report";
  className?: string;
};

export function Card({ eyebrow, title, description, children, footer, variant = "default", className }: BaseCardProps) {
  return (
    <article className={classNames("site-card", `site-card--${variant}`, className)}>
      {eyebrow ? <p className="site-card__eyebrow">{eyebrow}</p> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {children}
      {footer ? <div className="site-card__footer">{footer}</div> : null}
    </article>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  media?: MediaAsset;
  revealMedia?: MediaAsset;
  mediaLabel?: string;
  revealLabel?: string;
};

export function ServiceCard({ title, description, href, badge, media, revealMedia, mediaLabel = "Open view", revealLabel = "Privacy view" }: ServiceCardProps) {
  return (
    <article className="service-card">
      {media ? (
        <a className="service-card__media" href={href} aria-label={`View ${title}`}>
          <picture className="service-card__image service-card__image--base">
            <source type="image/webp" srcSet={webpFrom(media.src)} />
            <img src={media.src} alt={media.alt} loading="lazy" width={720} height={480} style={{ objectPosition: media.focalPoint }} />
          </picture>
          {revealMedia ? (
            <picture className="service-card__image service-card__image--reveal" aria-hidden="true">
              <source type="image/webp" srcSet={webpFrom(revealMedia.src)} />
              <img src={revealMedia.src} alt="" loading="lazy" width={720} height={480} style={{ objectPosition: revealMedia.focalPoint }} />
            </picture>
          ) : null}
          <span className="service-card__state service-card__state--base">{mediaLabel}</span>
          {revealMedia ? <span className="service-card__state service-card__state--reveal">{revealLabel}</span> : null}
        </a>
      ) : null}
      <div className="service-card__copy">
        {badge ? <Badge variant="success">{badge}</Badge> : null}
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="service-card__link" href={href}>
          View service <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon = <CheckCircle2 size={28} />, title, description }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <span aria-hidden="true">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

type ImageCardProps = {
  media: MediaAsset;
  title: string;
  caption: string;
};

export function ImageCard({ media, title, caption }: ImageCardProps) {
  return (
    <figure className="image-card">
      <img src={media.src} alt={media.alt} loading="lazy" style={{ objectPosition: media.focalPoint }} />
      <figcaption>
        <strong>{title}</strong>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

export function StatCard({ value, label, description }: { value: string; label: string; description?: string }) {
  return (
    <article className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
      {description ? <p>{description}</p> : null}
    </article>
  );
}

type ReportInsightCardProps = {
  title: string;
  metric: string;
  status: StatusTone;
  recommendation: string;
  severity?: string;
};

export function ReportInsightCard({ title, metric, status, recommendation, severity = "Medium" }: ReportInsightCardProps) {
  return (
    <article className="report-card">
      <div>
        <h3>{title}</h3>
        <StatusPill tone={status}>{severity}</StatusPill>
      </div>
      <strong>{metric}</strong>
      <p>{recommendation}</p>
    </article>
  );
}

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  inclusions: string[];
  actionLabel: string;
  actionHref?: string;
};

export function PricingCard({ title, price, description, inclusions, actionLabel, actionHref = "#quote-approval" }: PricingCardProps) {
  return (
    <article className="pricing-card">
      <p>Proposal scope</p>
      <h3>{title}</h3>
      <strong>{price}</strong>
      <span>{description}</span>
      <ul>
        {inclusions.map((item) => (
          <li key={item}>
            <CheckCircle2 size={16} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <a className="site-action site-action--primary" href={actionHref}>
        {actionLabel}
      </a>
    </article>
  );
}

type CaseStudyCardProps = {
  title: string;
  location: string;
  result: string;
  media?: MediaAsset;
};

export function CaseStudyCard({ title, location, result, media }: CaseStudyCardProps) {
  return (
    <article className="case-card">
      {media ? <img src={media.src} alt={media.alt} loading="lazy" /> : null}
      <div>
        <span>{location}</span>
        <h3>{title}</h3>
        <p>{result}</p>
      </div>
    </article>
  );
}
