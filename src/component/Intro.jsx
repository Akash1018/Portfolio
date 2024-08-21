import React from "react";
import pic from "../static/me.jpg";
import "./intro.css";
import { Link } from "react-scroll";

const Intro = ({isDarkMode}) => {
  return (
    <div className="intro_main">
      <div className="des">
        <div className="intro">
          <h3 className="headS">Hello, I'm</h3>
          <h1 className="heade">Akash chaudhary.</h1>
          <h2 className="headp" style={{ opacity: 0.7 }}>
            Software Engineer.
          </h2>
          <h2 className="introS">
            a proficient software engineer with expertise in JavaScript, C++,
            JAVA, ReactJS, VueJS, and Node.js. I excel in developing efficient,
            scalable web applications and optimizing code for performance.
            Passionate about leveraging cutting-edge technologies to create
            innovative solutions and contribute to impactful projects.
          </h2>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className={`check-more-buttom ${isDarkMode ? 'is-dark' : 'is-light'}`}
          >
            Check out my work!
          </Link>
        </div>
        <div className="intro_image">
          <img className="resize" src={pic} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
