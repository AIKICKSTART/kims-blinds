import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

type IconGridProps = {
  icons: Array<{ label: string; Icon: ComponentType<LucideProps> }>;
};

export function IconGrid({ icons }: IconGridProps) {
  return (
    <div className="icon-grid" role="list">
      {icons.map(({ label, Icon }) => (
        <span key={label} className="chrome-icon" role="listitem" title={label} aria-label={label}>
          <Icon size={28} strokeWidth={1.9} />
        </span>
      ))}
    </div>
  );
}
