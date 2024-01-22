// import React, { useState, useEffect } from 'react';
// import { Box, Link, Flex } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
// import './Home.css'; // Import your CSS file

// const Home = () => {
//   const [visibleText1, setVisibleText1] = useState('');
//   const [visibleText2, setVisibleText2] = useState('');
//   const [showScrollIndicator, setShowScrollIndicator] = useState(false);
//   const [animateScrollIndicator, setAnimateScrollIndicator] = useState(false);

//   const textToAppear1 = "Hi, I am Tasmim Rashid.";
//   const textToAppear2 = "I am a Software Test Engineer. Besides that, I do so many other things too. Let's take a stroll through my portfolio to see if our paths align.";

//   useEffect(() => {
//     const appearInterval = 50; // Adjust as needed

//     let currentIndex = 0;

//     // Animation for textToAppear1
//     const text1AnimationControl = setInterval(() => {
//       if (currentIndex < textToAppear1.length) {
//         setVisibleText1((prevVisibleText1) => textToAppear1.slice(0, prevVisibleText1.length + 1));
//       } else {
//         clearInterval(text1AnimationControl);

//         // Animation for textToAppear2
//         const text2AnimationControl = setInterval(() => {
//           if (currentIndex < textToAppear2.length) {
//             setVisibleText2((prevVisibleText2) => textToAppear2.slice(0, prevVisibleText2.length + 1));
//           } else {
//             clearInterval(text2AnimationControl);
//             setShowScrollIndicator(true);
//           }
//           currentIndex += 1;
//         }, appearInterval);
//       }
//       currentIndex += 1;
//     }, appearInterval);

//     return () => {
//       clearInterval(text1AnimationControl);
//       clearInterval(text1AnimationControl); // Corrected the cleanup function
//     };
//   }, [visibleText1, visibleText2, textToAppear1, textToAppear2]);

//   useEffect(() => {
//     if (showScrollIndicator) {
//       setAnimateScrollIndicator(true);
//     }
//   }, [showScrollIndicator]);

//   return (
//     <Box className="main-box">
//       <Flex direction="column" alignItems="center">
//         <Box className="lines-box">
//           {visibleText1 && (
//             <motion.p
//               className={`paragraph${animateScrollIndicator ? ' animate' : ''}`}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               style={{ fontSize: '24px' }} // Adjust the font size as needed
//             >
//               {visibleText1}
//             </motion.p>
//           )}

//           {visibleText2 && (
//             <motion.p
//               className={`paragraph${animateScrollIndicator ? ' animate' : ''}`}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               style={{ fontSize: '18px' }} // Adjust the font size as needed
//             >
//               {visibleText2}
//             </motion.p>
//           )}
//         </Box>

//         {showScrollIndicator && (
//           <Box className="scroll-indicator-box">
//             <Link
//               href="#demo"
//               className={`scroll-indicator${animateScrollIndicator ? ' animate' : ''}`}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Box as="svg" className="arrows" viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
//                 <motion.path className="a1" d="M0 0 L30 32 L60 0"></motion.path>
//                 <motion.path className="a2" d="M0 20 L30 52 L60 20"></motion.path>
//                 <motion.path className="a3" d="M0 40 L30 72 L60 40"></motion.path>
//               </Box>
//             </Link>
//           </Box>
//         )}
//       </Flex>
//     </Box>
//   );
// };// Skill.js
// <div className={`skills__list ${openDrawerIndex === index ? 'skills__open' : 'skills__hide'}`}>
//               <div>{category.skills.slice(0,Math.floor(category.skills.length/3)).map((skill) => (
//                 <div key={skill.name} className="skills__data">
//                   <div className="skills__titles">
//                     <h3 className="skills__name">{skill.name}</h3>
//                   </div>
//                 </div>
//               ))}</div>
//                <div>{category.skills.slice(Math.floor(category.skills.length/3),Math.floor(category.skills.length/3*2)).map((skill) => (
//                 <div key={skill.name} className="skills__data">
//                   <div className="skills__titles">
//                     <h3 className="skills__name">{skill.name}</h3>
//                   </div>
//                 </div>
//               ))}</div>
//                <div>{category.skills.slice(Math.floor(category.skills.length/3*2)).map((skill) => (
//                 <div key={skill.name} className="skills__data">
//                   <div className="skills__titles">
//                     <h3 className="skills__name">{skill.name}</h3>
//                   </div>
//                 </div>
//               ))}</div>
//             </div>





// .skills__container {
//   width: 80%;
//   height: 100%;
//   margin: 0 auto;
//   padding: 20px;
//   box-sizing: border-box;
// }

// .skills__box {
//   padding: 20px;
//   margin: 10px;
//   transition: all 0.3s ease-in-out;
//   background-color: cornsilk;
//   margin-bottom: 30px;
//   height: 200px;
//   font-family: 'Libre Baskerville', sans-serif;
//   font-size: 20px;
//   font-weight: bolder;
//   /* Add a border */
//   /* Add border-radius for rounded corners */
// }

// .skills__header {
//   font-family: 'Libre Baskerville', sans-serif;
//   font-size: 18px;
//   font-weight: bolder;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 0;
//   cursor: pointer;
//   display: flex;
//   border: 2px solid #0f0e0e;
// }

// .title_css {
//   margin-left: 10px;
//   margin-right: 10px;
// }

// .skills__title {
//   font-size: 24px;
//   font-weight: bold;
// }

// .skills__subtitle {
//   font-size: 18px;
//   color: #999;
//   font-family: 'Ralway', sans-serif;
//   font-size: 20px;
//   font-weight: bolder;
// }

// .skills__list {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 20px;
//   transition: all 0.3s ease-in-out;
// }

// .skills__data {
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// }

// .skills__titles {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 10px;
// }

// .skills__name {
//   font-size: 18px;
//   font-weight: bold;
// }

// .skills__number {
//   font-size: 16px;
//   color: #999;
// }

// .skills__bar {
//   height: 10px;
//   background-color: #eee;
//   border-radius: 5px;
//   overflow: hidden;
// }

// .skills__percentage {
//   display: block;
//   height: 100%;
//   background-color: #333;
// }


// /* Specific styles for skill classes */

// .skills__python {
//   width: 95%;
// }

// .skills__java {
//   width: 80%;
// }

// .skills__html {
//   width: 90%;
// }

// .skills__js {
//   width: 75%;
// }

// .skills__react {
//   width: 85%;
// }

// .skills__intro-ml {
//   width: 60%;
// }

// .skills__basic-stats {
//   width: 55%;
// }

// .skills__data-cleaning {
//   width: 50%;
// }

// .skills__data-viz {
//   width: 50%;
// }

// .skills__intro-nn {
//   width: 45%;
// }

// .skills__basic-sql {
//   width: 40%;
// }

// .skills__node {
//   width: 80%;
// }

// .skills__firebase {
//   width: 60%;
// }

// .skills__git {
//   width: 90%;
// }

// .skills__linux {
//   width: 90%;
// }

// .skills__hide {
//   display: none;
// }

// .skills__icon {
//   margin-right: 10px;
//   margin-top: 10px;
// }

// // projectsData.js (consider renaming to follow conventions)
// const softwareTestingProjects = [
//   {
//     imageSrc: "https://via.placeholder.com/150",
//     title: "Amazon-site Automation",
//     details: "Selenium-based Automation Framework for Amazon Shopping - Implements the Page Object Model (POM) structure for maintainability. - Supports API testing using the Requests library. - Integrates Selenium for front-end testing of Amazon's shopping functionalities.",
//     stacks: 'Stack : Python, Selenium webdrive',
//     githubLink: "https://github.com/Tasmimdristy7/Amazon-automation",
//     category: "Software Testing",
//   },
//   {
//     imageSrc: "https://via.placeholder.com/150",
//     title: "Basic Playwright Automation",
//     details: "This automation script uses Playwright with TypeScript to automate a simple browser task. The task involves opening a website, navigating to a specific page, and interacting with an element on that page.",
//     stacks: 'Stack : Typescript, Playwright',
//     githubLink: "https://github.com/Tasmimdristy7/footium-qa",
//     category: "Software Testing",
//   },
//   {
//     imageSrc: "https://via.placeholder.com/150",
//     title: "BDD Login Automation with Cucumber in Python",
//     details: "Tests web application login functionality using Cucumber in Python. Gherkin syntax facilitates collaboration, expressing scenarios clearly. 'login.feature' outlines Given-When-Then steps, defining behavior. Python step definitions interpret Gherkin, managing login interactions and result verification. Cucumber in Python promotes reusable steps, maintaining a separation between scenarios and code. Generates readable reports for collaborative testing. This foundational login script in Python serves as a basis for expanding coverage and features, ensuring reliable web application login functionality.",
//     stacks: "Stack: Python, Cucumber",
//     githubLink: "https://github.com/Tasmimdristy7/Cucumber-login-automation",
//     category: "Software Testing",
//   },
//   // Add more Software Testing projects...
// ];

// const mlDsProjects = [
//   {
//     imageSrc: "https://via.placeholder.com/150",
//     title: "Customer chatbot",
//     details: "We've built a smart chatbot using Python and PyTorch. It understands and responds to conversations naturally, making it a helpful virtual companion.",
//     stacks: "Stack: Python, PyTorch", // Updated stacks for clarity
//     githubLink: "https://github.com/Tasmimdristy7/Chatbot-Hotelmanagement.io",
//     category: "Ml / DS",
//   },
// ];
// const softwareDevelopmentProjects = [
//   {
//     imageSrc: "https://via.placeholder.com/150",
//     title: "Software Development Project 1",
//     details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     githubLink: "https://github.com/your-username/software-development-project1",
//     category: "Software Development",
//   },
//   // Add more Software Development projects...
// ];

// const projectCategories = ["Software Testing", "ML/DS", "Software Development"];

// const allProjects = [
//   ...softwareTestingProjects,
//   ...mlDsProjects,
//   ...softwareDevelopmentProjects,
// ];

// export { projectCategories, allProjects };
