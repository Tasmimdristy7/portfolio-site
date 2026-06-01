"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const interests = [
  { label: "Software testing & program analysis", note: "// assert(system == correct)" },
  { label: "Formal verification & specification inference", note: "∀ input: spec ⟹ proof ⟹ ship" },
  { label: "AI system testing — LLMs, vision, agents", note: "eval() → confidence: 0.51 → investigate" },
  { label: "Security, robustness & adversarial evaluation", note: "while (!broken) { fuzz() }" },
];

export default function ResearchPage() {
  const router = useRouter();

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f1117 0%, #1a1529 50%, #0e1a14 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
      position: "relative",
    }}>

      <button
        onClick={() => { sessionStorage.setItem("introSeen", "true"); router.push("/"); }}
        style={{
          position: "absolute",
          top: "32px",
          left: "32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.78rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          cursor: "pointer",
          padding: "8px 0",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        <ArrowLeft size={14} /> back
      </button>

      <div style={{ textAlign: "center", maxWidth: "680px", width: "100%" }}>
        <p style={{
          margin: "0 0 24px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: "0.68rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(140, 122, 230, 0.6)",
        }}>
          MODE 02 · RESEARCH
        </p>

        <h1 style={{
          margin: "0 0 16px",
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "#ffffff",
        }}>
          Trust no system.<br />
          <span style={{ color: "rgba(140, 122, 230, 0.85)" }}>Verify everything.</span>
        </h1>

        <p style={{
          margin: "0 0 52px",
          fontSize: "clamp(0.88rem, 1.4vw, 1rem)",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.35)",
          fontStyle: "italic",
        }}>
          Testing AI systems, finding security gaps, and building<br />
          the kind of trust that holds under pressure.
        </p>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1px",
          marginBottom: "48px",
          textAlign: "left",
        }}>
          {interests.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "24px",
              padding: "14px 20px",
              background: i % 2 === 0 ? "rgba(140, 122, 230, 0.05)" : "transparent",
              borderLeft: "2px solid rgba(140, 122, 230, 0.25)",
            }}>
              <span style={{
                fontSize: "clamp(0.82rem, 1.2vw, 0.92rem)",
                fontWeight: 600,
                color: "rgba(255,255,255,0.72)",
                letterSpacing: "0.01em",
              }}>
                {item.label}
              </span>
              <span style={{
                fontSize: "0.68rem",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                color: "rgba(140, 122, 230, 0.5)",
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
                fontStyle: "italic",
              }}>
                {item.note}
              </span>
            </div>
          ))}
        </div>

        <p style={{
          margin: 0,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: "0.68rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(140, 122, 230, 0.35)",
        }}>
          This space is being built — carefully.
        </p>
      </div>
    </main>
  );
}
