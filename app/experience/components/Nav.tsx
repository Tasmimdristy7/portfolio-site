"use client";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const links = ["about", "experience", "skills", "education", "projects", "contact"];

export default function Nav() {
  const router = useRouter();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "";
      for (const id of links) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jumpTo = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] flex flex-wrap justify-between items-center gap-3 px-5 py-4 transition-all duration-300 pointer-events-auto md:px-14 md:py-5"
      style={{
        background: scrolled
          ? "rgba(255,248,220,0.9)"
          : "linear-gradient(to bottom, rgba(255,248,220,0.96), transparent)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(60,70,82,0.08)" : "none",
        outline: "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div className="flex items-center gap-3 md:gap-4">
        <button
          className="back-btn"
          onClick={() => { sessionStorage.setItem("introSeen", "true"); router.push("/"); }}
        >
          <span className="back-btn-arrow">←</span>
          Back
        </button>
        <a
          href="#"
          className="nav-brand flex items-center gap-2 font-mono text-[13px] text-[var(--sand)] no-underline px-2 py-2"
          style={{ fontFamily: "var(--font-mono)" }}
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(null, "", window.location.pathname);
          }}
        >
          <span className="nav-brand-dot blink inline-block w-[6px] h-[6px] rounded-full bg-[var(--sand)]" />
          TR_
        </a>
      </div>

      <ul className="flex w-full gap-2 overflow-x-auto scrollbar-none list-none m-0 p-0 sm:w-auto sm:gap-4 sm:overflow-visible lg:gap-10">
        {links.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={jumpTo(id)}
              className="nav-link relative block whitespace-nowrap font-mono text-[10px] tracking-[0.12em] uppercase no-underline transition-colors duration-200 px-2 py-2 sm:text-[11px] sm:tracking-[0.15em]"
              style={{
                fontFamily: "var(--font-mono)",
                color: active === id ? "var(--sand)" : "var(--text-muted)",
              }}
            >
              {id}
              <span
                className="absolute -bottom-1 left-0 h-px bg-[var(--sand)] transition-all duration-300"
                style={{ width: active === id ? "100%" : "0" }}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
