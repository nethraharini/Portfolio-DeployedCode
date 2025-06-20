import React from "react";
import { FaLinkedin, FaHackerrank, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="text-section">
        <h1>Hello, I'm Nethra </h1>
        <p>
          Passionate about tech, creative with code, and determined to leave my
          mark. Explore my journey, and let's build the future together.
        </p>

        {/* Social Icons above resume button */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/nethra-harini-8b500024a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
          <a
            href="https://github.com/nethraharini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon Github" />
          </a>
          <a
            href="https://leetcode.com/u/nethra0904/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="icon leetcode" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/nethraharini0904/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHackerrank className="icon hackerrank" />
          </a>
        </div>

        {/* View Resume Button */}
        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-button">View Resume</button>
        </a>
      </div>

      <div className="gif-section">
        <img
          src={`${process.env.PUBLIC_URL}/woman-walking.gif`}
          alt="Walking Girl"
          className="walking-girl"
        />
      </div>
    </div>
  );
};

export default Home;
