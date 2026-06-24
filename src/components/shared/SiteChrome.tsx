import { useEffect, useId, useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown, Facebook, Instagram, Mail, MapPin, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { classNames } from "../../lib/classNames";
import { KimsLogo } from "./Logo";
import type { ActionItem, NavItem } from "./types";

type SiteHeaderProps = {
  nav: NavItem[];
  activeHref?: string;
  primaryAction?: ActionItem;
  utilityActions?: ActionItem[];
  compact?: boolean;
};

export function SiteHeader({ nav, activeHref, primaryAction, utilityActions = [], compact = false }: SiteHeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavId = useId();

  useEffect(() => {
    if (!isMobileNavOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileNavOpen]);

  const closeMobileNav = () => setIsMobileNavOpen(false);
  const withClose = (action: ActionItem): ActionItem => ({
    ...action,
    onClick: () => {
      action.onClick?.();
      closeMobileNav();
    },
  });

  return (
    <header className={classNames("site-header", compact && "site-header--compact", isMobileNavOpen && "is-mobile-nav-open")}>
      <a className="site-header__brand" href="/" aria-label="Kim's Blinds home">
        <KimsLogo variant="full" size="sample" priority />
      </a>
      <nav className="site-header__nav" aria-label="Primary navigation">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={classNames(activeHref === item.href && "is-active")}
            aria-current={activeHref === item.href ? "page" : undefined}
          >
            {item.label}
            {item.children?.length ? <ChevronDown size={15} aria-hidden="true" /> : null}
          </a>
        ))}
      </nav>
      <div className="site-header__actions">
        {utilityActions.map((action) => (
          <ActionAnchor key={action.label} action={action} iconOnly />
        ))}
        {primaryAction ? <ActionAnchor action={primaryAction} /> : null}
      </div>
      <button
        className="site-header__menu"
        type="button"
        aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
        aria-controls={mobileNavId}
        aria-expanded={isMobileNavOpen}
        onClick={() => setIsMobileNavOpen((open) => !open)}
      >
        {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div id={mobileNavId} className="site-header__mobile-panel" hidden={!isMobileNavOpen}>
        <nav className="site-header__mobile-nav" aria-label="Mobile navigation">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={classNames(activeHref === item.href && "is-active")}
              aria-current={activeHref === item.href ? "page" : undefined}
              onClick={closeMobileNav}
            >
              <span>{item.label}</span>
              {item.children?.length ? <ChevronDown size={15} aria-hidden="true" /> : null}
            </a>
          ))}
        </nav>
        {primaryAction || utilityActions.length ? (
          <div className="site-header__mobile-actions">
            {primaryAction ? <ActionAnchor action={withClose(primaryAction)} /> : null}
            {utilityActions.map((action) => (
              <ActionAnchor key={action.label} action={withClose(action)} />
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}

type MobileNavigationProps = {
  items: Array<NavItem & { icon: ReactNode; badge?: string | number }>;
  activeHref?: string;
};

export function MobileNavigation({ items, activeHref }: MobileNavigationProps) {
  return (
    <nav className="site-mobile-nav" aria-label="Mobile navigation">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={classNames(activeHref === item.href && "is-active")}
          aria-current={activeHref === item.href ? "page" : undefined}
        >
          <span aria-hidden="true">{item.icon}</span>
          <span>{item.label}</span>
          {item.badge ? <strong>{item.badge}</strong> : null}
        </a>
      ))}
    </nav>
  );
}

type CredentialBadge = { label: string; href: string };
type SocialLink = { label: string; href: string; platform: "facebook" | "instagram" };

// Public trust markers from the Kim's Blinds website.
export const defaultCredentialBadges: CredentialBadge[] = [
  { label: "Free measure and quote", href: "https://kimsblinds.com.au/" },
  { label: "Locally made products", href: "https://kimsblinds.com.au/" },
  { label: "Family owned and operated", href: "https://kimsblinds.com.au/" },
];

export const defaultSocialLinks: SocialLink[] = [
  { label: "Kim's Blinds on Facebook", href: "https://www.facebook.com/p/Kims-Blinds-61576949375188/", platform: "facebook" },
  { label: "Kim's Blinds on Instagram", href: "https://www.instagram.com/kimsblinds1/", platform: "instagram" },
];

type SiteFooterProps = {
  columns: Array<{ title: string; links: NavItem[] }>;
  summary: string;
  contact: Array<{ label: string; href?: string; icon?: ReactNode }>;
  legal?: NavItem[];
  credentials?: CredentialBadge[];
  socialLinks?: SocialLink[];
};

export function SiteFooter({ columns, summary, contact, legal = [], credentials = [], socialLinks = defaultSocialLinks }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__command">
        <div className="site-footer__command-header">
          <div className="site-footer__command-copy">
            <span>Measure, quote, install</span>
            <strong>Blinds, awnings and security doors fitted around the way you live.</strong>
            <p>Call Kim's Blinds or send the project details for a measured quote across the Illawarra, Shellharbour, Wollongong and selected Sutherland Shire suburbs.</p>
          </div>
          <div className="site-footer__command-actions">
            <a className="site-action" href="tel:0242561297" aria-label="Call Kim's Blinds on 02 4256 1297">
              <Phone size={17} aria-hidden="true" />
              Call now
            </a>
            <a className="site-action site-action--light" href="/contact">
              Send details
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <KimsLogo variant="full" size="sample" />
            <p>{summary}</p>
            <div className="site-footer__quick">
              <a href="tel:0242561297">
                <Phone size={16} aria-hidden="true" /> Call
              </a>
              <a href="/contact">
                <MapPin size={16} aria-hidden="true" /> Quote form
              </a>
            </div>
            {socialLinks.length ? (
              <div className="site-footer__socials" aria-label="Kim's Blinds social accounts">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    className={`site-footer__social site-footer__social--${link.platform}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={link.label}
                  >
                    {link.platform === "facebook" ? <Facebook size={19} aria-hidden="true" /> : <Instagram size={19} aria-hidden="true" />}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          <div className="site-footer__columns">
            {columns.map((column) => (
              <div key={column.title}>
                <h2>{column.title}</h2>
                {column.links.map((link) => (
                  <a key={link.href} href={link.href}>
                    <span>{link.label}</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            ))}
          </div>
          <address className="site-footer__contact">
            <h2>Contact</h2>
            {contact.map((item) =>
              item.href ? (
                <a key={item.label} href={item.href}>
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <span key={item.label}>
                  {item.icon}
                  {item.label}
                </span>
              ),
            )}
          </address>
        </div>
        {credentials.length ? (
          <div className="site-footer__credentials" aria-label="Kim's Blinds trust markers">
            {credentials.map((credential) => (
              <a key={credential.label} href={credential.href} target="_blank" rel="noopener">
                <ShieldCheck size={13} aria-hidden="true" />
                <span>{credential.label}</span>
              </a>
            ))}
          </div>
        ) : null}
        <div className="site-footer__bottom">
          <span>© 2026 Kim's Blinds. All rights reserved.</span>
          {legal.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function ActionAnchor({ action, iconOnly = false }: { action: ActionItem; iconOnly?: boolean }) {
  const href = action.href ?? "#";
  return (
    <a
      className={classNames("site-action", `site-action--${action.variant ?? "primary"}`, iconOnly && "is-icon-only")}
      href={href}
      aria-label={action.ariaLabel}
      onClick={action.onClick}
    >
      {action.iconLeft ? <span aria-hidden="true">{action.iconLeft}</span> : null}
      {!iconOnly ? action.label : null}
      {action.iconRight ? <span aria-hidden="true">{action.iconRight}</span> : null}
    </a>
  );
}

export const defaultContactItems = [
  { label: "02 4256 1297", href: "tel:0242561297", icon: <Phone size={16} aria-hidden="true" /> },
  { label: "info@kimsblinds.com.au", href: "mailto:info@kimsblinds.com.au", icon: <Mail size={16} aria-hidden="true" /> },
  {
    label: "Unit 5, 147 Industrial Rd, Oak Flats NSW",
    href: "https://www.google.com/maps/search/?api=1&query=Unit%205%20147%20Industrial%20Rd%20Oak%20Flats%20NSW%202529",
    icon: <MapPin size={16} aria-hidden="true" />,
  },
  { label: "Illawarra, Shellharbour, Wollongong and selected Sutherland Shire suburbs", icon: <MapPin size={16} aria-hidden="true" /> },
];


