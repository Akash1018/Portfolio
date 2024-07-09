import React from "react";
import { info } from "../data";
import "./Project.css";

const project = () => {
  return (
    <div className="project_content" id="projects">
      <h1 className="palin">My Projects.</h1>
        {info.map((item) => (
          <div className={`project_content_info ${item.id%2 && "is-reverse"}`}>
            <div className="project_content_info-content">
              <h1 className="ptext">{item.name}</h1>
              <p className="para">
                {item.detail}
                <a href={item.linkgit} target="_blank" className="git">
                  Git.
                </a>
                <a href={item.linksite} target="_blank">
                Link
                </a>
              </p>
            </div>
            <img className="imsize" src={item.img} />
          </div>
        ))}
    </div>
  );
};

export default project;
