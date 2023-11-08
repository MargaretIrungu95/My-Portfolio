import React from 'react';
import "./Home.css";
import Greetings from './greeting'
import { Zoom, Bounce, Reveal } from "react-reveal";

function Home() {
  return (
    <div className='home'>
      <Bounce>
        <Greetings className= 'greetings'/>
      </Bounce>
      <Zoom>
        <h1 className='title'>
          Hello! My name is Margaret!
        </h1>
      </Zoom>
      <br/>
      <Reveal>
        <p className='welcome-msg'>Welcome to my Portfolio. I hope you enjoy getting to know alittle more about me.</p>
      </Reveal>
      <br/>
      <Bounce>
        <h3 className='scroll'>HAPPY SCROLLING!</h3>
      </Bounce>
      
    </div>
  )
}

export default Home;