import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-left">
        <img src={`${process.env.PUBLIC_URL}/contact.gif`} alt="Contact Illustration" className="contact-gif" />

      </div>

      <div className="contact-right">
        <h2>Contact Me</h2>
        <p>Feel free to reach out through any of the platforms below </p>

        <div className="contact-details">
          <a href="https://www.linkedin.com/in/nethra-harini-8b500024a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>

          <a href="https://github.com/nethraharini" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>

          <p><FaEnvelope className="icon" /> nethraharini0904@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
