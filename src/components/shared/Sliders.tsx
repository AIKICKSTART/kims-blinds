type RangeTrackProps = {
  start: number;
  end?: number;
};

export function RangeTrack({ start, end }: RangeTrackProps) {
  const isRange = typeof end === "number";
  const fillStart = isRange ? start : 0;
  const fillEnd = isRange ? end : start;

  return (
    <div className="range-track">
      <span className="range-track__rail" />
      <span
        className="range-track__fill"
        style={{ left: `${fillStart}%`, width: `${fillEnd - fillStart}%` }}
      />
      <span className="range-track__thumb" style={{ left: `${start}%` }} />
      {isRange ? <span className="range-track__thumb" style={{ left: `${end}%` }} /> : null}
    </div>
  );
}

type ValueBubbleProps = {
  value: number;
  left: number;
};

export function ValueBubble({ value, left }: ValueBubbleProps) {
  return (
    <span className="value-bubble" style={{ left: `${left}%` }}>
      {value}
    </span>
  );
}
