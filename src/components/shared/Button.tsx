import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../lib/classNames";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "primaryOutline"
  | "secondaryOutline"
  | "tertiary"
  | "outline"
  | "ghost"
  | "dark"
  | "light"
  | "danger"
  | "success";
type ButtonVisualState = "default" | "hover" | "pressed";
type ButtonSize = "sm" | "md" | "lg" | "xl";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  visualState?: ButtonVisualState;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  visualState = "default",
  iconLeft,
  iconRight,
  loading = false,
  fullWidth = false,
  children,
  className,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classNames(
        "kims-button",
        `kims-button--${variant}`,
        `kims-button--${size}`,
        visualState !== "default" && `is-${visualState}`,
        fullWidth && "is-full-width",
        loading && "is-loading",
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {iconLeft ? <span className="kims-button__icon" aria-hidden="true">{iconLeft}</span> : null}
      {loading ? <span className="kims-button__spinner" aria-hidden="true" /> : null}
      {children}
      {iconRight ? <span className="kims-button__icon" aria-hidden="true">{iconRight}</span> : null}
    </button>
  );
}
