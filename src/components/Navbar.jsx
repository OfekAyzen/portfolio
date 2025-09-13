import React, { useState, useEffect } from "react";
import "../styles/Navbar.css"; // Import Navbar specific styles

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      // Arbitrary scroll threshold
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        ></a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
