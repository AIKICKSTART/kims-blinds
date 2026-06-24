import type { ReactNode } from "react";
import { classNames } from "../../lib/classNames";
import type { TokenItem } from "./types";

export function DesignTokenSwatch({ token }: { token: TokenItem }) {
  const isGradient = token.value.includes("gradient");

  return (
    <article className="token-swatch">
      <span style={{ background: token.value }} aria-hidden="true" />
      <div>
        <h3>{token.name}</h3>
        <code>{token.value}</code>
        <p>{token.usage}</p>
        {token.contrast ? <small>{token.contrast}</small> : null}
      </div>
      {isGradient ? <em>Gradient</em> : null}
    </article>
  );
}

export function TokenSwatchGrid({ tokens }: { tokens: TokenItem[] }) {
  return (
    <div className="token-grid">
      {tokens.map((token) => (
        <DesignTokenSwatch key={token.name} token={token} />
      ))}
    </div>
  );
}

type ComponentPreviewProps = {
  title: string;
  description: string;
  children: ReactNode;
  usage?: string;
  className?: string;
};

export function ComponentPreview({ title, description, children, usage, className }: ComponentPreviewProps) {
  return (
    <section className={classNames("component-preview", className)}>
      <header>
        <h2>{title}</h2>
        <p>{description}</p>
        {usage ? <small>{usage}</small> : null}
      </header>
      <div className="component-preview__stage">{children}</div>
    </section>
  );
}

export function ResponsivePreview() {
  const notes = [
    ["Desktop", "Dense chrome surfaces, full navigation, hero imagery and multi-column card grids."],
    ["Tablet", "Header actions remain visible while section grids reduce to two columns."],
    ["Mobile", "Header drawer, quick contact dock, single-column cards, large touch controls and preserved focus rings."],
  ];

  return (
    <div className="responsive-preview">
      {notes.map(([label, copy]) => (
        <article key={label}>
          <strong>{label}</strong>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  );
}
