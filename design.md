# Kim's Blinds Design System

Status: production design-system specification  
Primary route: `/design-system`  
Local preview: `http://127.0.0.1:5198/design-system`  
Hosted demo: pending  
Last system consolidation: 2026-06-24
Last component reference update: 2026-06-24

## 1. Purpose

This document is the working design-system contract for the Kim's Blinds website, proposal modules, quote approval screens, production forms and handoff documentation.

The system is not a generic component board. It is the visual and interaction language for a local installer selling blinds, awnings, curtains, shutters, fly screens, security doors and security screens. The design should feel premium, coastal, practical and locally trustworthy.

Core intent:

- Build every website and proposal surface from one shared system.
- Keep the premium dark chrome and controlled Kim's blue/orange accent system consistent across the header, dock, buttons, tags, controls, cards and status states.
- Formalise typography, font pairing, motion, product imagery, card materials and responsive behaviour before pushing changes into the main website.
- Avoid one-off styling. A change to a core token or shared class must flow through every matching component.
- Preserve the header call icon as a separate treatment. Do not force that symbol into the general icon system.

## 2. System Principles

### 2.1 Design-system first

All new visual decisions are made and proven in `/design-system` first. The main website should only adopt a component when the design-system version is confirmed.

### 2.2 Premium, not decorative

The brand feel comes from:

- black and graphite chrome materials,
- controlled blue action lighting with orange sun/warmth emphasis,
- crisp serif display typography,
- practical sans-serif UI typography,
- real product and project imagery,
- clear quote, service and approval flows.

Avoid decorative gradients, generic white cards, oversized marketing sections, faded panels and disconnected component styles.

### 2.3 No standard cards

Cards must use the shared card material system. A card may be compact, media-led, proof-led, dark, quote-led, product-led or report-led, but it must still inherit the same tokens for border, rail, depth, accent and typography.

### 2.4 One Kim's accent system

All action blues must align with the header, dock, CTA and logo blue. Orange is reserved for sun, warmth and punctuation emphasis. Do not reintroduce the legacy green action palette. Kim's blue is used for:

- primary CTAs,
- active navigation,
- status success,
- proof ticks,
- selected controls,
- blue emphasis words,
- orange full stops in display typography.

### 2.5 Chrome controls

Buttons, icon buttons, toggles, tags, table statuses and dock controls should share the dark chrome and Kim's blue active-state feel. The approval launch gate icon treatment is the preferred icon model across the design system.

### 2.6 Responsive without horizontal scroll

No section should require left-right scrolling at mobile, tablet or desktop widths. Large component grids must wrap, collapse or reflow.

## 3. Source Map

| Area | File or route | Role |
|---|---|---|
| Design-system page | `src/pages/DesignSystemPage.tsx` | Live specimen board and approval surface |
| Global website styles | `src/website.css` | Brand tokens, typography, chrome, card material and responsive rules |
| App entry CSS imports | `src/main.tsx` | Imports `styles.css`, `componentShowcase.css`, `designSystemPage.css`, `website.css` |
| Website chrome | `src/components/shared/SiteChrome.tsx` | Header, navigation, mobile drawer and footer |
| Contact dock | `src/components/shared/ContactDock.tsx` | Persistent call, contact and email actions |
| Buttons | `src/components/shared/Button.tsx` | Shared button variants and interaction states |
| Form controls | `src/components/shared/FormControls.tsx` | Inputs, select, checkbox, radio, toggle, tabs, accordion and progress |
| Data display | `src/components/shared/DataDisplay.tsx` | Avatar, badges, table and status primitives |
| Website cards | `src/components/shared/WebsiteCards.tsx` | Service, feature, media, stat and report cards |
| Product content | `src/components/shared/ProductContent.tsx` | Product claims, badges, guides and brochure modules |
| Website sections | `src/components/shared/WebsiteSections.tsx` | Reusable page bands and content modules |
| Quote approval | `src/components/shared/Quote.tsx` | Quote approval panel and production proof modules |
| Brand assets | `public/brand/*` | Website imagery, logo files, proof badges and avatar assets |

## 3A. Component Reference Index

This is the codebase reference map for every design-system and website component currently used by the project. Use this section before adding or changing a component.

### 3A.1 Shared component exports

| Component | Source reference | Role |
|---|---|---|
| `Alert` | `src/components/shared/Alert.tsx:20` | success, info, warning and error messages |
| `AppShell` | `src/components/shared/AppShell.tsx:13` | design-system shell with skip link, optional chrome and main region |
| `Badge` | `src/components/shared/BadgeTag.tsx:19` | compact semantic badge |
| `Tag` | `src/components/shared/BadgeTag.tsx:33` | removable tag/chip |
| `Button` | `src/components/shared/Button.tsx:30` | shared button variants, sizes and visual states |
| `SecurityCard` | `src/components/shared/Card.tsx:13` | component-board card specimen |
| `ColorSwatch` | `src/components/shared/ColorSwatch.tsx:6` | design-token colour swatch |
| `ContactDock` | `src/components/shared/ContactDock.tsx:45` | persistent call/contact/email dock |
| `DataTable` | `src/components/shared/DataDisplay.tsx:16` | shared table display |
| `Avatar` | `src/components/shared/DataDisplay.tsx:98` | customer/person avatar with image, initials and consent states |
| `CustomerReviewCard` | `src/components/shared/DataDisplay.tsx:168` | testimonial/review card with avatar and consent metadata |
| `DatePicker` | `src/components/shared/DatePicker.tsx:11` | calendar/date picker specimen |
| `DesignTokenSwatch` | `src/components/shared/DesignSystem.tsx:5` | design-token card |
| `TokenSwatchGrid` | `src/components/shared/DesignSystem.tsx:22` | token grid wrapper |
| `ComponentPreview` | `src/components/shared/DesignSystem.tsx:40` | framed design-system specimen |
| `ResponsivePreview` | `src/components/shared/DesignSystem.tsx:53` | responsive preview specimen |
| `TextInput` | `src/components/shared/FormControls.tsx:16` | labelled text input |
| `SelectField` | `src/components/shared/FormControls.tsx:41` | labelled select control |
| `CheckboxField` | `src/components/shared/FormControls.tsx:66` | labelled checkbox |
| `RadioField` | `src/components/shared/FormControls.tsx:78` | labelled radio option |
| `DesktopHeaderHero` | `src/components/shared/HeaderFooter.tsx:41` | old component-board desktop header specimen |
| `MobileHeaderVariant` | `src/components/shared/HeaderFooter.tsx:86` | old component-board mobile header variants |
| `DesktopFooter` | `src/components/shared/HeaderFooter.tsx:109` | old component-board footer specimen |
| `MobileDockNavigation` | `src/components/shared/HeaderFooter.tsx:165` | old component-board mobile dock specimen |
| `KeyConcepts` | `src/components/shared/HeaderFooter.tsx:185` | component-board key concept tiles |
| `IconButton` | `src/components/shared/IconButton.tsx:9` | accessible icon-only button |
| `IconGrid` | `src/components/shared/IconGrid.tsx:8` | icon specimen grid |
| `KimsLogo` | `src/components/shared/Logo.tsx:12` | full, icon, wordmark and monochrome logo renderer |
| `SidebarNav` | `src/components/shared/Navigation.tsx:16` | sidebar navigation specimen |
| `Breadcrumbs` | `src/components/shared/Navigation.tsx:38` | component-board breadcrumb specimen |
| `Pagination` | `src/components/shared/Navigation.tsx:55` | pagination specimen |
| `TooltipDemo` | `src/components/shared/Overlays.tsx:4` | tooltip specimen |
| `ModalCard` | `src/components/shared/Overlays.tsx:21` | modal/dialog specimen |
| `DropdownTrigger` | `src/components/shared/Overlays.tsx:37` | dropdown trigger specimen |
| `DropdownMenu` | `src/components/shared/Overlays.tsx:59` | dropdown menu specimen |
| `Panel` | `src/components/shared/Panel.tsx:10` | component-board panel wrapper |
| `ProductRangeCard` | `src/components/shared/ProductContent.tsx:39` | product range card for security/screen/shutter/blind/proof content |
| `SpecTileGrid` | `src/components/shared/ProductContent.tsx:80` | product specification tile grid |
| `ProofBadge` | `src/components/shared/ProductContent.tsx:116` | dealer, warranty and technology proof badge |
| `FleetBrandingCard` | `src/components/shared/ProductContent.tsx:135` | vehicle/fleet proof card |
| `BrochureModule` | `src/components/shared/ProductContent.tsx:169` | brochure-content module |
| `ProductTechnologyGrid` | `src/components/shared/ProductContent.tsx:184` | product technology claim grid |
| `ProgressBar` | `src/components/shared/Progress.tsx:8` | progress indicator |
| `Stepper` | `src/components/shared/Progress.tsx:38` | stepper/progress sequence |
| `ContactForm` | `src/components/shared/Quote.tsx:17` | production quote enquiry form |
| `QuoteApprovalPanel` | `src/components/shared/Quote.tsx:58` | quote approval decision panel |
| `RoadmapTimeline` | `src/components/shared/Quote.tsx:113` | roadmap/timeline component |
| `SearchInput` | `src/components/shared/SearchControls.tsx:6` | search input with icon |
| `FilterButton` | `src/components/shared/SearchControls.tsx:21` | filter button with count |
| `FilterIconButton` | `src/components/shared/SearchControls.tsx:32` | icon-only filter action |
| `SiteHeader` | `src/components/shared/SiteChrome.tsx:15` | production desktop/mobile site header and drawer |
| `MobileNavigation` | `src/components/shared/SiteChrome.tsx:111` | mobile navigation primitive |
| `SiteFooter` | `src/components/shared/SiteChrome.tsx:148` | production footer chrome |
| `RangeTrack` | `src/components/shared/Sliders.tsx:6` | range/single slider rail |
| `ValueBubble` | `src/components/shared/Sliders.tsx:29` | slider value marker |
| `StatusPill` | `src/components/shared/Status.tsx:10` | semantic status pill |
| `StatusDot` | `src/components/shared/Status.tsx:24` | semantic status dot |
| `Tabs` | `src/components/shared/TabsAccordion.tsx:10` | tabs control |
| `Accordion` | `src/components/shared/TabsAccordion.tsx:37` | compact accordion specimen |
| `ToggleSwitch` | `src/components/shared/Toggle.tsx:9` | binary switch |
| `SegmentedControl` | `src/components/shared/Toggle.tsx:30` | segmented option control |
| `Card` | `src/components/shared/WebsiteCards.tsx:19` | generic website card |
| `ServiceCard` | `src/components/shared/WebsiteCards.tsx:39` | service/product card |
| `FeatureCard` | `src/components/shared/WebsiteCards.tsx:66` | icon + benefit card |
| `ImageCard` | `src/components/shared/WebsiteCards.tsx:82` | image-led card |
| `StatCard` | `src/components/shared/WebsiteCards.tsx:94` | proof metric card |
| `ReportInsightCard` | `src/components/shared/WebsiteCards.tsx:112` | report insight/status card |
| `PricingCard` | `src/components/shared/WebsiteCards.tsx:133` | pricing/quote scope card |
| `CaseStudyCard` | `src/components/shared/WebsiteCards.tsx:162` | case-study card |
| `Container` | `src/components/shared/WebsiteSections.tsx:7` | max-width site container |
| `SectionHeader` | `src/components/shared/WebsiteSections.tsx:17` | section heading and description |
| `PageSection` | `src/components/shared/WebsiteSections.tsx:48` | standard page section band |
| `Hero` | `src/components/shared/WebsiteSections.tsx:70` | production split hero |
| `SplitHero` | `src/components/shared/WebsiteSections.tsx:116` | hero alias/variant |
| `CTASection` | `src/components/shared/WebsiteSections.tsx:127` | dark CTA band |
| `FooterCTA` | `src/components/shared/WebsiteSections.tsx:142` | CTA alias for footer-style usage |
| `TrustBar` | `src/components/shared/WebsiteSections.tsx:150` | proof/trust strip |
| `ProcessSteps` | `src/components/shared/WebsiteSections.tsx:170` | process sequence |
| `FAQAccordion` | `src/components/shared/WebsiteSections.tsx:188` | production FAQ accordion |
| `SEOContentBlock` | `src/components/shared/WebsiteSections.tsx:201` | crawlable content card |
| `CardGrid` | `src/components/shared/WebsiteSections.tsx:210` | responsive card grid |
| `ActionGroup` | `src/components/shared/WebsiteSections.tsx:214` | CTA/action link row |

### 3A.2 Shared component data exports

| Export | Source reference | Role |
|---|---|---|
| `defaultContactDockActions` | `src/components/shared/ContactDock.tsx:21` | default dock actions |
| `legacyProductItems` | `src/components/shared/ProductContent.tsx:208` | legacy security/screen/blind product items rebuilt as current cards |
| `shutterItems` | `src/components/shared/ProductContent.tsx:263` | plantation shutter product items |
| `defaultCredentialBadges` | `src/components/shared/SiteChrome.tsx:134` | footer credential verification badges |
| `defaultContactItems` | `src/components/shared/SiteChrome.tsx:251` | footer contact rows |

### 3A.3 Production route and page-template components

These live in `src/pages/WebsitePage.tsx` and define the actual website at `/`.

| Component/template | Source reference | Route or role |
|---|---|---|
| `WebsitePage` | `src/pages/WebsitePage.tsx:373` | root route matcher and page renderer |
| `WebsiteShell` | `src/pages/WebsitePage.tsx:385` | production shell with header, breadcrumbs, footer and dock |
| `HomePage` | `src/pages/WebsitePage.tsx:451` | `/` |
| `ServicesPage` | `src/pages/WebsitePage.tsx:614` | `/services` |
| `ServicePage` | `src/pages/WebsitePage.tsx:625` | generic service route dispatcher |
| `ServiceFaqSection` | `src/pages/WebsitePage.tsx:671` | service FAQ section |
| `SecurityDoorsPage` | `src/pages/WebsitePage.tsx:681` | `/services/security-doors` |
| `SecurityScreensPage` | `src/pages/WebsitePage.tsx:788` | `/services/security-screens` |
| `PlantationShuttersPage` | `src/pages/WebsitePage.tsx:846` | `/services/plantation-shutters` |
| `OutdoorBlindsPage` | `src/pages/WebsitePage.tsx:902` | `/services/outdoor-blinds` |
| `SuburbsPage` | `src/pages/WebsitePage.tsx:965` | `/suburbs` |
| `SuburbPage` | `src/pages/WebsitePage.tsx:976` | `/suburbs/:suburb` |
| `SuburbLivingSection` | `src/pages/WebsitePage.tsx:1006` | rich suburb intro section |
| `SuburbLocalDetail` | `src/pages/WebsitePage.tsx:1038` | rich suburb work/map/FAQ/CTA section |
| `ServiceSuburbPage` | `src/pages/WebsitePage.tsx:1081` | `/services/:service/:suburb` |
| `BlogPage` | `src/pages/WebsitePage.tsx:1139` | `/blog` |
| `BlogPostPage` | `src/pages/WebsitePage.tsx:1158` | `/blog/:post` |
| `PricingPage` | `src/pages/WebsitePage.tsx:1250` | `/pricing` |
| `FaqPage` | `src/pages/WebsitePage.tsx:1269` | `/faq` |
| `ComparisonPage` | `src/pages/WebsitePage.tsx:1301` | `/comparison/prowler-proof-vs-crimsafe` |
| `AboutPage` | `src/pages/WebsitePage.tsx:1448` | `/about` |
| `WarrantyPage` | `src/pages/WebsitePage.tsx:1505` | `/warranty` |
| `TestimonialsPage` | `src/pages/WebsitePage.tsx:1563` | `/testimonials` |
| `PrivacyPage` | `src/pages/WebsitePage.tsx:1597` | `/privacy-policy` |
| `TermsPage` | `src/pages/WebsitePage.tsx:1640` | `/terms-of-service` |
| `NotFoundPage` | `src/pages/WebsitePage.tsx:1683` | fallback route |
| `ServiceGrid` | `src/pages/WebsitePage.tsx:1691` | service card grid |
| `ServiceHero` | `src/pages/WebsitePage.tsx:1708` | reusable service hero |
| `LocalHero` | `src/pages/WebsitePage.tsx:1725` | local/content page hero with trust bar |
| `LocalProof` | `src/pages/WebsitePage.tsx:1745` | suburb proof cards |
| `SuburbPillarLinks` | `src/pages/WebsitePage.tsx:1757` | suburb-to-service/pillar links |
| `CrossServiceLinks` | `src/pages/WebsitePage.tsx:1783` | related services section |
| `RelatedBlog` | `src/pages/WebsitePage.tsx:1806` | related blog guide cards |
| `ServiceAreaDisclosure` | `src/pages/WebsitePage.tsx:1823` | collapsible service-area links |
| `SuburbLinkGrid` | `src/pages/WebsitePage.tsx:1838` | suburb link grid |
| `SuburbServiceLinkGrid` | `src/pages/WebsitePage.tsx:1851` | service-by-suburb link grid |
| `Breadcrumbs` | `src/pages/WebsitePage.tsx:2298` | production visible breadcrumbs |
| `ContactPage` | `src/pages/WebsitePage.tsx:2317` | `/contact` |

### 3A.4 Design-system and component-board-only components

| Component/template | Source reference | Role |
|---|---|---|
| `DesignSystemPage` | `src/pages/DesignSystemPage.tsx:717` | `/design-system` source-of-truth page |
| `ReviewAvatarStudio` | `src/pages/DesignSystemPage.tsx:470` | design-system avatar/customer profile editor specimen |
| `ComponentBoards` | `src/App.tsx:139` | `/components` component-board route |
| `HeaderFooterBoard` | `src/App.tsx:395` | header/footer board inside `/components` |
| `AdditionalComponentsBoard` | `src/App.tsx:429` | additional component specimens inside `/components` |
| `LogoVariant` | `src/App.tsx:579` | logo specimen wrapper for `/components` |
| `StateSample` | `src/App.tsx:588` | button state specimen wrapper for `/components` |

### 3A.5 Content and route data references

| Data/source | Source reference | Role |
|---|---|---|
| `business` | `src/data/seoSite.ts:63` | canonical NAP, licence, warranty, base URL and owner details |
| `services` | `src/data/seoSite.ts:92` | five service records and service metadata |
| `blogPosts` | `src/data/seoSite.ts:195` | guide/article content and related services |
| `faqItems` | `src/data/seoSite.ts:5209` | FAQ page content |
| `comparisonRows` | `src/data/seoSite.ts:384` | interior furnishing versus exterior/screen product comparison rows |
| `comparisonFaqItems` | `src/data/seoSite.ts:5262` | comparison FAQ content |
| `suburbContent` | `src/data/seoSite.ts:5360` | rich suburb content blocks |
| `serviceFaq` | `src/data/seoSite.ts:5968` | service-specific FAQs |
| `suburbRadiusStats` | `src/data/suburbs80km.ts:14` | suburb-radius summary stats |
| `suburbs80km` | `src/data/suburbs80km.ts:22` | suburb and service-suburb route data |

### 3A.6 Style and asset ownership references

| Area | Source reference | Role |
|---|---|---|
| Global tokens and base component-board styles | `src/styles.css` | root design tokens and old component-board primitives |
| Component-board styles | `src/componentShowcase.css` | additional `/components` board styles |
| Design-system route styles | `src/designSystemPage.css` | `/design-system` route layout/specimen styles |
| Production website styles | `src/website.css` | live website chrome, typography, cards, forms, responsive rules |
| Public website rollout card material | `src/website.css:2103` | current design-system material promoted onto public pages |
| CSS import order | `src/main.tsx:4` | imports `styles.css`, `componentShowcase.css`, `designSystemPage.css`, `website.css` |
| Brand assets | `public/brand/*` | logo, hero, product, dealer and avatar assets |
| Static SEO generation | `scripts/generate-static-pages.mjs` | crawlable static HTML route generation |
| Sitemap/robots/LLMS generation | `scripts/generate-seo-files.mjs` | SEO files and route inventory |

### 3A.7 Barrel exports

Only these shared modules are currently exported through the public component barrel:

```ts
// src/components/index.ts
export * from "./shared/AppShell";
export * from "./shared/DesignSystem";
export * from "./shared/Quote";
export * from "./shared/ProductContent";
export * from "./shared/SiteChrome";
export * from "./shared/types";
export * from "./shared/WebsiteCards";
export * from "./shared/WebsiteSections";
```

If a new shared component should be consumed outside its direct file import path, add it to `src/components/index.ts` deliberately. Do not barrel-export board-only helpers.

## 4. Brand Position

### 4.1 Brand promise

Security, comfort and outdoor living under one local installer.

### 4.2 Brand tone

Use direct, grounded language. The brand should feel expert without sounding corporate. Copy should explain the practical benefit of each product or component:

- measured quote,
- local install,
- approved product ranges,
- security proof,
- clear next steps,
- finished home appearance.

### 4.3 Visual cues

Use the following signals repeatedly:

- dark security chrome,
- Kim's blue approval/action glow with orange warmth accents,
- white and pearl surfaces for clarity,
- real home/product photography,
- serif display type for confidence,
- mono proof labels for technical credibility.

## 5. Core Tokens

Tokens are defined primarily in `src/website.css`. Any future component should consume these tokens rather than hard-code equivalent colours or shadows.

### 5.1 Kim's blue action system

| Token | Value | Usage |
|---|---:|---|
| `--action` | `#0787f5` | primary Kim's blue, selected states, proof marks |
| `--action-light` | `#52aefa` | highlight edge and button light source |
| `--action-mid` | `#0458bd` | mid chrome gradient stop |
| `--action-strong` | `#074ea5` | active button and navigation depth |
| `--action-dark` | `#063e84` | button lower depth |
| `--action-deep` | `#062a58` | deepest blue shadows |
| `--action-on-dark` | `#d9efff` | blue-tinted text on dark chrome |
| `--action-rgb` | `7, 135, 245` | rgba composition and card variants |

### 5.2 Chrome and metal

| Token | Value | Usage |
|---|---:|---|
| `--metal-graphite` | `#0d0f13` | dark chrome base |
| `--metal-chrome` | `#f7fbff` | bright bevel and highlight |
| `--metal-chrome-dim` | `#aebdcc` | muted metal bevel |
| `--theme-chrome-ring` | shared CSS token | dark bevel ring |
| `--theme-chrome-ring-light` | shared CSS token | light bevel ring |
| `--theme-dark-gradient-raised` | shared CSS token | dark raised panels and chrome |
| `--theme-surface-raised-strong` | shared CSS token | raised light surface material |

### 5.3 Status colours

Status colours may be stronger than before, but they must remain inside the system and not look faded.

| Token | Value | Usage |
|---|---:|---|
| `--ds-success` | Kim's blue | approved, ready, verified |
| `--ds-info` | `#0787f5` | informational state |
| `--ds-warning` | `#c27a0a` | review, optional, attention |
| `--ds-error` | `#b92f28` | blocked, error, rejected |

### 5.4 Surface hierarchy

| Surface | Intent |
|---|---|
| Page background | quiet white or pearl, never flat grey |
| Standard system card | light material, chrome rail, subtle accent, real depth |
| Dark chrome panel | graphite or black base with Kim's blue active edge |
| Proof panel | higher-contrast status and evidence surface |
| Media card | image-led card with shared rail, border and body text system |
| Report card | table or insight surface with chrome action/status treatment |

## 6. Typography System

### 6.1 Font pairing

| Role | Font | Purpose |
|---|---|---|
| Display | `Source Serif 4` | architectural trust, premium section hierarchy, service titles |
| Body and UI | `Sohne` / `Söhne` | product copy, navigation, forms, quote controls |
| Hosted fallback | `Manrope` | deploy-safe sans-serif until licensed Söhne WOFF2 assets are supplied |
| Metadata | `IBM Plex Mono` | proof labels, technical specs, file paths, QA states |

Recommended production pair:

- `Source Serif 4 Display + Sohne Text/UI`

Deployment fallback pair:

- `Source Serif 4 + Manrope`

Proof and specification face:

- `IBM Plex Mono`

### 6.2 Font stacks

```css
--font-display: "Source Serif 4", Georgia, "Times New Roman", serif;
--font-body: "Sohne", "Söhne", "Manrope", Arial, sans-serif;
--font-ui: var(--font-body);
--font-meta: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
```

### 6.3 Type scale

| Token | Role | Size | Line height | Weight | Use |
|---|---|---:|---:|---|---|
| `--type-hero` | Hero display | desktop `72px`, mobile `42px` | `0.94` | Source Serif 4 `700` | home hero and major service promise only |
| `--type-page-title` | Page H1 | desktop `56px`, mobile `38px` | `0.98` | Source Serif 4 `700` | local page and article titles |
| `--type-section-title` | Section H2 | desktop `44px`, mobile `30px` | `1.02` | Source Serif 4 `700` | major design-system and website sections |
| `--type-card-title` | Card H3 | `22px` | `1.08` | Source Serif 4 `700` | service cards, contract cards and approval panels |
| `--type-body-large` | Body large | `18px` | `1.58` | body `400` | important explanatory copy |
| `--type-body` | Body | `15px` | `1.62` | body `400` | standard paragraphs and descriptions |
| `--type-ui` | UI label | `13px` | `1.2` | UI `700` | buttons, nav, labels and controls |
| `--type-meta` | Metadata | `10px` | `1.25` | mono `600` | proof labels, table labels, tokens and paths |

### 6.4 Letter spacing

Letter spacing must be deliberate:

- Display headings: `0`
- Body copy: `0`
- Buttons and UI labels: tight but readable, never negative
- Meta labels: `--tracking-meta: 0.085em`
- Eyebrows: uppercase mono with controlled tracking

Do not scale font size directly with viewport width. Use breakpoints and tokenised size changes.

### 6.5 Kim's punctuation and emphasis

Display punctuation may use Kim's orange when it strengthens hierarchy. Blue emphasis words are reserved for short product or proof phrases.

Approved emphasis:

- orange full stop at the end of major headings,
- Kim's blue single word or short phrase inside a heading,
- Kim's blue proof word inside a label.

Do not turn long paragraphs blue or orange. Do not use the legacy green action palette.

### 6.6 Typography motion

Typography animation should feel like a controlled material reveal, not a novelty effect.

Approved patterns:

- subtle display reveal,
- proof-label lock-in,
- orange punctuation pulse,
- card title lift on hover,
- dock and nav active-state glow.

Reduced motion:

- respect `prefers-reduced-motion`,
- remove looping movement,
- preserve focus, hover and selected states without animation dependency.

## 7. Logo System

### 7.1 Assets

| Asset | File | Use |
|---|---|---|
| Full logo | `/brand/kims/kims-blinds-logo-2026.svg` | header, footer, brand lockups and browser favicon source |
| Favicon PNG | `/favicon-512.png` | large browser-tab and app icon fallback |
| Favicon SVG | `/favicon.svg` | scalable browser-tab icon using the supplied full Kim's logo |

### 7.2 Logo rules

- The full logo is the primary brand mark.
- Keep clear space around the logo, especially inside chrome header surfaces.
- Do not recolour the supplied full Kim's logo.
- Use the icon only where space is constrained or where a compact lockup is needed.

## 8. Image System

Images are part of the design system, not loose page decoration. They must be available as reusable brand assets.

### 8.1 Approved website images

| Asset | File | Use |
|---|---|---|
| Roller blinds hero | `/brand/kims/generated/homepage-roller-blind-hero.webp` | homepage, blinds service card and social preview |
| Vision blinds | `/brand/kims/generated/vision-blinds-living-room.webp` | vision/zebra blinds service card |
| Security doors | `/brand/kims/generated/security-doors-windows-hero.webp` | security door product card and service route |
| Security mesh | `/brand/kims/generated/security-mesh-detail.webp` | security screen detail and reveal states |
| Fly screens | `/brand/kims/generated/fly-screen-airflow-patio.webp` | fly screen service content and SEO articles |
| Plantation shutters | `/brand/kims/generated/plantation-shutters-light-control.webp` | shutter cards and guide content |
| Awnings | `/brand/kims/generated/folding-arm-awning-patio.webp` | awning service cards and exterior examples |
| Curtains | `/brand/kims/generated/curtains-soft-track.webp` | curtains service card and soft-furnishing modules |
| Panel glides | `/brand/kims/generated/panel-glides-large-door.webp` | panel-glide product card |
| Local showroom | `/brand/kims/generated/local-hero-product-showroom.webp` | local pages, information pages and showroom proof modules |
| Quality assurance badge | `/brand/kims/quality-assurance-badge.svg` | quality and service proof modules |

### 8.2 Review avatar assets

| Asset | File | Use |
|---|---|---|
| Customer portrait | `/brand/avatar-man.jpg` | testimonial or owner profile image |
| Homeowner portrait | `/brand/avatar-woman.jpg` | testimonial or homeowner profile image |
| Secondary portrait | `/brand/avatar-person-man.jpg` | secondary testimonial image |
| Secondary portrait | `/brand/avatar-person-woman.jpg` | secondary testimonial image |

Avatar assets are placeholders or customer-provided raw inputs. Public testimonial use requires customer approval and the review avatar privacy gate.

### 8.3 Image rules

- Use real product, house or customer images where inspection matters.
- Do not hide products behind dark blur or generic atmospheric crops.
- Product cards should show the product clearly.
- Portraits must use controlled crop, focal point and size tools before publication.
- Use WebP where generated and supported.

## 9. Navigation System

### 9.1 Desktop header

Component: `SiteHeader`

The header uses dark chrome, the full Kim's logo, primary navigation, a call icon and a Kim's blue quote action. It is the visual anchor for the whole site.

Required states:

- default,
- active route,
- hover,
- focus-visible,
- compact/sticky,
- mobile drawer trigger.

The header call icon is separate and should not be overwritten by the general design-system icon treatment.

### 9.2 Mobile header and drawer

Mobile navigation must be fully functional.

Required behaviour:

- drawer opens from the mobile trigger,
- drawer closes with close button,
- drawer closes with Escape,
- focus remains visible,
- route links are tappable,
- no horizontal scroll,
- call, contact and quote actions remain accessible.

### 9.3 Bottom contact dock

Component: `ContactDock`

The production website dock gives returning visitors persistent call, contact and email actions after scroll. It replaces older generic mobile dock patterns.

Required actions:

- Call now,
- Contact us,
- Email.

Design-system specimen:

- forces visibility for review,
- wraps safely inside the board,
- must not be cropped,
- must not create horizontal scrolling.

## 10. Button System

Component: `Button`

Buttons are high-signal interaction surfaces. They must share chrome material, Kim's blue lighting and accessible state treatment.

### 10.1 Variants

| Variant | Usage |
|---|---|
| Primary | quote, submit, approve, main action |
| Secondary | navigation-adjacent action, contact action |
| Tertiary | quiet inline action |
| Outline | neutral action requiring visible affordance |
| Danger | destructive or rejected state |
| Icon button | compact action with accessible label |

### 10.2 Button rules

- Use icon buttons where a familiar symbol is clearer than a text capsule.
- Buttons must have visible focus rings.
- Disabled state must remain legible and visibly inactive.
- Loading state must preserve button dimensions.
- Button text must never clip on mobile.
- Primary buttons use Kim's blue, dark lower depth and chrome highlights.

## 11. Icon, Tag and Badge System

### 11.1 Icon treatment

Preferred icon style:

- dark chrome circular or compact surface,
- Kim's blue active state,
- inner highlight and bevel,
- centered icon,
- consistent sizing,
- accessible label.

This style should be used across design-system icons, switches, proof controls, approval steps, table status actions and tags.

Do not change the call symbol in the header. It has a separate purpose and treatment.

### 11.2 Tags and badges

Tags must follow the same material system as buttons and icons:

- dark chrome for default/high-contrast tags,
- Kim's blue for approved or selected state,
- warning colour for review state,
- mono label where it represents proof/spec metadata.

Examples:

- Approved,
- Review,
- Security Doors,
- Installation,
- Shared component,
- Verified review.

## 12. Card System

Every card must consume shared card material tokens from `src/website.css`.

### 12.1 Core card tokens

| Token | Purpose |
|---|---|
| `--ds-card-accent-rgb` | card accent and rail colour |
| `--ds-card-border` | material border |
| `--ds-card-background` | light card material background |
| `--ds-card-background-clip` | clipped material layer |
| `--ds-card-spec-background` | specification/proof variant |
| `--ds-card-rail` | top or bottom accent rail |
| `--ds-card-shadow` | depth system |

### 12.2 Card requirements

Each card must include:

- shared background material,
- chrome border or rail,
- consistent radius,
- consistent shadow,
- typography from the scale,
- hover state where clickable,
- focus state where interactive,
- responsive content wrapping.

### 12.3 Product card variants

| Variant | Accent | Use |
|---|---|---|
| Security/default | Kim's action blue | security doors, quote and proof modules |
| Screen/info | blue info accent | fly screens, screen comparison and technical guides |
| Shutter | muted architectural graphite-blue | plantation shutter content |
| Blind | warm blind/exterior accent | outdoor blind content |
| Proof | graphite/proof accent | certification, dealer and mesh evidence |

### 12.4 Approved card types

| Type | Use |
|---|---|
| Service card | service family entry point |
| Feature card | benefit, process or claim |
| Media card | image-led product or brand asset |
| Stat card | compact proof metric |
| Report card | table, QA or implementation evidence |
| Quote card | approval and pricing decision surface |
| Product module | product range, supplier badge or brochure module |

## 13. Product Library

The product library rebuilds useful older content as current Shire components. Old page styling is intentionally not reused.

Product library categories:

- vehicle proof,
- supplier badges,
- security mesh ranges,
- outdoor blind guides,
- plantation shutter configurations,
- technology claims,
- brochure modules,
- product image cards.

Rules:

- Product cards must use the shared card system.
- Product content must connect visually to the rest of the design system.
- Product imagery should be clear and inspectable.
- Claims must be specific and practical.
- Supplier proof should sit inside proof card material, not generic badges.

## 14. Review Avatar System

Component source: `DataDisplay.tsx`

The testimonial system requires a real avatar tool, not static portrait cards.

### 14.1 Required avatar editor features

- Upload local customer photo,
- choose existing approved image,
- crop X,
- crop Y,
- zoom,
- size control,
- circle and squircle display modes,
- initials fallback,
- verification badge,
- pending-review state,
- privacy/approval gate,
- review copy fields.

### 14.2 Avatar states

| State | Behaviour |
|---|---|
| Image | displays approved customer image |
| Initials | fallback when no image is approved |
| Verified | Kim's blue verification mark |
| Pending | review or approval state |
| Error | invalid file, blocked image or missing consent |

### 14.3 Consent rule

Only publish a customer portrait after explicit customer approval. Until approval, use initials or an internal placeholder.

## 15. Forms and Inputs

Component source: `FormControls.tsx`

Forms must feel like part of the chrome system, not browser defaults.

### 15.1 Required controls

- text input,
- textarea,
- select,
- checkbox,
- radio,
- toggle switch,
- segmented control,
- tabs,
- accordion,
- progress,
- search/input with icon.

### 15.2 Form styling rules

- Inputs use raised light material with chrome edge.
- Active, selected and checked states use Kim's blue.
- Toggles use the same icon/chrome system as other controls.
- Labels use UI or meta typography.
- Error and helper states must be visible and accessible.
- Form controls must not clip text at mobile widths.
- Forms must contrast well against white page backgrounds.

### 15.3 Quote request form

The quote form should support:

- name,
- phone,
- email,
- product interest,
- suburb,
- message,
- free measure and quote consent,
- submit action.

Before launch, form submission needs CRM or email integration.

## 16. Tables, Alerts, Status and Insight Panels

These surfaces must feel connected to the dark chrome and Kim's blue/orange system while keeping their semantic status colours.

### 16.1 Tables

Table requirements:

- clear header hierarchy,
- readable row spacing,
- status badges using shared badge material,
- no faded borders,
- responsive stacking or wrapping on mobile,
- no horizontal scroll.

Example rows:

- Front security door - Approved - Quote line 01
- Sliding screen - Review - Quote line 02
- Garage access screen - Optional - Quote line 03

### 16.2 Alerts

Alerts should use stronger, clearer panels:

- success alert: Kim's blue proof edge,
- info alert: blue proof edge,
- warning alert: warm review edge,
- error alert: red rejection edge.

Alert text must remain high-contrast and not rely on colour alone.

### 16.3 Insight panels

Insight panels should use:

- card material,
- mono proof labels,
- strong status edge,
- compact body copy,
- direct next action where needed.

## 17. Quote Approval Panel

Component source: `Quote.tsx`

The quote approval panel is a production-facing module. It must support:

- quote summary,
- line item review,
- approval state,
- customer decision,
- notes,
- production handoff,
- accessibility and keyboard operation.

It should look like a first-class product surface, not a generic form card.

## 18. Website Section System

Component source: `WebsiteSections.tsx`

Reusable website sections should include:

- hero,
- trust bar,
- product/service grid,
- proof section,
- process section,
- CTA band,
- quote module,
- image band,
- FAQ or accordion,
- footer.

Every section should use:

- tokenised spacing,
- design-system typography,
- shared card material,
- approved imagery,
- responsive grid behaviour,
- no one-off colours.

## 19. Section Inventory

The live design-system route should continue to expose these sections:

| Section id | Purpose |
|---|---|
| `components` | standards audit and operating model |
| `section-alignment` | visual alignment audit |
| `brand` | logo, material and trust language |
| `brand-images` | website image assets and usage |
| `review-avatar` | customer profile pictures and review capture |
| `tokens` | header-matched brand and material tokens |
| `typography` | premium type system |
| `font-animation` | typography motion specimens |
| `foundation-contract` | typography, token and material rules |
| `buttons` | final button, icon, badge and state styles |
| `navigation` | final website chrome, mobile drawer and dock |
| `component-contracts` | source, states, accessibility and adoption |
| `cards` | service, feature, media, stat and report cards |
| `card-system` | shared card backgrounds, hierarchy and variants |
| `product-library` | product content rebuilt as current components |
| `website-sections` | production page building blocks |
| `forms` | quote request form and input states |
| `report-modules` | tables, alerts, status and insight panels |
| `accessibility-governance` | WCAG and contribution rules |
| `website-adoption` | staged website promotion |
| `roadmap` | approval runway for production build |
| `quote-approval` | quote approval panel |
| `build-notes` | responsive, accessible and deploy-ready notes |

## 20. Responsive Rules

The design system must be verified at:

- `320px`,
- `390px`,
- `768px`,
- `1280px`.

Required outcomes:

- no horizontal page scroll,
- dock actions do not crop,
- cards wrap or stack,
- tables do not require left-right scrolling,
- nav specimen wraps instead of overflowing,
- hero and section headings fit,
- buttons preserve touch targets,
- form fields remain usable.

Reference breakpoints in the CSS include:

- `1180px`,
- `980px`,
- `860px`,
- `760px`,
- `640px`,
- `540px`,
- `360px`.

## 21. Accessibility

Target: WCAG 2.2 AA.

Required:

- semantic navigation,
- accessible names for icon buttons,
- visible keyboard focus,
- correct heading order,
- no colour-only state communication,
- sufficient contrast on chrome, Kim's blue and orange surfaces,
- reduced-motion support,
- form labels and errors,
- Escape handling for mobile drawer,
- testimonial avatar consent handling,
- alt text for product imagery.

## 22. Motion Rules

Motion should support clarity and perceived quality.

Allowed:

- hover lift on cards,
- active glow on buttons and dock controls,
- subtle typography reveal,
- progress and approval state transitions,
- drawer open/close transition.

Avoid:

- constant decorative movement,
- motion that hides content,
- motion that changes layout unexpectedly,
- animation required to understand state.

## 23. Governance

### 23.1 Component promotion rule

A component can move from design-system specimen to main website only after:

1. It uses shared tokens.
2. It is responsive at required widths.
3. It has keyboard and focus treatment.
4. It does not introduce horizontal scroll.
5. It has confirmed states.
6. It has a source file and ownership path.

### 23.2 Change rules

- Change tokens first when the issue is systemic.
- Change a shared component when the behaviour or structure is reused.
- Change page-level CSS only when a section has a unique layout need.
- Do not duplicate the same card or button styling in multiple places.
- Do not change the main website until the design-system component is confirmed.

### 23.3 Copy rules

- Keep copy direct and practical.
- Use local service language.
- Avoid generic SaaS or startup wording.
- Use proof labels for technical details.
- Keep product claims grounded.

## 24. Build and Deployment

### 24.1 Build commands

```bash
npm run build
```

The build script runs:

```bash
npm run generate:seo
npm run generate:webp
node ./node_modules/typescript/bin/tsc
node ./node_modules/vite/bin/vite.js build
npm run generate:static
```

### 24.2 Local dev

```bash
npm run dev
```

Expected local app:

```text
http://127.0.0.1:5173/
```

### 24.3 Deployment target

The current demo target is Vercel static output:

```text
dist
```

Stable demo:

```text
pending Kim's Blinds deploy URL
```

## 25. QA Checklist

Before marking the design system ready:

- run TypeScript/build verification,
- inspect `/design-system` at desktop and mobile widths,
- confirm no horizontal scroll,
- confirm contact dock preview is not cropped,
- confirm mobile navigation works,
- confirm cards all use shared material,
- confirm typography sections use the full type system,
- confirm icons, tags and controls share the dark chrome treatment,
- confirm table, alert and insight panels are not faded,
- confirm avatar editor states work visually,
- confirm images load,
- confirm header call icon is unchanged.

## 26. Launch Roadmap

### Phase 1: Component system approval

Confirm:

- logo usage,
- visual tokens,
- typography system,
- card material system,
- navigation and dock,
- quote modules,
- production page components.

### Phase 2: Production website build

Promote approved components into:

- home page,
- service pages,
- contact flow,
- quote request route,
- SEO content sections.

### Phase 3: Launch checks

Run:

- Vercel build,
- responsive QA,
- accessibility pass,
- content review,
- deployment notes.

## 27. Open Items

These are still required before final production launch:

- Add licensed Söhne WOFF2 webfont assets or confirm deploy-safe fallback.
- Connect quote form submission to CRM or email.
- Finalise customer review consent flow for avatar portraits.
- Complete final accessibility review.
- Confirm all main website sections have adopted only approved design-system components.

## 28. Non-negotiables

- No generic white cards.
- No legacy green action values.
- No cropped dock or mobile controls.
- No horizontal scroll sections.
- No typography outside the approved font system.
- No one-off website styling before design-system confirmation.
- No replacement of the header call icon treatment.
- No faded tables, alerts or status panels.
