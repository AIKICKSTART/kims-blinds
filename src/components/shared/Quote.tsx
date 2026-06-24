import type { FormEvent, ReactNode } from "react";
import { CheckCircle2, Clock3, Lock, MessageSquareText } from "lucide-react";
import { classNames } from "../../lib/classNames";
import { Button } from "./Button";
import { SelectField, TextInput } from "./FormControls";
import { StatusPill } from "./Status";

const serviceOptions = [
  { label: "Select service type", value: "" },
  { label: "Blinds", value: "blinds" },
  { label: "Roller Blinds", value: "roller-blinds" },
  { label: "Awnings", value: "awnings" },
  { label: "Outdoor Blinds", value: "outdoor-blinds" },
  { label: "Plantation Shutters", value: "plantation-shutters" },
  { label: "Curtains", value: "curtains" },
  { label: "Panel Glides", value: "panel-glides" },
  { label: "Fly Screens", value: "fly-screens" },
  { label: "Security Doors", value: "security-doors" },
  { label: "Security Doors & Windows", value: "security-screens" },
  { label: "Other", value: "other" },
];

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <TextInput label="Name" name="name" placeholder="Your name" trailingIcon={null} required />
      <TextInput
        label="Phone (optional — the Kim's Blinds team will respond during business hours)"
        name="phone"
        type="tel"
        placeholder="Best contact number"
        trailingIcon={null}
      />
      <TextInput label="Email" name="email" type="email" placeholder="you@example.com" trailingIcon={null} required />
      <TextInput label="Suburb" name="suburb" placeholder="Your suburb" trailingIcon={null} required />
      <SelectField label="Service type" name="service" options={serviceOptions} required />
      <label className="field quote-form__message">
        <span className="field__label">Message (optional)</span>
        <textarea name="message" rows={5} placeholder="Opening type, product interest, photos available and preferred timing" />
      </label>
      <p className="quote-form__security-note">
        <Lock size={14} aria-hidden="true" />
        Your details are secure and never shared. Kim's Blinds offers free measure and quote appointments.
      </p>
      <Button type="submit">Get My Free Quote — Kim's Blinds Will Respond</Button>
      <p className="quote-form__response-note">The Kim's Blinds team responds during business hours.</p>
    </form>
  );
}

type QuoteApprovalPanelProps = {
  id?: string;
  title: string;
  price: string;
  scope: string[];
  inclusions: string[];
  exclusions?: string[];
  nextStep: ReactNode;
};

export function QuoteApprovalPanel({ id = "quote-approval", title, price, scope, inclusions, exclusions = [], nextStep }: QuoteApprovalPanelProps) {
  return (
    <section id={id} className="quote-approval-panel">
      <div>
        <p>Quote approval</p>
        <h2>{title}</h2>
        <strong>{price}</strong>
        <StatusPill tone="pending">Ready for review</StatusPill>
      </div>
      <div className="quote-approval-panel__grid">
        <QuoteList title="Scope summary" items={scope} />
        <QuoteList title="Included" items={inclusions} icon={<CheckCircle2 size={16} />} />
        {exclusions.length ? <QuoteList title="Not included" items={exclusions} /> : null}
      </div>
      <div className="quote-approval-panel__next">
        <MessageSquareText size={24} aria-hidden="true" />
        <p>{nextStep}</p>
      </div>
      <div className="action-group">
        <a className="site-action site-action--primary" href="/contact">
          Approve direction
        </a>
        <a className="site-action site-action--outline" href="tel:0242561297">
          Discuss changes
        </a>
      </div>
    </section>
  );
}

function QuoteList({ title, items, icon }: { title: string; items: string[]; icon?: ReactNode }) {
  return (
    <article>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {icon ? <span aria-hidden="true">{icon}</span> : null}
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

type TimelineItem = {
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  gate?: string;
  owner?: string;
};

export function RoadmapTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="roadmap-timeline">
      {items.map((item, index) => (
        <li key={item.phase} className={classNames("roadmap-timeline__item", index === 0 && "is-current")}>
          <span>
            <Clock3 size={17} aria-hidden="true" />
            {item.phase}
          </span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ul>
            {item.deliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
          {item.gate || item.owner ? (
            <div className="roadmap-timeline__meta">
              {item.gate ? <strong>{item.gate}</strong> : null}
              {item.owner ? <small>{item.owner}</small> : null}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

