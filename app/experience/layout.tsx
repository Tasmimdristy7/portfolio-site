import type { Metadata } from "next";
import "./experience.css";

export const metadata: Metadata = {
  title: "Tasmim Rashid — Software Engineer in Test",
  description:
    "Software Engineer in Test focused on automation, security testing, trustworthy AI validation, data quality, backend/API systems, Web3, and system-level QA.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
