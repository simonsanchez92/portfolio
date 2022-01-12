import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import MyPopover from "./popover";
function About() {
  // Modals logic
  const [show, setShow] = useState(false);
  const [certificationPath, setPath] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (certPath) => {
    setPath(certPath);
    setShow(true);
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <span>About</span>
        </div>

        <div className="about-info row">
          <div className="image-container px-0">
            <img
              src={process.env.PUBLIC_URL + "/img/profile.jpg"}
              alt="Profile pic"
            />
          </div>

          <div className="about-content">
            <h3>
              Hello, I am <span>Simon Sanchez</span>
            </h3>

            <p>
              I am a full stack web developer capable of deliverying fast and
              dynamic websites by implementation of the most powerful frameworks
              of the present day such as React, Angular, Express, and React
              Native.
            </p>
            <ul className="px-0">
              <li>
                <b>Name</b> Simon Sanchez
              </li>
              <li>
                <b>Age</b> 29
              </li>
              <li>
                <b>Nationality</b> Argentine
              </li>
              <li>
                <b>Languages</b> Spanish (native), English (fluent)
              </li>
              <li>
                <b>Location</b> Tucumán, Argentina
              </li>
              <li>
                <b>Availability</b> Available
              </li>
            </ul>
            {/* <a
              href={process.env.PUBLIC_URL + "/cv/simon_sanchez_cv.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
            </a> */}

            <MyPopover />
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="container technologies-container">
        <div className="section-title">
          <h2>Tech Stack</h2>
          <span>Tech Stack</span>
        </div>

        {/* Technologies container */}
        <div className="technologies">
          <ul>
            <li className="tech">
              <i className="devicon-javascript-plain colored"></i>
              <span>JavaScript</span>
            </li>

            <li className="tech">
              <i className="devicon-react-original colored"></i>
              <span>React</span>
            </li>
            <li className="tech">
              <i className="devicon-html5-plain colored"></i>

              <span>HTML5</span>
            </li>
            <li className="tech">
              <i className="devicon-nodejs-plain-wordmark colored"></i>

              <span>Node JS</span>
            </li>

            <li className="tech">
              <i className="devicon-css3-plain colored"></i>

              <span>CSS3</span>
            </li>
            <li className="tech">
              <i className="devicon-sass-original colored"></i>

              <span>Sass</span>
            </li>
            <li className="tech">
              <i className="devicon-php-plain colored"></i>
              <span>PHP</span>
            </li>
            <li className="tech">
              <i className="devicon-csharp-plain colored"></i>

              <span>C#</span>
            </li>
            <li className="tech">
              <i className="devicon-git-plain colored"></i>

              <span>Git</span>
            </li>
            <li className="tech">
              <i className="devicon-mongodb-plain colored"></i>

              <span>Mongo db</span>
            </li>

            <li className="tech">
              <i className="devicon-postgresql-plain colored"></i>
              <span>PostgreSQL</span>
            </li>
            <li className="tech">
              <i className="devicon-npm-original-wordmark colored"></i>

              <span>NPM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container py-4">
        <div className="section-title">
          <h2>Services</h2>
          <span>Services</span>
        </div>

        <div className="services">
          <div className="service">
            <span>
              <i className="fas fa-code"></i>
            </span>
            <h5>Web Development</h5>
            <p lassName="">
              Fast and dynamic websites built with modern JavaScript frameworks
              such as React and Angular. Integration with backend services and
              3rd party APIs.
            </p>
          </div>
          <div className="service">
            <span>
              <i className="fas fa-palette"></i>
            </span>
            <h5>Responsive Design</h5>
            <p>
              Websites capable of adapting to different screen sizes and
              improving user experience in multiple devices
            </p>
          </div>
          <div className="service">
            <span>
              <i className="fas fa-mobile-alt"></i>
            </span>
            <h5>Mobile Development</h5>
            <p>
              Hibrid mobile aplications built upon frameworks such as React
              Native and IonicJS, implementing a wide range of built in
              components and utilities
            </p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="container py-4">
        <div className="section-title">
          <h2>Certifications</h2>
          <span>Certifications</span>
        </div>

        <div className="certifications-container">
          <ul className="certifications px-0">
            <li className="border-bottom border-secondary">
              <div className="certification-info">
                <i className="devicon-css3-plain-wordmark colored"></i>
                <div className="info">
                  <span className="certification-title">
                    Responsive web design
                  </span>
                  <span className="issued">By FreeCodeCamp</span>
                </div>
              </div>
              <button
                className="see-certification"
                onClick={() =>
                  handleShow(
                    process.env.PUBLIC_URL +
                      "/certifications/freecodecamp-responsive-web-design.png"
                  )
                }
              >
                See certification
              </button>
            </li>

            <li className="border-bottom border-secondary">
              <div className="certification-info">
                <i className="devicon-react-original-wordmark colored"></i>
                <div className="info">
                  <span className="certification-title">
                    Web development career path
                  </span>
                  <span className="issued">By Codecademy</span>
                </div>
              </div>
              <button
                className="see-certification"
                onClick={() =>
                  handleShow(
                    process.env.PUBLIC_URL +
                      "/certifications/codecademy-web-development.png"
                  )
                }
              >
                See certification
              </button>
            </li>

            <li className="border-bottom border-secondary">
              <div className="certification-info">
                <i className="devicon-javascript-plain colored"></i>
                <div className="info">
                  <span className="certification-title">
                    Building Interactive JS Websites
                  </span>
                  <span className="issued">By Codecademy</span>
                </div>
              </div>
              <button
                className="see-certification"
                onClick={() =>
                  handleShow(
                    process.env.PUBLIC_URL +
                      "/certifications/codecademy-interactive-websites.png"
                  )
                }
              >
                See certification
              </button>
            </li>

            <li className="border-bottom border-secondary">
              <div className="certification-info">
                <i className="devicon-git-plain colored"></i>
                <div className="info">
                  <span className="certification-title">Learn Git</span>
                  <span className="issued">By Codecademy</span>
                </div>
              </div>
              <button
                className="see-certification"
                onClick={() =>
                  handleShow(
                    process.env.PUBLIC_URL +
                      "/certifications/codecademy-git.png"
                  )
                }
              >
                See certification
              </button>
            </li>

            <li className="border-bottom border-secondary">
              <div className="certification-info">
                <i className="fas fa-terminal"></i>
                <div className="info">
                  <span className="certification-title">
                    Learn the Command Line
                  </span>
                  <span className="issued">By Codecademy</span>
                </div>
              </div>
              <button
                className="see-certification"
                onClick={() =>
                  handleShow(
                    process.env.PUBLIC_URL +
                      "/certifications/codecademy-command-line.png"
                  )
                }
              >
                See certification
              </button>
            </li>

            <li className="border-bottom border-secondary">
              <div className="certification-info">
                <i className="devicon-mongodb-plain-wordmark colored"></i>
                <div className="info">
                  <span className="certification-title">
                    Backend Development and APIs
                  </span>
                  <span className="issued">By FreeCodeCamp</span>
                </div>
              </div>
              <button
                className="see-certification"
                onClick={() =>
                  handleShow(
                    process.env.PUBLIC_URL +
                      "/certifications/freecodecamp-backend.png"
                  )
                }
              >
                See certification
              </button>
            </li>
          </ul>
          <Modal className="component-modal" show={show} onHide={handleClose}>
            <Modal.Body className="modal-body">
              <img src={certificationPath} alt="" />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default About;
