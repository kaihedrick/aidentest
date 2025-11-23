import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>
        <p className="section-description">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-content">
              <h3>Email</h3>
              <p>aiden@example.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">💼</div>
            <div className="info-content">
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/aiden</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">🐙</div>
            <div className="info-content">
              <h3>GitHub</h3>
              <p>github.com/aiden</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

