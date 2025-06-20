// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

const skillsData = {
  "Languages": ["Python", "Java", "SQL", "JavaScript", "MongoDB"],
  "Technologies": ["Flask", "React", "Docker", "TensorFlow", "SKlearn"],
  "Tools": ["Git", "GitHub", "Docker", "Excel", "PowerBI"]
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="skill-card p-4 rounded shadow-sm h-100">
                <h5 className="mb-3 text-primary">{category}</h5>
                <ul className="list-unstyled">
                  {skills.map((skill, idx) => (
                    <li key={idx} className="skill-item">
                      <i className="bi bi-check-circle-fill me-2 text-success"></i>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
