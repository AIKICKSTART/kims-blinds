import type { InputHTMLAttributes } from "react";
import { ChevronDown, Filter, Search, SlidersHorizontal } from "lucide-react";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchInput(props: SearchInputProps) {
  const { "aria-label": ariaLabel = "Search", ...inputProps } = props;

  return (
    <label className="search-input">
      <Search size={24} strokeWidth={2} aria-hidden="true" />
      <input aria-label={ariaLabel} {...inputProps} />
    </label>
  );
}

type FilterButtonProps = {
  count: number;
};

export function FilterButton({ count }: FilterButtonProps) {
  return (
    <button type="button" className="filter-button">
      <Filter size={22} strokeWidth={1.8} aria-hidden="true" />
      <span>Filters</span>
      <strong>{count}</strong>
      <ChevronDown size={20} aria-hidden="true" />
    </button>
  );
}

export function FilterIconButton() {
  return (
    <button type="button" className="filter-icon-button" aria-label="Filter settings">
      <SlidersHorizontal size={26} strokeWidth={1.8} />
    </button>
  );
}
