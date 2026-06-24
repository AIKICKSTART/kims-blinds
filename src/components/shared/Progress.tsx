import { Check } from "lucide-react";
import { classNames } from "../../lib/classNames";

type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  const normalized = Math.max(0, Math.min(100, value));

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-label="Job progress"
      aria-valuenow={normalized}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span className="progress-bar__track">
        <span className="progress-bar__fill" style={{ width: `${normalized}%` }} />
      </span>
      <span className="progress-bar__value">{normalized}%</span>
    </div>
  );
}

type StepperStep = {
  label: string;
  status: string;
};

type StepperProps = {
  steps: StepperStep[];
  currentStep: number;
};

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <ol className="stepper">
      {steps.map((step, index) => {
        const number = index + 1;
        const isComplete = number < currentStep;
        const isCurrent = number === currentStep;

        return (
          <li
            key={step.label}
            className={classNames(
              "stepper__item",
              isComplete && "is-complete",
              isCurrent && "is-current",
            )}
            aria-current={isCurrent ? "step" : undefined}
          >
            <span className="stepper__node">{isComplete ? <Check size={20} strokeWidth={3} /> : number}</span>
            <span className="stepper__copy">
              <strong>{step.label}</strong>
              <span>{step.status}</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
