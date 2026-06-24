import { ChevronDown } from "lucide-react";
import { classNames } from "../../lib/classNames";

type TabsProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export function Tabs({ options, value, onChange }: TabsProps) {
  return (
    <div className="tabs" role="tablist" aria-label="Sections">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={classNames(option === value && "is-active")}
          role="tab"
          aria-selected={option === value}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

type AccordionItem = {
  title: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <button key={item.title} type="button" className="accordion__item">
          <span>{item.title}</span>
          <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
