import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Poppins, Raleway } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tasmim Rashid | QA, Research, and Stories",
  description:
    "Three ways to meet Tasmim Rashid: SDET / QA / Security, Research / Academia, and Traveler / Photographer / Storyteller.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable} ${raleway.variable} ${cormorantGaramond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
