import {
  DoorOpen,
  DraftingCompass,
  Grid3X3,
  Ruler,
  SlidersHorizontal,
  Sparkles,
  Wind,
} from "lucide-react";
import type { AvatarImageKey } from "../../components/shared/DataDisplay";
import type { NavItem, TokenItem } from "../../components/shared/types";

export const websiteNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blinds", href: "/services/blinds" },
  { label: "Awnings", href: "/services/awnings" },
  { label: "Plantation Shutters", href: "/services/plantation-shutters" },
  { label: "Security", href: "/services/security-doors" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    title: "Website system",
    links: [
      { label: "Standards audit", href: "#components" },
      { label: "Section alignment", href: "#section-alignment" },
      { label: "Component contracts", href: "#component-contracts" },
      { label: "Hero modules", href: "#website-sections" },
      { label: "Service cards", href: "#cards" },
      { label: "Card system", href: "#card-system" },
    ],
  },
  {
    title: "Quality gates",
    links: [
      { label: "Accessibility", href: "#accessibility-governance" },
      { label: "Website adoption", href: "#website-adoption" },
      { label: "Scope panel", href: "#quote-approval" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "Logo usage", href: "#brand" },
      { label: "Image system", href: "#brand-images" },
      { label: "Review avatar", href: "#review-avatar" },
      { label: "Tokens", href: "#tokens" },
      { label: "Typography", href: "#typography" },
      { label: "Font animation", href: "#font-animation" },
      { label: "Chrome controls", href: "#buttons" },
    ],
  },
];

export const tokens: TokenItem[] = [
  { name: "Header Graphite", value: "#0D0F13", usage: "Base of the main website header, navigation tray, dark chrome controls and contact dock.", contrast: "CSS: --metal-graphite" },
  { name: "Action Blue", value: "#0787F5", usage: "Canonical Kim's action blue used by header glow, CTA depth and active chrome states.", contrast: "CSS: --action / rgb 7 135 245" },
  { name: "Action Highlight", value: "#52AEFA", usage: "Top highlight for blue CTA bevels, selected links and active icon surfaces.", contrast: "CSS: --action-light" },
  { name: "Action Deep", value: "#062A58", usage: "Deep blue base for primary CTA shadows, lower bevels and pressed states.", contrast: "CSS: --action-deep" },
  { name: "Chrome White", value: "#F7FBFF", usage: "Light chrome text, bright edge highlights and icon contrast over dark controls.", contrast: "CSS: --metal-chrome" },
  { name: "Chrome Dim", value: "#AEBDCC", usage: "Muted chrome rail used on metal edges, secondary icon cups and inactive details.", contrast: "CSS: --metal-chrome-dim" },
  { name: "Chrome Ring", value: "linear-gradient(180deg, #ffffff 0%, #cfdae6 14%, #5a636e 30%, #04060a 52%, #c7c0b4 74%, #fffaf0 100%)", usage: "Border material for primary header CTA, active nav buttons and high-emphasis chrome controls.", contrast: "CSS: --theme-chrome-ring" },
  { name: "Chrome Ring Light", value: "linear-gradient(180deg, #ffffff 0%, #b7c4d0 28%, #171f27 58%, #fff8ed 100%)", usage: "Border material for nav tray, secondary buttons and mobile drawer links.", contrast: "CSS: --theme-chrome-ring-light" },
  { name: "Primary CTA Material", value: "linear-gradient(180deg, rgba(255,255,255,.18) 0%, rgba(255,255,255,.03) 30%, rgba(0,42,102,.4) 100%), linear-gradient(180deg, #0458bd 0%, #074ea5 55%, #063e84 80%, #062a58 100%)", usage: "Readable swatch for the layered Free Measure & Quote and Call now button material.", contrast: "CSS: --theme-button-primary-background" },
  { name: "Dark Chrome Button", value: "linear-gradient(145deg, #0f1114, #262b32)", usage: "Base material under secondary nav buttons, dark controls and contact dock secondary actions.", contrast: "CSS: --theme-dark-gradient-raised" },
  { name: "Header Image Wash", value: "linear-gradient(90deg, rgba(242,247,252,.88) 0%, rgba(242,247,252,.70) 17%, rgba(7,23,39,.72) 44%, rgba(5,10,16,.84) 100%)", usage: "Image overlay that makes the real house photo behave as header material.", contrast: "CSS: .site-header background layer" },
  { name: "Logo Capsule", value: "linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,255,255,.46))", usage: "Glass and metal capsule behind the logo in the main header and mobile header.", contrast: "CSS: .site-header__brand" },
];

export const tableRows = [
  { name: "Front blinds and security", status: "active" as const, statusLabel: "Approved", date: "Quote line 01" },
  { name: "Sliding screen", status: "pending" as const, statusLabel: "Review", date: "Quote line 02" },
  { name: "Garage access screen", status: "inactive" as const, statusLabel: "Optional", date: "Quote line 03" },
];

export const timeline = [
  {
    phase: "Phase 01",
    title: "Design-system lock",
    description: "Approve the header-matched tokens, premium type pairing, chrome buttons, mobile header, dock and shared component contracts before anything is promoted.",
    deliverables: ["Header token parity", "Typography and button matrix", "Navigation and dock specimens"],
    gate: "Decision gate: this page is the source of truth.",
    owner: "Design-system owner",
  },
  {
    phase: "Phase 02",
    title: "Client approval package",
    description: "Confirm logo usage, product image roles, quote module wording and the production-page component set with the client before build-out starts.",
    deliverables: ["Quote approval panel", "Image and asset register", "Reusable section shortlist"],
    gate: "Decision gate: approve or revise scope.",
    owner: "Client and delivery lead",
  },
  {
    phase: "Phase 03",
    title: "Production assembly",
    description: "Assemble home, services, contact and service-area routes from the approved shared components without inventing one-off page UI.",
    deliverables: ["Home and service pages", "Quote request route", "SEO/local content modules"],
    gate: "Decision gate: content and route review.",
    owner: "Production build team",
  },
  {
    phase: "Phase 04",
    title: "Launch verification",
    description: "Run build checks, responsive QA, accessibility review, Vercel smoke tests and final deployment notes before the site is shared.",
    deliverables: ["Build verification", "Mobile screenshots", "Deployment notes"],
    gate: "Decision gate: release-ready sign-off.",
    owner: "QA and launch owner",
  },
];

export const steps = [
  { label: "01 Audit locked", status: "Header tokens, type and shared chrome approved" },
  { label: "02 Scope review", status: "Quote, assets and component shortlist confirmed" },
  { label: "03 Build pages", status: "Routes assembled from approved shared components" },
  { label: "04 Launch gate", status: "Build, responsive, accessibility and deploy checks passed" },
];

export const guideSpecItems = [
  {
    title: "Zip guide",
    description: "External blind guide component for side-channel product pages.",
    specs: [
      { label: "Max width", value: "5.8m" },
      { label: "Max drop", value: "4m" },
    ],
    icon: <SlidersHorizontal size={24} />,
  },
  {
    title: "Wire guide",
    description: "Discreet cable-guided outdoor blind option for patios and balconies.",
    specs: [
      { label: "Max width", value: "4m" },
      { label: "Max drop", value: "4m" },
    ],
    icon: <Wind size={24} />,
  },
  {
    title: "Straight drop",
    description: "Simple drop screen option with clip or strap restraint messaging.",
    specs: [
      { label: "Max width", value: "4m" },
      { label: "Max drop", value: "4m" },
    ],
    icon: <Ruler size={24} />,
  },
  {
    title: "Sliding shutter",
    description: "Plantation shutter mounting card for large openings.",
    icon: <DraftingCompass size={24} />,
  },
  {
    title: "Hinged shutter",
    description: "Standard shutter configuration component for doors and windows.",
    icon: <DoorOpen size={24} />,
  },
  {
    title: "Bifold shutter",
    description: "Multi-panel shutter component for wide openings.",
    icon: <Grid3X3 size={24} />,
  },
  {
    title: "Bay window shutter",
    description: "Angled opening configuration component for product guides.",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Blade sizes",
    description: "Selector component for shutter blade education and quote comparison.",
    specs: [
      { label: "Small", value: "63mm" },
      { label: "Medium", value: "89mm" },
      { label: "Large", value: "114mm" },
    ],
    icon: <Ruler size={24} />,
  },
];

export const productSystemFlow = [
  {
    step: "01 Core tokens",
    title: "Material and typography",
    detail: "Header graphite, chrome rings, action blue, Source Serif 4, Söhne/Manrope and IBM Plex Mono define the product family.",
    controls: "--theme-button-primary-background, --ds-card-background, --font-display",
  },
  {
    step: "02 Proof layer",
    title: "Trust and field evidence",
    detail: "Vehicle proof, supplier credentials, warranty and technology proof inherit the same card surface and icon material.",
    controls: "FleetBrandingCard, ProofBadge, product-library-note",
  },
  {
    step: "03 Product layer",
    title: "Range and specification cards",
    detail: "Security mesh, shutters, blinds, dimensions and guide options use one spec/list/status grammar.",
    controls: "ProductRangeCard, SpecTileGrid, StatusPill",
  },
  {
    step: "04 Page layer",
    title: "Website-ready content modules",
    detail: "Brochure facts become reusable modules that can move into service pages without reintroducing old page styling.",
    controls: "BrochureModule, ProductTechnologyGrid, service page sections",
  },
];

export const cardMaterialVariants = [
  {
    variant: "base",
    title: "Base content card",
    meta: "Shared surface",
    description: "Default specimen for service, form, data and quote cards. Changing the base tokens updates the full design-system surface family.",
    token: "--ds-card-background / --ds-card-shadow",
  },
  {
    variant: "security",
    title: "Security product card",
    meta: "Primary Kim's blue",
    description: "Used for blinds, security doors, grilles and high-confidence proof where the header and dock action blue should lead.",
    token: "--ds-card-accent-rgb: --theme-action-rgb",
  },
  {
    variant: "screen",
    title: "Screen product card",
    meta: "Cool airflow accent",
    description: "A restrained blue graphite cast for fly screens, ventilation, coastal airflow and technical screen comparisons.",
    token: "--ds-card-accent-rgb: 22, 118, 168",
  },
  {
    variant: "shutter",
    title: "Shutter product card",
    meta: "Interior finish accent",
    description: "A muted olive-graphite cast for plantation shutter guidance without slipping into beige brochure styling.",
    token: "--ds-card-accent-rgb: 96, 113, 88",
  },
  {
    variant: "blind",
    title: "Outdoor blind card",
    meta: "External shade accent",
    description: "A warm copper restraint for outdoor shade and weather modules, balanced by the same chrome ring and dark rail.",
    token: "--ds-card-accent-rgb: 176, 103, 24",
  },
  {
    variant: "proof",
    title: "Proof and spec card",
    meta: "Dark chrome evidence",
    description: "Used for supplier proof, warranty, manufacturing claims and QA evidence cards that need extra authority.",
    token: "--ds-card-accent-rgb: 54, 64, 74",
  },
];

export const brandImageAssets = [
  { name: "Roller blinds hero", src: "/brand/kims/generated/homepage-roller-blind-hero.webp", role: "Primary hero and atmospheric trust image from the final asset target set.", group: "Site media" },
  { name: "Local hero product detail", src: "/brand/kims/generated/local-hero-product-showroom.webp", role: "Local and information page media using the generated Kim's showroom wall candidate.", group: "Site media" },
  { name: "Security doors", src: "/brand/kims/generated/security-doors-windows-hero.webp", role: "Security door product card and service route image.", group: "Product media" },
  { name: "Security mesh detail", src: "/brand/kims/generated/security-mesh-detail.webp", role: "Window screen and security screen detail pages.", group: "Product media" },
  { name: "Vision blinds", src: "/brand/kims/generated/vision-blinds-living-room.webp", role: "Vision blind route image with visible zebra bands.", group: "Product media" },
  { name: "Panel glides", src: "/brand/kims/generated/panel-glides-large-door.webp", role: "Panel-track service card and route image.", group: "Product media" },
  { name: "Fly screens", src: "/brand/kims/generated/fly-screen-airflow-patio.webp", role: "Fly screen service content and SEO articles.", group: "Product media" },
  { name: "Plantation shutters", src: "/brand/kims/generated/plantation-shutters-light-control.webp", role: "Shutter cards, service pages and guide content.", group: "Product media" },
  { name: "Outdoor blinds", src: "/brand/kims/generated/folding-arm-awning-patio.webp", role: "Outdoor blind service cards and exterior examples.", group: "Product media" },
  { name: "Curtains", src: "/brand/kims/generated/curtains-soft-track.webp", role: "Curtain product route and guide content.", group: "Product media" },
  { name: "Kim's Blinds logo proof", src: "/brand/kims/kims-blinds-logo-2026.webp", role: "Trust proof for quality assurance modules.", group: "Trust proof" },
  { name: "Logo full", src: "/brand/kims/kims-blinds-logo-2026.webp", role: "Primary brand lockup using the supplied full logo artwork.", group: "Logo system" },
  { name: "Logo icon", src: "/favicon-512.png", role: "Compact mobile, badge and favicon-style usage.", group: "Logo system" },
  { name: "Logo source PNG", src: "/brand/kims/kims-blinds-logo-2026.png", role: "Source raster export from the supplied logo artwork.", group: "Logo system" },
];

export const brandAvatarAssets: Array<{ name: string; image: AvatarImageKey; source: string; role: string }> = [
  { name: "Installer profile", image: "man", source: "Initials placeholder", role: "Owner or installer profile slot. Publish a photo only after identity and consent are confirmed." },
  { name: "Homeowner profile", image: "woman", source: "Initials placeholder", role: "Customer review portrait slot. Use initials until customer approval is explicit." },
  { name: "Secondary homeowner", image: "person-man", source: "Initials placeholder", role: "Alternate review portrait slot for approved testimonial layouts." },
  { name: "Secondary review", image: "person-woman", source: "Initials placeholder", role: "Alternate review portrait slot for approved testimonial layouts." },
];

export const standardSources = [
  {
    name: "USWDS",
    href: "https://designsystem.digital.gov/",
    focus: "Components, patterns, UX guidance and accessibility guidance in one public system.",
    applied: "Adds a component + pattern + accessibility ledger instead of only showing finished visuals.",
  },
  {
    name: "USWDS accessibility",
    href: "https://designsystem.digital.gov/documentation/accessibility/",
    focus: "Accessible components are tested with screen readers, keyboard-only navigation, zoom, touch, browsers and automated scans.",
    applied: "Adds a formal QA checklist for keyboard, zoom, touch targets, reduced motion and automated accessibility scans.",
  },
  {
    name: "WCAG 2.2",
    href: "https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques",
    focus: "Success criteria are the conformance basis; techniques and tests support implementation.",
    applied: "Sets WCAG 2.2 AA as the design-system accessibility target before website promotion.",
  },
  {
    name: "Design Tokens CG",
    href: "https://www.designtokens.org/tr/drafts/format/",
    focus: "A portable token file format for exchanging design decisions between tools.",
    applied: "Documents token roles, source variables and future JSON export expectations.",
  },
  {
    name: "IBM Carbon",
    href: "https://carbondesignsystem.com/",
    focus: "Design systems need working code, design tools, resources, human-interface guidance and contribution paths.",
    applied: "Adds source maps, ownership, lifecycle and handoff notes to the Kim's system.",
  },
  {
    name: "Storybook",
    href: "https://storybook.js.org/",
    focus: "Build, test and document components in isolation, including hard-to-reach states.",
    applied: "Adds component-state contracts and isolated specimens for header, dock, buttons, forms and reports.",
  },
  {
    name: "GOV.UK Design System",
    href: "https://design-system.service.gov.uk/accessibility/",
    focus: "Using a design system does not automatically make a service accessible; product teams still need research, design, development and testing.",
    applied: "Adds an adoption gate so the main website only inherits reviewed design-system decisions.",
  },
];

export const completionLedger = [
  { area: "Brand foundations", status: "Complete", evidence: "Logo lockups, brand images, material language and trust proof are documented." },
  { area: "Design tokens", status: "Strengthened", evidence: "Color, typography, surface, chrome and semantic token roles are documented with source CSS variables." },
  { area: "Typography system", status: "Added", evidence: "Söhne-led pairings, type scale, style roles and animation rules are now documented as a full section." },
  { area: "Component library", status: "Strengthened", evidence: "Header, dock, buttons, cards, forms, data displays, status, quote panels and content blocks have contracts." },
  { area: "Interaction states", status: "Strengthened", evidence: "Default, hover, focus, active, loading, disabled, mobile drawer and forced dock states are represented." },
  { area: "Accessibility", status: "Added", evidence: "WCAG 2.2 AA target, keyboard, zoom, touch, contrast and automated-scan checks are listed." },
  { area: "Content guidelines", status: "Added", evidence: "Voice, CTA wording, service naming, image rules and SEO/local content rules are defined." },
  { area: "Governance", status: "Added", evidence: "Contribution, approval, adoption and deprecation rules are now explicit." },
  { area: "Website promotion", status: "Gated", evidence: "Improvements are listed as candidates until confirmed from the design-system page." },
];

export const sectionAlignmentAudit = [
  { section: "Header and navigation", anchor: "#navigation", status: "Aligned", proof: "Live SiteHeader specimen uses the same logo capsule, graphite chrome, action blue CTA and mobile drawer as the public website." },
  { section: "Bottom dock", anchor: "#navigation", status: "Aligned", proof: "ContactDock specimen uses the same primary, secondary and tertiary chrome materials as the website dock." },
  { section: "Brand images", anchor: "#brand-images", status: "Aligned", proof: "All public website images are documented with source paths and intended usage before any replacement is made." },
  { section: "Material tokens", anchor: "#tokens", status: "Aligned", proof: "Token cards now map directly to the header palette, chrome rings, logo glass, CTA material and image wash." },
  { section: "Typography", anchor: "#typography", status: "New standard", proof: "Söhne is the preferred body/UI family, Source Serif 4 is the recommended display partner and IBM Plex Mono remains the proof/spec face." },
  { section: "Buttons and badges", anchor: "#buttons", status: "Aligned", proof: "Primary, secondary and tertiary controls are shown through the same chrome action system as the header." },
  { section: "Cards and product modules", anchor: "#card-system", status: "Wired", proof: "Product proof, range, spec, brochure and technology modules now inherit one material token stack, chrome rail, icon grammar, status pills and type hierarchy." },
  { section: "Forms and quote flow", anchor: "#forms", status: "Needs backend gate", proof: "Form controls are component-ready; CRM/email submission remains a launch dependency." },
  { section: "Accessibility and governance", anchor: "#accessibility-governance", status: "Aligned", proof: "Keyboard, touch, zoom, contrast, reduced motion and promotion rules are documented before live adoption." },
  { section: "Roadmap", anchor: "#roadmap", status: "Aligned", proof: "Build sequence is now a gated approval runway rather than loose project notes." },
];

export const typographyPairs = [
  {
    name: "Recommended production pair",
    faces: "Source Serif 4 Display + Söhne Text/UI",
    reason: "A high-trust editorial serif over a precise neo-grotesk. The combination feels architectural, premium and practical rather than decorative.",
    use: "Hero headings, service promises, section titles, quote guidance, forms, navigation and dock controls.",
  },
  {
    name: "Fallback pair",
    faces: "Source Serif 4 + Manrope",
    reason: "Manrope stays close enough to Söhne's clean grotesk rhythm for the hosted preview while the actual Söhne webfont files are pending.",
    use: "Temporary deployment fallback only; keep Söhne as the intended system face.",
  },
  {
    name: "Specification layer",
    faces: "IBM Plex Mono",
    reason: "A technical mono adds credibility to proof points, measurements and approval states without competing with the display voice.",
    use: "Eyebrows, token names, table labels, gate labels, product dimensions and QA evidence.",
  },
];

export const typeScale = [
  { role: "Hero display", token: "--type-hero", size: "72 / 42", line: "0.94", weight: "Source Serif 4 700", usage: "Home hero and major service-page promise only.", sample: "Shape light beautifully.", tone: "hero", emphasis: ["matters"] },
  { role: "Page H1", token: "--type-page-title", size: "56 / 38", line: "0.98", weight: "Source Serif 4 700", usage: "Local page and article-level titles.", sample: "Blinds and awnings Oak Flats.", tone: "page", emphasis: ["Security"] },
  { role: "Section H2", token: "--type-section-title", size: "44 / 30", line: "1.02", weight: "Source Serif 4 700", usage: "Major design-system and website section headings.", sample: "A cleaner finish for serious security.", tone: "section", emphasis: ["security"] },
  { role: "Card H3", token: "--type-card-title", size: "22", line: "1.08", weight: "Source Serif 4 700", usage: "Service cards, contract cards and approval panels.", sample: "Kim's Blinds custom blinds.", tone: "card", emphasis: ["Kim's Blinds"] },
  { role: "Body large", token: "--type-body-large", size: "18", line: "1.58", weight: "Söhne 400", usage: "Hero support copy and page introductions.", sample: "Local measured advice for blinds, awnings, shutters, curtains, screens and security doors.", tone: "large", emphasis: ["measured"] },
  { role: "Body", token: "--type-body", size: "15", line: "1.62", weight: "Söhne 400", usage: "Paragraphs, card copy, quote guidance and form helper text.", sample: "Choose the product family first, then book a measured quote for your opening.", tone: "body", emphasis: ["quote"] },
  { role: "UI label", token: "--type-ui", size: "13", line: "1.2", weight: "Söhne 700", usage: "Buttons, nav links, tabs, controls and dock actions.", sample: "Free Measure & Quote.", tone: "ui", emphasis: ["Quote"] },
  { role: "Metadata", token: "--type-meta", size: "10", line: "1.25", weight: "IBM Plex Mono 600", usage: "Eyebrows, status tags, source paths and proof labels.", sample: "FREE MEASURE AND QUOTE.", tone: "meta", emphasis: ["AUTHORISED"] },
];

export const typeStyleRules = [
  { style: "Display hierarchy", rule: "Source Serif 4 is reserved for trust-building headlines, section names and card titles. No outline effects, no decorative shadows." },
  { style: "Body and UI rhythm", rule: "Söhne/Manrope body copy stays at normal tracking. Hierarchy comes from weight, spacing and contrast, not stretched letters." },
  { style: "Metadata discipline", rule: "IBM Plex Mono is uppercase only for short proof labels, token names and QA states. Keep labels under 32 characters." },
  { style: "Chrome controls", rule: "Button labels stay compact, bold and centered. Icons carry recognition; text confirms the action." },
  { style: "Mobile headings", rule: "Use fixed breakpoint sizes with balanced wrapping. Do not scale type with viewport width." },
  { style: "Motion limits", rule: "Animate headings and CTA labels only. Paragraphs, forms, prices and compliance copy stay still." },
];

export const typeMotionRules = [
  { name: "Chrome reveal", target: "Hero and section headings", duration: "520ms", easing: "cubic-bezier(0.16, 1, 0.3, 1)", rule: "Fade and rise 8px with a tiny blur lift. Use once per section entrance, never on every card." },
  { name: "CTA lock-in", target: "Primary action labels", duration: "360ms", easing: "ease-out", rule: "Settle from slight spacing to normal tracking so quote actions feel precise without becoming flashy." },
  { name: "Spec pulse", target: "Small proof labels", duration: "900ms", easing: "ease-in-out", rule: "Single restrained blue glow for active proof markers, not looping attention-seeking motion." },
];

export const reviewAvatarPresets: Array<{ label: string; image: AvatarImageKey; key: string; focalPoint: string; zoom: number }> = [
  { label: "Installer profile", image: "man", key: "installer-profile", focalPoint: "48% 43%", zoom: 1.02 },
  { label: "Homeowner profile", image: "woman", key: "homeowner-profile", focalPoint: "50% 42%", zoom: 1.03 },
  { label: "Customer portrait", image: "person-man", key: "customer-portrait", focalPoint: "50% 43%", zoom: 1.02 },
  { label: "Review portrait", image: "person-woman", key: "review-portrait", focalPoint: "50% 43%", zoom: 1.03 },
];

export const foundationContracts = [
  {
    title: "Type roles",
    meta: "Source Serif 4 / Söhne / IBM Plex Mono",
    items: ["Display: Source Serif 4 for high-trust architectural headings", "Body and UI: Söhne first, Manrope fallback until Söhne files are supplied", "Meta: IBM Plex Mono for short uppercase proof and system labels"],
  },
  {
    title: "Color roles",
    meta: "#0787f5 / #0D0F13 / chrome rings",
    items: ["Header graphite is the dark chrome base for nav, dock and high-contrast controls", "Action blue uses a full depth scale for quote, call, active and approved states", "Chrome rings, logo glass and header image wash are formal brand materials, not decorative one-offs"],
  },
  {
    title: "Surface system",
    meta: "Chrome ring, soft panels, dark product header",
    items: ["Primary controls use blue chrome with clear icon affordance", "Secondary controls use dark chrome, never low-contrast grey", "Page sections remain unframed; repeated items use cards"],
  },
  {
    title: "Icon material",
    meta: "Approval-gate chrome nodes",
    items: ["Use the roadmap approval-gate node as the canonical icon treatment", "Default icons use dark chrome with the light chrome ring", "Positive, selected and proof icons use the same action-blue chrome as the header and dock buttons"],
  },
  {
    title: "Spacing and radius",
    meta: "Compact trade-service UI",
    items: ["Cards stay at 8-12px radius unless chrome controls require more", "Touch controls target at least 44px", "Specimens use stable dimensions to avoid layout shift"],
  },
  {
    title: "Imagery",
    meta: "Real product and trust assets",
    items: ["Use current website assets before sourcing new imagery", "Do not embed text in imagery", "Product photos need focal points and descriptive usage notes"],
  },
  {
    title: "Motion",
    meta: "Restrained interaction feedback",
    items: ["Use lift and icon movement for primary interactions", "Respect reduced motion", "Avoid decorative motion that competes with quote actions"],
  },
];

export const componentContracts = [
  { component: "SiteHeader", source: "src/components/shared/SiteChrome.tsx", states: "Desktop, compact, active link, mobile drawer open, Escape close", accessibility: "Semantic nav, aria-expanded, aria-controls, keyboard close", adoption: "Live on website and design system" },
  { component: "ContactDock", source: "src/components/shared/ContactDock.tsx", states: "Hidden, scroll-visible, forced specimen, primary/secondary/tertiary actions", accessibility: "Nav label, focus-visible rings, concise links", adoption: "Live on website; documented as shared chrome" },
  { component: "Button", source: "src/components/shared/Button.tsx", states: "Primary, secondary, tertiary, outline, danger, loading, pressed, disabled", accessibility: "Native button, aria-busy on loading, visible focus", adoption: "Ready for website promotion where old button styles remain" },
  { component: "Icon material", source: "src/website.css", states: "Dark chrome default, action-blue selected/proof state, badge scale, button scale and approval-gate node scale", accessibility: "Decorative icons remain aria-hidden; actionable icon buttons keep aria-label", adoption: "Design-system default; header call icon remains separate" },
  { component: "Avatar", source: "src/components/shared/DataDisplay.tsx", states: "Image, initials fallback, circle, squircle, size scale, crop focal point, zoom, verified and pending badges", accessibility: "Alt text or labelled initials, local upload preview, visible focus on editing controls", adoption: "Design-system standard for testimonials and customer review capture" },
  { component: "CustomerReviewCard", source: "src/components/shared/DataDisplay.tsx", states: "Feature, compact, initials-only, approved image, synthetic placeholder and pending consent", accessibility: "Semantic blockquote, readable reviewer details, photo consent status remains explicit", adoption: "Live on testimonials and homepage proof sections" },
  { component: "Cards", source: "src/components/shared/WebsiteCards.tsx", states: "Service, feature, media, stat, report, pricing and case variants", accessibility: "Real headings, alt text through media assets, link text stays action-specific", adoption: "Live in product and website sections" },
  { component: "Card material", source: "src/website.css", states: "Base, security, screen, shutter, blind and proof variants with shared background, chrome rail, shadow, spec surface and accent token", accessibility: "Contrast remains inherited from the shared text and status tokens; variants cannot rely on colour alone", adoption: "Design-system source of truth before product-page promotion" },
  { component: "Product content", source: "src/components/shared/ProductContent.tsx", states: "Proof layer, range cards, spec tiles, brochure modules, technology chips and status pills", accessibility: "Semantic article/section/list/dl structure, labelled icons remain decorative, product facts remain readable without images", adoption: "Design-system source for old product content before service-page promotion" },
  { component: "Forms", source: "src/components/shared/FormControls.tsx", states: "Input, select, checkbox, radio, toggle, focused, selected", accessibility: "Explicit labels, native control semantics, large targets", adoption: "Ready before backend integration" },
  { component: "QuoteApprovalPanel", source: "src/components/shared/Quote.tsx", states: "Scope, inclusions, exclusions, price, next step", accessibility: "Structured content, plain language, no fake success state", adoption: "Design-system approval surface" },
  { component: "Content sections", source: "src/components/shared/WebsiteSections.tsx", states: "Hero, CTA, FAQ, SEO block, process, trust bar, grid", accessibility: "Section headings, list semantics, details/summary for FAQ", adoption: "Live across SEO route templates" },
];

export const accessibilityChecklist = [
  { title: "Keyboard", details: "Header drawer, form controls, CTA links, accordions and docks must be reachable and visible with keyboard focus." },
  { title: "Touch", details: "Mobile navigation, quick dock and primary buttons maintain 44px or larger interaction targets." },
  { title: "Zoom", details: "At 200% zoom, header, drawer, cards and quote flow must not overlap or trap scroll." },
  { title: "Contrast", details: "Kim's blue and chrome actions must pass WCAG AA contrast against their foreground text and icons." },
  { title: "Reduced motion", details: "Hover lifts and icon movements must disable cleanly when reduced motion is requested." },
  { title: "Assistive tech", details: "Use semantic nav, headings, details, form labels and ARIA only where native HTML needs support." },
];

export const contentRules = [
  "Use customer-recognisable service names: Blinds, Awnings, Plantation Shutters, Curtains, Fly Screens and Security Doors.",
  "Primary actions stay consistent: Free Measure & Quote, Call now, Contact us, Email.",
  "Copy should explain product fit, compliance, local service and next step without marketing filler.",
  "Service images must show product or real installation context, not generic atmosphere.",
  "Design-system internal links stay in body/footer; public header navigation stays customer-facing.",
];

export const adoptionCandidates = [
  { item: "Replace remaining older badges/buttons", impact: "Improves consistency on service cards and product modules", gate: "Confirm final chrome button matrix and badge density." },
  { item: "Promote component contract notes into code comments/docs", impact: "Makes future AI or developer sessions safer", gate: "Confirm whether docs should live in the app only or as separate markdown files." },
  { item: "Add automated accessibility scan", impact: "Prevents regressions before deploy", gate: "Choose tool path: axe/playwright script or CI step." },
  { item: "Add story-style isolated component route", impact: "Closer to Storybook workflow without installing Storybook", gate: "Confirm whether `/design-system` should stay single-page or split into routes." },
];

export const handoffFiles = [
  { label: "Live design-system route", value: "/design-system", href: "#components", variant: "route" },
  { label: "Design-system page", value: "src/pages/DesignSystemPage.tsx", href: "#component-contracts", variant: "proof" },
  { label: "Shared chrome", value: "src/components/shared/SiteChrome.tsx, ContactDock.tsx", href: "#navigation", variant: "chrome" },
  { label: "Shared primitives", value: "Button.tsx, FormControls.tsx, BadgeTag.tsx", href: "#buttons", variant: "control" },
  { label: "Website sections", value: "WebsiteSections.tsx, WebsiteCards.tsx", href: "#website-sections", variant: "section" },
  { label: "Brand assets", value: "public/brand/*", href: "#brand-images", variant: "asset" },
  { label: "Theme CSS", value: "src/website.css, src/designSystemPage.css", href: "#tokens", variant: "theme" },
];

export const buildReadinessLinks = [
  {
    label: "Desktop",
    title: "Dense chrome surface check",
    description: "Header, footer, card system, product library and quote panels use the same graphite, chrome and blue and orange material language.",
    href: "#card-system",
    variant: "desktop",
  },
  {
    label: "Tablet",
    title: "Grid reduction check",
    description: "Cards, proof modules, report panels and source maps collapse to two-column rhythm without drifting from shared tokens.",
    href: "#product-library",
    variant: "tablet",
  },
  {
    label: "Mobile",
    title: "Single-column interaction check",
    description: "Header drawer, touch controls, dock actions, form controls and linked handoff cards keep readable targets and focus states.",
    href: "#forms",
    variant: "mobile",
  },
];
