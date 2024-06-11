import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/components/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="row my-auto pt-5">
            <div className="col-md-4 col-sm-12 mb-5">
              <ul>
                <li>
                  <h3>My Info</h3>
                </li>
                <li>Cameron Mikel</li>
                <li>Web Developer</li>
                <li>(801) 917-7016</li>
                <li>CamMikel91@gmail.com</li>
              </ul>
            </div>

            <div className="col-md-4 col-sm-12 mb-5">
              <div id="footerContactForm">
                <h3>Contact Me</h3>
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
                      type="phone"
                      name="phone"
                      className="form-control"
                      id="phone"
                      optional
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <h3>Links</h3>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/projects"}>Projects</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
