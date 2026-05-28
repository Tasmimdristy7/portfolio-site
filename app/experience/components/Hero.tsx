"use client";
import { useEffect, useRef, useState } from "react";
import { stats, personal } from "../lib/data";

function CountUp({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          setVal(Math.floor(eased * target));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{val}</span>;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    const magnetic = (el: HTMLAnchorElement | null) => {
      if (!el) return;
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px)`;
      };
      const reset = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", reset);
      return () => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", reset); };
    };
    const c1 = magnetic(btn1Ref.current);
    const c2 = magnetic(btn2Ref.current);
    return () => {
      cancelAnimationFrame(frame);
      c1?.();
      c2?.();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-24 z-10 overflow-hidden md:px-14 md:pt-36">
      {/* Available badge */}
      <div
        className="inline-flex items-center gap-2 mb-8 px-3.5 py-2 rounded-full text-[11px] w-fit max-w-full md:mb-10 md:px-4 md:text-[12px]"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--text-muted)",
          border: "1px solid var(--border2)",
          background: "var(--surface)",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
        }}
      >
        <span className="blink inline-block w-[6px] h-[6px] rounded-full bg-[#4ade80]" />
        Hi, this is me
      </div>

      {/* Name */}
      <h1
        className="mb-8 font-mono leading-[0.9] tracking-[0.02em] select-none uppercase md:mb-9 md:leading-[0.88]"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(46px, 16vw, 155px)",
          fontWeight: 900,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
        }}
      >
        <span className="block" style={{ color: "var(--text)" }}>Tasmim</span>
        <span className="hero-name-space block cursor-default">
          <span className="relative z-10" style={{ color: "var(--sand)" }}>
            Rashid
          </span>
          <span className="name-swoosh" />
          <span className="name-firework name-firework-1" />
          <span className="name-firework name-firework-2" />
          <span className="name-firework name-firework-3" />
          <span className="name-celebration-star name-celebration-star-1">✦</span>
          <span className="name-celebration-star name-celebration-star-2">✧</span>
          <span className="name-celebration-star name-celebration-star-3">✦</span>
        </span>
      </h1>

      {/* Tagline */}
      <p
        className="mb-10 max-w-[520px] leading-relaxed md:mb-14"
        style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "var(--text-muted)",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
        }}
      >
        Software engineer with 5+ years building and breaking systems —{" "}
        <strong style={{ color: "var(--sand)", fontWeight: 700 }}>
          automation, backend, and data science
        </strong>
        {" "}across AI, security, Web3, and data products. I test what I build and{" "}
        <strong style={{ color: "var(--sand)", fontWeight: 700 }}>
          build what I understand.
        </strong>
      </p>

      {/* CTAs */}
      <div
        className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
        }}
      >
        <a
          ref={btn1Ref}
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm text-[11px] tracking-[0.12em] uppercase font-mono no-underline relative overflow-hidden group sm:px-8 sm:py-4 sm:text-[12px]"
          style={{
            fontFamily: "var(--font-mono)",
            background: "var(--sand)",
            color: "var(--bg)",
            border: "2px solid var(--sand)",
            fontWeight: 500,
          }}
        >
          <span className="relative z-10">View Projects</span>
          <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          <span
            className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"
            style={{ background: "var(--sand-light)" }}
          />
        </a>
        <a
          ref={btn2Ref}
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm text-[11px] tracking-[0.12em] uppercase font-mono no-underline transition-all duration-200 sm:px-8 sm:py-4 sm:text-[12px]"
          style={{
            fontFamily: "var(--font-mono)",
            background: "transparent",
            color: "var(--text-muted)",
            border: "1px solid var(--border2)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--sand)";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--sand)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border2)";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
          }}
        >
          Get in Touch
        </a>
      </div>

      {/* Alma mater */}
      <div
        className="mt-6 flex items-center gap-2"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "var(--text-dim)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease 0.9s",
        }}
      >
        <span>BRAC University &rsquo;21</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span>NDSU Fall &rsquo;27</span>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-6 hidden items-center gap-3 font-mono text-[10px] tracking-[0.15em] uppercase sm:flex md:left-14 md:bottom-10"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--text-dim)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1.4s",
        }}
      >
        <div
          className="scroll-bar-anim h-px"
          style={{ background: "linear-gradient(to right, var(--sand), transparent)" }}
        />
        Scroll
      </div>

      {/* Stats */}
      <div
        className="mt-12 grid grid-cols-1 gap-3 sm:max-w-[520px] sm:grid-cols-3 md:absolute md:right-14 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:flex md:flex-col md:gap-9"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease 1s",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-left cursor-default group md:text-right"
            data-cursor
          >
            <div
              className="block leading-none tracking-[-0.03em] transition-colors duration-200"
              style={{ fontSize: "clamp(28px, 8vw, 52px)", fontWeight: 900, color: "var(--sand)" }}
            >
              <CountUp target={s.value} />
              {s.suffix}
            </div>
            <div
              className="font-mono text-[10px] tracking-[0.12em] uppercase mt-1"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
            >
              {s.label}
            </div>
            <div
              className="mt-1.5 h-[2px] rounded-sm overflow-hidden md:ml-auto"
              style={{ width: 80, background: "var(--border2)" }}
            >
              <div
                className="h-full rounded-sm"
                style={{
                  width: `${s.bar}%`,
                  background: "var(--sand)",
                  animation: "grow 1.5s ease 1.2s both",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </section>
  );
}
