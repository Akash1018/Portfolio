import Nav from "./component/NavBar/Nav";
import Intro from "./component/Intro";
import Skills from "./component/Skills/Skills";
import Project from "./component/Projects/Project";
import Contact from "./component/contact";
import Exprience from "./component/Experience/Experience";
import Cursor from "./component/Cursor";
import { useState } from "react";
import './App.css'

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`} style={{cursor: "none"}}>
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Intro />
      <Skills isDarkMode={isDarkMode}/>
      <Exprience isDarkMode={isDarkMode}/>
      <Project isDarkMode={isDarkMode}/>
      <Contact />
      <Cursor />
    </div>
  );
}

export default App;
