// projectsData.js (consider renaming to follow conventions)
const softwareTestingProjects = [
  {
    imageSrc: "https://via.placeholder.com/150",
    title: "Amazon-site Automation",
    details: "Selenium-based Automation Framework for Amazon Shopping - Implements the Page Object Model (POM) structure for maintainability. - Supports API testing using the Requests library. - Integrates Selenium for front-end testing of Amazon's shopping functionalities.",
    stacks: 'Stack : Python, Selenium webdrive',
    githubLink: "https://github.com/Tasmimdristy7/Amazon-automation",
    category: "Software Testing",
  },
  {
    imageSrc: "https://via.placeholder.com/150",
    title: "Basic Playwright Automation",
    details: "This automation script uses Playwright with TypeScript to automate a simple browser task. The task involves opening a website, navigating to a specific page, and interacting with an element on that page.",
    stacks: 'Stack : Typescript, Playwright',
    githubLink: "https://github.com/Tasmimdristy7/footium-qa",
    category: "Software Testing",
  },
  {
    imageSrc: "https://via.placeholder.com/150",
    title: "BDD Login Automation with Cucumber in Python",
    details: "Tests web application login functionality using Cucumber in Python. Gherkin syntax facilitates collaboration, expressing scenarios clearly. 'login.feature' outlines Given-When-Then steps, defining behavior. Python step definitions interpret Gherkin, managing login interactions and result verification. Cucumber in Python promotes reusable steps, maintaining a separation between scenarios and code. Generates readable reports for collaborative testing. This foundational login script in Python serves as a basis for expanding coverage and features, ensuring reliable web application login functionality.",
    stacks: "Stack: Python, Cucumber",
    githubLink: "https://github.com/Tasmimdristy7/Cucumber-login-automation",
    category: "Software Testing",
  },
  // Add more Software Testing projects...
];

const mlDsProjects = [
  {
    imageSrc: "https://via.placeholder.com/150",
    title: "Customer chatbot",
    details: "We've built a smart chatbot using Python and PyTorch. It understands and responds to conversations naturally, making it a helpful virtual companion.",
    stacks: "Stack: Python, PyTorch", // Updated stacks for clarity
    githubLink: "https://github.com/Tasmimdristy7/Chatbot-Hotelmanagement.io",
    category: "Machine Learning/Data Science",
  },
  {
    imageSrc: "https://via.placeholder.com/150",
    title: "Mall-Business Data Analysis",
    details: "I have conducted data analysis using various clustering techniques, including K-means clustering, DBSCAN (Density-Based Spatial Clustering of Applications with Noise), and a Gaussian model to uncover patterns and insights within customer purchase data for a retail business in a mall setting.",
    stacks: "Stack: Python, K-means clustering, DBSCAN", // Updated stacks for clarity
    githubLink: "https://github.com/Tasmimdristy7/Chatbot-Hotelmanagement.io",
    category: "Machine Learning/Data Science",
  },
];
const softwareDevelopmentProjects = [
  {
    imageSrc: "https://via.placeholder.com/150",
    title: "Trekmate",
    details: "This Project is an adventure shopping and destination platforms website.",
    stacks: "Stack: HTML,CSS,PHP,javaScript",
    githubLink: "https://github.com/Tasmimdristy7/trekkmate.github.io",
    category: "Software Development",
  },
  // Add more Software Development projects...
];

const projectCategories = ["Software Testing", "Machine Learning/Data Science", "Software Development"];

const allProjects = [
  ...softwareTestingProjects,
  ...mlDsProjects,
  ...softwareDevelopmentProjects,
];

export { projectCategories, allProjects };
