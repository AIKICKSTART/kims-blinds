import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../lib/classNames";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  label: string;
};

export function IconButton({ icon, label, className, type = "button", ...props }: IconButtonProps) {
  return (
    <button type={type} className={classNames("kims-icon-button", className)} aria-label={label} {...props}>
      <span className="kims-icon-button__icon" aria-hidden="true">
        {icon}
      </span>
    </button>
  );
}
