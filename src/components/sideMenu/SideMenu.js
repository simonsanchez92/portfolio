import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faClipboardList,
  faCode,
  faEnvelope,
  faHouseUser,
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import "react-pro-sidebar/dist/css/styles.css";
import "./css/styles.scss";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";

const arrowIconLeft = (
  <FontAwesomeIcon
    icon={faLongArrowAltLeft}
    size={"lg"}
    color={"#25598d"}
    pull={"left"}
    className="arrow-bounce"
  />
);
const arrowIconRight = (
  <FontAwesomeIcon
    icon={faLongArrowAltRight}
    size={"lg"}
    color={"#25598d"}
    className="arrow-bounce"
  />
);

const homeIcon = <FontAwesomeIcon icon={faHouseUser} />;
const aboutIcon = <FontAwesomeIcon icon={faAddressCard} />;
const resumeIcon = <FontAwesomeIcon icon={faClipboardList} />;
const portfolioIcon = <FontAwesomeIcon icon={faCode} />;
const contactIcon = <FontAwesomeIcon icon={faEnvelope} />;

const SideMenu = ({ isCollapsed, toggle }) => {
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
  }, [history.location.pathname]);

  return (
    // <nav id="lateral-nav">
    <nav id="side-menu">
      <ProSidebar
        className="pro-sidebar"
        collapsedWidth={0}
        collapsed={isCollapsed}
        width={180}
        toggled={false}
        breakPoint={"sm"}
      >
        <SidebarHeader className="sidebar-header">
          <div className="avatar-container">
            <div
              className={
                isCollapsed ? "profile-picture collapsed" : "profile-picture"
              }
            >
              <img
                className={isCollapsed ? "collapsed" : ""}
                src={process.env.PUBLIC_URL + "/img/my-profile.jpg"}
                alt="profile"
              />
            </div>
          </div>
        </SidebarHeader>
        <Menu iconShape="square" popperArrow={true} className="sidebar-menu ">
          <MenuItem
            active={active.active === "home" ? true : false}
            onClick={() => handleChange("home")}
            icon={homeIcon}
          >
            <Link className={active.active === "home" ? " active" : ""} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem
            onClick={() => handleChange("about")}
            icon={aboutIcon}
            active={active.active === "about" ? true : false}
          >
            <Link
              className={active.active === "about" ? "active" : ""}
              to="/about"
            >
              About
            </Link>
          </MenuItem>

          <MenuItem
            onClick={() => handleChange("portfolio")}
            icon={portfolioIcon}
            active={active.active === "portfolio" ? true : false}
          >
            <Link
              className={active.active === "portfolio" ? "active" : ""}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </MenuItem>
          <MenuItem
            onClick={() => handleChange("resume")}
            icon={resumeIcon}
            active={active.active === "resume" ? true : false}
          >
            <Link
              className={active.active === "resume" ? "active" : ""}
              to="/resume"
            >
              Resume
            </Link>
          </MenuItem>
          <MenuItem
            onClick={() => handleChange("contact")}
            icon={contactIcon}
            active={active.active === "contact" ? true : false}
          >
            <Link
              className={active.active === "contact" ? "active" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </MenuItem>

          <button className="toggle-btn" onClick={() => toggle()}>
            {isCollapsed ? arrowIconRight : arrowIconLeft}
          </button>
        </Menu>

        <SidebarFooter className="copy-container">
          <span>&copy; {isCollapsed ? "" : " 2021, All rights reserved"}</span>
        </SidebarFooter>
      </ProSidebar>
    </nav>
  );
};

export default SideMenu;
