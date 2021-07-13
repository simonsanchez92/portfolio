import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { getProjects } from "../services/projects";
import projectsFile from "../js/projects.json";

import moviePic from "../img/the-final-cut/the-final-cut-1.png";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    // const data = await getProjects();
    setProjects([projectsFile]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(process.env);
  return (
    <Fragment>
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <span>Portfolio</span>
        </div>
      </div>
      <div className="projects-container">
        {projects.length < 1 ? (
          <div>Cargando...</div>
        ) : (
          projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="project-image">
                {/* <img src={process.env.PUBLIC_URL + project.cover_url} alt="" /> */}
                <img src={moviePic} alt="" />
                <ul>
                  <li>
                    <Link
                      className="project-link"
                      to={{
                        pathname: `/project/${project.id}`,
                        state: { project },
                      }}
                    >
                      <i className="fas fa-search-plus"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <h5>{project.title}</h5>
              <h6>{project.subtitle}</h6>
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Portfolio;
