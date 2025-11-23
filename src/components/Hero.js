import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Aiden</span>
          </h1>
          <h2 className="hero-subtitle">Web Developer & Creative Problem Solver</h2>
          <p className="hero-description">
            I create beautiful, functional, and user-centered digital experiences.
            Welcome to my portfolio where creativity meets code.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="card-content">
              <div className="code-block">
                <div className="code-line">
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">aiden</span> = {'{'}
                </div>
                <div className="code-line">
                  <span className="code-property">  passion</span>:{' '}
                  <span className="code-string">'coding'</span>,
                </div>
                <div className="code-line">
                  <span className="code-property">  skills</span>:{' '}
                  <span className="code-string">'full-stack'</span>,
                </div>
                <div className="code-line">
                  <span className="code-property">  status</span>:{' '}
                  <span className="code-string">'available'</span>
                </div>
                <div className="code-line">{'}'};</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

