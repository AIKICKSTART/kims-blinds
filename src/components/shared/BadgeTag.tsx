import type { ReactNode } from "react";
import { AlertTriangle, Check, CircleAlert, Info, X } from "lucide-react";
import { classNames } from "../../lib/classNames";

type BadgeVariant = "success" | "info" | "warning" | "error";

const badgeIcons: Record<BadgeVariant, ReactNode> = {
  success: <Check size={14} strokeWidth={3} />,
  info: <Info size={14} />,
  warning: <AlertTriangle size={14} />,
  error: <CircleAlert size={14} />,
};

type BadgeProps = {
  variant: BadgeVariant;
  children: ReactNode;
};

export function Badge({ variant, children }: BadgeProps) {
  return (
    <span className={classNames("kims-badge", `kims-badge--${variant}`)}>
      <span aria-hidden="true">{badgeIcons[variant]}</span>
      {children}
    </span>
  );
}

type TagProps = {
  children: ReactNode;
  onRemove?: () => void;
};

export function Tag({ children, onRemove }: TagProps) {
  return (
    <span className="kims-tag">
      {children}
      <button type="button" aria-label={`Remove ${children}`} onClick={onRemove}>
        <X size={14} aria-hidden="true" />
      </button>
    </span>
  );
}
