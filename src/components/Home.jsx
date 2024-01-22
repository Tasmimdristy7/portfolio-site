// Home.js
import React from "react";
import "./Home.css"; // Import your CSS file
import yourPhoto from "./Pic1.png"; // Adjust the file extension based on your photo type

const Home = () => {
  return (
    <div className="container" >
      <div className="photo-card">
        <img src={yourPhoto} alt="Your Name" className="photo" />
      </div>
      <div className="main-card">
        <div className="profile-info">
          <div className="name">TASMIM RASHID</div>
          <div className="profession">
            Software Test Engineer | Machine learning and Data Science
            Enthusiast | Researcher | Aspiring Product Manager
          </div>
          <div className="description">
            I am Tasmim Rashid, your friendly neighborhood Software Test
            Engineer. I don't just find bugs; I also make sure to eliminate them
            with precision - consider it bug hunting and shooting! At 24 years
            old, I hold a degree in Computer Science and boast nearly four years
            of experience as a Software Test Engineer. While I've had a brief
            stint as a Software Developer, my true passion lies in research. As
            advertised, I wear many hats. I have mastered the entire Software
            Test life cycle and its associated skills, all while enjoying the
            process. In addition to my professional pursuits, I delve into Data
            Science and Machine Learning, creating projects that fuel my
            learning journey. In my spare time, I engage in reading research
            papers and articles. If you're exploring something interesting, feel
            free to let me know. Beyond my tech interests, I am an avid consumer
            of movies and series, a gamer, a reader, and someone who loves to
            eat and chill with friends. I take solo trips annually, attempting
            to infuse humor through my attempts at telling jokes. I have a deep
            love for cricket, food, photography, and embracing new challenges.
            That's a glimpse of who I am, and I'm excited to hear from you with
            great news!
          </div>
        </div>
        <div className="scroll-indicator-box">
          {/* Your scroll indicator content */}
        </div>
      </div>
    </div>
  );
};

export default Home;
