import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, CircleAlert, Info, X } from "lucide-react";
import { classNames } from "../../lib/classNames";

type AlertVariant = "success" | "info" | "warning" | "error";

const alertIcons: Record<AlertVariant, ReactNode> = {
  success: <CheckCircle2 size={18} />,
  info: <Info size={18} />,
  warning: <AlertTriangle size={18} />,
  error: <CircleAlert size={18} />,
};

type AlertProps = {
  variant: AlertVariant;
  children: ReactNode;
  onDismiss?: () => void;
};

export function Alert({ variant, children, onDismiss }: AlertProps) {
  const isAssertive = variant === "warning" || variant === "error";

  return (
    <div
      className={classNames("kims-alert", `kims-alert--${variant}`)}
      role={isAssertive ? "alert" : "status"}
      aria-live={isAssertive ? "assertive" : "polite"}
    >
      <span aria-hidden="true">{alertIcons[variant]}</span>
      <p>{children}</p>
      {onDismiss ? (
        <button type="button" aria-label="Dismiss alert" onClick={onDismiss}>
          <X size={18} />
        </button>
      ) : null}
    </div>
  );
}
