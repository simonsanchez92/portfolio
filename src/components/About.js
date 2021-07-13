import React from "react";
import profile from "../img/my-profile.jpg";

function About() {
  return (
    <div>
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <span>About Me</span>
        </div>

        <div className="about-info row">
          <div className="image-container">
            <img src={profile} alt="me after a long ride" />
          </div>

          <div className="about-content">
            <h3>
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
                <b>Nationality</b> Argentinian
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
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>

      <div className="container technologies-container">
        <div className="section-title">
          <h2>Tech Stack</h2>
          <span>Tech Stack</span>
        </div>
        {/* <h3 id="technologies-title">
          <span>Technologies</span> I work with...
        </h3> */}

        {/* Technologies container */}
        <div className="technologies">
          <ul>
            <li className="tech">
              <i class="devicon-javascript-plain colored"></i>
              <span>JavaScript</span>
            </li>

            <li className="tech">
              <i class="devicon-react-original colored"></i>
              <span>React</span>
            </li>
            <li className="tech">
              <i class="devicon-html5-plain colored"></i>

              <span>HTML5</span>
            </li>
            <li className="tech">
              <i class="devicon-nodejs-plain-wordmark colored"></i>

              <span>Node JS</span>
            </li>

            <li className="tech">
              <i class="devicon-css3-plain colored"></i>

              <span>CSS3</span>
            </li>
            <li className="tech">
              <i class="devicon-sass-original colored"></i>

              <span>Sass</span>
            </li>
            <li className="tech">
              <i class="devicon-php-plain colored"></i>
              <span>PHP</span>
            </li>
            <li className="tech">
              <i class="devicon-angularjs-plain colored"></i>

              <span>Angular</span>
            </li>
            <li className="tech">
              <i class="devicon-git-plain colored"></i>

              <span>Git</span>
            </li>
            <li className="tech">
              <i class="devicon-mongodb-plain colored"></i>

              <span>Mongo db</span>
            </li>

            <li className="tech">
              <i class="devicon-postgresql-plain colored"></i>
              <span>PostgreSQL</span>
            </li>
            <li className="tech">
              <i class="devicon-npm-original-wordmark colored"></i>

              <span>NPM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <span>Services</span>
        </div>

        <div className="services">
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
        </div>
      </div>
    </div>
  );
}

export default About;
