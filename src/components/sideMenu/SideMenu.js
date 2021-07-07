import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilePicture from "../../img/my-profile.jpg";

import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAddressCard,
  faAngleRight,
  faArrowAltCircleLeft,
  faArrowLeft,
  faArrowRight,
  faAtlas,
  faClipboardList,
  faCode,
  faCodeBranch,
  faCoffee,
  faEnvelope,
  faEnvelopeOpen,
  faFile,
  faFileCode,
  faHouseUser,
  faPaperPlane,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

import "react-pro-sidebar/dist/css/styles.css";
import "./css/styles.scss";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";

const arrowIconLeft = <FontAwesomeIcon icon={faArrowLeft} />;
const arrowIconRight = <FontAwesomeIcon icon={faArrowRight} />;

const homeIcon = <FontAwesomeIcon icon={faHouseUser} />;
const aboutIcon = <FontAwesomeIcon icon={faAddressCard} />;
const resumeIcon = <FontAwesomeIcon icon={faClipboardList} />;
const portfolioIcon = <FontAwesomeIcon icon={faCode} />;
const contactIcon = <FontAwesomeIcon icon={faEnvelope} />;

const SideMenu = () => {
  const [active, setActive] = useState({
    active: "",
  });

  const [isCollapsed, setIsCollapsed] = useState(false);

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

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    // <nav id="lateral-nav">
    <nav id="side-menu">
      <ProSidebar
        collapsedWidth={0}
        collapsed={isCollapsed}
        width={180}
        toggled={false}
        breakPoint={"sm"}
        className="prosidebar"
      >
        <button onClick={() => handleCollapse()}>
          {isCollapsed ? arrowIconRight : arrowIconLeft}
        </button>

        <SidebarHeader>
          <div className="avatar-container">
            <div
              className={
                isCollapsed ? "profile-picture collapsed" : "profile-picture"
              }
            >
              <img
                className={isCollapsed ? "collapsed" : ""}
                src={profilePicture}
                alt="profile"
              />
            </div>
          </div>
        </SidebarHeader>
        <Menu iconShape="square" popperArrow={true} className="sidebar-menu">
          <MenuItem
            active={true}
            onClick={() => handleChange("home")}
            icon={homeIcon}
          >
            <Link className={active.active === "home" ? " active" : ""} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={() => handleChange("about")} icon={aboutIcon}>
            <Link
              className={active.active === "about" ? "active" : ""}
              to="/about"
            >
              About
            </Link>
          </MenuItem>
          <MenuItem onClick={() => handleChange("resume")} icon={resumeIcon}>
            <Link
              className={active.active === "resume" ? "active" : ""}
              to="/resume"
            >
              Resume
            </Link>
          </MenuItem>
          <MenuItem
            onClick={() => handleChange("portfolio")}
            icon={portfolioIcon}
          >
            <Link
              className={active.active === "portfolio" ? "active" : ""}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </MenuItem>
          <MenuItem onClick={() => handleChange("contact")} icon={contactIcon}>
            <Link
              className={active.active === "contact" ? "active" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </MenuItem>
          <ul className="menu"></ul>
        </Menu>

        <SidebarFooter className="copy-container">
          <span>&copy; {isCollapsed ? "" : " 2021, All rights reserved"}</span>
        </SidebarFooter>
      </ProSidebar>
    </nav>
  );
};

export default SideMenu;
