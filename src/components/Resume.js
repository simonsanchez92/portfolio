import React, { useState, Fragment } from "react";

import Modal from "react-bootstrap/Modal";

const Resume = () => {
  // Modals logic
  const [show, setShow] = useState(false);
  const [certificationPath, setPath] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (certPath) => {
    setPath(certPath);
    setShow(true);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <span>Resume</span>
        </div>
        <div className="small-title">
          <span className="small-title-icon">
            <i className="fas fa-user-graduate"></i>
          </span>
          <h4>Formal Education</h4>
        </div>

        <div className="resume-wrapper">
          <div className="resume">
            <div className="resume-summary">
              <h6 className="resume-year">2021 - current</h6>
            </div>
            <div className="resume-details">
              <h5>Associate, Computer Programming</h5>
              <h6 className="resume-company">
                Universidad Tecnica Nacional, Argentina
              </h6>
              <p>
                Developed solid communication skills both written and oral, as
                well as a deep understanding of the building blocks, history,
                and nuances of the language
              </p>

              <div className="topics">
                <h6>Topics Covered:</h6>
                <ul>
                  <li>English grammar and usage</li>
                  <li>Syntactic structures</li>
                  <li>Writing techniques</li>
                  <li>Phonetics and phonology</li>
                  <li>British and American literature</li>
                  <li>History of the english-speaking countries</li>
                  <li>Applied linguistics and literary theory</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume">
            <div className="resume-summary">
              <h6 className="resume-year">2013 - 2018</h6>
            </div>
            <div className="resume-details">
              <h5>Bachelor's degree in English Language</h5>
              <h6 className="resume-company">
                Universidad Nacional de Tucumán, Argentina
              </h6>
              <p>
                Developed solid communication skills both written and oral, as
                well as a deep understanding of the building blocks, history,
                and nuances of the language
              </p>

              <div className="topics">
                <h6>Topics Covered:</h6>
                <ul>
                  <li>English grammar and usage</li>
                  <li>Syntactic structures</li>
                  <li>Writing techniques</li>
                  <li>Phonetics and phonology</li>
                  <li>British and American literature</li>
                  <li>History of the english-speaking countries</li>
                  <li>Applied linguistics and literary theory</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="small-title">
          <span className="small-title-icon">
            <i className="fas fa-briefcase"></i>
          </span>
          <h4>Working Experience</h4>
        </div>
        <div className="resume-wrapper">
          <div className="resume">
            <div className="resume-summary">
              <h6 className="resume-year">2016 - now</h6>
            </div>
            <div className="resume-details">
              <h5>English instructor</h5>
              <h6 className="resume-company">Private teaching</h6>
              <p>
                Gave individual classNamees to highschool and college students,
                helped with homework and exam preparation covering speaking,
                writing, and reading skills on different topics
              </p>
              <div className="topics">
                <h6>Topics Covered:</h6>
                <ul>
                  <li>Parts of speech</li>
                  <li>Verb tenses</li>
                  <li>Grammatical structures</li>
                  <li>Syntactic analysis</li>
                  <li>Writing techniques</li>
                  <li>Speech organization</li>
                  <li>Pronunciation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume">
            <div className="resume-summary">
              <h6 className="resume-year">2014-2019</h6>
            </div>
            <div className="resume-details">
              <h5>English-Spanish translator</h5>
              <h6 className="resume-company">Freelance</h6>
              <p>
                Worked on translations under commision for diverse clients.
                Published some works through Wordpress' control panel.
              </p>
              <div className="topics">
                <h6>Topics Covered:</h6>
                <ul>
                  <li>Technology</li>
                  <li>Tutorials</li>
                  <li>Education</li>

                  <li>Healthy Eating</li>
                  <li>Workouts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume">
            <div className="resume-summary">
              <h6 className="resume-year">2012-2018</h6>
            </div>
            <div className="resume-details">
              <h5>Web Content Writer</h5>
              <h6 className="resume-company">Freelance</h6>
              <p>
                Wrote and published articles and reviews for several websites,
                mainly related to technology
              </p>
              <div className="topics">
                <h6>Topics Covered:</h6>
                <ul>
                  <li>Technology news</li>
                  <li>Mobile Apps and games reviews</li>
                  <li>Desktop software</li>
                  <li>Computer hardware</li>
                  <li>Tutorials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="small-title">
          <span className="small-title-icon">
            <i className="fas fa-graduation-cap"></i>
          </span>
          <h4>Courses</h4>
        </div>
        <div className="resume-wrapper">
          <div className="resume">
            <div className="resume-summary">
              <h6 className="resume-year">2020 - now</h6>
            </div>
            <div className="resume-details">
              <h5>Web Development Career Path</h5>
              <h6 className="resume-company">Codecademy</h6>
              <p>
                Gained tons of practice regarding front-end and back-end
                technology stacks for building well organized web applications
                and websites
              </p>
              <div className="topics">
                <h6>Topics Covered:</h6>
                <ul>
                  <li>Semantic HTML5</li>
                  <li>CSS3, SASS</li>
                  <li>Bootstrap</li>
                  <li>Vanilla JavaScript</li>
                  <li>React JS</li>
                  <li>PHP</li>
                  <li>Laravel</li>
                  <li>NodeJS / Express</li>
                  <li>Relational and non-relational Databases</li>
                  <li>Git and command line</li>
                  <li>Test Driven Development</li>
                  <li>A lot more...</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume">
            <div className="resume-summary">
              <h6 className="resume-year">2019 - 2020</h6>
            </div>
            <div className="resume-details">
              <h5>FreeCodeCamp Web Design Certification</h5>
              <h6 className="resume-company">FreeCodeCamp</h6>
              <p>
                Learnt Responsive Web Design principles and applied them on
                several projects
              </p>
              <div className="topics">
                <h6>Topics Covered:</h6>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>CSS Flexbox</li>
                  <li>CSS Grid</li>
                  <li>Responsive Web Design Principles</li>
                  <li>Applied Visual Design</li>
                  <li>Applied Accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-title">
          <h2>Certifications</h2>
          <span>Certifications</span>
        </div>

        <div className="certifications-container">
          <ul className="certifications">
            <li>
              <div className="certification-info">
                <i class="devicon-css3-plain-wordmark colored"></i>
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
            <li>
              <div className="certification-info">
                <i class="devicon-react-original-wordmark colored"></i>
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

            <li>
              <div className="certification-info">
                <i class="devicon-javascript-plain colored"></i>
                <div className="info">
                  <span className="certification-title">
                    Building Interactive JavaScript Websites
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
            <li>
              <div className="certification-info">
                <i class="devicon-git-plain colored"></i>
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
            <li>
              <div className="certification-info">
                <i class="fas fa-terminal"></i>
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
          </ul>
          <Modal className="component-modal" show={show} onHide={handleClose}>
            <Modal.Body className="modal-body">
              <img src={certificationPath} alt="" />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
