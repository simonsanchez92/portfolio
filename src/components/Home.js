import React from "react";

function Home() {
  return (
    <div className="container landing">
      <div className="home-page">
        <h1>
          Hello, I am <span>Simon Sanchez</span>
        </h1>
        <p>
          Fullstack Developer specialized in building websites and mobile
          applications
        </p>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://github.com/simonsanchez92"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fab fa-github fa-2x"></i>{" "}
              </a>
            </li>

            <li>
              <a
                href="http://www.linkedin.com/in/simon-sanchez-4a4011190"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fab fa-linkedin fa-2x"></i>{" "}
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fab fa-facebook fa-2x"></i>{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
