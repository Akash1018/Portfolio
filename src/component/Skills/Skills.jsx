import React from "react";
import skillIcons from "../../constants/skills.js";
import ToolTip from "../ToolTip/ToolTip.jsx";
import "./Skills.css";

const Skills = ({isDarkMode}) => {
  return (
      <div className={`skill_main ${isDarkMode ? "dark-mode" : "light-mode"}`} id="tech">
        <div className="skill_content">
          <h1 className="skills_content-heading">Technologies and Tools</h1>
          <p className="skills_content-para">
            I'm always eager to expand my knowledge and explore emerging
            technologies. I frequently incorporate the latest tools and frameworks
            into my work to create exceptional software for the web.
          </p>
        </div>
        <div className="skills_content-icons">
          {skillIcons.map((icon) => {
            return (
              <ToolTip icon = {icon} key={icon.name}/>
            )
          })}
        </div>
      </div>
  );
};
export default Skills;
