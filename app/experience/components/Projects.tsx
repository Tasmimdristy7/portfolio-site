"use client";
import { useRef, useState, MouseEvent } from "react";
import { projects } from "../lib/data";
import { Reveal, SectionEyebrow, SectionHeading } from "./ui";

const CATEGORIES = ["All", "Data Science & ML", "AI Testing & Engineering", "QA & Automation"] as const;
type Category = typeof CATEGORIES[number];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const onMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    e.currentTarget.style.transform = `perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) translateZ(10px)`;
    setMousePos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  const onMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.borderColor = "var(--border)";
  };

  return (
    <Reveal delay={index * 60}>
      <a
        ref={cardRef}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card interactive-card group relative flex flex-col gap-4 p-5 rounded-sm no-underline overflow-hidden transition-all duration-300 sm:p-8"
        style={{
          background: "rgba(255,253,242,0.86)",
          border: "1px solid var(--border2)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--sand-dim)"; }}
        onBlur={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)"; }}
      >
        <div className="project-card-accent" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(60,70,82,0.16) 0%, transparent 62%)`,
          }}
        />

        <span
          className="font-mono text-[11px]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
        >
          {project.num}
        </span>
        <div
          className="text-[18px] font-extrabold leading-snug transition-colors duration-200 group-hover:text-[var(--sand)]"
          style={{ color: "var(--text)" }}
        >
          {project.name}
        </div>
        <div
          className="text-[13px] leading-relaxed flex-1"
          style={{ color: "var(--text-muted)" }}
        >
          {project.desc}
        </div>
        <div className="flex justify-between items-end mt-1">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="project-tag font-mono text-[10px] px-2 py-1 rounded-sm transition-all duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--bg3)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className="font-mono text-[20px] flex-shrink-0 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-dim)",
            }}
          >
            ↗
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative z-10 px-6 py-20 md:px-14 md:py-28">
      <SectionEyebrow>Projects</SectionEyebrow>
      <Reveal>
        <SectionHeading>Things I&apos;ve<br />built.</SectionHeading>
      </Reveal>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="font-mono text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-sm transition-all duration-200"
            style={{
              fontFamily: "var(--font-mono)",
              background: active === cat ? "var(--sand)" : "var(--surface)",
              color: active === cat ? "var(--bg)" : "var(--text-muted)",
              border: `1px solid ${active === cat ? "var(--sand)" : "var(--border2)"}`,
              fontWeight: active === cat ? 700 : 500,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
