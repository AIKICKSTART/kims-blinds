import { classNames } from "../../lib/classNames";

export type StatusTone = "active" | "pending" | "inactive" | "archived" | "error" | "info";

type StatusPillProps = {
  tone: StatusTone;
  children: string;
};

export function StatusPill({ tone, children }: StatusPillProps) {
  return (
    <span className={classNames("status-pill", `status-pill--${tone}`)}>
      <span aria-hidden="true" />
      {children}
    </span>
  );
}

type StatusDotProps = {
  tone: StatusTone;
  label: string;
};

export function StatusDot({ tone, label }: StatusDotProps) {
  return <span className={classNames("status-dot", `status-dot--${tone}`)} role="img" aria-label={label} />;
}
