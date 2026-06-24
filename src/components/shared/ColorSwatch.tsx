type ColorSwatchProps = {
  name: string;
  hex: string;
};

export function ColorSwatch({ name, hex }: ColorSwatchProps) {
  return (
    <div className="color-swatch" aria-label={`${name} ${hex}`}>
      <span className="color-swatch__disc" style={{ backgroundColor: hex }} />
      <strong>{name}</strong>
      <span>{hex}</span>
    </div>
  );
}
