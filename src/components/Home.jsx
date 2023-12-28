// Home.js
import React, { useState, useEffect, useMemo } from 'react';
import './Home.css'; // Import your CSS file

const Home = () => {
  const lines = useMemo(() => [
    "Hi, I am Tasmim Rashid",
    "I am a Software Test Engineer.",
    "Besides that, I do so many other things too.",
    "Let's take a stroll through my portfolio to see if our paths align.",
  ], []);

  const [visibleLine, setVisibleLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('appearing');
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [animateScrollIndicator, setAnimateScrollIndicator] = useState(false);
  const [shouldKeepAppearing, setShouldKeepAppearing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!shouldKeepAppearing) {
        clearInterval(interval);
        setShowScrollIndicator(true);
        return;
      }

      switch (animationPhase) {
        case 'appearing':
          if (visibleLine.length < lines[lineIndex].length) {
            setVisibleLine((prevVisibleLine) =>
              lines[lineIndex].slice(0, prevVisibleLine.length + 1)
            );
          } else {
            setAnimationPhase('pausing');
          }
          break;

        case 'pausing':
          setTimeout(() => {
            setAnimationPhase('disappearing');
          }, 1000);
          break;

        case 'disappearing':
          if (visibleLine.length > 0) {
            setVisibleLine((prevVisibleLine) => prevVisibleLine.slice(0, -1));
          } else {
            setLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
            if (lineIndex === lines.length - 1) {
              // Last line disappeared
              setShouldKeepAppearing(false);
            }
            setAnimationPhase('appearing');
          }
          break;

        default:
          // Handle unexpected values
          break;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [visibleLine, lineIndex, lines, animationPhase, shouldKeepAppearing]);

  // Handle the scroll down indicator animation
  useEffect(() => {
    if (showScrollIndicator) {
      setAnimateScrollIndicator(true);
    }
  }, [showScrollIndicator]);

  return (
    <div className="home-container">
      <h1 className={animationPhase === 'disappearing' ? 'fade-out' : ''}>
        {visibleLine}
      </h1>
      {showScrollIndicator && (
        <div className={`scroll-down-indicator${animateScrollIndicator ? ' animate' : ''}`}>
          {/* Use an arrow-down icon or any other indicator */}
          <span className="arrow-down">&#9660;</span>
        </div>
      )}
    </div>
  );
};

export default Home;
