// App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home'; // Add this line
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      { <Header /> }
      <Home /> {/* Add this line */}
      {/* <About />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
