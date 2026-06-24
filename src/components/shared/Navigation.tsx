import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { classNames } from "../../lib/classNames";

type NavigationItem = {
  label: string;
  Icon: ComponentType<LucideProps>;
};

type SidebarNavProps = {
  items: NavigationItem[];
  activeLabel: string;
};

export function SidebarNav({ items, activeLabel }: SidebarNavProps) {
  return (
    <nav className="sidebar-nav" aria-label="Primary">
      {items.map(({ label, Icon }) => (
        <button
          key={label}
          type="button"
          className={classNames("sidebar-nav__item", label === activeLabel && "is-active")}
          aria-current={label === activeLabel ? "page" : undefined}
        >
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

type BreadcrumbsProps = {
  items: string[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item} className="breadcrumbs__item" aria-current={index === items.length - 1 ? "page" : undefined}>
          {index === 0 ? <Home size={17} strokeWidth={1.8} aria-hidden="true" /> : null}
          <span>{item}</span>
        </span>
      ))}
    </nav>
  );
}

type PaginationProps = {
  activePage: number;
};

export function Pagination({ activePage }: PaginationProps) {
  const pages = [1, 2, 3, "ellipsis", 8] as const;

  return (
    <nav className="pagination" aria-label="Pagination">
      <button type="button" aria-label="Previous page">
        <ChevronLeft size={22} strokeWidth={2.3} />
      </button>
      {pages.map((page) =>
        page === "ellipsis" ? (
          <span key={page} className="pagination__ellipsis">
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            className={classNames(page === activePage && "is-active")}
            aria-current={page === activePage ? "page" : undefined}
          >
            {page}
          </button>
        ),
      )}
      <button type="button" aria-label="Next page">
        <ChevronRight size={22} strokeWidth={2.3} />
      </button>
    </nav>
  );
}
