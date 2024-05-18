import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav.jsx";
import Home from "./components/Pages/Home/home.jsx";
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
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

// solidify the color scheme in the css root
// Add scalable headings and scale buttons on hover
