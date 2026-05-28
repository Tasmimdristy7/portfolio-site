"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  size: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  opacity: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0;
    let raf: number;
    const particles: Particle[] = [];
    const particleColor = getComputedStyle(document.documentElement).getPropertyValue("--sand").trim() || "#FFF8DC";

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const create = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.35 - 0.1,
      life: Math.random() * 280,
      maxLife: Math.random() * 280 + 180,
      opacity: Math.random() * 0.45 + 0.1,
    });

    for (let i = 0; i < 70; i++) particles.push(create());

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy; p.life++;
        if (p.life > p.maxLife || p.y < 0) Object.assign(p, create(), { x: Math.random() * W, y: H, life: 0 });
        const r = p.life / p.maxLife;
        const alpha = r < 0.1 ? r * 10 * p.opacity : r > 0.8 ? (1 - r) * 5 * p.opacity : p.opacity;
        ctx.save();
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
