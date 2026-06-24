function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function renderStyledType(text: string, emphasis: string[] = []) {
  const terms = emphasis.filter(Boolean);
  const pattern = terms.length ? new RegExp(`(${terms.map(escapeRegExp).join("|")}|\\.)`, "gi") : /(\.)/g;

  return text.split(pattern).filter(Boolean).map((part, index) => {
    if (part === ".") {
      return <span className="type-blue-dot" key={`${part}-${index}`}>.</span>;
    }

    const isEmphasis = terms.some((term) => term.toLowerCase() === part.toLowerCase());
    return isEmphasis ? <span className="type-blue-word" key={`${part}-${index}`}>{part}</span> : part;
  });
}
