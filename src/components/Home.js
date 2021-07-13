import React from "react";

function Home() {
  return (
    <div className="container landing">
      <div className="home-page">
        <h1>
          Hi, I am <span>Simon Sanchez</span>
        </h1>
        <p>
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </p>
        <div className="social">
          <ul>
            <li>
              <a href="https://github.com/simonsanchez92" target="_blank">
                {" "}
                <i className="fab fa-github fa-2x"></i>{" "}
              </a>
            </li>

            <li>
              <a
                href="http://www.linkedin.com/in/simon-sanchez-4a4011190"
                target="_blank"
              >
                {" "}
                <i className="fab fa-linkedin fa-2x"></i>{" "}
              </a>
            </li>

            <li>
              <a href="#" target="_blank">
                {" "}
                <i className="fab fa-facebook fa-2x"></i>{" "}
              </a>
            </li>

            <li>
              <a href="#" target="_blank">
                {" "}
                <i className="fab fa-twitter fa-2x"></i>{" "}
              </a>
            </li>

            <li>
              <a href="#" target="_blank">
                {" "}
                <i className="fab fa-instagram fa-2x"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
