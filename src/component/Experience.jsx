import React from "react";
import { experience } from "./data";
import "./Experience.css";

const Exprience = () => {
  return (
    <div className="exp_content" id="experience">
      <h1 className="top_heading">Experience</h1>
      {experience.map((item) => (
        <div className="exp_content-company">
          <h2>{item.company}</h2>
          <div className="exp_content-item">
            <img className="exp_content-banner" src={item.img} />
            <div className="exp_content-info">
              <h4 className="exp_content-company--position">{item.postion}</h4>
              <h5>Tech Stack: {item.tech}</h5>
              {item.detail.map((info) => (
                <p>{info}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exprience;
