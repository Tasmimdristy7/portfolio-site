import { skillTags } from "../lib/data";

export default function Ticker() {
  const items = [...skillTags, ...skillTags];
  return (
    <div
      className="ticker-wrap relative z-10 overflow-hidden py-4"
      style={{
        borderTop: "1px solid var(--border2)",
        borderBottom: "1px solid var(--border2)",
        background: "var(--surface)",
      }}
    >
      <div className="animate-ticker flex w-max">
        {items.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-8 font-mono text-[12px] tracking-[0.1em] uppercase whitespace-nowrap transition-colors duration-200 hover:text-[var(--sand)] cursor-default"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            <span style={{ color: "var(--sand)", fontSize: 8 }}>✦</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
