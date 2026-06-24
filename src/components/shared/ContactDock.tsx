import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, CalendarCheck, MessageSquare, Phone } from "lucide-react";
import { classNames } from "../../lib/classNames";

export type ContactDockAction = {
  label: string;
  href: string;
  ariaLabel: string;
  icon: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
};

type ContactDockProps = {
  actions?: ContactDockAction[];
  ariaLabel?: string;
  className?: string;
  forceVisible?: boolean;
  scrollThreshold?: number;
};

export const defaultContactDockActions: ContactDockAction[] = [
  {
    label: "Call now",
    href: "tel:0242561297",
    ariaLabel: "Call Kim's Blinds on 02 4256 1297",
    icon: <Phone size={17} />,
    variant: "primary",
  },
  {
    label: "Contact us",
    href: "/contact",
    ariaLabel: "Open the contact page",
    icon: <MessageSquare size={17} />,
    variant: "secondary",
  },
  {
    label: "Free quote",
    href: "/contact",
    ariaLabel: "Request a free measure and quote",
    icon: <CalendarCheck size={17} />,
    variant: "tertiary",
  },
];

export function ContactDock({ actions = defaultContactDockActions, ariaLabel = "Quick contact actions", className, forceVisible = false, scrollThreshold = 480 }: ContactDockProps) {
  const [isVisible, setIsVisible] = useState(forceVisible);

  useEffect(() => {
    if (forceVisible) {
      setIsVisible(true);
      return;
    }

    const updateVisibility = () => setIsVisible(window.scrollY > scrollThreshold);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, [forceVisible, scrollThreshold]);

  return (
    <nav className={classNames("contact-dock", isVisible && "is-visible", forceVisible && "is-forced", className)} aria-label={ariaLabel}>
      {actions.map((action) => (
        <a key={`${action.variant}-${action.href}`} className={`contact-dock__action contact-dock__action--${action.variant}`} href={action.href} aria-label={action.ariaLabel}>
          <span className="contact-dock__icon" aria-hidden="true">
            {action.icon}
          </span>
          <span className="contact-dock__label">{action.label}</span>
          <span className="button-arrow" aria-hidden="true">
            <ArrowRight size={15} />
          </span>
        </a>
      ))}
    </nav>
  );
}

