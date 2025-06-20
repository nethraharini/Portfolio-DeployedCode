// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Let's connect and create something amazing together.
        </p>
        
        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:your@email.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        
        <p className="footer-copyright">
          © {new Date().getFullYear()} Nethra Harini. All rights reserved.
        </p>
        
        <a href="#top" className="back-to-top" onClick={scrollToTop}>
          Back to Top <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
