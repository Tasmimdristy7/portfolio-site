"use client";
import { Reveal, SectionEyebrow, SectionHeading } from "./ui";

const education = [
  {
    school: "North Dakota State University",
    short: "NDSU",
    degree: "Master of Science",
    field: "Software Engineering & Security",
    period: "Fall 2026",
    status: "upcoming",
    note: "Focused on secure systems, program analysis, and AI evaluation.",
  },
  {
    school: "BRAC University",
    short: "BRACU",
    degree: "Bachelor of Science",
    field: "Computer Science",
    period: "2017 – 2021",
    status: "completed",
    note: "Core CS fundamentals, software engineering, algorithms, and systems.",
  },
  {
    school: "Govt. Azizul Haq College",
    short: "GAHC",
    degree: "Higher Secondary Certificate",
    field: "Science",
    period: "2014 – 2016",
    status: "completed",
    note: "HSC in Science stream, Bogura.",
  },
  {
    school: "Bogura Cantonment School and College",
    short: "BCSC",
    degree: "Secondary School Certificate",
    field: "Science",
    period: "Up to 2014",
    status: "completed",
    note: "SSC in Science stream, Bogura.",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-24 md:px-14 md:py-32">
      <Reveal>
        <SectionEyebrow>Education</SectionEyebrow>
        <SectionHeading>
          <span style={{ color: "var(--text)" }}>Alma</span>{" "}
          <span style={{ color: "var(--sand)" }}>mater.</span>
        </SectionHeading>
      </Reveal>

      <div className="flex flex-col gap-6 max-w-3xl">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 120}>
            <div
              className="relative flex flex-col gap-3 p-6 md:p-8"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border2)",
                borderLeft: edu.status === "upcoming"
                  ? "3px solid var(--sand)"
                  : "3px solid var(--border2)",
              }}
            >
              {edu.status === "upcoming" && (
                <span
                  className="absolute top-6 right-6 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--sand)" }}
                >
                  <span
                    className="inline-block w-[6px] h-[6px] rounded-full"
                    style={{ background: "var(--sand)", animation: "pulse 2s ease infinite" }}
                  />
                  Upcoming
                </span>
              )}

              <div className="flex items-start gap-4">
                <span
                  className="hidden sm:flex items-center justify-center shrink-0 font-mono text-[10px] tracking-[0.1em] uppercase font-bold"
                  style={{
                    fontFamily: "var(--font-mono)",
                    width: 52,
                    height: 52,
                    background: "var(--surface2)",
                    border: "1px solid var(--border2)",
                    color: "var(--sand)",
                  }}
                >
                  {edu.short}
                </span>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span
                      className="font-mono text-[10px] tracking-[0.16em] uppercase"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
                    >
                      {edu.period}
                    </span>
                    <span
                      className="font-mono text-[10px] tracking-[0.12em] uppercase"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--border2)" }}
                    >
                      ·
                    </span>
                    <span
                      className="font-mono text-[10px] tracking-[0.12em] uppercase"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
                    >
                      {edu.degree}
                    </span>
                  </div>

                  <h3
                    className="leading-tight tracking-[-0.01em]"
                    style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 800, color: "var(--text)" }}
                  >
                    {edu.school}
                  </h3>

                  <p
                    className="font-mono text-[11px] tracking-[0.1em] uppercase mt-0.5"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--sand)", fontWeight: 600 }}
                  >
                    {edu.field}
                  </p>

                  <p
                    className="mt-2 text-[13px] leading-relaxed"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {edu.note}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
