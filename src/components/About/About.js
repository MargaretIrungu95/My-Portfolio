import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNode
} from '@fortawesome/free-brands-svg-icons'
import "./About.css";

function About() {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <h1>
        OVERVIEW
      </h1>
      <p>
        I am a Junior Developer looking to get into the Technology Industry.<br/>
        I am keen to learn new programming languages via building games and applications. <br/>
        I enjoy creating both the front and backend, hence looking to fulfil a career in Fullstack Development.
      </p>
      <br/>
      {/* <p>
        Some of the frameworks I have worked with are:
      </p>
      <p>
        JavaScript <br/>
        HTML5 <br/>
        CSS <br/>
        Node.js <br/>
        SQL <br/>
        Mongoose <br/>
        React <br/>
        Express <br/>
        Git 
      </p> */}

      <p>
        I am an adaptable and fast learner, which is crucial for this industry. <br/>
        I am therefore always looking to keep up with new and updated languages <br/>
        as I continue to grow within my abilities as an upcoming developer. <br/>
        If I was to describe myself in a sentence that would be: <br/>
        "Resilient, always Curious just like a cat! "
      </p>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faNode} color="#4B8BBE" size="sm" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" size="1x"/>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" size="1x"/>
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="1x"/>
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size="1x"/>
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" size="1x"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;