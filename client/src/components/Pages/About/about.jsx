import React, { Component } from "react";
import Footer from "../../footer";
import "../About/about.css";

class About extends Component {
  render() {
    return (
      <>
        <div id="aboutContainer" className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div>
                <h1>About Me</h1>
                <p>
                  Hi, I'm Cameron, I'm a 32 year old web developer based in
                  Ogden, UT. I specialize in building websites that bring people
                  and companies together. I have experience with front-end and
                  back-end technologies, and I am always looking to learn more.
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
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <img
                className="mx-auto d-block"
                src="/assets/selfPortrait_04.png"
                alt="Cameron Mikel"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img
                className="d-block mx-auto"
                src="./assets/aboutWorkExp.png"
                alt="Laptop Graphic"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>Pre-Coding Work Experience</h2>
              <p>
                I have worked in various industries including electrical,
                network cabling & infrastructure, account management & finance,
                and mechanics.
              </p>
              <p>
                Because of the diverse industries I've worked in, I have become
                a well-rounded individual with a wide range of skills and can
                pick up new ideas and concepts fairly quickly.
              </p>
              <p>
                Each position that I've held required a high level of attention
                to detail, problem solving, and industry specific technical
                skills. I have experience working with people from diverse
                backgrounds and am comfortable in fast-paced environments.
              </p>
            </div>
          </div>
          <hr />
          <div id="aboutHobbies" className="row">
            <div className="col-md-6 col-sm-12">
              <h2>My Hobbies & Interests</h2>
              <p>
                I enjoy spending time with my family, watching anime and movies,
                and playing video games.
              </p>
              <p>
                Some of my favorite type of games are time management sims such
                as City Skylines and They Are Billions. I am a huge fan of brain
                teasers, puzzles, and I love to learn new things.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 p-4">
              <img
                className="mx-auto d-block"
                src="./assets/hobbies_graphic.png"
                alt="Xbox Controller Graphic"
              />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
