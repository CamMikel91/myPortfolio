import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../Contact/contact.css";

class Contact extends Component {
  render() {
    return (
      <div id="contactContainer" className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <section id="myInfoSection" className="h-100">
              <h1>My Info</h1>
              <ul>
                <li>Cameron Mikel</li>
                <li>Web Developer</li>
                <li>(801) 917-7016</li>
                <li>CamMikel91@gmail.com</li>
              </ul>
              <div id="contactSocials">
                <div
                  className="icon"
                  onClick={() =>
                    window.open("https://github.com/CamMikel91", "_blank")
                  }
                >
                  <FontAwesomeIcon icon={faSquareGithub} />
                </div>
                <div
                  className="icon"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/cameron-mikel/",
                      "_blank"
                    )
                  }
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </div>
            </section>
          </div>
          <div className="col-sm-12 col-lg-8">
            <section id="contactForm" className="h-100">
              <h1>Contact Me</h1>
              <p>
                If you have any questions or would like to work with me, please
                fill out the form below and I will get back to you as soon as
                possible.
              </p>
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="84782bd0-f7c8-4e70-b30d-1140a337c247"
                />
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    id="phone"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Send
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
