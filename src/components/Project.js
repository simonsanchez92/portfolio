import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Carousel from "react-bootstrap/Carousel";

import { getAssets } from "../services/projects";

const Project = (props) => {
  const [assets, setAssets] = useState([]);

  const project = props.location.state.project;

  const fetchAssets = async () => {
    // const id = props.location.state.project.id;
    // const data = await getAssets(id);

    setAssets(project.images);
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  // console.log(project);
  console.log(project);

  return (
    <Fragment>
      <div style={{ alignItems: "flex-start" }} className="container">
        <Breadcrumb className="component-breadcrumb">
          <Breadcrumb.Item>Projects</Breadcrumb.Item>
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

      <div className="container">
        <div className="project-technologies">
          <h3>Built with:</h3>
          <ul
            className="project-tech-list"
            // dangerouslySetInnerHTML={{ __html: project.technologies }}
          >
            {/* Esto no va */}
            {project.technologies.map((technology, i) => (
              <li className="list-item">
                <i className={technology.icon}></i> {technology.name}
              </li>
            ))}

            {/* <li className="list-item">
          <i className="devicon-html5-plain colored"></i> HTML5
        </li>
        <li className="list-item">
          <i className="devicon-css3-plain colored"></i> CSS3
        </li>
        <li className="list-item">
          <i className="devicon-javascript-plain colored"></i> JavaScript
        </li>
        <li className="list-item">
          <i className="devicon-react-original colored"></i> React
        </li>
        <li className="list-item">
          <i className="devicon-redux-original colored"></i> Redux
        </li>
        <li className="list-item">
          <i className="devicon-bootstrap-plain colored"></i> Bootstrap
        </li>
        <li className="list-item">
          <i className="devicon-nodejs-plain colored"></i> Node
        </li>
        <li className="list-item">
          <i className="devicon-express-original colored"></i> Express
        </li>
        <li className="list-item">
          <i className="devicon-mongodb-plain-wordmark colored"></i> MongoDB
        </li> */}

            {/* Esto no va */}
          </ul>
        </div>

        <div className="functionality">
          <div className="functionality-info">
            <h3>Functionalities:</h3>
            <ul
            // dangerouslySetInnerHTML={{ __html: project.functionality }}
            >
              {project.functionality.map((item, index) => (
                <li>{item.desc}</li>
              ))}
              {/* <li>Register</li>
          <li>Log in</li>
          <li>Search movies by title</li>
          <li>Access movie's plot and information</li>
          <li>Add/delete from favourites</li> */}
            </ul>
          </div>
          <div className="functionality-image">
            <img src={process.env.PUBLIC_URL + "/functionality.svg"} alt="" />
          </div>
        </div>
        <div className="divider"></div>

        <div className="learning">
          <div className="learning-info">
            <h3>What I learnt:</h3>
            <ul
            // dangerouslySetInnerHTML={{ __html: project.learnt }}
            >
              {project.learnt.map((item, index) => (
                <li>{item.desc}</li>
              ))}
              {/* <li>Dynamic rendering of React components</li>
          <li>Managing app's state with Redux</li>
          <li>API testing with Postman</li>
          <li>Express routing</li>
          <li>Creation of models with Mongoose</li>
          <li>JWT for secure authentication</li> */}
            </ul>
          </div>

          <div className="learning-image">
            <img src={process.env.PUBLIC_URL + "/learning.svg"} alt="" />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <ddiv className="image-gallery">
        <div className="carousel-container">
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
      </ddiv>
      <ul className="project-links">
        <li>
          <a href={project.url} target="_blank">
            <button className="project-btn">See Live</button>
          </a>
        </li>
        <li>
          <a href={project.github_url} target="_blank">
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
