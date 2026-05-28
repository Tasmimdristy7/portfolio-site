"use client";
import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }, delay);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-10 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex items-center gap-4 mb-5 font-mono text-[11px] tracking-[0.2em] uppercase"
      style={{ fontFamily: "var(--font-mono)", color: "var(--sand)" }}
    >
      <span className="inline-block w-10 h-px" style={{ background: "var(--sand)" }} />
      {children}
    </div>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="leading-[0.95] tracking-[-0.03em] mb-16"
      style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 900 }}
    >
      {children}
    </h2>
  );
}

export function Divider() {
  return (
    <div
      className="mx-14 h-px"
      style={{ background: "linear-gradient(to right, transparent, var(--border2), transparent)" }}
    />
  );
}
