"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StoryPage() {
  const router = useRouter();

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1c0a00 0%, #2d1200 50%, #1a0d00 100%)",
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

      <div style={{ textAlign: "center", maxWidth: "560px" }}>
        <p style={{
          margin: "0 0 24px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: "0.68rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(249, 115, 22, 0.6)",
        }}>
          MODE 03 · STORIES & FRAMES
        </p>

        <h1 style={{
          margin: "0 0 28px",
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "#ffffff",
        }}>
          Out collecting<br />
          <span style={{ color: "rgba(249, 115, 22, 0.85)" }}>stories & frames.</span>
        </h1>

        <p style={{
          margin: "0 0 48px",
          fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.38)",
          fontStyle: "italic",
        }}>
          Filling notebooks, chasing light, and writing things<br />
          down before they disappear. Will share soon.
        </p>

        <p style={{
          margin: 0,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: "0.68rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(249, 115, 22, 0.4)",
        }}>
          — Tasmim
        </p>
      </div>
    </main>
  );
}
