import React from "react";
import "../styles/EmbeddedProjectOne.css";

const EmbeddedProjectOne = () => {
  return (
    <div className="embedded-project-card">
      <h3>Embedded Project One</h3>
      <p>
        This is where your full-stack application's frontend will be embedded.
      </p>
      <div className="embedded-app-container">
        {/* 
          This is a placeholder for your embedded application.
          You can replace this div with your actual React component for the embedded app,
          or an iframe if it's a separate web application.
        */}
        <div className="placeholder-app">
          <h4>Your Embedded App Here</h4>
          <p>Imagine a functional app running here!</p>
        </div>
      </div>
      <a href="#" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default EmbeddedProjectOne;
