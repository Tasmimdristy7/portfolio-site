"use client";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Impact from "./components/Impact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Doodles from "./components/Doodles";
import { Divider } from "./components/ui";

const Cursor = dynamic(() => import("./components/Cursor"), { ssr: false });
const ParticleCanvas = dynamic(() => import("./components/ParticleCanvas"), { ssr: false });

export default function ExperiencePage() {
  return (
    <>
      <Cursor />
      <ParticleCanvas />
      <Nav />
      <main className="relative overflow-hidden">
        <Doodles />
        <Hero />
        <Ticker />
        <About />
        <Divider />
        <Impact />
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
