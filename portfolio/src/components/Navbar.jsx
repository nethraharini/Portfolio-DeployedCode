// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      
      // Detect current section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'certificates', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top custom-navbar ${scrolled ? "scrolled" : "top"}`}
      data-bs-theme="light"
    >
      <div className="container-fluid px-4">
        <a className="navbar-brand nav-left" href="#home" onClick={closeNavbar}>
          <img
  src={`${process.env.PUBLIC_URL}/nethraimage.jpeg`}
  alt="Profile"
  className="avatar me-2"
  width="40"
  height="40"
/>

          <span className="brand">Nethra Harini | Portfolio</span>
        </a>
        
        <button
          className={`navbar-toggler ${expanded ? "" : "collapsed"}`}
          type="button"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse justify-content-end ${expanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav align-items-center gap-lg-3">
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'home' ? 'active' : ''}`} 
                href="#home" 
                onClick={closeNavbar}
              >Home</a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'about' ? 'active' : ''}`} 
                href="#about" 
                onClick={closeNavbar}
              >About</a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'projects' ? 'active' : ''}`} 
                href="#projects" 
                onClick={closeNavbar}
              >Projects</a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'skills' ? 'active' : ''}`} 
                href="#skills" 
                onClick={closeNavbar}
              >Skills</a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'certificates' ? 'active' : ''}`} 
                href="#certificates" 
                onClick={closeNavbar}
              >Certificates</a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentSection === 'contact' ? 'active' : ''}`} 
                href="#contact" 
                onClick={closeNavbar}
              >Contact</a>
            </li>
            
            {/* Resume Button - Only shown when not on home section */}
            {currentSection !== 'home' && (
              <li className="nav-item ms-lg-3">
               <a
  href={`${process.env.PUBLIC_URL}/resume.pdf`}
  download="Nethra_Harini_Resume.pdf"
  className="resume-button"
  onClick={closeNavbar}
>
  View Resume
</a>

              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;