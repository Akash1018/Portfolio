import React from "react";
import LeftBar from './LeftBar';
import RightBar from "./RightBar";
import './SideBar.css';

export const SideBar = ({isDarkMode}) => {
    return (
        <div className="sideBar_content">
            <LeftBar isDarkMode={isDarkMode}/>
            <RightBar isDarkMode={isDarkMode}/>
        </div>
    )
}