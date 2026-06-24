import type { ReactNode } from "react";

type PanelProps = {
  number: string;
  title: string;
  className?: string;
  children: ReactNode;
};

export function Panel({ number, title, className, children }: PanelProps) {
  return (
    <section className={`system-panel ${className ?? ""}`.trim()}>
      <h2>
        {number ? <span>{number}.</span> : null} {title}
      </h2>
      {children}
    </section>
  );
}
