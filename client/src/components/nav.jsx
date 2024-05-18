import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/components/nav.css";

function collapseNav() {
  const nav = document.querySelector(".navbar-collapse");
  nav.classList.remove("show");
}

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <Link to={"/"} className="navbar-brand">
          {/* <img src="./images/whiteCog.png" alt="Cog Logo" /> */}
          Cameron Mikel,{" "}
          <span style={{ fontSize: ".9rem" }}>Web Developer</span>
        </Link>
        <button
          className="navbar-toggler navbar-dark me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link" onClick={collapseNav}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link" onClick={collapseNav}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/projects"} className="nav-link" onClick={collapseNav}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link" onClick={collapseNav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
