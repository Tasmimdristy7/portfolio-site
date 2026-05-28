"use client";
import { useState } from "react";
import { personal } from "../lib/data";
import { Reveal, SectionEyebrow, SectionHeading } from "./ui";

const contactLinks = [
  { type: "LinkedIn", value: "linkedin.com/in/tasmimrashid", url: personal.linkedin },
  { type: "GitHub", value: "github.com/Tasmimdristy7", url: personal.github },
  { type: "Portfolio", value: "tasmimrashid.com", url: personal.portfolio },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="relative z-10 px-6 py-20 md:px-14 md:py-28">
      <SectionEyebrow>Contact</SectionEyebrow>
      <Reveal>
        <SectionHeading>Let&apos;s build<br />quality in.</SectionHeading>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 items-start lg:grid-cols-2 lg:gap-20">
        <Reveal delay={100}>
          <p className="text-[16px] leading-relaxed mb-8 sm:text-[19px] sm:mb-9" style={{ color: "var(--text-muted)" }}>
            Open to{" "}
            <strong style={{ color: "var(--sand)" }}>senior remote QA roles</strong>. I work
            async across time zones and bring both framework architecture and hands-on execution.
          </p>

          <div className="flex flex-col gap-0.5">
            {contactLinks.map((link) => (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-between items-center gap-4 px-4 py-4 no-underline overflow-hidden transition-all duration-250 sm:px-7 sm:py-5"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border2)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface)";
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-250"
                  style={{ background: "var(--sand)" }}
                />
                <div className="flex flex-col gap-1">
                  <span
                    className="font-mono text-[10px] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
                  >
                    {link.type}
                  </span>
                  <span
                    className="text-[14px] font-semibold transition-colors duration-200 group-hover:text-[var(--sand)] sm:text-[15px]"
                    style={{ color: "var(--text)" }}
                  >
                    {link.value}
                  </span>
                </div>
                <span
                  className="font-mono text-[18px] transition-all duration-200 group-hover:translate-x-1.5"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div
            className="p-5 rounded-[4px] sm:p-8"
            style={{ background: "var(--surface)", border: "1px solid var(--border2)" }}
          >
            <div
              className="font-mono text-[10px] tracking-[0.15em] uppercase mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}
            >
              Email
            </div>
            <div
              className="text-[18px] font-bold mb-6 break-all"
              style={{ color: "var(--sand)" }}
            >
              {personal.email}
            </div>
            <button
              onClick={copyEmail}
              className="flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-sm font-mono text-[10px] tracking-[0.1em] uppercase cursor-pointer transition-all duration-200 sm:w-auto sm:px-5 sm:text-[11px]"
              style={{
                fontFamily: "var(--font-mono)",
                background: "var(--bg3)",
                color: copied ? "#4ade80" : "var(--text-muted)",
                border: `1px solid ${copied ? "#4ade80" : "var(--border)"}`,
              }}
            >
              <span>{copied ? "✓" : "⧉"}</span>
              <span>{copied ? "Copied!" : "Copy email address"}</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
