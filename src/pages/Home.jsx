import React from "react";
import "../styles/Home.css";
import AboutMeSidebar from "../components/AboutMeSidebar";
import MyWorkSidebar from "../components/MyWorkSidebar";
import FollowMeSidebar from "../components/FollowMeSidebar";
import SkillCubes from "../components/SkillCubes";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-left-column">
        <div className="greeting-line"></div>
        <h1>
          I'm Ofek, <br />a Fullstack Developer
        </h1>
        {/* SkillCubes component placed directly below h1 */}
        <SkillCubes />
        <button
          className="scroll-down-btn"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
        </button>
      </div>
      <div className="home-center-column">
        <div className="profile-picture-placeholder"></div>
        {/* Removed SkillCubes from here */}
      </div>
      <div className="home-right-column">
        {/* <AboutMeSidebar /> */}
        {/* <MyWorkSidebar /> */}
        <FollowMeSidebar />
      </div>
    </div>
  );
};

export default Home;
