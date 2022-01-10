import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "react-bootstrap/Form";
import emailJs from "@emailjs/browser";
import keys from "../emailSender/keys";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const formName = useRef();
  const formEmail = useRef();
  const formSubject = useRef();
  const formMessage = useRef();

  const { t } = useTranslation();
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
      <div className="section-title">
        <h2>{t("contact_title")}</h2>
        <span>{t("contact_title")}</span>
      </div>

      <ToastContainer position="bottom-right" limit="1" />
      <div className="container form-container">
        <div className="contact-form">
          <h4>{t("contact_form_title")}</h4>

          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="form-name">
              <Form.Label>{t("contact_form_name")}:</Form.Label>
              <Form.Control
                ref={formName}
                className={"form-control"}
                as="input"
                placeholder={t("contact_form_name_placeholder")}
              />
            </Form.Group>

            <Form.Group controlId="form-email">
              <Form.Label>{t("contact_form_email")}:</Form.Label>
              <Form.Control
                ref={formEmail}
                className={"form-control"}
                as="input"
                placeholder={t("contact_form_email_placeholder")}
              />
            </Form.Group>

            <Form.Group controlId="form-subject">
              <Form.Label>{t("contact_form_subject")}</Form.Label>
              <Form.Control
                ref={formSubject}
                as="input"
                placeholder={t("contact_form_subject_placeholder")}
              />
            </Form.Group>

            <Form.Group controlId="form-message">
              <Form.Label>{t("contact_form_msg")}:</Form.Label>
              <Form.Control
                ref={formMessage}
                as="textarea"
                rows={3}
                placeholder={t("contact_form_msg_placeholder")}
              />
            </Form.Group>

            <button className="form-btn" type="submit">
              {t("contact_form_btn")}
            </button>
          </Form>
        </div>

        <div className="contact-cards">
          <div className="contact-card">
            <span>
              <i className="fas fa-users fa-2x"></i>
            </span>

            <div className="contact-card-content">
              <h6>{t("social_media_title")}</h6>

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
