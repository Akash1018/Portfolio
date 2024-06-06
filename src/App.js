import Nav from "./component/NavBar/Nav";
import Intro from "./component/Intro";
import Tech from "./component/tech";
import Project from "./component/project";
import Contact from "./component/contact";
import Exprience from "./component/Experience";
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
      <Exprience />
      <Tech />
      <Project />
      <Contact />
      <Cursor />
    </div>
  );
}

export default App;
