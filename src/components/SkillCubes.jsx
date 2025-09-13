import React from "react";
import "../styles/SkillCubes.css";

const skills = [
  "React",
  "React Native",
  "Vue.js",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "MySQL",
  "MongoDB",
];

const SkillCubes = () => {
  return (
    <div className="skill-cubes-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-cube">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillCubes;
