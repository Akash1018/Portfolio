import { useRef, useEffect } from "react";
import React from "react";
import "./cursor.css";

const Cursor = () => {
    const cursor = useRef();
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursor.current.style.left = x + "px";
            cursor.current.style.top = y + "px";
        })
    },[])

    return (
        <div ref={cursor} className="cursor">
            <div className="cursor_dot"></div>
        </div>
    )
}

export default Cursor;