"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };

    const animate = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * 0.1;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = trail.current.x - 20 + "px";
        ringRef.current.style.top = trail.current.y - 20 + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const addHover = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          dotRef.current?.classList.add("hover");
          ringRef.current?.classList.add("hover");
        });
        el.addEventListener("mouseleave", () => {
          dotRef.current?.classList.remove("hover");
          ringRef.current?.classList.remove("hover");
        });
      });
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);
    const t = setTimeout(addHover, 500);

    return () => {
      document.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-rocket">
        <span className="rocket-nose" />
        <span className="rocket-body" />
        <span className="rocket-window" />
        <span className="rocket-fin rocket-fin-left" />
        <span className="rocket-fin rocket-fin-right" />
        <span className="rocket-flame" />
      </div>
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
