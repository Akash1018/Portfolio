import React from "react";
import {MdOutlineEmail} from 'react-icons/md'
import {SiLeetcode} from 'react-icons/si'
import { FiGithub,FiLinkedin } from "react-icons/fi";
import './SideBar.css';

const LeftBar = ({isDarkMode}) => {
    return (
        <div className={`sideBar_item leftBar_content`}>
            <a href="https://www.linkedin.com/in/akash-chaudhary-709925195/overlay/contact-info/" target="_blank" className='leftBar_content-item'><MdOutlineEmail className={`leftBar_content-icon ${isDarkMode ? "is-dark" : "is-light"}`}  /></a>
            <a href="https://www.linkedin.com/in/akash-chaudhary-709925195/" target="_blank" className='leftBar_content-item'><FiLinkedin className={`leftBar_content-icon ${isDarkMode ? "is-dark" : "is-light"}`} /></a>
            <a href="https://github.com/Akash1018" target="_blank" className='leftBar_content-item'><FiGithub className={`leftBar_content-icon ${isDarkMode ? "is-dark" : "is-light"}`} /></a>
            <a href="https://leetcode.com/Peace1018/" target="_blank" className='leftBar_content-item'><SiLeetcode className={`leftBar_content-icon ${isDarkMode ? "is-dark" : "is-light"}`} /></a>
        </div>
    )
}


export default LeftBar;