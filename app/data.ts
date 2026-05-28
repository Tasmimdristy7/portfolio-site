import {
  Award,
  BookOpenCheck,
  BrainCircuit,
  Camera,
  CheckCircle2,
  CloudCog,
  FlaskConical,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Map,
  Microscope,
  Plane,
  ShieldCheck,
  Sparkles,
  TestTube2,
} from "lucide-react";

export type PersonaId = "qa" | "research" | "story";

export type Highlight = {
  title: string;
  detail: string;
};

export type TimelineItem = {
  role: string;
  place: string;
  period: string;
  detail: string;
};

export type Project = {
  name: string;
  detail: string;
  tags: string[];
};

export type Persona = {
  id: PersonaId;
  label: string;
  landingSubtitle: string;
  shortLabel: string;
  icon: typeof ShieldCheck;
  eyebrow: string;
  headline: string;
  intro: string;
  accent: string;
  highlights: Highlight[];
  timelineTitle: string;
  timeline: TimelineItem[];
  projects: Project[];
};

export const contacts = [
  {
    label: "Email",
    href: "mailto:tasmim.rashid@ndus.edu",
    value: "tasmim.rashid@ndus.edu",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tasmimrashid",
    value: "linkedin.com/in/tasmimrashid",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Tasmimdristy7",
    value: "github.com/Tasmimdristy7",
    icon: Github,
  },
];

export const personas: Persona[] = [
  {
    id: "qa",
    label: "Experience",
    landingSubtitle: "Development • Testing • Security • AI Evaluation",
    shortLabel: "Experience",
    icon: ShieldCheck,
    eyebrow: "Release confidence, AI evaluation, and security-minded quality",
    headline: "I build test systems for products where reliability has to be proven.",
    intro:
      "Senior QA/SDET experience across eSIM telecom, AI/ML evaluation, Web3, cloud infrastructure, and healthtech, with automation and CI/CD as the operating center.",
    accent: "teal",
    highlights: [
      {
        title: "Automation across surfaces",
        detail:
          "Designed automated testing frameworks with Pytest, Playwright, and Patrol across API, web, and mobile platforms.",
      },
      {
        title: "Release stability",
        detail:
          "Led end-to-end QA for telecom services and integrated test workflows into CI/CD pipelines.",
      },
      {
        title: "Security-aware testing",
        detail:
          "Worked on Web3, cloud, healthtech, and AI systems where reliability, data integrity, and robustness matter.",
      },
    ],
    timelineTitle: "Professional Focus",
    timeline: [
      {
        role: "Senior Software Engineer in Test",
        place: "Truely, Singapore Remote",
        period: "Feb 2025 - Dec 2025",
        detail:
          "Led API, web, mobile, system-level, and B2B integration testing for eSIM telecommunications.",
      },
      {
        role: "Software QA Engineer, AI/ML",
        place: "LM Arena, USA Remote",
        period: "Nov 2024 - Feb 2025",
        detail:
          "Designed prompt-based evaluation strategies for correctness and robustness of LLM outputs.",
      },
      {
        role: "Senior Software QA Engineer",
        place: "Snickerdoodle Labs, USA Remote",
        period: "Jun 2022 - Nov 2024",
        detail:
          "Led Web3 QA and automation, increasing automation coverage to 85% and reducing regression time by 60%.",
      },
      {
        role: "Software QA Engineer",
        place: "Klover Cloud, Dhaka",
        period: "Oct 2021 - May 2022",
        detail:
          "Tested microservices, APIs, cloud infrastructure, and security-sensitive systems.",
      },
      {
        role: "Founding QA Engineer",
        place: "Ad Sastho Limited, Bangladesh",
        period: "Jun 2020 - Oct 2021",
        detail:
          "Built QA processes and testing infrastructure for healthtech reliability and data integrity.",
      },
    ],
    projects: [
      {
        name: "Bug / Issue Analysis Dashboard",
        detail:
          "Dashboards for analyzing defect patterns, reliability signals, and testing trends.",
        tags: ["Reliability", "Dashboards", "Defect analysis"],
      },
      {
        name: "LLM Test Suite",
        detail:
          "Automated framework for consistency, factuality, and robustness checks in LLM outputs.",
        tags: ["LLM eval", "Automation", "Robustness"],
      },
      {
        name: "PLR-HealthDefend",
        detail:
          "Pipelines for bias detection and reliability testing in healthcare AI systems.",
        tags: ["Healthcare AI", "Security", "Bias testing"],
      },
    ],
  },
  {
    id: "research",
    label: "Research",
    landingSubtitle: "ML Systems • Security • Testing & Evaluation • Trustworthy & Robust",
    shortLabel: "Research",
    icon: GraduationCap,
    eyebrow: "Software testing, formal verification, and trustworthy AI",
    headline: "I study how AI systems fail, then design ways to test them better.",
    intro:
      "Research interests span automated test generation, specification inference, formal verification, program analysis, robustness, and validation techniques for LLMs, vision models, and agentic AI.",
    accent: "green",
    highlights: [
      {
        title: "Accepted at IEEE ICST 2026",
        detail:
          "LLM2Alloy investigates LLM-generated formal specifications for automated test derivation in production software.",
      },
      {
        title: "Trustworthy AI systems",
        detail:
          "Focus on methods that evaluate reliability, robustness, and security of AI systems.",
      },
      {
        title: "Vision model robustness",
        detail:
          "Research collaborator experience studying CNN robustness under adversarial and distributional perturbations.",
      },
    ],
    timelineTitle: "Research Path",
    timeline: [
      {
        role: "Publication",
        place: "IEEE ICST 2026",
        period: "Accepted",
        detail:
          "LLM2Alloy: Investigating LLM-Generated Formal Specifications for Automated Test Derivation in Production Software.",
      },
      {
        role: "Research Collaborator",
        place: "CVIS Lab, BRAC University",
        period: "2019 - 2021",
        detail:
          "Built reproducible pipelines and studied adversarial machine learning, interpretability, and CNN robustness.",
      },
      {
        role: "Undergraduate Thesis",
        place: "BRAC University",
        period: "2021",
        detail:
          "Recall-Net: modified ResNet-50 model for Alzheimer disease classification with 94.3% accuracy on ADNI.",
      },
      {
        role: "BSc in Computer Science",
        place: "BRAC University, Dhaka",
        period: "2018 - 2022",
        detail:
          "Coursework included AI, neural networks, NLP, advanced algorithms, software engineering, and quantum computing.",
      },
    ],
    projects: [
      {
        name: "LLM2Alloy",
        detail:
          "Research on formal specification generation and automated test derivation for production software.",
        tags: ["Formal methods", "LLMs", "Test derivation"],
      },
      {
        name: "RobustVision",
        detail:
          "Adversarial and perturbation-based strategies for evaluating model robustness under distribution shifts.",
        tags: ["Computer vision", "Adversarial testing", "Robustness"],
      },
      {
        name: "Recall-Net",
        detail:
          "CNN-based Alzheimer disease classification using transfer learning and data augmentation.",
        tags: ["Medical AI", "ResNet-50", "Evaluation"],
      },
    ],
  },
  {
    id: "story",
    label: "Stories & Frames",
    landingSubtitle: "Moments • Frames • Writing",
    shortLabel: "Stories",
    icon: Camera,
    eyebrow: "Observation, movement, and the human side of technical work",
    headline: "I collect places, light, and small stories with the same care I bring to systems.",
    intro:
      "A softer lens for people who want to meet the curious human behind the test plans, papers, and release gates.",
    accent: "gold",
    highlights: [
      {
        title: "Travel journal energy",
        detail:
          "Warm visual notes, place-memory cards, and short captions designed to be replaced with real photos later.",
      },
      {
        title: "Story-first layout",
        detail:
          "A gallery that privileges mood, movement, texture, and reflection rather than a standard resume grid.",
      },
      {
        title: "Bridge persona",
        detail:
          "Connects creativity and technical rigor: observation, patience, framing, and the ability to notice detail.",
      },
    ],
    timelineTitle: "Story Notes",
    timeline: [
      {
        role: "Window Seat Notes",
        place: "Generated placeholder story",
        period: "Open draft",
        detail:
          "A quiet habit of noticing patterns from airports, streets, cafes, and the pauses between destinations.",
      },
      {
        role: "Field Light",
        place: "Generated placeholder story",
        period: "Open draft",
        detail:
          "Short photo essays can later hold real images, captions, and the story behind each frame.",
      },
      {
        role: "People and Systems",
        place: "Generated placeholder story",
        period: "Open draft",
        detail:
          "A personal essay space for how travel, research, and engineering sharpen each other.",
      },
    ],
    projects: [
      {
        name: "Corners of a City",
        detail:
          "A gallery placeholder for everyday architecture, light, and street-level details.",
        tags: ["Photo essay", "Urban texture", "Draft"],
      },
      {
        name: "Transit Diary",
        detail:
          "A story collection for airports, train rides, border crossings, and small acts of patience.",
        tags: ["Travel", "Journal", "Draft"],
      },
      {
        name: "Letters from the Road",
        detail:
          "An editable section for reflective writing, field notes, and future long-form pieces.",
        tags: ["Storytelling", "Notes", "Draft"],
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Testing",
    icon: CheckCircle2,
    items: ["Automated frameworks", "API testing", "E2E testing", "CI/CD workflows"],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    items: ["PyTorch", "TensorFlow", "scikit-learn", "HuggingFace Transformers"],
  },
  {
    title: "Security",
    icon: TestTube2,
    items: ["Adversarial testing", "Robustness evaluation", "System reliability"],
  },
  {
    title: "Systems",
    icon: CloudCog,
    items: ["Linux", "Docker", "Cloud systems", "Microservices"],
  },
];

export const researchInterests = [
  { label: "Software testing and program analysis", icon: FlaskConical },
  { label: "Formal verification and specification inference", icon: BookOpenCheck },
  { label: "AI system testing for LLMs, vision, and agents", icon: Microscope },
  { label: "Security, robustness, and adversarial evaluation", icon: Sparkles },
];

export const travelStories = [
  {
    title: "Cornsilk Morning",
    caption:
      "A placeholder for a quiet photo essay about early light, warm streets, and the first notes of a journey.",
    image: "/travel-cornsilk-morning.png",
  },
  {
    title: "Map Edges",
    caption:
      "A generated visual for future writing about route changes, small discoveries, and learning to look twice.",
    image: "/travel-map-edges.png",
  },
  {
    title: "Station Letters",
    caption:
      "A draft story card for transit memories, notebooks, and the calm of being between one place and another.",
    image: "/travel-station-letters.png",
  },
];

export const quickFacts = [
  { label: "Publication", value: "IEEE ICST 2026", icon: Award },
  { label: "Languages", value: "English, Bengali", icon: Globe2 },
  { label: "Base", value: "Dhaka roots, global remote work", icon: Map },
  { label: "Lens", value: "QA, research, stories", icon: Plane },
];
