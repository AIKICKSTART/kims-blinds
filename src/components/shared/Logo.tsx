import { classNames } from "../../lib/classNames";

type LogoVariant = "full" | "icon" | "wordmark" | "monochrome";
type LogoSize = "hero" | "sample" | "small";

type LogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  priority?: boolean;
};

export function KimsLogo({ variant = "full", size = "sample", className, priority = false }: LogoProps) {
  const sources: Record<LogoVariant, string> = {
    full: "/brand/kims/kims-blinds-logo-2026.webp",
    icon: "/brand/kims/kims-blinds-logo-2026.webp",
    wordmark: "/brand/kims/kims-blinds-logo-2026.webp",
    monochrome: "/brand/kims/kims-blinds-logo-2026.webp",
  };

  return (
    <div
      className={classNames(
        "kims-logo",
        `kims-logo--${variant}`,
        `kims-logo--${size}`,
        className,
      )}
      role="img"
      aria-label="Kim's Blinds"
    >
      <img
        src={sources[variant]}
        alt=""
        className="kims-logo__asset"
        width={1120}
        height={524}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}


