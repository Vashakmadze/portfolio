import React from 'react';
import PropTypes from 'prop-types';
import './project.css';
import placeholder from "../../../assets/placeholder.jpg";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import ReactFreezeframe from 'react-freezeframe';

const Project = (props) => (
  <div className="project">
    <div className='left-project'>
      <ReactFreezeframe options={{ overlay: true }} src={props.project.gif} alt="Preview Couldn't load" />
    </div>
    <div className='right-project'>
      <h3 className='title'>{props.project.name}</h3>
      <p className='about'>{props.project.about}</p>
      <div className='tags'>
        {props.project.tags.map((item) => {
          return (
            <div className='tag'>{item}</div>
          )
        })}
      </div>
      <div className='buttons'>
        <button className='demo' onClick={() => window.open(props.project.demo, "_blank")}>Live Demo<FaExternalLinkAlt className='icon' /></button>
        <button className='source' onClick={() => window.open(props.project.github, "_blank")}><FaGithub className='icon' />View Source</button>
      </div>
    </div>
  </div>
);

Project.propTypes = {};

Project.defaultProps = {};

export default Project;
