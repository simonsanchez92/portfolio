import React from "react";

import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <div className="container contact-container">
      {/* <div class="container contact-container"> */}

      <div className="section-title">
        <h2>Contact Me</h2>
        <span>Contact Me</span>
      </div>

      <div className="container form-container">
        <div className="contact-form">
          <h4>Get In Touch</h4>

          <Form>
            <Form.Group controlId="form-name">
              <Form.Label>Your name:</Form.Label>
              <Form.Control
                className={"form-control"}
                as="input"
                placeholder="Enter your name..."
              />
            </Form.Group>

            <Form.Group controlId="form-subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control as="input" placeholder="Enter subject.." />
            </Form.Group>

            <Form.Group controlId="form-message">
              <Form.Label>Your message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write a message.."
              />
            </Form.Group>

            <button className="form-btn" type="submit">
              Send Mail
            </button>
          </Form>
        </div>

        <div className="contact-cards">
          <div className="contact-card">
            <span>
              <i className="fas fa-users fa-2x"></i>
            </span>

            <div className="contact-card-content">
              <h6>Social Media</h6>

              <ul>
                <li>
                  <a
                    href="http://www.linkedin.com/in/simon-sanchez-4a4011190"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i className="fab fa-linkedin"></i>/LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/simonsanchez92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i className="fab fa-github "></i>/Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i className="fab fa-facebook "></i>/Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i className="fab fa-instagram"></i>/Instagram
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    {" "}
                    <i class="fab fa-twitter "></i>/Twitter
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="contact-card">
            <span>
              <i className="far fa-envelope fa-2x"></i>
            </span>
            <div className="contact-card-content">
              <h6>Email</h6>
              <p>simonsanchez.1992@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
