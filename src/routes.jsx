import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CustomNavbar from './Components/CustomNavbar';
import Home from './Components/Home';
import SkillsSection from './Components/SkillsSection';
import Experience from './Components/Experience';
import Projects from './Components/Projects'; 
import Contact from './Components/ContactMe';
import Footer from './Components/Footer';
import ResearchWork from './Components/ResearchWork'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the About component if it exists
// Replace 'About' with the actual path to your About component
import About from './Components/About'; 

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <CustomNavbar />
        <Route path="/portfolio-site/about" component={About} />
        <Route path="/portfolio-site/contact" component={Contact} />
        <Route path="/portfolio-site/skills" component={SkillsSection} />
        <Route path="/portfolio-site/experience" component={Experience} />
        <Route path="/portfolio-site/projects" component={Projects} />
        <Route path="/portfolio-site/research" component={ResearchWork} />
        <Route exact path="/portfolio-site" component={Home} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Routes;
