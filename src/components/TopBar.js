import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAddressCard,
  faClipboardList,
  faCode,
  faCodeBranch,
  faEllipsisV,
  faEnvelope,
  faHouseUser,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHouseUser} size={"1x"} />;
const aboutIcon = <FontAwesomeIcon icon={faAddressCard} size={"1x"} />;
const resumeIcon = <FontAwesomeIcon icon={faClipboardList} size={"1x"} />;
const portfolioIcon = <FontAwesomeIcon icon={faCode} size={"1x"} />;
const contactIcon = <FontAwesomeIcon icon={faEnvelope} size={"1x"} />;

const ellipsisIcon = (
  <FontAwesomeIcon icon={faEllipsisV} size={"lg"} color={"#25598d"} />
);

const closeIcon = (
  <FontAwesomeIcon icon={faTimes} size={"lg"} color={"#25598d"} />
);

const topIcon = (
  <FontAwesomeIcon
    icon={faCodeBranch}
    size={"lg"}
    color={"#25598d"}
    className="top-icon"
  />
);

/**
 * Hook that alerts clicks outside of the passed ref
 */

const TopBar = () => {
  const [active, setActive] = useState({
    active: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (param) => {
    setActive({
      active: param,
    });
    setIsOpen(false);
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
  }, [history.location.pathname]);
  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");

          setIsOpen(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef}>
      <div className="toggler-container">
        <span>{topIcon} Welcome to my site</span>

        <button className="top-bar-toggler" onClick={() => toggleBar()}>
          {isOpen ? closeIcon : ellipsisIcon}
        </button>
      </div>

      <nav className={isOpen ? "top-bar open" : "top-bar"}>
        <ul className="menu">
          <li onClick={() => handleChange("home")}>
            <Link className={active.active === "home" ? "active" : ""} to="/">
              {homeIcon}
              Home
            </Link>
          </li>
          <li onClick={() => handleChange("about")}>
            <Link
              className={active.active === "about" ? "active" : ""}
              to="/about"
            >
              {aboutIcon}
              About
            </Link>
          </li>
          <li onClick={() => handleChange("resume")}>
            <Link
              className={active.active === "resume" ? "active" : ""}
              to="/resume"
            >
              {resumeIcon}
              Resume
            </Link>
          </li>
          <li onClick={() => handleChange("portfolio")}>
            <Link
              className={active.active === "portfolio" ? "active" : ""}
              to="/portfolio"
            >
              {portfolioIcon}
              Portfolio
            </Link>
          </li>
          <li onClick={() => handleChange("contact")}>
            <Link
              className={active.active === "contact" ? "active" : ""}
              to="/contact"
            >
              {contactIcon}
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
