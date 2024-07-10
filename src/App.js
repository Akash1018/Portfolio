import Nav from "./component/NavBar/Nav";
import Intro from "./component/Intro";
import Skills from "./component/Skills/Skills";
import Project from "./component/Projects/Project";
import Contact from "./component/contact";
import Exprience from "./component/Experience/Experience";
import { SideBar } from "./component/SideBar/SideBar";
import Cursor from "./component/Cursor/Cursor";
import { useState } from "react";
import './App.css'

function App() {
  const getInitialTheme = () => {
    const theme = localStorage.getItem('theme');
    if(!theme) {
      localStorage.setItem('theme', 'light');
      return false;
    }
    return theme === 'dark' ? true : false;
  }

  const [isDarkMode, setDarkMode] = useState(getInitialTheme);

  const toggleDarkMode = () => {
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div>
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Intro isDarkMode={isDarkMode}/>
      <Skills isDarkMode={isDarkMode}/>
      <Exprience isDarkMode={isDarkMode}/>
      <Project isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
      {/* <Cursor /> */}
      </div>
      <SideBar isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
