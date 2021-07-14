import React, { useState } from "react";
import profilePic from "../img/profile.jpg";

import Modal from "react-bootstrap/Modal";

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
    <div>
      <div className="container">
        <div className="section-title">
          <h2>Sobre mi</h2>
          <span>Sobre mi</span>
          {/* <h2>About Me</h2>
          <span>About Me</span> */}
        </div>

        <div className="about-info row">
          <div className="image-container">
            <img src={profilePic} alt="Profile pic" />
          </div>

          <div className="about-content">
            <h3>
              Hola, soy <span>Simon Sanchez</span>
            </h3>
            <p>
              Soy un desarrollador web full stack capaz de proveer sitios web
              interactivos, integración con bases de datos y servicios de
              terceros haciendo uso de las tecnologías más populares de en la
              actualidad como ReactJS, React Native, Node y ASP.NET Core.
            </p>
            <ul>
              <li>
                <b>Nombre</b> Simon Sanchez
              </li>
              <li>
                <b>Edad</b> 29
              </li>
              <li>
                <b>Nacionalidad</b> Argentino
              </li>
              <li>
                <b>Idiomas</b> Inglés (avanzado), Español (nativo)
              </li>
              <li>
                <b>Ubicacion</b> Tucumán, Argentina
              </li>
              <li>
                <b>Disponibilidad</b> Disponible
              </li>
            </ul>
            <a
              href="https://www.linkedin.com/in/simon-sanchez-4a4011190/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV
            </a>
            {/* <h3>
              I am <span>Simon Sanchez</span>
            </h3>
            <p>
              I am a fullstack web developer. I can provide clean code websites
              more & more interactive with web animations, database integration
              and much more.
            </p>
            <ul>
              <li>
                <b>Full Name</b>Simon Sanchez
              </li>
              <li>
                <b>Age</b> 29
              </li>
              <li>
                <b>Nationality</b> Argentine
              </li>
              <li>
                <b>Languages</b> English, Spanish
              </li>
              <li>
                <b>Location</b> Tucuman, Argentina
              </li>
              <li>
                <b>Availability</b> Hirable
              </li>
            </ul>
            <a
              href="https://www.linkedin.com/in/simon-sanchez-4a4011190/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a> */}
          </div>
        </div>
      </div>

      <div className="container technologies-container">
        <div className="section-title">
          <h2>Tecnologías</h2>
          <span>Tecnologías</span>
          {/* <h2>Tech Stack</h2>
          <span>Tech Stack</span> */}
        </div>
        {/* <h3 id="technologies-title">
          <span>Technologies</span> I work with...
        </h3> */}

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
            {/* <li className="tech">
              <i className="devicon-angularjs-plain colored"></i>

              <span>Angular</span>
            </li> */}
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
      <div className="container">
        <div className="section-title">
          {/* <h2>Services</h2>
          <span>Services</span> */}
          <h2>Servicios</h2>
          <span>Servicios</span>
        </div>

        <div className="services">
          <div className="service">
            <span>
              <i className="fas fa-code"></i>
            </span>
            <h5>Desarrollo web</h5>
            <p>
              Desarrollo de sitios web veloces de la mano de frameworks de
              JavaScript tales como React o Angular.
            </p>
          </div>
          <div className="service">
            <span>
              <i className="fas fa-mobile-alt"></i>
            </span>
            <h5>Diseños responsivos</h5>
            <p>
              Desarrollo sitios web capaces de adaptarse a las dimensiones de
              diversas pantallas, apostando a la mejor experiencia del usuario
            </p>
          </div>
          <div className="service">
            <span>
              <i className="fas fa-palette"></i>
            </span>
            <h5>Desarrollo Móvil</h5>
            <p>
              Desarrollo de aplicaciones móviles híbridas de la mano del
              framework de React Native y su amplia gama de componentes y
              utilidades
            </p>
          </div>
        </div>
        {/* <div className="services">
          <div className="service">
            <span>
              <i className="fas fa-palette"></i>
            </span>
            <h5>Web Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              tenetur ratione quod.
            </p>
          </div>
          <div className="service">
            <span>
              <i className="fas fa-code"></i>
            </span>
            <h5>Web Development</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              tenetur ratione quod.
            </p>
          </div>
          <div className="service">
            <span>
              <i className="fas fa-mobile-alt"></i>
            </span>
            <h5>Responsive Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              tenetur ratione quod.
            </p>
          </div>
        </div> */}
      </div>

      <div className="container">
        <div className="section-title">
          <h2>Certificados</h2>
          <span>Certificados</span>
        </div>

        <div className="certifications-container">
          <ul className="certifications">
            <li>
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
                Ver certificado
              </button>
            </li>
            <li>
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
                Ver certificado
              </button>
            </li>

            <li>
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
                Ver certificado
              </button>
            </li>
            <li>
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
                Ver certificado
              </button>
            </li>
            <li>
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
                Ver certificado
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
