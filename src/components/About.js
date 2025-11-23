import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm Aiden, a passionate web developer with a love for creating
            digital experiences that make a difference. I combine technical
            expertise with creative thinking to build solutions that are both
            functional and beautiful.
          </p>
          <p>
            My journey in web development started with curiosity and has evolved
            into a career focused on crafting user-centric applications. I enjoy
            the challenge of solving complex problems and the satisfaction of
            seeing ideas come to life through code.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community. I believe in continuous learning and staying
            up-to-date with the latest industry trends.
          </p>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <span>👨‍💻</span>
              <p>Your Photo Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

