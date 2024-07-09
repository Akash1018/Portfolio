import React from "react";
import LeftBar from './LeftBar';
import RightBar from "./RightBar";
import './SideBar.css';

export const SideBar = () => {
    return (
        <div className="sideBar_content">
            <LeftBar />
            <RightBar />
        </div>
    )
}