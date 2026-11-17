export default function ArrowIcon({ direction = "up-right" }: { direction?: "up-right" | "left" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{ display: "inline-block", verticalAlign: "-0.15em", flexShrink: 0 }}>
      <path d={direction === "left" ? "M19 12H5m7-7-7 7 7 7" : "M6 18 18 6M6 6h12v12"} />
    </svg>
  );
}
