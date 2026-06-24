import type { ReactNode } from "react";
import { Check, ChevronDown, Download, Edit3, Files, Info, Trash2, X } from "lucide-react";

export function TooltipDemo() {
  return (
    <div className="tooltip-demo">
      <span className="tooltip-info">
        <Info size={18} strokeWidth={2.2} />
      </span>
      <div className="tooltip-bubble" role="tooltip">
        This is a tooltip
        <br />
        providing helpful
        <br />
        information.
      </div>
    </div>
  );
}

export function ModalCard() {
  return (
    <div className="modal-card" role="dialog" aria-label="Success dialog">
      <button type="button" className="modal-card__close" aria-label="Close">
        <X size={18} />
      </button>
      <span className="modal-card__success">
        <Check size={42} strokeWidth={2.6} />
      </span>
      <h3>Success</h3>
      <p>Your changes have been saved successfully.</p>
      <button type="button">OK</button>
    </div>
  );
}

export function DropdownTrigger() {
  return (
    <button type="button" className="dropdown-trigger">
      <span>Actions</span>
      <ChevronDown className="dropdown-trigger__chevron" size={18} aria-hidden="true" />
    </button>
  );
}

type MenuItem = {
  label: string;
  icon: ReactNode;
  danger?: boolean;
};

const menuItems: MenuItem[] = [
  { label: "Edit", icon: <Edit3 size={18} /> },
  { label: "Duplicate", icon: <Files size={18} /> },
  { label: "Delete", icon: <Trash2 size={18} />, danger: true },
  { label: "Export", icon: <Download size={18} /> },
];

export function DropdownMenu() {
  return (
    <div className="dropdown-menu" role="menu">
      {menuItems.map((item) => (
        <button key={item.label} type="button" className={item.danger ? "is-danger" : undefined} role="menuitem">
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
