import type { CSSProperties } from "react";
import { classNames } from "../../lib/classNames";
import { StatusPill, type StatusTone } from "./Status";

type TableRow = {
  name: string;
  status: StatusTone;
  statusLabel: string;
  date: string;
};

type DataTableProps = {
  rows: TableRow[];
};

export function DataTable({ rows }: DataTableProps) {
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        <caption className="sr-only">Recent blinds and security and screen jobs</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>
                <StatusPill tone={row.status}>{row.statusLabel}</StatusPill>
              </td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type AvatarProps = {
  label: string;
  image?: AvatarImageKey;
  src?: string;
  alt?: string;
  focalPoint?: string;
  zoom?: number;
  loading?: "eager" | "lazy";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  shape?: "circle" | "squircle";
  tone?: "light" | "dark" | "chrome";
  status?: "verified" | "pending" | "hidden";
  consent?: AvatarConsent;
  badgeLabel?: string;
  dark?: boolean;
  className?: string;
};

const avatarImageSources = {
  man: "",
  woman: "",
  "person-man": "",
  "person-woman": "",
  "review-man": "",
  "review-woman": "",
} as const;

export type AvatarImageKey = keyof typeof avatarImageSources;
export type AvatarConsent = "approved" | "pending" | "placeholder";

const avatarImageProfiles: Record<AvatarImageKey, { focalPoint: string; zoom: number; consent: AvatarConsent }> = {
  man: { focalPoint: "48% 43%", zoom: 1.02, consent: "placeholder" },
  woman: { focalPoint: "50% 42%", zoom: 1.03, consent: "placeholder" },
  "person-man": { focalPoint: "50% 43%", zoom: 1.02, consent: "placeholder" },
  "person-woman": { focalPoint: "50% 43%", zoom: 1.03, consent: "placeholder" },
  "review-man": { focalPoint: "48% 43%", zoom: 1.02, consent: "placeholder" },
  "review-woman": { focalPoint: "50% 42%", zoom: 1.03, consent: "placeholder" },
};

const avatarSizes = {
  xs: 32,
  sm: 44,
  md: 52,
  lg: 76,
  xl: 112,
};

function initialsFor(label: string) {
  return label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function Avatar({
  label,
  image,
  src,
  alt,
  focalPoint,
  zoom,
  loading = "eager",
  size = "md",
  shape = "circle",
  tone = "light",
  status,
  consent,
  badgeLabel,
  dark = false,
  className,
}: AvatarProps) {
  const imageSrc = src ?? (image ? avatarImageSources[image] : undefined);
  const imageProfile = image ? avatarImageProfiles[image] : undefined;
  const resolvedSize = typeof size === "number" ? size : avatarSizes[size];
  const resolvedConsent = consent ?? imageProfile?.consent;
  const resolvedZoom = zoom ?? imageProfile?.zoom ?? 1;
  const style = {
    "--avatar-size": `${resolvedSize}px`,
    "--avatar-image-scale": String(resolvedZoom),
    ...(focalPoint ?? imageProfile?.focalPoint ? { "--avatar-image-position": focalPoint ?? imageProfile?.focalPoint } : {}),
  } as CSSProperties & { "--avatar-size": string; "--avatar-image-position"?: string; "--avatar-image-scale": string };

  return (
    <span
      className={classNames(
        "avatar",
        `avatar--${shape}`,
        `avatar--tone-${dark ? "dark" : tone}`,
        imageSrc && "avatar--image",
        image ? `avatar--${image}` : undefined,
        status && status !== "hidden" ? `avatar--${status}` : undefined,
        resolvedConsent ? `avatar--consent-${resolvedConsent}` : undefined,
        dark && "avatar--dark",
        className,
      )}
      style={style}
      aria-label={imageSrc ? undefined : label}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={alt ?? label} width={resolvedSize} height={resolvedSize} loading={loading} decoding="async" />
      ) : (
        <span className="avatar__initials">{initialsFor(label)}</span>
      )}
      {status && status !== "hidden" ? <span className="avatar__status" role="img" aria-label={badgeLabel ?? status} /> : null}
    </span>
  );
}

type CustomerReviewCardProps = {
  quote: string;
  name: string;
  suburb?: string;
  sourceLabel?: string;
  sourceUrl?: string;
  image?: AvatarImageKey;
  src?: string;
  focalPoint?: string;
  zoom?: number;
  avatarSize?: AvatarProps["size"];
  photoConsent?: AvatarConsent;
  imageAlt?: string;
  variant?: "feature" | "compact";
  className?: string;
  showConsentNote?: boolean;
};

export function CustomerReviewCard({
  quote,
  name,
  suburb,
  sourceLabel,
  sourceUrl,
  image,
  src,
  focalPoint,
  zoom,
  avatarSize,
  photoConsent = "pending",
  imageAlt,
  variant = "compact",
  className,
  showConsentNote = false,
}: CustomerReviewCardProps) {
  const canShowPhoto = photoConsent === "approved" || photoConsent === "placeholder" || Boolean(src && showConsentNote);
  const consentLabel = photoConsent === "approved" ? "Photo approved" : photoConsent === "placeholder" ? "Synthetic placeholder" : "Initials until consent";
  const avatarStatus = photoConsent === "approved" ? "verified" : photoConsent === "pending" ? "pending" : "hidden";

  return (
    <article className={classNames("customer-review-card", `customer-review-card--${variant}`, `customer-review-card--${photoConsent}`, className)}>
      <header className="customer-review-card__header">
        <Avatar
          label={name}
          image={canShowPhoto ? image : undefined}
          src={canShowPhoto ? src : undefined}
          alt={imageAlt ?? `${name} profile image`}
          size={avatarSize ?? (variant === "feature" ? "xl" : "lg")}
          shape="squircle"
          tone="chrome"
          consent={photoConsent}
          focalPoint={focalPoint}
          zoom={zoom}
          status={avatarStatus}
          badgeLabel={consentLabel}
        />
        <div>
          <span>{photoConsent === "approved" ? "Verified customer photo" : "Verified review"}</span>
          <strong>{name}</strong>
          {suburb ? <small>{suburb}</small> : null}
          {sourceLabel ? (
            <small className="customer-review-card__source">
              {sourceUrl ? <a href={sourceUrl} target="_blank" rel="noreferrer">{sourceLabel}</a> : sourceLabel}
            </small>
          ) : null}
        </div>
      </header>
      <blockquote>
        <p>"{quote}"</p>
      </blockquote>
      {showConsentNote ? <small className="customer-review-card__note">{consentLabel}</small> : null}
    </article>
  );
}

