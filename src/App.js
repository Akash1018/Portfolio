import Nav from "./component/Nav";
import Intro from "./component/Intro";
import Tech from "./component/tech";
import Project from "./component/project";
import Contact from "./component/contact";
import Exprience from "./component/Experience";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Exprience />
      <Tech />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
