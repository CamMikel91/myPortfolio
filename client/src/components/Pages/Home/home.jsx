import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./home.css";

class home extends Component {
  render() {
    return (
      <>
        {/* Hero Section */}
        <div className="homeHero row">
          <div className="col-12">
            <div id="homeHeading">
              <h1>Hi, I'm Cameron</h1>
              <h2>
                I build websites to bridge the gap between you and your
                customers
              </h2>
            </div>

            <div className="button">Get Started</div>
          </div>
        </div>

        <div className="container">
          {/* About Section */}
          <div id="aboutRow" className="row gx-5 p-5 my-4">
            <div className="col-sm-12 col-md-6">
              <img
                src="/assets/selfPortrait_04.png"
                className="img-fluid rounded-start mx-auto d-block"
                alt="Cameron Mikel"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <div>
                <h3 className=" mb-3">Who Am I?</h3>
                <p>
                  I am a web developer who specializes in building websites that
                  bring people and companies together. I have experience with
                  front-end and back-end technologies, and I am always looking
                  to learn more.
                </p>
                <p>
                  I am passionate about creating websites that are visually
                  appealing and user-friendly. I am dedicated to providing
                  high-quality work and exceeding client expectations.
                </p>
                <p>
                  I am currently seeking new opportunities to work on exciting
                  projects with a talented team.
                </p>
                <div className="button">Learn More</div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skillsRow" className="row gx-5 p-5 my-4">
            <div className="col-sm-12 col-md-6">
              <div>
                <h3 className="mb-3">My Tech Stack</h3>
                <p>
                  I have experience with a variety of popular front-end and
                  back-end technologies related to web development, API
                  integration, database management, and UI/UX design.
                </p>
                <p>
                  While I use the MERN stack to build most of my full stack
                  applications, I am always looking to learn new technologies
                  and expand my skill set, if you have a project that requires a
                  different technology stack, I am always up for the challenge.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="iconGrid">
                <div className="icon">
                  <FontAwesomeIcon icon={faHtml5} />
                  <p>HTML</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faCss3} />
                  <p>CSS</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faJs} />
                  <p>JavaScript</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faNodeJs} />
                  <p>Node.js</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faReact} />
                  <p>React</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faServer} />
                  <p>Express</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faDatabase} />
                  <p>MongoDB</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faDatabase} />
                  <p>SQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default home;
