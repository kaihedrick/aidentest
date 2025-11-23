import React from 'react';
import './About.css';

const About = () => {
  // Generate bubbles with different colors and sizes
  const bubbles = [
    { id: 1, size: 60, color: '#667eea', delay: 0 },
    { id: 2, size: 80, color: '#764ba2', delay: 0.5 },
    { id: 3, size: 50, color: '#f093fb', delay: 1 },
    { id: 4, size: 70, color: '#4facfe', delay: 1.5 },
    { id: 5, size: 55, color: '#43e97b', delay: 2 },
    { id: 6, size: 65, color: '#fa709a', delay: 2.5 },
    { id: 7, size: 45, color: '#fee140', delay: 3 },
    { id: 8, size: 75, color: '#30cfd0', delay: 3.5 },
  ];

  return (
    <section id="about" className="about">
      <div className="bubbles-container">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              backgroundColor: bubble.color,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm freaking Aiden, a passionate web developer with a love for creating
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

