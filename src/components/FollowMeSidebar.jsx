import React from "react";
import "../styles/Sidebar.css";
// You would typically import icons from a library like react-icons
// For now, we'll use simple text placeholders or SVG icons directly

const FollowMeSidebar = () => {
  return (
    <div className="sidebar-section">
      <h4>FOLLOW ME</h4>
      <div className="social-icons">
        <a href="https://discord.com/users/356805422625193984" target="_blank" rel="noopener noreferrer">
          <svg></svg>
        </a>
        <a href="https://www.linkedin.com/in/ofek-ayzen-410a40247/" target="_blank" rel="noopener noreferrer">
          L
        </a>
        <a href="https://github.com/OfekAyzen" target="_blank" rel="noopener noreferrer">
          G
        </a>
      </div>
    </div>
  );
};

export default FollowMeSidebar;
