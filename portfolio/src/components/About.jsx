import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add show class to about-left
          document.querySelector('.about-left')?.classList.add('show');
        }
      });
    },
    { threshold: 0.3 }
  );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
    
  }, []);

  return (
    <div id="about" className="about-container">
      <div className="about-left">
        <img src={`${process.env.PUBLIC_URL}/aboutme.jpg`} alt="About Me" className="about-image" />

      </div>

      <div className={`about-right ${isVisible ? "show" : ""}`} ref={aboutRef}>
        <h2>About Me</h2>
        <p>
          I'm Nethra, a passionate software developer who believes in building with purpose.<br />
          I love solving real-world problems with clean, scalable code.<br />
          With a strong foundation in Java and Python, I'm diving deep into DSA, frameworks, and system design.<br />
          Outside of code, I enjoy thoughtful design, animated UI, and mentoring friends.<br />
          I'm here to grow, learn, and make my mark in the tech world — one project at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
