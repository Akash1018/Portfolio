import React from "react";
import './SideBar.css';

const RightBar = ({isDarkMode}) => {
    return (
        <div className="sideBar_item rightBar_content">
            <a target="_blank" rel="noreferrer" href="mailto:akash101811@gmail.com" className={`contact_mail ${isDarkMode ? 'is-dark' : "is-light"}`}><span className="contact_span">contact</span>@akash_chaudhary.dev</a>
        </div>
    )
}

export default RightBar;