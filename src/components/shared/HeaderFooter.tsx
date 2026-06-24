import {
  ChevronDown,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  MoreHorizontal,
  Phone,
  Search,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { KimsLogo } from "./Logo";

const navItems = ["Blinds", "Awnings", "Security", "About Us", "Resources"];

const footerColumns = [
  {
    title: "Products",
    links: ["Blinds", "Awnings", "Plantation Shutters", "Curtains", "Security Doors"],
  },
  {
    title: "Services",
    links: ["Measure & Quote", "Custom Fit", "Installation", "Repairs & Maintenance"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Projects", "Reviews", "Careers", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Product Guide", "Care Tips", "FAQs", "Quality Assurance"],
  },
];

export function DesktopHeaderHero() {
  return (
    <section className="chrome-hero-shell">
      <header className="desktop-header">
        <div className="desktop-header__brand">
          <KimsLogo variant="full" size="sample" />
        </div>
        <nav className="desktop-header__nav" aria-label="Desktop navigation">
          {navItems.map((item) => (
            <a key={item} href="#">
              {item}
              {["Products", "Services", "Resources"].includes(item) ? (
                <ChevronDown size={16} aria-hidden="true" />
              ) : null}
            </a>
          ))}
        </nav>
        <Button className="desktop-header__quote">Request a Quote</Button>
        <IconButton className="desktop-header__search" icon={<Search size={30} />} label="Search" />
      </header>

      <div className="header-hero">
        <div className="header-hero__copy">
          <h2>
            Shape Light
            <br />
            Beautifully<span className="heading-emphasis-punctuation">.</span>
          </h2>
          <p>Custom blinds, awnings, shutters, curtains, fly screens and security doors for coastal homes.</p>
          <div className="header-hero__actions">
            <Button>
              View Products
              <ChevronRight size={19} aria-hidden="true" />
            </Button>
            <Button variant="secondaryOutline">
              Talk to an Expert
              <ChevronRight size={19} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MobileHeaderVariant({ mode }: { mode: "icons" | "quote" | "wordmark" }) {
  return (
    <header className="mobile-header-bar">
      <IconButton className="light-icon-button" icon={<Menu size={26} />} label="Menu" />
      {mode === "wordmark" ? (
        <KimsLogo variant="full" size="sample" />
      ) : (
        <KimsLogo variant="icon" size="sample" />
      )}
      <div className="mobile-header-bar__actions">
        {mode === "quote" ? (
          <Button>Quote</Button>
        ) : (
          <>
            <IconButton className="light-icon-button" icon={<Phone size={24} />} label="Call" />
            <IconButton className="light-icon-button" icon={<UserRound size={24} />} label="Account" />
          </>
        )}
      </div>
    </header>
  );
}

export function DesktopFooter() {
  return (
    <footer className="desktop-footer">
      <div className="desktop-footer__main">
        <div className="desktop-footer__brand">
          <KimsLogo variant="full" size="sample" />
          <p>
            Delivering custom blinds, awnings, shutters, curtains, fly screens and security doors from Oak Flats
            across the Illawarra and selected Sutherland Shire suburbs.
          </p>
          <div className="desktop-footer__socials">
            <IconButton className="light-icon-button" icon={<Facebook size={18} />} label="Facebook" />
            <IconButton className="light-icon-button" icon={<Instagram size={18} />} label="Instagram" />
            <IconButton className="light-icon-button" icon={<Linkedin size={18} />} label="LinkedIn" />
          </div>
        </div>

        <div className="desktop-footer__columns">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <address className="desktop-footer__contact">
          <h3>Contact Us</h3>
          <a href="tel:0242561297">
            <Phone size={16} /> 02 4256 1297
          </a>
          <span>
            <MapPin size={16} /> Unit 5, 147 Industrial Rd
            <br />
            Oak Flats NSW 2529
          </span>
        </address>
      </div>

      <div className="desktop-footer__bottom">
        <span>© 2026 Kim's Blinds. All rights reserved.</span>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <span>Free measure and quote</span>
      </div>
    </footer>
  );
}

export function MobileDockNavigation() {
  return (
    <nav className="mobile-dock" aria-label="Mobile dock navigation">
      <span className="mobile-dock__handle" />
      <a className="is-active" href="#">
        <MapPin size={31} />
        <span>Call Map</span>
      </a>
      <a href="#">
        <Phone size={29} />
        <span>Contact</span>
      </a>
      <a href="#">
        <MoreHorizontal size={29} />
        <span>More</span>
      </a>
    </nav>
  );
}

export function KeyConcepts() {
  return (
    <section className="key-concepts">
      <div className="key-concepts__intro">
        <h2>Key Concepts</h2>
        <p>
          All header, footer and mobile navigation components use the same UI language: soft-elevated surfaces, chrome
          outlines, subtle shadows and Kim's blue and orange accents for actions and emphasis.
        </p>
      </div>
      <ConceptTile icon={<ShieldCheck size={42} />} title="Consistent Material">
        Same soft-elevated surface with chrome edge and subtle shadow.
      </ConceptTile>
      <ConceptTile icon={<KimsLogo variant="icon" size="small" />} title="Brand Accent">
        Blue and orange are used for primary actions, active states and key highlights.
      </ConceptTile>
      <ConceptTile icon={<Search size={43} />} title="Clear Hierarchy">
        Primary actions stand out, while navigation remains clean and balanced.
      </ConceptTile>
      <ConceptTile icon={<Menu size={43} />} title="Accessible & Usable">
        Large touch targets, clear icons and high contrast for better usability.
      </ConceptTile>
    </section>
  );
}

function ConceptTile({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="concept-tile">
      <div className="concept-tile__icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}


