"use client";
import { useEffect, useRef, useState } from "react";
import { impact } from "../lib/data";
import { Reveal } from "./ui";

function CountCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 4)) * value));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="scroll-rise-card interactive-card group relative overflow-hidden text-center cursor-default py-8 px-5 transition-all duration-300 md:py-12 md:px-8"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      data-cursor
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "var(--surface2)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "var(--surface)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        style={{ background: "var(--sand)" }}
      />
      <div
        className="block leading-none tracking-[-0.03em] mb-2.5"
        style={{ fontSize: 64, fontWeight: 900, color: "var(--sand)" }}
      >
        {count}{suffix}
      </div>
      <div
        className="font-mono text-[11px] tracking-[0.12em] uppercase leading-relaxed"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <section className="relative z-10 px-6 py-16 md:px-14 md:py-20">
      <Reveal>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => (
            <CountCard key={item.label} {...item} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
