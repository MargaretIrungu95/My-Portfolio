import React from 'react';
import "./Skills.css";
import Tagcloud from './tagcloud';
import { Fade, Bounce, Zoom } from "react-reveal";


function Skills() {
  return (
    <div className='skills'>
      <div className='content-wrap'>
        <Bounce>
          <h1 className='skills-title'> <span><em>SKILLS</em></span></h1>
        </Bounce>
        <Zoom>
          <p className='skills-content aboutcont'>
            I took a particular interest in coding during my time as an Engineering student.<br/> 
            I however took a liking to <span style={{color: '#fa9ffa'}}><em>Software Development</em></span> upon completion of my degree. <br/>
            I undertook a short vigorous course that sharpened my knowledge in Full Stack Development.<br/>
            These are some of the skills I have in my <span style={{color: '#fa9ffa'}}> <em>Tech Stack</em></span> so far.<br/>
            I am always dedicated to learning something new, as frequently as possible, given that I believe: <br/> 
            <span style={{color: '#fa9ffa'}}> <em>"We are not what we know, but what we are willing learn"  ~ Mary Catherine Bateson</em></span> 
          </p>
        </Zoom>
        
      </div>
      <Fade>
        <div className='tagcloud-wrap'>
          <Tagcloud className= 'tagcloud'/>
        </div>
      </Fade>
      
      
    </div>
  )
}

export default Skills;