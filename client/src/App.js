import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav.jsx";
import Home from "./components/Pages/Home/home.jsx";
import Footer from "./components/footer.jsx";
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
      <Footer />
    </div>
  );
}

export default App;
