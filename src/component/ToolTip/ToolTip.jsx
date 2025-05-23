import React from "react";
import './ToolTip.css';

const ToolTip = ({icon}) => {
    return (
        <div className="tooltip">
        <img src = {icon.Component} className={`tooltip_img ${icon.name === 'ReactJS' && 'is-react'}`} alt={icon.alt}/>
        <p className="tooltip_name">{icon.name}</p>
        </div>
    );
}

export default ToolTip;