"use client";

import {
  ArrowRight,
  Bug,
  Camera,
  Circle,
  Code2,
  Cpu,
  FileText,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  personas,
  type Persona,
  type PersonaId,
} from "./data";

const modeMeta: Record<
  PersonaId,
  {
    mode: string;
    role: string;
    signal: string;
  }
> = {
  qa: {
    mode: "MODE 01",
    role: "software engineer",
    signal: "reliability online",
  },
  research: {
    mode: "MODE 02",
    role: "model thinker",
    signal: "specification active",
  },
  story: {
    mode: "MODE 03",
    role: "traveler",
    signal: "memory recording",
  },
};

const cardRoutes: Partial<Record<PersonaId, string>> = {
  qa: "/experience",
  research: "/research",
  story: "/story",
};

export default function Home() {
  const router = useRouter();
  const [introDone, setIntroDone] = useState(false);
  const [instant, setInstant] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [nameOffset, setNameOffset] = useState("30vh");

  useEffect(() => {
    if (sessionStorage.getItem("introSeen") === "true") {
      sessionStorage.removeItem("introSeen");
      setIntroDone(true);
      setInstant(true);
    }
  }, []);

  useEffect(() => {
    const measure = () => {
      if (!nameRef.current) return;
      const rect = nameRef.current.getBoundingClientRect();
      const offset = window.innerHeight / 2 - (rect.top + rect.height / 2);
      setNameOffset(`${Math.round(offset)}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleIntroDone = () => {
    setIntroDone(true);
  };

  const navigateTo = (route: string) => {
    sessionStorage.setItem("introSeen", "true");
    router.push(route);
  };

  return (
    <>
      {!introDone && <IntroScreen onDone={handleIntroDone} />}
      <main className={`site-shell${introDone ? "" : " intro-waiting"}${instant ? " instant" : ""}`}>
      <div className="page-doodles" aria-hidden="true">
        <span className="page-spark spark-a">✦</span>
        <span className="page-spark spark-b">✧</span>
        <span className="page-spark spark-c">✶</span>
        <span className="code-bracket bracket-left">{"{"}</span>
        <span className="code-bracket bracket-right">{"}"}</span>
        <span className="mini-log">
          <span />
          <span />
          <span />
        </span>
        <svg className="route-doodle" viewBox="0 0 180 70">
          <path d="M8 48 C44 12 66 62 96 34 S142 18 172 44" />
          <circle cx="8" cy="48" r="4" />
          <circle cx="96" cy="34" r="4" />
          <circle cx="172" cy="44" r="4" />
        </svg>
        <span className="dot-cluster cluster-a">
          <i />
          <i />
          <i />
        </span>
        <span className="dot-cluster cluster-b">
          <i />
          <i />
          <i />
        </span>
        <svg className="test-doodle" viewBox="0 0 120 74">
          <rect x="13" y="14" width="84" height="44" rx="6" />
          <path d="M28 30 H78" />
          <path d="M28 43 H58" />
          <path d="M90 22 L103 35 L83 56" />
        </svg>
        <svg className="graph-doodle" viewBox="0 0 112 90">
          <path d="M24 64 L46 34 L67 52 L88 22" />
          <circle cx="24" cy="64" r="5" />
          <circle cx="46" cy="34" r="5" />
          <circle cx="67" cy="52" r="5" />
          <circle cx="88" cy="22" r="5" />
        </svg>
        <svg className="camera-doodle" viewBox="0 0 118 82">
          <path d="M25 28 H42 L48 20 H70 L76 28 H94 Q101 28 101 35 V61 Q101 68 94 68 H25 Q18 68 18 61 V35 Q18 28 25 28 Z" />
          <circle cx="60" cy="49" r="13" />
          <circle cx="60" cy="49" r="5" />
          <path d="M84 38 H92" />
        </svg>
        <span className="tiny-label label-test">test.check()</span>
        <span className="tiny-label label-spec">spec → verify</span>
      </div>
      <section className="hero-section" aria-labelledby="hero-title">
        <div id="top" className="landing-stage">
          <div className="identity-lockup">
            <div className="header-doodle bug-doodle" aria-hidden="true">
              <span className="bug-icon">
                <span />
                <span />
                <span />
              </span>
              bug.log
            </div>
            <div className="header-doodle node-doodle" aria-hidden="true">
              <span>hello!</span>
              <svg viewBox="0 0 84 34">
                <path d="M6 20 C24 10 32 20 42 14 S62 12 78 18" />
                <circle cx="6" cy="20" r="4" />
                <rect x="34" y="8" width="18" height="14" />
                <circle cx="78" cy="18" r="4" />
              </svg>
            </div>
            <div className="spark-field left" aria-hidden="true">
              <span>✦</span>
              <span>✧</span>
              <span>✶</span>
            </div>
            <div className="name-subtitle-block">
            <h1
              ref={nameRef}
              id="hero-title"
              className="landing-name"
              aria-label="Tasmim Rashid"
              style={{ "--name-offset": nameOffset } as React.CSSProperties}
            >
              {"Tasmim Rashid".split("").map((ch, i) => (
                <span key={i} className="name-char" style={{ animationDelay: `${i * 0.04}s` }} aria-hidden="true">
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </h1>
            <p className="landing-subtitle">
              <strong>Explorer at heart —</strong>
              <br />
              between code and pages, I explore AI trust, security, better testing, and product ideas,{" "}
              <br />
              while capturing stories through streets and journeys.
            </p>
            </div>
            <div className="identity-chips" aria-label="Identity modes">
              <button className="mode-tag teal" onClick={() => navigateTo("/experience")} aria-label="Engineer">
                <Cpu size={13} aria-hidden="true" /> Software Engineer
              </button>
              <button className="mode-tag violet" onClick={() => navigateTo("/research")} aria-label="Research">
                <ScanLine size={13} aria-hidden="true" /> Research
              </button>
              <button className="mode-tag gold" onClick={() => navigateTo("/story")} aria-label="Stories">
                <Camera size={13} aria-hidden="true" /> Traveler
              </button>
            </div>
            <div className="alma-mater">
              <span>BRAC University &rsquo;21</span>
              {/* <span className="alma-dot">·</span> */}
              {/* <span>NDSU Fall &rsquo;27</span> */}
            </div>
          </div>

          <MobileCarousel personas={personas} modeMeta={modeMeta} cardRoutes={cardRoutes} onNavigate={navigateTo} revealed={introDone} />
          <blockquote className="hero-quote">
            <p>&ldquo;In all chaos, there is a cosmos; in all disorder, a secret order.&rdquo;</p>
            <footer>That&apos;s where I thrive.</footer>
          </blockquote>
        </div>
      </section>
    </main>
    </>
  );
}

function IntroScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),   // quote lines reveal L→R
      setTimeout(() => setPhase(2), 2400),  // thrive fades in
      setTimeout(() => setPhase(3), 4000),  // content drifts up, overlay fades
      setTimeout(onDone, 4600),             // page reveals after overlay clears
    ];
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  const exiting = phase === 3;

  return (
    <div
      className="intro-screen"
      style={{
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 0.7s ease 0.2s" : "none",
      }}
      aria-live="polite"
    >
      <div className="intro-stage">
        <div
          className="intro-block"
          style={{
            pointerEvents: "none",
            opacity: exiting ? 0 : 1,
            transform: exiting ? "translateY(-24px)" : "translateY(0)",
            transition: exiting ? "opacity 0.4s ease, transform 0.5s ease" : "none",
          }}
        >
          {phase >= 1 && (
            <p className="intro-quote-text">
              <span className="intro-line-wrap">
                <span className="intro-line">&ldquo;In all chaos, there is a cosmos;</span>
              </span>
              <span className="intro-line-wrap">
                <span className="intro-line" style={{ animationDelay: "0.5s" }}>in all disorder, a secret order.&rdquo;</span>
              </span>
            </p>
          )}
          <footer
            className="intro-thrive"
            style={{
              opacity: phase >= 2 ? 1 : 0,
              transition: phase >= 2 ? "opacity 0.9s ease" : "none",
            }}
          >
            That&apos;s where I thrive.
          </footer>
        </div>
      </div>
    </div>
  );
}

function MobileCarousel({ personas, modeMeta, cardRoutes, onNavigate, revealed }: {
  personas: { id: PersonaId; accent: string; label: string; landingSubtitle: string; icon: Persona["icon"] }[];
  modeMeta: Record<PersonaId, { mode: string; role: string; signal: string }>;
  cardRoutes: Partial<Record<PersonaId, string>>;
  onNavigate: (route: string) => void;
  revealed: boolean;
}) {
  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState<number | null>(null);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(0);
  const total = personas.length;

  const slide = useCallback((to: number, direction: "next" | "prev") => {
    setDir(direction);
    setExiting(activeRef.current);
    setActive(to);
    activeRef.current = to;
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    exitTimerRef.current = setTimeout(() => setExiting(null), 550);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const resetTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % total;
      slide(next, "next");
    }, 5000);
  }, [total, slide, stopTimer]);

  useEffect(() => {
    if (!revealed) return;
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, [revealed, resetTimer]);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(total - 1, index));
    if (clamped === activeRef.current) return;
    slide(clamped, clamped > activeRef.current ? "next" : "prev");
    resetTimer();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goTo(activeRef.current + 1);
      else goTo(activeRef.current - 1);
    } else {
      resetTimer();
    }
  };

  return (
    <div className="mobile-carousel-outer" onMouseEnter={stopTimer} onMouseLeave={resetTimer}>
      <div className="carousel-row">
        <button
          className="carousel-arrow"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous"
        >‹</button>

        <div
          className="carousel-viewport"
          data-dir={dir}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-label="Choose a persona"
        >
          {personas.map((item, i) => {
            const Icon = item.icon;
            const meta = modeMeta[item.id];
            const route = cardRoutes[item.id];
            const cls = ["carousel-slide", i === active ? "active" : "", i === exiting ? "exiting" : ""].filter(Boolean).join(" ");
            return (
              <div key={item.id} className={cls}>
                <button
                  className={`landing-persona-card ${item.accent}`}
                  type="button"
                  aria-label={`${item.label}: ${item.landingSubtitle}`}
                  onClick={() => { if (route) onNavigate(route); }}
                >
                  <span className="mode-card-header">
                    <span className="mode-title-stack">
                      <span>{meta.mode}</span>
                      <span className="mode-role">{meta.role}</span>
                    </span>
                    {item.id === "research" ? (
                      <span className="academic-ticker" aria-hidden="true">
                        paper<strong className="academic-number-blip">1</strong>
                      </span>
                    ) : null}
                  </span>
                  <span className="persona-card-copy">
                    <strong>{item.label}</strong>
                    <small>{item.landingSubtitle}</small>
                  </span>
                  <ModePreview id={item.id} icon={Icon} />
                  <span className="mode-signal"><span />{meta.signal}</span>
                  <span className="card-cta">Select <ArrowRight size={17} aria-hidden="true" /></span>
                </button>
              </div>
            );
          })}
        </div>

        <button
          className="carousel-arrow"
          onClick={() => goTo(active + 1)}
          disabled={active === total - 1}
          aria-label="Next"
        >›</button>
      </div>

      <div className="carousel-dots" aria-label="Carousel position">
        {personas.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === active ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ModePreview({
  id,
  icon: Icon,
}: {
  id: PersonaId;
  icon: Persona["icon"];
}) {
  if (id === "qa") {
    return (
      <div className="mode-preview experience-preview" aria-hidden="true">
        <div className="career-console">
          <div className="console-top">
            <span>
              <Cpu size={14} />
              career console
            </span>
            <strong>5 yrs exp</strong>
          </div>
          <div className="career-badges">
            <span>sdet</span>
            <span>qa</span>
            <span>security</span>
            <span>ai eval</span>
          </div>
          <div className="skill-bars">
            <div className="skill-row">
              <span>
                <Code2 size={13} /> coding
              </span>
              <div className="bar-track">
                <span style={{ width: "88%" }} />
              </div>
            </div>
            <div className="skill-row">
              <span>
                <Bug size={13} /> automation
              </span>
              <div className="bar-track">
                <span style={{ width: "92%" }} />
              </div>
            </div>
            <div className="skill-row">
              <span>
                <ShieldCheck size={13} /> security
              </span>
              <div className="bar-track">
                <span style={{ width: "78%" }} />
              </div>
            </div>
            <div className="skill-row">
              <span>AI testing</span>
              <div className="bar-track">
                <span style={{ width: "84%" }} />
              </div>
            </div>
          </div>
          <div className="release-line">
            <span>release confidence</span>
            <strong>guarded</strong>
          </div>
          <div className="console-log-block">
            <div className="console-log-track">
              <span>
                <strong>[PASS]</strong> auth module ✓
              </span>
              <span>
                <strong>[RUN]</strong> regression suite
              </span>
              <span>
                <strong>[WARN]</strong> flaky test detected
              </span>
              <span className="cursor-a">
                <strong>[FIX]</strong> retry logic applied
              </span>
              <span className="cursor-b">
                <strong>[PASS]</strong> 247/247 tests ✓
              </span>
              <span className="cursor-c">
                <strong>[DEPLOY]</strong> staging ready
              </span>
              <span>
                <strong>[PASS]</strong> auth module ✓
              </span>
              <span>
                <strong>[RUN]</strong> regression suite
              </span>
              <span>
                <strong>[WARN]</strong> flaky test detected
              </span>
              <span className="cursor-a">
                <strong>[FIX]</strong> retry logic applied
              </span>
              <span className="cursor-b">
                <strong>[PASS]</strong> 247/247 tests ✓
              </span>
              <span className="cursor-c">
                <strong>[DEPLOY]</strong> staging ready
              </span>
            </div>
          </div>
          <div className="debug-command" aria-hidden="true">
            DEBUGGING
          </div>
        </div>
      </div>
    );
  }

  if (id === "research") {
    return (
      <div className="mode-preview research-preview" aria-hidden="true">
        <div className="preview-topline">
          <ScanLine size={14} />
          model space
        </div>
        <svg viewBox="0 0 260 148" role="img">
          <path d="M52 104 L118 52 L190 78" />
          <path d="M118 52 L146 122 L214 42" />
          <circle cx="52" cy="104" r="9" />
          <circle cx="118" cy="52" r="10" />
          <circle cx="190" cy="78" r="8" />
          <circle cx="146" cy="122" r="7" />
          <circle cx="214" cy="42" r="9" />
        </svg>
        <div className="model-flow">
          <span>spec</span>
          <ArrowRight size={13} />
          <span>generate</span>
          <ArrowRight size={13} />
          <span>verify</span>
        </div>
        <div className="security-model-flow">
          <span>threat model</span>
          <span>train</span>
          <span>attack</span>
          <span>evaluate</span>
        </div>
        <p>Spec → Test → Verify</p>
      </div>
    );
  }

  return (
    <div className="mode-preview story-preview" aria-hidden="true">
      <div className="preview-topline">
        <Sparkles size={14} />
        field notes
      </div>
      <div className="story-doodle-board">
        <span className="doodle-camera">
          <Camera size={30} />
        </span>
        <span className="doodle-notebook">
          <FileText size={26} />
        </span>
        <svg className="doodle-route" viewBox="0 0 132 58">
          <path d="M8 42 C30 12 50 50 70 26 S104 14 124 36" />
          <circle cx="8" cy="42" r="4" />
          <circle cx="70" cy="26" r="4" />
          <circle cx="124" cy="36" r="4" />
        </svg>
        <span className="doodle-star one">✦</span>
        <span className="doodle-star two">✧</span>
        <span className="doodle-caption">light / memory</span>
      </div>
      <div className="story-tools">
        <span>
          <Camera size={15} /> frame
        </span>
        <span>
          <FileText size={15} /> note
        </span>
        <span>
          <Circle size={10} /> light
        </span>
      </div>
      <Icon size={20} />
    </div>
  );
}
