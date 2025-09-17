import React from "react";
import "../styles/Sidebar.css";
import discordIcon from "../assets/icons/icons8-discord.svg";
import githubIcon from "../assets/icons/icons8-github.svg";
import linkedinIcon from "../assets/icons/icons8-linkedin.svg";
// You would typically import icons from a library like react-icons
// For now, we'll use simple text placeholders or SVG icons directly

// Add phone number and Email

const FollowMeSidebar = () => {
  return (
    <div className="sidebar-section">
      <h4>FOLLOW ME</h4>
      <div className="social-icons">
        <a
          href="https://discord.com/users/356805422625193984"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discordIcon} alt="Discord" className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ofek-ayzen-410a40247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a
          href="https://github.com/OfekAyzen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default FollowMeSidebar;
