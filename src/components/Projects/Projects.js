import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';
import projects from "../../assets/projects.json";
import Project from './project/project';
import { Fade } from 'react-reveal';

const Projects = () => (
  <div className="Projects" id="#projects">
    <h4>Projects</h4>
    {
      projects.map((item, index) => {

        if (index % 2 === 0) return (
          <Fade left>
            <Project project={item} />
          </Fade>
        )
        return (
          <Fade right>
            <Project project={item} />
          </Fade>
        )
      })
    }
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
