export const personal = {
  name: "Tasmim Rashid",
  title: "Software Engineering & SDET Intern Candidate",
  subtitle: "MS Software Engineering & Security @ NDSU — Seeking Summer 2027 Software Engineering, SDET, AI Evaluation & Security Testing Internships",
  tagline: "Testing trustworthy AI,\nsecurity, data, and systems.",
  location: "Dhaka, Bangladesh",
  available: true,
  email: "tasmim.rashid.dristy@gmail.com",
  linkedin: "https://linkedin.com/in/tasmimrashid",
  github: "https://github.com/Tasmimdristy7",
  portfolio: "https://tasmimrashid.com",
};

export const stats = [
  { value: 85, suffix: "%", label: "Coverage Achieved", bar: 85 },
  { value: 60, suffix: "%", label: "Regression Time Saved", bar: 60 },
  { value: 5, suffix: "+", label: "Years Remote", bar: 100 },
];

export const impact = [
  { value: 85, suffix: "%", label: "Automation Coverage" },
  { value: 60, suffix: "%", label: "Regression Time Reduced" },
  { value: 15, suffix: "+", label: "Services Validated" },
  { value: 5, suffix: "+", label: "Years Remote" },
];

export const skills = [
  {
    category: "Programming Skills",
    headline: "Languages across engineering, data, and automation",
    tools: ["Python", "TypeScript", "Java", "SQL", "Bash"],
    proof: "5+ years writing Python and TypeScript across automation frameworks, data analysis scripts, ML pipelines, API clients, and CI/CD tooling.",
  },
  {
    category: "Data Science & ML",
    headline: "From data analysis to model building and evaluation",
    tools: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "MediaPipe", "Streamlit", "Jupyter", "SQL"],
    proof: "Built ML models for injury risk prediction using Random Forest and Gradient Boosting on pose estimation data; performed defect pattern analysis with pandas and seaborn; applied K-means, DBSCAN, and GMM clustering to customer segmentation datasets.",
  },
  {
    category: "AI & LLM Testing",
    headline: "Trustworthy AI validation for LLM and ML behavior",
    tools: ["LLM Testing", "Prompt Evaluation", "Model Output Validation", "Robustness Testing", "Edge Cases"],
    proof: "Validated consistency, accuracy, safety-sensitive behavior, and non-deterministic model outputs with repeatable Python-based test harnesses at LM Arena.",
  },
  {
    category: "Automation Frameworks",
    headline: "Production-grade framework design across UI, API, and regression",
    tools: ["Playwright", "Selenium", "Pytest", "Cucumber", "POM", "Allure", "Framework Architecture"],
    proof: "Built reusable automation frameworks with parallel execution, reporting, retries, trace capture, and CI-ready structure — from zero to 85% coverage.",
  },
  {
    category: "Backend & API Systems",
    headline: "Deep understanding of how backend systems behave and break",
    tools: ["REST APIs", "Postman", "JSON Schema", "Microservices", "Contract Testing", "Database Testing", "SQL"],
    proof: "Validated 15+ services across auth flows, payload contracts, database records, and integration behavior — including production database analysis with SQL at Truely.",
  },
  {
    category: "Security",
    headline: "Security testing across authentication, APIs, and access control",
    tools: ["Auth Testing", "Access Control", "Permission Testing", "API Security", "Vulnerability Testing", "Risk-Based Testing"],
    proof: "Hands-on security testing across auth flows, permission boundaries, API risks, and security-sensitive workflows.",
  },
  {
    category: "CI/CD & DevOps",
    headline: "Quality gates that run where teams actually ship",
    tools: ["GitHub Actions", "Docker", "Git", "Pipeline Debugging", "Test Reports"],
    proof: "Wired automated suites into CI/CD so failures are visible, actionable, and tied to release confidence across multiple production teams.",
  },
  {
    category: "Leadership & Delivery",
    headline: "Project and people coordination for release confidence",
    tools: ["Test Strategy", "Project Coordination", "Release Planning", "Bug Triage", "Stakeholder Communication", "Remote Collaboration"],
    proof: "Strong at planning work, communicating risk, aligning teams, and explaining what broke without making everyone panic.",
  },
];

export const skillTags = [
  "Python", "TypeScript", "Pandas", "Scikit-learn", "Jupyter",
  "Playwright", "Pytest", "Selenium", "LLM Testing", "Prompt Evaluation",
  "REST API Testing", "SQL", "GitHub Actions", "Docker",
  "Security Testing", "Auth Testing", "CI/CD Integration",
  "Automation Frameworks", "Page Object Model", "Cucumber / BDD",
];

export const experience = [
  {
    company: "Truely",
    role: "Senior Software Developer in Test",
    location: "Singapore",
    type: "Remote",
    dates: "Feb 2025 — Dec 2025",
    bullets: [
      "Built automation frameworks across web, mobile, and API workflows",
      "Stabilized auth, API integrations, and critical user journeys",
      "Designed risk-based regression suites to reduce production defect risk",
      "Used SQL to surface data patterns, validate records, and support debugging across production databases",
      "Integrated GitHub Actions quality gates for continuous validation",
      "Async collaboration across Singapore–Dhaka time zones",
    ],
  },
  {
    company: "LM Arena",
    role: "Software Developer in Test",
    location: "USA",
    type: "Contract",
    dates: "Nov 2024 — Jan 2025",
    bullets: [
      "Automated API validation suites for an AI evaluation platform",
      "Built edge-case checks for non-deterministic LLM outputs",
      "Strengthened CI/CD quality gates with distributed engineering team",
    ],
  },
  {
    company: "Snickerdoodle Labs",
    role: "Senior Software Developer in Test",
    location: "USA",
    type: "Remote",
    dates: "Jun 2022 — Nov 2024",
    bullets: [
      "Built and owned the automation framework for a blockchain product ecosystem",
      "Led multichain testing across wallet, transaction, API, and integration workflows",
      "Grew automation coverage 20% → 85% across UI, API, and blockchain workflows",
      "Redesigned regression suite — 60% faster execution with Allure reporting in CI",
    ],
  },
  {
    company: "Klover Cloud",
    role: "Software QA Engineer",
    location: "Dhaka",
    type: "On-site",
    dates: "Nov 2021 — May 2022",
    bullets: [
      "Selenium-based UI automation for core product workflows",
      "API and integration testing across microservices",
      "Validated security-sensitive flows and vulnerability risks",
    ],
  },
  {
    company: "Shastho Limited",
    role: "Software QA Engineer",
    location: "Dhaka",
    type: "On-site",
    dates: "Jun 2020 — Oct 2021",
    bullets: [
      "Built QA processes and automation strategy from zero for web and mobile releases",
      "UI, API, and integration testing for web and mobile",
    ],
  },
];

export const projects = [
  {
    num: "01",
    name: "Injury Risk Prediction",
    desc: "ML system that processes athlete video to predict injury risk. Uses MediaPipe pose estimation, scikit-learn (Random Forest, Gradient Boosting), and Streamlit — outputs Low/Medium/High risk scores with frame-level predictions.",
    tags: ["Python", "Scikit-learn", "MediaPipe", "Streamlit", "ML"],
    url: "https://github.com/Tasmimdristy7/injury-risk-prediction",
    category: "Data Science & ML",
  },
  {
    num: "02",
    name: "Bug Issue Analysis",
    desc: "Data analysis of JIRA issue records using Python, pandas, and seaborn — surfacing resolution time patterns, issue frequency distribution, and resource allocation insights.",
    tags: ["Python", "Pandas", "Data Analysis", "Seaborn"],
    url: "https://github.com/Tasmimdristy7/bug-issue-analysis",
    category: "Data Science & ML",
  },
  {
    num: "03",
    name: "PLR-HealthDefend",
    desc: "Anomaly detection system for healthcare federated learning using penultimate layer representations — detects malicious or corrupted model updates without exposing patient data.",
    tags: ["Python", "Federated Learning", "Anomaly Detection", "Healthcare", "ML"],
    url: "https://github.com/Tasmimdristy7/PLR-HealthDefend",
    category: "Data Science & ML",
  },
  {
    num: "04",
    name: "Mall Customer Clustering",
    desc: "Unsupervised learning study applying K-means, DBSCAN, and Gaussian Mixture Models to customer segmentation data — comparing clustering approaches and behaviour patterns.",
    tags: ["Python", "K-means", "DBSCAN", "GMM", "Clustering"],
    url: "https://github.com/Tasmimdristy7/mall-models",
    category: "Data Science & ML",
  },
  {
    num: "04",
    name: "LLM Output Testing",
    desc: "Test harness for validating LLM outputs — consistency, accuracy, and edge cases in non-deterministic model behaviour.",
    tags: ["LLM", "AI Testing", "Python"],
    url: "https://github.com/Tasmimdristy7/llmtest",
    category: "AI Testing & Engineering",
  },
  {
    num: "05",
    name: "Advanced Testing Framework",
    desc: "Production-grade automation framework with POM, parallel execution, Allure reporting, and GitHub Actions CI. Enterprise-scale E2E architecture.",
    tags: ["Automation Framework", "Python", "CI/CD"],
    url: "https://github.com/Tasmimdristy7/advanced-testing-framework",
    category: "AI Testing & Engineering",
  },
  {
    num: "06",
    name: "Star Wars API Suite",
    desc: "Python + Pytest REST framework validating SWAPI endpoints with schema validation and coverage tracking.",
    tags: ["Python", "Pytest", "REST API"],
    url: "https://github.com/Tasmimdristy7/star_wars_api-test",
    category: "AI Testing & Engineering",
  },
  {
    num: "07",
    name: "Compatibility Framework",
    desc: "Cross-browser, cross-OS framework validating behaviour across Chromium, Firefox, and WebKit on all platforms.",
    tags: ["Cross-browser", "Automation"],
    url: "https://github.com/Tasmimdristy7/application-compatibility-testing-framework",
    category: "AI Testing & Engineering",
  },
  {
    num: "08",
    name: "QA Lifecycle Suite",
    desc: "Full SDLC/STLC coverage — unit, integration, regression, exploratory. Structured test plans and defect tracking integration.",
    tags: ["SDLC", "Regression", "Reporting"],
    url: "https://github.com/Tasmimdristy7/qa-lifecycle-suite",
    category: "QA & Automation",
  },
  {
    num: "09",
    name: "Amazon E2E Automation",
    desc: "E2E automation covering search, cart, and checkout flows with Page Object Model and data-driven parameterisation.",
    tags: ["E2E Automation", "POM", "Data-Driven"],
    url: "https://github.com/Tasmimdristy7/Amazon-automation",
    category: "QA & Automation",
  },
  {
    num: "10",
    name: "Cucumber BDD Login",
    desc: "BDD auth suite with Cucumber & Gherkin — positive/negative login flows, session handling, permission validation.",
    tags: ["Cucumber", "BDD", "Gherkin"],
    url: "https://github.com/Tasmimdristy7/Cucumber-login-automation",
    category: "QA & Automation",
  },
  {
    num: "11",
    name: "macOS UI Test Suite",
    desc: "Native macOS UI automation — desktop workflows, accessibility validation, and platform-specific behaviour.",
    tags: ["macOS", "UI Automation", "a11y"],
    url: "https://github.com/Tasmimdristy7/macOSUITest",
    category: "QA & Automation",
  },
];
