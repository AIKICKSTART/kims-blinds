import type { ReactNode } from "react";

export type NavItem = {
  label: string;
  href: string;
  icon?: ReactNode;
  children?: NavItem[];
  external?: boolean;
};

export type ActionItem = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "light" | "danger" | "success";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  ariaLabel?: string;
};

export type MediaAsset = {
  src: string;
  alt: string;
  focalPoint?: string;
};

export type StatItem = {
  value: string;
  label: string;
  description?: string;
};

export type TokenItem = {
  name: string;
  value: string;
  usage: string;
  contrast?: string;
};
