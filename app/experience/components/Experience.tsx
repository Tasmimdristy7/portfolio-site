"use client";
import { useState } from "react";
import { experience } from "../lib/data";
import { Reveal, SectionEyebrow, SectionHeading } from "./ui";

const tagStyle: Record<string, { bg: string; color: string; border: string }> = {
  Remote: { bg: "rgba(60,70,82,0.08)", color: "var(--sand)", border: "var(--sand-dim)" },
  Contract: { bg: "rgba(88,101,117,0.1)", color: "var(--sand-light)", border: "rgba(88,101,117,0.34)" },
  "On-site": { bg: "var(--surface2)", color: "var(--text-muted)", border: "var(--border)" },
};

function CompanyDoodle({ company, index }: { company: string; index: number }) {
  const label =
    company === "Truely" ? "travel tech" :
    company === "LM Arena" ? "ai eval" :
    company === "Snickerdoodle Labs" ? "web3 testing" :
    company === "Klover Cloud" ? "cloud computing" :
    "health tech";

  return (
    <svg
      className="company-domain-doodle hidden lg:block"
      width="250"
      height="180"
      viewBox="0 0 250 180"
      style={{ top: `${index * 15.5 + 8}rem` }}
      aria-hidden="true"
    >
      {company === "Truely" && (
        <>
          <circle cx="92" cy="72" r="42" />
          <path d="M50 72 H134" />
          <path d="M92 30 C70 54, 70 92, 92 114 C114 92, 114 54, 92 30" />
          <path d="M152 54 L204 30 L184 92 L166 78 L146 100 Z" />
          <path d="M166 78 L204 30" />
        </>
      )}
      {company === "LM Arena" && (
        <>
          <path d="M82 44 C90 18, 128 16, 138 44 C164 44, 180 68, 166 94 C184 116, 164 148, 134 142 C118 166, 82 158, 76 132 C48 136, 30 108, 48 86 C30 62, 50 40, 82 44 Z" />
          <path d="M76 92 L98 114 L138 70" />
          <path d="M52 154 H166" />
          <circle cx="78" cy="70" r="4" />
          <circle cx="136" cy="94" r="4" />
        </>
      )}
      {company === "Snickerdoodle Labs" && (
        <>
          <path d="M64 46 L122 18 L180 46 V112 L122 146 L64 112 Z" />
          <path d="M64 46 L122 78 L180 46" />
          <path d="M122 78 V146" />
          <path d="M64 112 L122 78 L180 112" />
          <circle cx="64" cy="46" r="8" />
          <circle cx="122" cy="18" r="8" />
          <circle cx="180" cy="46" r="8" />
          <circle cx="64" cy="112" r="8" />
          <circle cx="122" cy="146" r="8" />
          <circle cx="180" cy="112" r="8" />
          <path d="M36 86 H64" />
          <path d="M180 86 H210" />
          <path d="M26 76 L36 86 L26 96" />
          <path d="M224 76 L210 86 L224 96" />
        </>
      )}
      {company === "Klover Cloud" && (
        <>
          <path d="M72 72 C42 72, 36 34, 68 30 C78 2, 126 4, 138 34 C170 26, 194 54, 174 78 H72 Z" />
          <rect x="44" y="104" width="48" height="34" rx="8" />
          <rect x="104" y="104" width="48" height="34" rx="8" />
          <rect x="164" y="104" width="48" height="34" rx="8" />
          <path d="M92 121 H104" />
          <path d="M152 121 H164" />
          <path d="M128 78 V104" />
          <path d="M68 104 V90 H188 V104" />
          <path d="M58 122 L66 130 L80 114" />
          <path d="M118 122 L126 130 L140 114" />
          <path d="M178 122 L186 130 L200 114" />
        </>
      )}
      {company === "Shastho Limited" && (
        <>
          <rect x="62" y="36" width="110" height="92" rx="14" />
          <path d="M117 58 V106" />
          <path d="M93 82 H141" />
          <path d="M44 146 C76 128, 154 128, 190 146" />
          <path d="M76 128 L90 142 L122 108" />
        </>
      )}
      <text x="48" y="168">{label}</text>
    </svg>
  );
}

export default function Experience() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="experience" className="relative z-10 px-6 py-20 md:px-14 md:py-28">
      <SectionEyebrow>Experience</SectionEyebrow>
      <Reveal>
        <SectionHeading>Where I&apos;ve<br />shipped.</SectionHeading>
      </Reveal>

      <div className="relative">
      <div className="relative max-w-[900px]">
        <div
          className="absolute left-0 top-2 bottom-2 w-px"
          style={{ background: "linear-gradient(to bottom, var(--sand), var(--border))" }}
        />

        {experience.map((exp, i) => {
          const ts = tagStyle[exp.type] ?? tagStyle["On-site"];
          return (
            <Reveal key={exp.company} delay={i * 80}>
              <div
                className="scroll-rise-card relative pl-7 pb-12 group sm:pl-12 sm:pb-14"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300"
                  style={{
                    background: hovered === i ? "var(--sand)" : "var(--bg)",
                    borderColor: "var(--sand)",
                    boxShadow: hovered === i ? "0 0 20px var(--sand-glow)" : "none",
                  }}
                />

                <div className="flex flex-wrap items-center gap-2 mb-2 sm:gap-3">
                  <span
                    className="font-mono text-[11px]"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
                  >
                    {exp.dates}
                  </span>
                  <span
                    className="font-mono text-[10px] px-2.5 py-1 rounded-full tracking-[0.08em] uppercase"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: ts.bg,
                      color: ts.color,
                      border: `1px solid ${ts.border}`,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                <div
                  className="text-[22px] font-black tracking-[-0.01em] mb-1.5 transition-colors duration-200 sm:text-[28px]"
                  style={{ color: hovered === i ? "var(--sand)" : "var(--text)" }}
                >
                  {exp.company}
                </div>
                <div
                  className="font-mono text-[12px] mb-5 sm:text-[13px]"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
                >
                  {exp.role} · {exp.location}
                </div>

                <ul className="space-y-2.5 list-none m-0 p-0">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-[13px] leading-[1.75] pl-5 relative sm:text-[14px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="absolute left-0 font-mono"
                        style={{ color: "var(--sand)", fontFamily: "var(--font-mono)" }}
                      >
                        ›
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
      {experience.map((exp, i) => (
        <CompanyDoodle key={`${exp.company}-doodle`} company={exp.company} index={i} />
      ))}
      </div>
    </section>
  );
}
