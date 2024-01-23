// Skill.js
import React, { useState } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import './Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode,faTools, faBugSlash, faBrain, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';
const skillsData = [
  {
    title: 'Programming Languages',
    experience: '4+ Years XP',
    skills: [
      { name: 'Python', percent: '90%', class: 'python' },
      { name: 'Java', percent: '50%', class: 'java' },
      { name: 'HTML & CSS', percent: '80%', class: 'html' },
      { name: 'JavaSript (learning)', percent: '30%', class: 'js' },
      { name: 'React', percent: '20%', class: 'react' },
      // Add more frontend skills as needed
    ],
  },
  {
    title: 'AI & Data Science (Beginner)',
    experience: '1+ Years XP',
    skills: [
      { name: 'Intro to ML', percent: '60%', class: 'intro-ml' },
      { name: 'Basic Statistics', percent: '55%', class: 'basic-stats' },
      { name: 'Data Cleaning & Preprocessing', percent: '50%', class: 'data-cleaning' },
      { name: 'Data Visualization (Seaborn)', percent: '50%', class: 'data-viz' },
      { name: 'Neural Networks', percent: '45%', class: 'intro-nn' },
      { name: 'Natural Languge Processing', percent: '45%', class: 'intro-nn' },
      { name: 'Basic SQL', percent: '40%', class: 'basic-sql' },
      // Add more beginner-level AI & Data Science skills as needed
    ],
  },
  
  
  
  {
    title: 'Software Development',
    experience: '1+ Years XP',
    skills: [
      { name: 'Python - Flask, Fast API', percent: '30%', class: 'python1' },
      { name: 'HTML - CSS,Mysql', percent: '60%', class: 'html-css' },
      { name: 'Database - Mysql,MongoBd', percent: '40%', class: 'db-mysql-mongodb ' },
      { name: 'Web3 knowledge - Chain service,Smart Contract', percent: '30%', class: 'python-web3' },
    
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
    'AI & Data Science (Beginner)': faBrain,
    'Product Development & Tools': faTools,
    'Communtication & other': faMagicWandSparkles,
    // Add more mappings as needed
  };

  return (
    <div className="skills__container" id='Skills'>
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