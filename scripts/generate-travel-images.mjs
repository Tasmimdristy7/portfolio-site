import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let sharp;

try {
  sharp = require("sharp");
} catch {
  sharp = require(
    "/Users/dristy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp",
  );
}

const outDir = path.join(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });

const scenes = [
  {
    name: "travel-cornsilk-morning.png",
    sky: "#fff2bf",
    horizon: "#d9b46a",
    accent: "#0f7d75",
    sun: "#f2a93b",
    title: "Cornsilk Morning",
    shapes: [
      `<path d="M0 478 C180 398 280 442 418 358 C560 270 710 345 900 240 L900 620 L0 620 Z" fill="#e5c879"/>`,
      `<path d="M0 520 C160 462 300 486 455 410 C620 330 760 402 900 328 L900 620 L0 620 Z" fill="#bd8d48" opacity="0.74"/>`,
      `<path d="M0 555 C210 508 380 538 560 470 C700 420 815 452 900 405 L900 620 L0 620 Z" fill="#0f7d75" opacity="0.78"/>`,
    ],
  },
  {
    name: "travel-map-edges.png",
    sky: "#fff7dc",
    horizon: "#e9cc92",
    accent: "#2f7a4d",
    sun: "#bb7a14",
    title: "Map Edges",
    shapes: [
      `<path d="M96 132 L802 86 L845 498 L150 548 Z" fill="#fffdf4" stroke="#b99b5f" stroke-width="4"/>`,
      `<path d="M165 222 C260 178 318 268 420 230 C540 184 575 300 708 262" fill="none" stroke="#0f7d75" stroke-width="11" stroke-linecap="round" opacity="0.82"/>`,
      `<path d="M210 400 C330 348 430 442 560 382 C642 344 724 374 790 328" fill="none" stroke="#b75b3a" stroke-width="8" stroke-linecap="round" opacity="0.7"/>`,
      `<circle cx="265" cy="218" r="18" fill="#bb7a14"/><circle cx="706" cy="262" r="18" fill="#2f7a4d"/>`,
    ],
  },
  {
    name: "travel-station-letters.png",
    sky: "#f7e9bd",
    horizon: "#d9a766",
    accent: "#b75b3a",
    sun: "#0f7d75",
    title: "Station Letters",
    shapes: [
      `<rect x="0" y="386" width="900" height="234" fill="#4d4537" opacity="0.88"/>`,
      `<path d="M92 382 L806 382 L736 258 L168 258 Z" fill="#fffdf4" stroke="#8f7444" stroke-width="5"/>`,
      `<rect x="192" y="285" width="128" height="68" fill="#0f7d75" opacity="0.82"/><rect x="386" y="285" width="128" height="68" fill="#bb7a14" opacity="0.8"/><rect x="580" y="285" width="128" height="68" fill="#2f7a4d" opacity="0.78"/>`,
      `<path d="M84 468 C250 434 390 492 538 450 C670 412 788 440 900 408 L900 620 L84 620 Z" fill="#fff7dc" opacity="0.18"/>`,
    ],
  },
];

function svg(scene) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="620" viewBox="0 0 900 620">
    <defs>
      <linearGradient id="sky" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${scene.sky}"/>
        <stop offset="100%" stop-color="${scene.horizon}"/>
      </linearGradient>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer>
          <feFuncA type="table" tableValues="0 0.08"/>
        </feComponentTransfer>
      </filter>
    </defs>
    <rect width="900" height="620" fill="url(#sky)"/>
    <circle cx="718" cy="126" r="64" fill="${scene.sun}" opacity="0.82"/>
    <circle cx="718" cy="126" r="98" fill="${scene.sun}" opacity="0.12"/>
    ${scene.shapes.join("\n")}
    <path d="M60 80 C190 52 280 84 420 60 C574 34 680 72 842 44" fill="none" stroke="${scene.accent}" stroke-width="3" opacity="0.28"/>
    <text x="58" y="570" fill="#fffdf4" font-family="Georgia, serif" font-size="44" font-weight="700" opacity="0.92">${scene.title}</text>
    <rect width="900" height="620" filter="url(#grain)"/>
  </svg>`;
}

for (const scene of scenes) {
  const output = path.join(outDir, scene.name);
  await sharp(Buffer.from(svg(scene))).png().toFile(output);
}

console.log(`Generated ${scenes.length} travel images in ${outDir}`);
