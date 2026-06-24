import { classNames } from "../../lib/classNames";

type ToggleSwitchProps = {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

export function ToggleSwitch({ checked, label, onChange }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      className={classNames("toggle-switch", checked && "is-checked")}
      role="switch"
      aria-label={label}
      aria-checked={checked}
      onClick={() => onChange(!checked)}
    >
      <span />
    </button>
  );
}

type SegmentedControlProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export function SegmentedControl({ options, value, onChange }: SegmentedControlProps) {
  return (
    <div className="segmented-control" role="tablist" aria-label="Toggle options">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={classNames(option === value && "is-selected")}
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
