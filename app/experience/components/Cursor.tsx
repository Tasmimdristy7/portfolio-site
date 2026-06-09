"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const trail = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number | undefined>(undefined);
  const visible = useRef(false);

  useEffect(() => {
    const setVisibility = (show: boolean) => {
      visible.current = show;
      const v = show ? "visible" : "hidden";
      if (dotRef.current) dotRef.current.style.visibility = v;
      if (ringRef.current) ringRef.current.style.visibility = v;
    };

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
      if (!visible.current) setVisibility(true);
    };

    const onLeave = () => setVisibility(false);
    const onEnter = () => setVisibility(true);

    const animate = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * 0.12;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.12;
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

    setVisibility(false);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafRef.current = requestAnimationFrame(animate);
    const t = setTimeout(addHover, 500);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-rocket" style={{ visibility: "hidden" }}>
        <span className="rocket-nose" />
        <span className="rocket-body" />
        <span className="rocket-window" />
        <span className="rocket-fin rocket-fin-left" />
        <span className="rocket-fin rocket-fin-right" />
        <span className="rocket-flame" />
      </div>
      <div ref={ringRef} className="cursor-ring" style={{ visibility: "hidden" }} />
    </>
  );
}
