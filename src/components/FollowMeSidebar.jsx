import React from "react";
import "../styles/Sidebar.css";
// You would typically import icons from a library like react-icons
// For now, we'll use simple text placeholders or SVG icons directly

const FollowMeSidebar = () => {
  return (
    <div className="sidebar-section">
      <h4>FOLLOW ME</h4>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          F
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          T
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          I
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          L
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Y
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          G
        </a>
      </div>
    </div>
  );
};

export default FollowMeSidebar;
