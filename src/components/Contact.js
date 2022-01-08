import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "react-bootstrap/Form";
import emailJs from "@emailjs/browser";
import keys from "../emailSender/keys";

const Contact = () => {
  const form = useRef();
  const formName = useRef();
  const formEmail = useRef();
  const formSubject = useRef();
  const formMessage = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formName.current.value,
      email: formEmail.current.value,
      subject: formSubject.current.value,
      message: formMessage.current.value,
    };
    const options = {
      style: { backgroundColor: "#1111117c", color: "#eee" },
      progressStyle: { backgroundColor: "#414247" },
      autoClose: 2000,
    };

    if (
      !templateParams.name ||
      !templateParams.subject ||
      !templateParams.email ||
      !templateParams.message
    ) {
      toast.error("Please fill all fields first...", options);
    } else {
      toast.info("Sending email...", options);

      emailJs
        .send(keys.SERVICE_ID, keys.TEMPLATE_ID, templateParams, keys.USER_ID)
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Email sent!", {
              progressStyle: { backgroundColor: "transparent" },
              style: options.style,
              autoClose: options.autoClose,
            });

            formName.current.value = "";
            formEmail.current.value = "";
            formSubject.current.value = "";
            formMessage.current.value = "";
          },
          function (error) {
            console.log("FAILED...", error);
            toast.error("There has been some error...", options);
          }
        );
    }
  };

  return (
    <div className="container contact-container">
      {/* <div class="container contact-container"> */}

      <div className="section-title">
        {/* <h2>Contact Me</h2>
        <span>Contact Me</span> */}
        <h2>Contacto</h2>
        <span>Contacto</span>
      </div>
      <ToastContainer position="bottom-right" limit="1" />
      <div className="container form-container">
        <div className="contact-form">
          {/* <h4>Get In Touch</h4> */}
          <h4>Contactame</h4>

          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="form-name">
              <Form.Label>Tu nombre:</Form.Label>
              <Form.Control
                ref={formName}
                className={"form-control"}
                as="input"
                placeholder="Ingresa tu nombre..."
              />
            </Form.Group>

            <Form.Group controlId="form-email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                ref={formEmail}
                className={"form-control"}
                as="input"
                placeholder="Ingresa tu Email..."
              />
            </Form.Group>

            <Form.Group controlId="form-subject">
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                ref={formSubject}
                as="input"
                placeholder="Ingresa el asunto.."
              />
            </Form.Group>

            <Form.Group controlId="form-message">
              <Form.Label>Tu mensaje:</Form.Label>
              <Form.Control
                ref={formMessage}
                as="textarea"
                rows={3}
                placeholder="Escribe un mensaje..."
              />
            </Form.Group>

            <button className="form-btn" type="submit">
              Enviar mail
            </button>
          </Form>
        </div>

        <div className="contact-cards">
          <div className="contact-card">
            <span>
              <i className="fas fa-users fa-2x"></i>
            </span>

            <div className="contact-card-content">
              <h6>Redes sociales</h6>

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
