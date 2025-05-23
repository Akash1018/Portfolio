import pic from "../static/me.jpg";
import "./intro.css";
import { Link } from "react-scroll";

const Intro = ({isDarkMode}) => {
  return (
    <div className="intro">
        <div className="intro_info">
          <h3 className="intro__greeting">Hello, I'm</h3>
          <h1 className="intro__name">Akash chaudhary.</h1>
          <h2 className="intro__title" style={{ opacity: 0.7 }}>
            Software Engineer.
          </h2>
          <h2 className="intro__description">
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
            className={`intro__cta-button ${isDarkMode ? 'is-dark' : 'is-light'}`}
          >
            Check out my work!
          </Link>
        </div>
        <div className="intro__image-wrapper">
          <img className="intro__image" src={pic} alt="pic" />
        </div>
    </div>
  );
};

export default Intro;
