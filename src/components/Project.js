import React, { useState, useEffect, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import Carousel from "react-bootstrap/Carousel";

const Project = (props) => {
  const [assets, setAssets] = useState([]);

  const project = props.location.state.project;

  const fetchAssets = useCallback(() => {
    setAssets(project.images);
  }, [project.images]);

  useEffect(() => {
    fetchAssets();
  }, [fetchAssets]);

  return (
    <Fragment>
      <div
        style={{ alignItems: "flex-start" }}
        className="container project-poster-container"
      >
        <Breadcrumb className="component-breadcrumb">
          <Breadcrumb.Item>
            <Link to="/portfolio">Projects</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item
            active
            href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
          >
            {project.title}
          </Breadcrumb.Item>
        </Breadcrumb>

        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <div className="project-poster">
          <img
            src={process.env.PUBLIC_URL + project.cover_url}
            alt={project.title}
          />
        </div>
      </div>

      <div className="container ">
        <div className="functionality">
          <div className="functionality-info">
            <h3>Functionalities:</h3>
            <ul>
              {project.functionality.map((item, i) => (
                <li key={i}>{item.desc}</li>
              ))}
            </ul>
          </div>
          <div className="functionality-image">
            <img
              src={process.env.PUBLIC_URL + "/img/functionality.svg"}
              alt=""
            />
          </div>
        </div>
        <div className="divider"></div>

        <div className="learning">
          <div className="learning-info">
            <h3>What I learnt</h3>
            <ul>
              {project.learnt.map((item, i) => (
                <li key={i}>{item.desc}</li>
              ))}
            </ul>
          </div>

          <div className="learning-image">
            <img src={process.env.PUBLIC_URL + "/img/learning.svg"} alt="" />
          </div>
        </div>
        <div className="divider"></div>

        <div className="project-technologies container  d-flex justify-content-start p-0">
          <h3 className="w-100 pb-3">Technologies involved:</h3>
          <ul className="project-tech-list">
            {project.technologies.map((technology, i) => (
              <li className="list-item" key={i}>
                <i className={technology.icon}></i> {technology.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div className="image-gallery">
        <div className="carousel-container ">
          <Carousel interval={5000}>
            {assets &&
              assets.map((asset, i) => (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + asset.url}
                    alt={asset.alt}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </div>
      <ul className="project-links">
        <li>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <button className="project-btn">Go to Website</button>
          </a>
        </li>
        <li>
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-btn">
              Github Repo <i className="devicon-github-original colored"></i>
            </button>
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Project;
