import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilePicture from "../img/my-profile.jpg";

import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleRight,
  faAtlas,
  faClipboardList,
  faCode,
  faCoffee,
  faFile,
  faHouseUser,
  faPaperPlane,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import "react-pro-sidebar/dist/css/styles.css";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";

const homeIcon = <FontAwesomeIcon icon={faHouseUser} />;
const aboutIcon = <FontAwesomeIcon icon={faClipboardList} />;
const resumeIcon = <FontAwesomeIcon icon={faCode} />;
const portfolioIcon = <FontAwesomeIcon icon={faClipboardList} />;
const contactIcon = <FontAwesomeIcon icon={faClipboardList} />;

const SideMenu = () => {
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

  return (
    // <nav id="lateral-nav">
    <nav id="side-menu">
      <ProSidebar
        collapsedWidth={0}
        collapsed={false}
        width={180}
        toggled={false}
        breakPoint={"sm"}
      >
        <SidebarHeader>
          <div className="avatar-container">
            <div className="profile-picture">
              <img src={profilePicture} alt="profile" />
            </div>
          </div>
        </SidebarHeader>
        <Menu iconShape="square" popperArrow={true}>
          <MenuItem onClick={() => handleChange("home")} icon={homeIcon}>
            <Link className={active.active === "home" ? "active" : ""} to="/">
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
          <MenuItem onClick={() => handleChange("contact")} icon={resumeIcon}>
            <Link
              className={active.active === "contact" ? "active" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </MenuItem>
          <ul className="menu"></ul>
        </Menu>

        <SidebarFooter>
          <div className="copy-container">
            <span>&copy; 2021, All rights reserved</span>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </nav>
  );
};

export default SideMenu;
