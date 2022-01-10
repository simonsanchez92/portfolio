import React from "react";
import profilePic from "../img/profile.jpg";

import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        <div className="section-title">
          <h2>{t("about_title")}</h2>
          <span>{t("about_title")}</span>
        </div>

        <div className="about-info row">
          <div className="image-container">
            <img src={profilePic} alt="Profile pic" />
          </div>

          <div className="about-content">
            <h3>
              {t("hola")} <span>{t("full_name")}</span>
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
              href={process.env.PUBLIC_URL + "/cv/simon_sanchez_cv.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              {t("download_cv")}
            </a>
          </div>
        </div>
      </div>

      <div className="container technologies-container">
        <div className="section-title">
          <h2>{t("tech_stack_title")}</h2>
          <span>{t("tech_stack_title")}</span>
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
          <h2>{t("services_title")}</h2>
          <span>{t("services_title")}</span>
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
      </div>
    </div>
  );
}

export default About;
