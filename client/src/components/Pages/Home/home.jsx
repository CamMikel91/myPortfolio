import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../../footer";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <>
        {/* Hero Section */}
        <div className="homeHero row">
          <div className="col-12">
            <div id="homeHeading">
              <h1>Hi, I'm Cameron</h1>
              <h2>
                I build websites to help bridge the gap between you and your
                customers
              </h2>
            </div>
            <Link
              to="/contact"
              className="button d-block mt-5 mb-2"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Contact Me
            </Link>
            <button
              className="resumeButton"
              onClick={() => {
                window.open("./assets/cameron-mikel_resume.pdf", "_blank");
              }}
            >
              View
            </button>
            /
            <a
              className="resumeButton"
              href="./assets/cameron-mikel_resume.pdf"
              download
            >
              {" "}
              Download{" "}
            </a>
            Resume
          </div>
        </div>

        <div className="container">
          {/* About Section */}
          <div id="aboutRow" className="row">
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
                <Link
                  to="/about"
                  className="button d-block mt-4"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skillsRow" className="row">
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
          {/* Projects Section */}
          <section id="featuredProjectSection">
            <div className="row gx-3 px-5">
              <div className="col-12 text-center mb-5">
                <h2>Featured Project</h2>
              </div>
              <div className="col-md-12 col-lg-6 mb-5">
                <img
                  src="./assets/BC_mockups_complete.png"
                  alt="BC Small Engine Mockups"
                />
              </div>
              <div className="col-md-12 col-lg-6 mt-3">
                <div>
                  <h3>BC Small Engine Repair</h3>
                  <p className="mb-4">
                    BC Small Engine Repair is a repair/warranty center located
                    in Kaysville, UT. They specialize in small engine and lawn
                    equipment repair and work on a large variety of brands and
                    machine types. They have been in business for over 24 years
                    and have a loyal customer base that grows larger each year.
                  </p>
                  <Link
                    to="/projects"
                    className="button d-block mt-4"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Other Projects
                  </Link>
                </div>
              </div>
              <div
                id="featuredProjectDetails"
                className="row my-5 mx-auto gx-4"
              >
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <h4>Purpose</h4>
                  <p>
                    The purpose of this project was to create a website that
                    showcases the services offered by BC Small Engine Repair and
                    provide customers with a way to contact the business and get
                    accurate information about their services.
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <h4>Technologies</h4>
                  <ul>
                    <li>MongoDB</li>
                    <li>Express API</li>
                    <li>React Client</li>
                    <li>Node.js</li>
                    <li>Bootstrap</li>
                    <li>Joi Validation</li>
                  </ul>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <h4>Functionality</h4>
                  <p>
                    Displays a monthly coupon on the homepage to users that are
                    registered and logged in, the coupon rotates out
                    automatically each month. Saves the business money by
                    replacing their bi-yearly magazine ad marketing strategy and
                    provides a montly reason for customers to check the website.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
