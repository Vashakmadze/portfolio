import React from 'react';
import PropTypes from 'prop-types';
import './Terminal.css';
import resume from "../../assets/Luka Vashakmadze.pdf"

const Terminal = () => (
  <div className="Terminal">
    <div class="terminal-window">
      <header>
        <div class="button green"></div>
        <div class="button yellow"></div>
        <div class="button red"></div>
      </header>
      <section class="terminal">
        <div className='location'>
          <h2>&gt; Luka.currentLocation</h2>
          <h3>"Brugge, Belgium"</h3>
        </div>
        <div className='resume'>
          <h2>&gt; Luka.resume</h2>
          <h4><a href={resume} download="Luka Vashakmadze">"Luka Vashakmadze.pdf"</a></h4>
        </div>
        <div className='interests'>
          <h2>&gt; Luka.interests</h2>
          <h3><span>[</span>"football", "coding", "gaming"<span>]</span></h3>
        </div>
        <div className='education'>
          <h2>&gt; Luka.education</h2>
          <h3>BAS Applied Computer Science @ <span>Howest University of Applied Sciences</span></h3>
          <h3>Front End Web Development @ <span>Academy of Digital Industries</span></h3>
        </div>
        <div className='skills'>
          <h2>&gt; Luka.skills</h2>
          <h3><span>[</span>"javascript", "React", "Java", "Git", "Firebase", "Bootstrap"<span>]</span></h3>
        </div>
        <div className='type'>
          <h1>&gt;</h1>
        </div>
      </section>
    </div>
  </div>
);

Terminal.propTypes = {};

Terminal.defaultProps = {};

export default Terminal;
