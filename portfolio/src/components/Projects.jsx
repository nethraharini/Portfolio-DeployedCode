// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React showcasing my skills and projects.",
    tech: ["React", "CSS", "Bootstrap"],
    github: "https://github.com/your-username/portfolio",
    demo: "https://yourportfolio.netlify.app"
  },
  {
    title: "Todo App",
    description: "A simple and elegant Todo application with full CRUD functionality.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/your-username/todo-app",
    demo: ""
  },
  {
    title: "Weather App",
    description: "Displays real-time weather data using the OpenWeather API.",
    tech: ["React", "API", "Axios"],
    github: "https://github.com/your-username/weather-app",
    demo: "https://weatherapp.netlify.app"
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="project-card p-4 rounded shadow-sm h-100">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack mb-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="badge bg-primary me-1">{tech}</span>
                  ))}
                </div>
                <div className="project-links mt-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark me-2">GitHub</a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-success">Live Demo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
