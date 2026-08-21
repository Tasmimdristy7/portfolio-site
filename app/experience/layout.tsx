import type { Metadata } from "next";
import "./experience.css";

export const metadata: Metadata = {
  title: "Tasmim Rashid — Software Engineering & SDET Intern Candidate",
  description:
    "MS Software Engineering & Security student at NDSU seeking Summer 2027 software engineering, SDET, AI evaluation, and security/security testing internships, with 5+ years of industry experience in automation, security testing, trustworthy AI validation, data quality, backend/API systems, Web3, and system-level QA.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
