import type { ReactNode } from "react";
import {
  BadgeCheck,
  CarFront,
  CheckCircle2,
  DraftingCompass,
  Gauge,
  Grid3X3,
  KeyRound,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Wind,
  Wrench,
} from "lucide-react";
import { StatusPill } from "./Status";
import { classNames } from "../../lib/classNames";

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductCardVariant = "security" | "screen" | "shutter" | "blind" | "proof";

export type ProductRangeItem = {
  title: string;
  category: string;
  description: string;
  specs: ProductSpec[];
  benefits: string[];
  status?: "active" | "pending" | "inactive";
  variant?: ProductCardVariant;
  icon?: ReactNode;
};

export function ProductRangeCard({ item }: { item: ProductRangeItem }) {
  return (
    <article className={classNames("product-range-card", `product-range-card--${item.variant ?? "security"}`)}>
      <div className="product-range-card__icon" aria-hidden="true">
        {item.icon ?? <ShieldCheck size={28} />}
      </div>
      <div className="product-range-card__body">
        <p>{item.category}</p>
        <h3>{item.title}</h3>
        <span>{item.description}</span>
      </div>
      <dl className="product-range-card__specs">
        {item.specs.map((spec) => (
          <div key={spec.label}>
            <dt>{spec.label}</dt>
            <dd>{spec.value}</dd>
          </div>
        ))}
      </dl>
      <ul className="product-range-card__benefits">
        {item.benefits.map((benefit) => (
          <li key={benefit}>
            <CheckCircle2 size={15} aria-hidden="true" />
            {benefit}
          </li>
        ))}
      </ul>
      <StatusPill tone={item.status ?? "active"}>
        {item.status === "pending" ? "Review" : "Ready"}
      </StatusPill>
    </article>
  );
}

type SpecTile = {
  title: string;
  description: string;
  specs?: ProductSpec[];
  icon?: ReactNode;
};

export function SpecTileGrid({ title, items }: { title: string; items: SpecTile[] }) {
  return (
    <section className="spec-tile-grid" aria-label={title}>
      <h3>{title}</h3>
      <div className="spec-tile-grid__items">
        {items.map((item) => (
          <article key={item.title}>
            <span aria-hidden="true">{item.icon ?? <Ruler size={24} />}</span>
            <div className="spec-tile-grid__body">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
            {item.specs?.length ? (
              <dl className="spec-tile-grid__specs">
                {item.specs.map((spec) => (
                  <div key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

type ProofBadgeProps = {
  title: string;
  label: string;
  description: string;
  tone?: "dealer" | "warranty" | "technology";
};

export function ProofBadge({ title, label, description, tone = "dealer" }: ProofBadgeProps) {
  const icons = {
    dealer: <BadgeCheck size={30} />,
    warranty: <KeyRound size={30} />,
    technology: <Sparkles size={30} />,
  };

  return (
    <article className={classNames("proof-badge", `proof-badge--${tone}`)}>
      <span aria-hidden="true">{icons[tone]}</span>
      <div className="proof-badge__body">
        <p>{label}</p>
        <h3>{title}</h3>
        <small>{description}</small>
      </div>
    </article>
  );
}

export function FleetBrandingCard() {
  return (
    <article className="fleet-branding-card">
      <div aria-hidden="true">
        <CarFront size={42} />
      </div>
      <div className="fleet-branding-card__body">
        <p>Vehicle and field proof component</p>
        <h3>Branded service vehicle</h3>
        <span>
          Use this component for real photos of vans, installers and on-site proof. It keeps old fleet content useful
          without importing the old website layout or typography.
        </span>
      </div>
      <dl className="fleet-branding-card__specs">
        <div>
          <dt>Use for</dt>
          <dd>Trust, local presence, service proof</dd>
        </div>
        <div>
          <dt>Image crop</dt>
          <dd>4:3 or 16:9, vehicle centred, no text overlay baked into image</dd>
        </div>
      </dl>
    </article>
  );
}

type BrochureModuleProps = {
  title: string;
  summary: string;
  items: string[];
};

export function BrochureModule({ title, summary, items }: BrochureModuleProps) {
  return (
    <article className="brochure-module">
      <p>Brochure content module</p>
      <h3>{title}</h3>
      <span>{summary}</span>
      <ul className="brochure-module__items">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export function ProductTechnologyGrid() {
  const technologies = [
    { label: "Wind resistant", icon: <Wind size={24} /> },
    { label: "Sun and UV protection", icon: <Sun size={24} /> },
    { label: "Insect resistant", icon: <Grid3X3 size={24} /> },
    { label: "Coastal approved", icon: <ShieldCheck size={24} /> },
    { label: "Privacy", icon: <SlidersHorizontal size={24} /> },
    { label: "Anti-glare", icon: <Sparkles size={24} /> },
    { label: "Motorisation ready", icon: <Gauge size={24} /> },
    { label: "Custom measured", icon: <DraftingCompass size={24} /> },
  ];

  return (
    <div className="product-tech-grid">
      {technologies.map((item) => (
        <span key={item.label}>
          {item.icon}
          {item.label}
        </span>
      ))}
    </div>
  );
}

export const productRangeItems: ProductRangeItem[] = [
  {
    title: "Security mesh product option",
    category: "Security mesh",
    description: "Premium stainless security mesh item for high-strength door and window protection.",
    specs: [
      { label: "Material", value: "coastal-aware stainless mesh" },
      { label: "Finish", value: "Powder coated frame" },
      { label: "Use", value: "Blinds and window screens" },
    ],
    benefits: ["Security tested", "Corrosion resistant", "Bushfire-aware product messaging"],
    variant: "security",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "privacy screen perforated aluminium security",
    category: "Security screen",
    description: "Perforated aluminium option for durable screening with privacy and airflow.",
    specs: [
      { label: "Material", value: "Aluminium perforated sheet" },
      { label: "Finish", value: "Powder coated colour range" },
      { label: "Use", value: "Entry doors, windows and patios" },
    ],
    benefits: ["Low maintenance", "Privacy support", "Coastal application copy"],
    variant: "screen",
    icon: <Grid3X3 size={28} />,
  },
  {
    title: "window screen fall prevention window screens",
    category: "Window safety",
    description: "Safety-screen content pattern for upstairs windows and family homes.",
    specs: [
      { label: "Use", value: "Upper-level windows" },
      { label: "Message", value: "Fall prevention and ventilation" },
      { label: "Proof", value: "Tested product data block" },
    ],
    benefits: ["Family safety", "Ventilation", "Technical proof ready"],
    variant: "proof",
    icon: <BadgeCheck size={28} />,
  },
  {
    title: "grille design security",
    category: "Decorative grille",
    description: "Traditional grille product item kept as a reusable range card, not old brochure layout.",
    specs: [
      { label: "Pattern", value: "decorative grille" },
      { label: "Use", value: "Doors and windows" },
      { label: "Message", value: "Budget-friendly visible security" },
    ],
    benefits: ["Recognisable pattern", "Clear range option", "Quote comparison ready"],
    variant: "security",
    icon: <DraftingCompass size={28} />,
  },
];

export const legacyProductItems = productRangeItems;

export const shutterItems: ProductRangeItem[] = [
  {
    title: "Plantation shutters",
    category: "Interior shutters",
    description: "Reusable component for plantation shutter pages, product guides and configuration sections.",
    specs: [
      { label: "Mounting", value: "Sliding, hinged, bifold, bay window" },
      { label: "Blade sizes", value: "63mm, 89mm, 114mm" },
      { label: "Use", value: "Light, privacy and airflow control" },
    ],
    benefits: ["Configuration ready", "Clean white product surface", "Suitable for guide pages"],
    variant: "shutter",
    icon: <SlidersHorizontal size={28} />,
  },
  {
    title: "Thermopoly plantation shutters",
    category: "Shutter material",
    description: "Material-proof card for heat, moisture, family-safety and comfort messaging.",
    specs: [
      { label: "Material", value: "Thermopoly shutter construction" },
      { label: "Use", value: "Bedrooms, bathrooms and living areas" },
      { label: "Message", value: "Cooler rooms, privacy and durability" },
    ],
    benefits: ["Moisture-aware copy", "Family-friendly positioning", "Comfort proof ready"],
    variant: "shutter",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Superior shutter construction",
    category: "Manufacturing proof",
    description: "Reusable proof block for sanding, finishing, joinery and long-term maintenance claims.",
    specs: [
      { label: "Finish", value: "Paint, stain and lacquer proof point" },
      { label: "Joinery", value: "Mortise and tenon messaging" },
      { label: "Use", value: "Product education and quote confidence" },
    ],
    benefits: ["Craftsmanship proof", "Durability messaging", "Maintenance support"],
    variant: "proof",
    icon: <Wrench size={28} />,
  },
  {
    title: "Outdoor blinds and external screening",
    category: "External screening",
    description: "Content model for Ombr/Vistawave-style product details without carrying old brochure styling.",
    specs: [
      { label: "Guides", value: "Zip, wire and straight drop" },
      { label: "Max width", value: "Guide-specific values" },
      { label: "Controls", value: "Manual or motorised" },
    ],
    benefits: ["Weather context", "Pool and patio use", "Technology feature grid"],
    variant: "blind",
    icon: <Wrench size={28} />,
  },
];


