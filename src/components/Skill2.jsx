// Skill.js
import React, { useState } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import './Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode,faTools, faBugSlash, faBrain, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';
const skillsData = [
  {
    title: 'Software Testing',
    experience: '4+ Years XP',
    skills: [
      { name: 'Test Strategy Planning', percent: '95%', class: 'test-strategy' },
      { name: 'Test Case Writing', percent: '95%', class: 'test-case-writing' },
      { name: 'Attention to Detail', percent: '95%', class: 'attention-to-detail' },
      { name: 'Manual Testing- BDD,TDD,DD,Regression,A/B', percent: '90%', class: 'manual-testing' },
      { name: 'Automated Testing', percent: '90%', class: 'automated-testing' },
      { name: 'Selenium WebDriver', percent: '90%', class: 'selenium' },
      { name: 'Test Framework Design', percent: '90%', class: 'test-framework-design' },
      { name: 'User Experience (UX) Testing', percent: '90%', class: 'ux-testing' },
      { name: 'User-Centric Design', percent: '90%', class: 'user-centric-design' },
      { name: 'Debugging Skills', percent: '90%', class: 'debugging' },
      { name: 'Cypress', percent: '85%', class: 'cypress' },
      { name: 'Performance Testing (JMeter,Locust)', percent: '85%', class: 'performance-testing' },
      { name: 'Usability Testing', percent: '85%', class: 'usability-testing' },
      { name: 'User Feedback Analysis', percent: '85%', class: 'user-feedback' },
      { name: 'API Testing (REST & Postman)', percent: '70%', class: 'api-testing' },
      { name: 'Security Testing (OWASP)', percent: '60%', class: 'security-testing' },
      { name: 'Mobile Testing (Appium)', percent: '65%', class: 'mobile-testing' },
      { name: 'Playwright', percent: '55%', class: 'playwright' },
      { name: 'CI/CD Integration', percent: '40%', class: 'ci-cd' },
  
      // Add more specialized testing and engineering skills as needed
    ],
  },
  
      {
        title: 'Product Development & Tools',
        experience: '2+ Years XP',
        skills: [
          { name: 'Requirements Gathering', percent: '80%', class: 'requirements-gathering' },
          { name: 'Wireframing and Prototyping', percent: '75%', class: 'wireframing-prototyping' },
          { name: 'Agile Methodology', percent: '70%', class: 'agile' },
          { name: 'User Stories', percent: '75%', class: 'user-stories' },
          { name: 'Product Backlog Management', percent: '70%', class: 'backlog-management' },
          { name: 'UI/UX Design Basics', percent: '25%', class: 'ui-ux-design' },
          { name: 'Jira', percent: '85%', class: 'Jira' },
          { name: 'Postman', percent: '75%', class: 'Postman' },
          { name: 'Version Control (Git)', percent: '90%', class: 'git' },
          { name: 'Command Line (Linux)', percent: '55%', class: 'linux' },

          // Add more tools and version control skills as needed
        ],
      },
      {
        title: 'Communtication & other',
        experience: '1+ Years XP',
        skills: [
          { name: 'Project Management', percent: '70%', class: 'project-management' },
          { name: 'Release Management', percent: '75%', class: 'release-management' },
          { name: 'Communication', percent: '95%', class: 'communication' },
          { name: 'Problem Solving', percent: '85%', class: 'problem-solving' },
          { name: 'Leadership', percent: '80%', class: 'leadership' },
          { name: 'Analytical Ability', percent: '90%', class: 'analytical-ability' },
          { name: 'Critical Thinking', percent: '85%', class: 'critical-thinking' },
          { name: 'Release Management', percent: '80%', class: 'release-management' },
          { name: 'Documentation', percent: '80%', class: 'release-management' },
          
          // Add more backend skills as needed
        ],
      },
  // Add more categories and skills as needed
];

// ...

const Skill = () => {
  const [openDrawerIndex, setOpenDrawerIndex] = useState(null);

  const toggleDrawer = (index) => {
    setOpenDrawerIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Map titles to FontAwesome icons
  const titleToIcon = {
    'Programming Languages': faCode,
    'Software Testing': faBugSlash,
    'Software Development': faLaptopCode,
    'AI & Data Science': faBrain,
    'Product Developmet & Tools': faTools,
    'Communtication & other': faMagicWandSparkles,
    // Add more mappings as needed
  };

    return (
        <div className="skills__container">
          <SimpleGrid columns={1} spacing={10}>
            {skillsData.map((category, index) => (
              <Box key={index} className={`skills__content ${openDrawerIndex === index ? 'skills__open' : ''}`}>
                <div className="skills__header" onClick={() => toggleDrawer(index)}>
                  <div>
                    <h1 className="skills__title">
                      <FontAwesomeIcon icon={titleToIcon[category.title]} className="skills__icon" />
                      {category.title}
                    </h1>
                    <span className="skills__subtitle">{category.experience}</span>
                  </div>
                  {/* You can add an icon or other content here if needed */}
                </div>
    
                <div className={`skills__list ${openDrawerIndex === index ? 'skills__open' : 'skills__hide'}`}>
                <SimpleGrid columns={[1, 3]} spacing={4}>
                {category.skills.map((skill) => (
                    <div key={skill.name} className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">{skill.name}</h3>
                        <span className="skills__number">{skill.percent}</span>
                      </div>
                      <div className="skills__bar">
                        <span className={`skills__percentage skills__${skill.class}`}></span>
                      </div>
                    </div>
                  
                  ))}
                </SimpleGrid>
                  
                </div>
              </Box>
            ))}
          </SimpleGrid>
        </div>
      );
};

export default Skill;