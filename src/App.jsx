import React from 'react';
import { Text } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNavbar from './Components/CustomNavbar';
import Home from './Components/Home';
import SkillsSection from './Components/SkillsSection.jsx';
import Experience from './Components/Experience';
import Projects from './Components/Projects'; 
import Contact from './Components/ContactMe';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResearchWork from './Components/ResearchWork'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your global styles

import Intro from './Components/Intro';
import { Heading } from '@chakra-ui/react'; // Import Heading from Chakra UI

function App() {
  return (
    <div className="app-container">
      <CustomNavbar />
      <Intro />
      <SkillsSection  />
     
     
      <Projects />
      
      
      <Heading id='Experience' textAlign="center" className="work-experience-heading">
        Work & Academia
      </Heading>
      <Text className='skills-description 'textAlign="center" marginBottom={35}marginTop={-15}>These are the Places I worked and Gathered Knowledge</Text>
      {/* Add the Experience component */}
      <Experience />
      {/* <ResearchWork></ResearchWork> */}
      <Heading id="Tasmim" textAlign="center" className="work-experience-heading">
        More About me?
      </Heading>
      <Home />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
