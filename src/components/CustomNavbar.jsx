// CustomNavbar.js
import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'; // Import your CSS file

const CustomNavbar = () => {
  const [activeTab, setActiveTab] = useState('home'); // Track active tab

  useEffect(() => {
    // Add a delay to the appearance of the navbar after 3 seconds (adjust as needed)
    const delay = setTimeout(() => {
      document.querySelector('.custom-navbar').style.opacity = 1;
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
  };

  const getNavClass = (tab) => `nav-link ${tab.toLowerCase()}`;

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link
              href="#Tasmim"
              className={getNavClass('Home') + (activeTab === 'home' ? ' active' : '')}
              onClick={() => handleNavClick('home')}
            >
              Tasmim Rashid
            </Nav.Link>
            {/* Underline element with transition for 'Tasmim Rashid' link */}
            <div className="line" style={{ left: 0, width: activeTab === 'home' ? '100%' : 0, transition: 'width 0.3s ease-in-out' }}></div>
          </Nav.Item>
        </Nav>
        <Nav>
          {[
            { tab: 'Skills', link: '#Skills' }, // Update the link for 'Skills'
            { tab: 'Projects', link: '#projects' },
            { tab: 'Work & Academia', link: '#Experience' },
            { tab: 'Research Work', link: '#research' },
            { tab: 'Contact', link: '#contact' },
          ].map(({ tab, link }) => (
            <Nav.Item key={tab}>
              <Nav.Link
                href={link}
                className={getNavClass(tab) + (activeTab === tab.toLowerCase() ? ' active' : '')}
                onClick={() => handleNavClick(tab.toLowerCase())}
              >
                {tab}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Underline element with transition for other links */}
        <div className="line" style={{ left: 0, width: activeTab !== 'home' ? '100%' : 0, transition: 'width 0.3s ease-in-out' }}></div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
