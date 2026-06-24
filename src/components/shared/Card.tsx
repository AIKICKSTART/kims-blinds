import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { KimsLogo } from "./Logo";
import { classNames } from "../../lib/classNames";

type SecurityCardProps = {
  title: string;
  description: string;
  variant?: "default" | "accent" | "dark";
  icon?: ReactNode;
};

export function SecurityCard({
  title,
  description,
  variant = "default",
  icon = <KimsLogo variant="icon" size="small" />,
}: SecurityCardProps) {
  return (
    <article className={classNames("security-card", `security-card--${variant}`)}>
      <div className="security-card__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ArrowRight className="security-card__arrow" size={22} strokeWidth={2} aria-hidden="true" />
    </article>
  );
}

