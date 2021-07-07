import React, { useEffect, useState } from "react";
import profilePicture from "../img/my-profile.jpg";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

const Navbar = ({ width, showNav, toggler }) => {
  // Seting nav option as active when reloading page
  const [active, setActive] = useState({
    active: "",
  });

  const handleChange = (param) => {
    setActive({
      active: param,
    });
  };
  let history = useHistory();
  useEffect(() => {
    let active;

    if (history.location.pathname === "/") {
      active = "home";
    } else {
      active = history.location.pathname.split("/")[1];
    }

    handleChange(active);
  }, []);

  return showNav === "show" ? (
    <nav id="lateral-nav" className={showNav}>
      <div className="avatar-container">
        <div className="profile-picture">
          <img src={profilePicture} alt="profile" />
        </div>
      </div>
      <ul className="menu">
        <li onClick={() => handleChange("home")}>
          <Link className={active.active === "home" ? "active" : ""} to="/">
            Home
          </Link>
        </li>
        <li onClick={() => handleChange("about")}>
          <Link
            className={active.active === "about" ? "active" : ""}
            to="/about"
          >
            About
          </Link>
        </li>
        <li onClick={() => handleChange("resume")}>
          <Link
            className={active.active === "resume" ? "active" : ""}
            to="/resume"
          >
            Resume
          </Link>
        </li>
        <li onClick={() => handleChange("portfolio")}>
          <Link
            className={active.active === "portfolio" ? "active" : ""}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li onClick={() => handleChange("contact")}>
          <Link
            className={active.active === "contact" ? "active" : ""}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="copy-container">
        <span>&copy; 2021, All rights reserved</span>
      </div>
    </nav>
  ) : (
    <nav className="top-bar">
      <ul className="menu">
        <li onClick={() => handleChange("home")}>
          <Link className={active.active === "home" ? "active" : ""} to="/">
            Home
          </Link>
        </li>
        <li onClick={() => handleChange("about")}>
          <Link
            className={active.active === "about" ? "active" : ""}
            to="/about"
          >
            About
          </Link>
        </li>
        <li onClick={() => handleChange("resume")}>
          <Link
            className={active.active === "resume" ? "active" : ""}
            to="/resume"
          >
            Resume
          </Link>
        </li>
        <li onClick={() => handleChange("portfolio")}>
          <Link
            className={active.active === "portfolio" ? "active" : ""}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li onClick={() => handleChange("contact")}>
          <Link
            className={active.active === "contact" ? "active" : ""}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
