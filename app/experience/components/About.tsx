"use client";
import { skills } from "../lib/data";
import { Reveal, SectionEyebrow, SectionHeading } from "./ui";

function SkillCard({
  category,
  headline,
  tools,
  proof,
}: {
  category: string;
  headline: string;
  tools: string[];
  proof: string;
}) {
  return (
    <div
      className="scroll-rise-card interactive-card group rounded-sm p-5 transition-all duration-300"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      data-cursor
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border2)";
        (e.currentTarget as HTMLDivElement).style.background = "var(--surface2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLDivElement).style.background = "var(--surface)";
      }}
    >
      <div
        className="font-mono text-[11px] uppercase tracking-[0.16em] mb-3"
        style={{ fontFamily: "var(--font-mono)", color: "var(--sand)" }}
      >
        {category}
      </div>
      <h3 className="text-[18px] leading-snug font-extrabold mb-4" style={{ color: "var(--text)" }}>
        {headline}
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool) => (
          <span
            key={tool}
            className="font-mono text-[11px] px-2.5 py-1 rounded-sm"
            style={{
              fontFamily: "var(--font-mono)",
              background: "var(--bg3)",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
            }}
          >
            {tool}
          </span>
        ))}
      </div>
      <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {proof}
      </p>
    </div>
  );
}

function AboutGraphDoodles() {
  return (
    <div className="about-graph-doodles hidden md:block" aria-hidden="true">
      <svg width="520" height="260" viewBox="0 0 520 260">
        <path className="graph-grid" d="M34 26 V206 H340" />
        <path className="graph-grid light" d="M34 166 H340 M34 126 H340 M34 86 H340 M88 26 V206 M146 26 V206 M204 26 V206 M262 26 V206 M320 26 V206" />
        <path className="graph-line" d="M48 178 C92 164, 104 132, 142 126 C188 118, 202 74, 246 72 C286 70, 302 48, 330 42" />
        <circle cx="48" cy="178" r="5" />
        <circle cx="142" cy="126" r="5" />
        <circle cx="246" cy="72" r="5" />
        <circle cx="330" cy="42" r="5" />
        <path className="graph-arrow" d="M310 38 L330 42 L318 58" />
        <text x="42" y="232">coverage up</text>

        <path className="bar-base" d="M392 194 V84" />
        <rect x="382" y="140" width="18" height="54" rx="4" />
        <rect x="412" y="112" width="18" height="82" rx="4" />
        <rect x="442" y="84" width="18" height="110" rx="4" />
        <path d="M374 210 H474" />
        <text x="372" y="232">regression</text>
        <text x="408" y="248">faster</text>

        <path className="spark" d="M410 38 L416 54 L432 60 L416 66 L410 82 L404 66 L388 60 L404 54 Z" />
        <path className="spark small" d="M472 52 L476 62 L486 66 L476 70 L472 80 L468 70 L458 66 L468 62 Z" />
      </svg>
    </div>
  );
}

function QualityCommandWidget() {
  return (
    <div className="about-quality-widget" data-cursor>
      <div
        className="font-mono text-[11px] uppercase tracking-[0.18em] mb-4"
        style={{ fontFamily: "var(--font-mono)", color: "var(--sand)" }}
      >
        QA Command Center
      </div>
      <div className="quality-widget-grid">
        <div>
          <span>automation</span>
          <strong>frameworks</strong>
        </div>
        <div>
          <span>ai eval</span>
          <strong>edge cases</strong>
        </div>
        <div>
          <span>api</span>
          <strong>contracts</strong>
        </div>
        <div>
          <span>ci/cd</span>
          <strong>quality gates</strong>
        </div>
      </div>
      <svg className="quality-widget-graph" width="300" height="150" viewBox="0 0 300 150" aria-hidden="true">
        <path d="M20 118 H276" />
        <path d="M30 102 C68 94, 82 68, 116 70 C154 72, 164 42, 202 40 C236 38, 250 24, 272 18" />
        <path d="M252 16 L272 18 L260 34" />
        <rect x="42" y="82" width="18" height="36" rx="4" />
        <rect x="72" y="64" width="18" height="54" rx="4" />
        <rect x="102" y="48" width="18" height="70" rx="4" />
        <circle cx="202" cy="40" r="5" />
        <circle cx="272" cy="18" r="5" />
        <text x="32" y="140">coverage</text>
        <text x="204" y="140">ship safer</text>
      </svg>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-20 md:px-14 md:py-28">
      <SectionEyebrow>About</SectionEyebrow>
      <Reveal>
        <SectionHeading>
          I break things<br />on purpose.
        </SectionHeading>
      </Reveal>

      <div className="grid gap-12 items-start lg:grid-cols-2 lg:gap-24">
        <Reveal delay={100}>
          <div className="space-y-5 text-[18px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            <p>
              Software engineer with{" "}
              <strong style={{ color: "var(--sand)", fontWeight: 700 }}>5+ years</strong>{" "}
              building, breaking, and analyzing systems — across automation frameworks,
              ML models, data pipelines, AI evaluation, and security testing. Most recently at{" "}
              <strong style={{ color: "var(--sand)", fontWeight: 700 }}>
                Truely (Singapore)
              </strong>
              . Currently pursuing an{" "}
              <strong style={{ color: "var(--sand)", fontWeight: 700 }}>
                MS in Software Engineering & Security at NDSU
              </strong>
              .
            </p>
            <p>
              On the data side, I've built ML models for{" "}
              <strong style={{ color: "var(--sand)", fontWeight: 700 }}>
                injury risk prediction
              </strong>
              {" "}using pose estimation and Random Forest, worked on{" "}
              <strong style={{ color: "var(--sand)", fontWeight: 700 }}>
                federated learning anomaly detection
              </strong>{" "}
              in healthcare, and used Python and SQL to surface patterns in production data.
            </p>
            <p>
              At Snickerdoodle Labs I took coverage from{" "}
              <strong style={{ color: "var(--sand)", fontWeight: 700 }}>20% → 85%</strong>{" "}
              and cut regression time by{" "}
              <strong style={{ color: "var(--sand)", fontWeight: 700 }}>60%</strong> —
              numbers that showed up in production, not just dashboards.
            </p>
            <p>
              Actively looking for{" "}
              <strong style={{ color: "var(--sand)", fontWeight: 700 }}>
                Summer 2027 software engineering, SDET, AI evaluation, and security/security testing internships
              </strong>
              .
            </p>
            <AboutGraphDoodles />
            <QualityCommandWidget />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div id="skills">
            <div className="mb-6">
              <div
                className="font-mono text-[16px] font-black uppercase tracking-[0.18em] mb-3"
                style={{ fontFamily: "var(--font-mono)", color: "var(--sand)" }}
              >
                Core Skills
              </div>
              <p className="text-[16px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I work across automation, security testing, AI/ML validation,
                backend/API quality, data checks, and system-level reliability, with
                enough engineering depth to build the tools, not just run the tests.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((s) => (
                <SkillCard key={s.category} {...s} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
