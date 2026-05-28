export default function Footer() {
  return (
    <footer
      className="relative z-10 px-6 py-8 flex flex-col items-start gap-3 md:px-14 md:flex-row md:justify-between md:items-center"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p
        className="font-mono text-[11px] tracking-[0.08em]"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
      >
        © 2026 Tasmim Rashid
      </p>
    </footer>
  );
}
