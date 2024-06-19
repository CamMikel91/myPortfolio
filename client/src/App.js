import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav.jsx";
import Home from "./components/Pages/Home/home.jsx";
import About from "./components/Pages/About/about.jsx";
import Contact from "./components/Pages/Contact/contact.jsx";
import Projects from "./components/Pages/Projects/projects.jsx";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
