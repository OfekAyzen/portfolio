import React from "react";
import "../styles/Projects.css";
import EmbeddedProjectOne from "../components/EmbeddedProjectOne";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <p>
          Here are some of the projects I've worked on. More to be added soon,
          including embedded projects!
        </p>
        <div className="project-grid">
          <EmbeddedProjectOne />
          <div className="project-card">
            <h3>Project Two</h3>
            <p>A brief description of Project Two.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
