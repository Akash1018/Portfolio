import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";

const Nav = ({isDarkMode, toggleDarkMode}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = (e) => {
      const currScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currScrollPos;
      setPrevScrollPos(currScrollPos);
      setVisible(visible);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  },[prevScrollPos])

  const onButtonClick = () => {
    fetch("finalresume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "finalresume.pdf";
        alink.click();
      });
    });
  };
  
  return (
    <div className={`navbar_main ${visible ? 'is-visible' : 'is-hidden'}`}>
      <svg width="50" height="50" className="navBar-icon">
        <g transform="matrix(1,0,0,1,-1.2121212121212466,0.504858299595071)">
          <svg
            viewBox="0 0 396 247"
            data-background-color="#ffffff"
            preserveAspectRatio="xMidYMid meet"
            height="50"
            width="50"
          >
            <g
              id="tight-bounds"
              transform="matrix(1,0,0,1,0.2400000000000091,-0.09999999999999432)"
            >
              <svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52">
                <g>
                  <svg></svg>
                </g>
                <g>
                  <svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52">
                    <g transform="matrix(1,0,0,1,136.66281338912134,47.215199999999996)">
                      <svg
                        viewBox="0 0 122.1943732217573 152.7696"
                        height="152.7696"
                        width="122.1943732217573"
                      >
                        <g>
                          <svg
                            viewBox="0 0 122.1943732217573 152.7696"
                            height="152.7696"
                            width="122.1943732217573"
                          >
                            <g>
                              <svg
                                viewBox="0 0 122.19437322175733 152.76960000000003"
                                height="152.7696"
                                width="122.1943732217573"
                              >
                                <g>
                                  <svg
                                    viewBox="0 0 122.19437322175733 152.76960000000003"
                                    height="152.76960000000003"
                                    width="122.19437322175733"
                                  >
                                    <g id="textblocktransform">
                                      <svg
                                        viewBox="0 0 122.19437322175733 152.76960000000003"
                                        height="152.76960000000003"
                                        width="122.19437322175733"
                                        id="textblock"
                                      >
                                        <g>
                                          <svg
                                            viewBox="0 0 122.19437322175733 152.76960000000003"
                                            height="152.76960000000003"
                                            width="122.19437322175733"
                                          >
                                            <g transform="matrix(1,0,0,1,0,0)">
                                              <svg
                                                width="122.19437322175733"
                                                viewBox="2.86 -35.01 28 35.01"
                                                height="152.76960000000003"
                                                data-palette-color="#2a2c35"
                                              >
                                                <path
                                                  d="M9.84-13.99L23.85-13.99 23.85-21Q23.85-22.44 23.3-23.72 22.75-25 21.8-25.95 20.85-26.9 19.57-27.45 18.29-28 16.85-28L16.85-28Q15.41-28 14.12-27.45 12.84-26.9 11.89-25.95 10.94-25 10.39-23.72 9.84-22.44 9.84-21L9.84-21 9.84-13.99ZM30.86-21L30.86 0 23.85 0 23.85-7.01 9.84-7.01 9.84 0 2.86 0 2.86-21Q2.86-23.9 3.96-26.45 5.05-29 6.95-30.91 8.84-32.81 11.39-33.91 13.94-35.01 16.85-35.01L16.85-35.01Q19.75-35.01 22.3-33.91 24.85-32.81 26.76-30.91 28.66-29 29.76-26.45 30.86-23.9 30.86-21L30.86-21Z"
                                                  opacity="1"
                                                  transform="matrix(1,0,0,1,0,0)"
                                                  fill={`${isDarkMode ? "#8892b0" : "#424242"}`}
                                                  className="wordmark-text-0"
                                                  data-fill-palette-color="primary"
                                                  id="text-0"
                                                ></path>
                                              </svg>
                                            </g>
                                          </svg>
                                        </g>
                                      </svg>
                                    </g>
                                  </svg>
                                </g>
                              </svg>
                            </g>
                          </svg>
                        </g>
                      </svg>
                    </g>
                    <path
                      d="M318.964 41.215L318.964 0 71.764 0 71.764 247.2 318.964 247.2 318.964 205.985 305.187 205.985 305.187 233.423 85.541 233.423 85.541 13.777 305.187 13.777 305.187 41.215Z"
                      fill={`${isDarkMode ? "#8892b0" : "#424242"}`}
                      stroke="transparent"
                      data-fill-palette-color="tertiary"
                    ></path>
                  </svg>
                </g>
                <defs></defs>
              </svg>
              <rect
                width="395.52"
                height="247.2"
                fill="none"
                stroke="none"
                visibility="hidden"
              ></rect>
            </g>
          </svg>
        </g>
      </svg>
      <div className="navbar_content-info">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className="home"
        >
          Home
        </Link>
        <Link
          to="tech"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className="home"
        >
          Skills
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className="home"
        >
          Experience
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className="home"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className="home"
        >
          Contact
        </Link>
        <a onClick={onButtonClick} className="home">
          Resume
        </a>
      </div>
      <DarkModeSwitch
        moonColor="grey"
        sunColor="orange"
        checked={!isDarkMode}
        onChange={toggleDarkMode}
        size={36}
      />
    </div>
  );
};

export default Nav;
