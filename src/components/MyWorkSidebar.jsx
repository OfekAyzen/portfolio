import React from "react";
import "../styles/Sidebar.css";

const MyWorkSidebar = () => {
  return (
    <div className="sidebar-section">
      <h4>MY WORK</h4>
      <p>
        Purus ut faucibus pulvinar elementum integer enim neque fermentum
        iaculis eu non diam phasellus dolor consectur.
      </p>
      <a href="#projects" className="sidebar-link">
        BROWSE PORTFOLIO →
      </a>
    </div>
  );
};

export default MyWorkSidebar;
