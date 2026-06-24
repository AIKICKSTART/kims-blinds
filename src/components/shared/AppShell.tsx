import type { ReactNode } from "react";
import { classNames } from "../../lib/classNames";

type AppShellProps = {
  header?: ReactNode;
  footer?: ReactNode;
  mobileNav?: ReactNode;
  children: ReactNode;
  mainId?: string;
  className?: string;
};

export function AppShell({ header, footer, mobileNav, children, mainId = "main-content", className }: AppShellProps) {
  return (
    <div className={classNames("site-shell", className)}>
      <a className="skip-link" href={`#${mainId}`}>
        Skip to content
      </a>
      {header}
      <main id={mainId}>{children}</main>
      {footer}
      {mobileNav}
    </div>
  );
}
