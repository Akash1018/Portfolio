import React from "react";
import { info } from "../data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";

const project = ({ isDarkMode }) => {
  return (
    <div
      className={`project_content ${isDarkMode ? "is-dark" : "is-light"}`}
      id="projects"
    >
      <h1 className="project_content-heading">My Projects.</h1>
      <div className="project_content_item">
        {info.map((item) => (
          <div
            className={`project_content_info ${!(item.id % 2) && "is-reverse"} ${isDarkMode ? 'is-dark' : 'is-light'}`}
          >
            <div className="project_content_info-content">
              <h1 className="ptext">{item.name}</h1>
              {item.detail.map((ele) => (
                <p className="para">{ele}</p>
              ))}
              <div className="project_content_info-url">
              <a href={item.linkgit} target="_blank" className="git">
                <FaGithub />
              </a>
              <a href={item.linksite} target="_blank" className="git">
                <FaExternalLinkAlt />
              </a>
              </div>
            </div>
            <img className="imsize" src={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;
