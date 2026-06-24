import { business, getBlogPost, getService, getSuburb, indexableSuburbSlugs, type BlogPostRecord, type ServiceRecord, type SuburbRecord } from "../../data/seoSite";
import type { MediaAsset, NavItem } from "../../components/shared/types";

export type ProductImageAsset = MediaAsset & {
  reveal?: MediaAsset;
  cardLabel?: string;
  revealLabel?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blinds", href: "/services/blinds" },
  { label: "Awnings", href: "/services/awnings" },
  { label: "Security", href: "/services/security-doors" },
  { label: "Shutters", href: "/services/plantation-shutters" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "Blinds", href: "/services/blinds" },
      { label: "Roller Blinds", href: "/services/roller-blinds" },
      { label: "Awnings", href: "/services/awnings" },
      { label: "Plantation Shutters", href: "/services/plantation-shutters" },
      { label: "Curtains", href: "/services/curtains" },
      { label: "Security Doors", href: "/services/security-doors" },
      { label: "Fly Screens", href: "/services/fly-screens" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Service areas", href: "/suburbs" },
      { label: "Quality assurance", href: "/warranty" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Buying guides", href: "/blog" },
      { label: "Pricing guide", href: "/pricing" },
      { label: "Product options", href: "/comparison/product-options" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export const prioritySuburbSlugs = [...indexableSuburbSlugs];

export const prioritySuburbs = prioritySuburbSlugs.map((slug) => getSuburb(slug)).filter(Boolean) as SuburbRecord[];
export const pillarServiceSlugs = ["blinds", "awnings", "security-doors", "plantation-shutters", "curtains", "fly-screens"];
export const pillarServices = pillarServiceSlugs.map((slug) => getService(slug)).filter(Boolean) as ServiceRecord[];
export const popularGuideSlugs = [
  "complete-guide-blinds-awnings-shutters-wollongong",
  "roller-blinds-vs-curtains",
  "awnings-outdoor-blinds-alfresco-guide",
  "security-doors-windows-buying-guide",
];
export const popularGuides = popularGuideSlugs.map((slug) => getBlogPost(slug)).filter(Boolean) as BlogPostRecord[];

export const trustHighlights = [
  { value: "Free", label: "measure and quote" },
  { value: "Local", label: "Oak Flats showroom" },
  { value: "Family", label: "owned and operated" },
];

export const ctaTrustNote = "Family-owned · Locally made products · 100% quality assurance";
export const SOCIAL_IMAGE = `${business.baseUrl}/brand/kims/generated/homepage-roller-blind-hero.webp`;

export const reviewSourceLinks = {
  birdeye: "https://reviews.birdeye.com/kims-blinds-170038323965589",
  localsearch: "https://www.localsearch.com.au/profile/kim-s-blinds/oak-flats-nsw/hrYg",
  wordOfMouth: "https://www.wordofmouth.com.au/reviews/kims-blinds-oak-flats",
} as const;

export const reviewSourceStats = [
  { value: "4.6", label: "39 Google reviews via Birdeye" },
  { value: "4.3", label: "11 Localsearch reviews" },
  { value: "4.8", label: "4 Word of Mouth reviews" },
];

export const customerReviews = [
  {
    name: "Meredith Smith",
    suburb: "Oak Flats customer",
    quote: "Everything was easy from quote to final payment ... prompt responses ... good quality and price.",
    sourceLabel: "Google review via Birdeye",
    sourceUrl: reviewSourceLinks.birdeye,
    image: "person-woman" as const,
  },
  {
    name: "Josephine Simpson",
    suburb: "Oak Flats customer",
    quote: "They look fantastic ... efficient outstanding customer service ... highly recommend this company.",
    sourceLabel: "Google review via Birdeye",
    sourceUrl: reviewSourceLinks.birdeye,
    image: "woman" as const,
  },
  {
    name: "Ryan Karaklic",
    suburb: "Oak Flats customer",
    quote: "Adam and the team at Kim's blinds were a pleasure to deal with and very competitive on price.",
    sourceLabel: "Google review via Birdeye",
    sourceUrl: reviewSourceLinks.birdeye,
    image: "person-man" as const,
  },
  {
    name: "Karen Distefano",
    suburb: "Localsearch reviewer",
    quote: "Prompt response to our queries, quote was very reasonable ... Quality of blinds is excellent.",
    sourceLabel: "Localsearch review",
    sourceUrl: reviewSourceLinks.localsearch,
    image: "person-woman" as const,
  },
  {
    name: "Paul Warrington",
    suburb: "Localsearch reviewer",
    quote: "Excellent service. Kim, Talea and Wayne were very friendly, reliable and punctual. Good quality work.",
    sourceLabel: "Localsearch review",
    sourceUrl: reviewSourceLinks.localsearch,
    image: "person-man" as const,
  },
  {
    name: "Dianne M.",
    suburb: "Word of Mouth reviewer",
    quote: "Local business, always friendly and great service, job was done professionally, very happy with work.",
    sourceLabel: "Word of Mouth review",
    sourceUrl: reviewSourceLinks.wordOfMouth,
    image: "woman" as const,
  },
  {
    name: "BelB",
    suburb: "Farmborough Heights reviewer",
    quote: "We have had numerous lots of vertical blinds from Kim's Blinds ... their quality is fantastic.",
    sourceLabel: "Word of Mouth review",
    sourceUrl: reviewSourceLinks.wordOfMouth,
    image: "person-woman" as const,
  },
];

export const productImages: Record<string, ProductImageAsset> = {
  blinds: {
    src: "/brand/kims/generated/homepage-roller-blind-hero.webp",
    focalPoint: "50% 50%",
    alt: "Kim's Blinds roller blinds open in a Wollongong coastal living room",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/coastal-luxury-roller-blinds-closed-day-landscape.webp",
      focalPoint: "50% 50%",
      alt: "Kim's Blinds roller blinds closed for glare control in a coastal living room",
    },
    cardLabel: "Open to ocean light",
    revealLabel: "Closed for privacy",
  },
  "roller-blinds": {
    src: "/brand/kims/generated/homepage-roller-blind-hero.webp",
    focalPoint: "50% 50%",
    alt: "Kim's Blinds roller blinds raised in a coastal home",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/coastal-luxury-roller-blinds-closed-evening-landscape.webp",
      focalPoint: "50% 50%",
      alt: "Kim's Blinds roller blinds closed at evening in a coastal home",
    },
    cardLabel: "Daylight open",
    revealLabel: "Evening privacy",
  },
  "venetian-blinds": {
    src: "/brand/kims/generated/lifestyle-companion/bushland-home-venetian-blinds-open-day-landscape.webp",
    focalPoint: "50% 50%",
    alt: "Kim's Blinds venetian blinds tilted open in a Wollongong escarpment home",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/bushland-home-venetian-blinds-closed-day-landscape.webp",
      focalPoint: "50% 50%",
      alt: "Kim's Blinds venetian blinds tilted shut for heat and privacy control",
    },
    cardLabel: "Tilted open",
    revealLabel: "Tilted shut",
  },
  "vertical-blinds": {
    src: "/brand/kims/generated/initial-wide-set/public-brand-kims-generated-premium-vertical-sliding-door-blinds.webp",
    focalPoint: "50% 50%",
    alt: "Kim's Blinds vertical blinds across a large sliding door",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/beachside-apartment-balcony-blinds-closed-day-landscape.webp",
      focalPoint: "50% 50%",
      alt: "Kim's Blinds balcony blinds closed across a beachside apartment opening",
    },
    cardLabel: "Sliding-door light",
    revealLabel: "Controlled shade",
  },
  "vision-blinds": {
    src: "/brand/kims/generated/vision-blinds-living-room.webp",
    focalPoint: "50% 50%",
    alt: "Kim's Blinds layered indoor blinds in a premium living room",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/coastal-luxury-roller-blinds-closed-day-landscape.webp",
      focalPoint: "50% 50%",
      alt: "Kim's Blinds blinds closed for filtered privacy",
    },
    cardLabel: "Filtered light",
    revealLabel: "Private setting",
  },
  awnings: {
    src: "/brand/kims/generated/folding-arm-awning-patio.webp",
    focalPoint: "50% 48%",
    alt: "Kim's Blinds awning and outdoor shade over an Australian alfresco area",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/family-alfresco-zip-track-awning-closed-day-landscape.webp",
      focalPoint: "50% 48%",
      alt: "Kim's Blinds awning extended with zip-track blinds lowered over an alfresco area",
    },
    cardLabel: "Entertaining open",
    revealLabel: "Shade extended",
  },
  "outdoor-blinds": {
    src: "/brand/kims/generated/lifestyle-companion/poolside-plantation-shutters-outdoor-blinds-open-day-landscape.webp",
    focalPoint: "50% 50%",
    alt: "Kim's Blinds outdoor blinds raised beside a poolside living area",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/poolside-plantation-shutters-outdoor-blinds-closed-evening-landscape.webp",
      focalPoint: "50% 50%",
      alt: "Kim's Blinds outdoor blinds lowered for evening privacy beside a pool",
    },
    cardLabel: "Outdoor living",
    revealLabel: "Evening enclosure",
  },
  curtains: {
    src: "/brand/kims/generated/curtains-soft-track.webp",
    focalPoint: "50% 50%",
    alt: "Kim's Blinds sheer and blockout curtains in a premium coastal bedroom",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/hampton-shutters-sheer-curtains-closed-evening-landscape.webp",
      focalPoint: "50% 50%",
      alt: "Kim's Blinds sheer curtains drawn for warm evening privacy",
    },
    cardLabel: "Sheers open",
    revealLabel: "Evening drawn",
  },
  "panel-glides": {
    src: "/brand/kims/generated/panel-glides-large-door.webp",
    focalPoint: "50% 45%",
    alt: "Kim's Blinds panel glides across a large patio opening",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/beachside-apartment-balcony-blinds-closed-day-landscape.webp",
      focalPoint: "50% 50%",
      alt: "Kim's Blinds panels and balcony blinds closed for privacy",
    },
    cardLabel: "Large opening",
    revealLabel: "Panels drawn",
  },
  "plantation-shutters": {
    src: "/brand/kims/generated/plantation-shutters-light-control.webp",
    focalPoint: "50% 50%",
    alt: "Kim's Blinds plantation shutters open in a coastal Hampton-style home",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/hampton-shutters-sheer-curtains-closed-day-landscape.webp",
      focalPoint: "50% 50%",
      alt: "Kim's Blinds plantation shutters closed for light control",
    },
    cardLabel: "Louvers open",
    revealLabel: "Louvers closed",
  },
  "fly-screens": {
    src: "/brand/kims/generated/fly-screen-airflow-patio.webp",
    focalPoint: "60% 48%",
    alt: "Kim's Blinds fly screen across a patio opening with airflow",
    reveal: {
      src: "/brand/kims/generated/lifestyle-companion/family-alfresco-zip-track-awning-open-day-landscape.webp",
      focalPoint: "50% 48%",
      alt: "Kim's Blinds screened alfresco opening in a family home",
    },
    cardLabel: "Airflow visible",
    revealLabel: "Outdoor connection",
  },
  "security-doors": {
    src: "/brand/kims/generated/security-doors-windows-hero.webp",
    focalPoint: "50% 48%",
    alt: "Kim's Blinds sliding security door across a wide home opening",
    reveal: {
      src: "/brand/kims/generated/security-mesh-detail.webp",
      focalPoint: "50% 42%",
      alt: "Kim's Blinds security mesh and lock detail",
    },
    cardLabel: "Whole opening",
    revealLabel: "Mesh detail",
  },
  "security-screens": {
    src: "/brand/kims/generated/security-mesh-detail.webp",
    focalPoint: "50% 42%",
    alt: "Kim's Blinds security mesh and lock detail",
    reveal: {
      src: "/brand/kims/generated/security-doors-windows-hero.webp",
      focalPoint: "50% 48%",
      alt: "Kim's Blinds sliding security screen across a wide opening",
    },
    cardLabel: "Mesh detail",
    revealLabel: "Installed screen",
  },
};
