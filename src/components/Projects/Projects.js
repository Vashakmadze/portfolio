import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';
import projects from "../../assets/projects.json";
import Project from './project/project';

const Projects = () => (
  <div className="Projects" id="#projects">
    <h4>Projects</h4>
    {
      projects.map((item) => {
        return (
          <Project project={item} />
        );
      })
    }
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
