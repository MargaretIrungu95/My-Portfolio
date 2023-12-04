import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LightSpeed, Fade } from "react-reveal";
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
      <div className='overview-desc'>
        <Fade>
          <h1 className = 'my-name'style={{color: '#EE82EE'}}>
            <em>OVERVIEW</em>
          </h1>
        </Fade>
        
        <LightSpeed>
          <p className='aboutcont'>
            I am a <span style={{color: '#fa9ffa'}}><em>Junior Developer</em></span> looking to get into the Technology Industry. I am keen to<br/>
            learn new programming languages via building games and applications. I enjoy creating both <br/> 
            the front and backend, hence looking to fulfil a career in <span style={{color: '#fa9ffa'}}><em>Fullstack Development</em></span>.
          </p>
          <p className='aboutcont'>  
            As an Aerospace Engineering graduate, I am an analytical, adaptable and <br/>
            fast learner as well as problem solver, which is crucial for this industry. <br/>
            I am therefore always looking to keep up with new and updated languages <br/>
            as I continue to grow within my abilities as an upcoming developer. <br/>
            If I was to describe myself in a sentence that would be: <br/>
            <span style={{color: '#fa9ffa'}}><em>"Resilient, always Curious, just like a cat!"</em></span>
          </p>
        </LightSpeed>
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

      
      </div>
      

      {/* creating the cube */}
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