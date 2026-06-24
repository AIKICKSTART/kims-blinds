import type {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { classNames } from "../../lib/classNames";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  status?: "default" | "focused" | "disabled";
  trailingIcon?: ReactNode;
};

export function TextInput({
  label,
  status = "default",
  trailingIcon = <Search size={18} />,
  className,
  ...props
}: TextInputProps) {
  return (
    <label className={classNames("field", className)}>
      <span className="field__label">{label}</span>
      <span className={classNames("text-input", `text-input--${status}`)}>
        <input disabled={status === "disabled"} {...props} />
        <span className="text-input__icon" aria-hidden="true">
          {trailingIcon}
        </span>
      </span>
    </label>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Array<{ label: string; value: string }>;
};

export function SelectField({ label, options, className, ...props }: SelectFieldProps) {
  return (
    <label className={classNames("field", className)}>
      <span className="field__label">{label}</span>
      <span className="select-input">
        <select {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown size={18} aria-hidden="true" />
      </span>
    </label>
  );
}

type ChoiceProps = {
  label: string;
  checked: boolean;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export function CheckboxField({ label, checked, onChange }: ChoiceProps) {
  return (
    <label className="choice">
      <span className="choice__box choice__box--checkbox" aria-hidden="true">
        {checked ? <Check size={13} strokeWidth={3} /> : null}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

export function RadioField({ label, checked, name, onChange }: ChoiceProps) {
  return (
    <label className="choice">
      <span className="choice__box choice__box--radio" aria-hidden="true">
        {checked ? <span /> : null}
      </span>
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}
