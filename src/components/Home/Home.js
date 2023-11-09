import React from 'react';
import "./Home.css";
import Greetings from './greeting'
import { Zoom, Bounce, Reveal } from "react-reveal";
import purplebg from '../Images/purple-bg.webp';
import ReactTyped from 'react-typed';

function Home() {
  return (
    <div className='home'>
      <div className='purpbg'>
        <img src= {purplebg} alt='violetgif' style={{width:'160%'}}/>
      </div>
      <br/>
      <div className='about-wrapper'>
        <Bounce>
          <div className='greeting'>
            <Greetings/>
          </div>
        </Bounce>
        <Zoom >
          <h1 className='title'>
            I'm {""} 
            <span style={{color: '#EE82EE'}}><ReactTyped strings={["Margaret."]} typeSpeed={100} loop showCursor={false} /></span>
          </h1>
        </Zoom>
        <Reveal className= 'welcome-wrapper'>
          <p className='welcome-msg'>Welcome to my Portfolio! 
          <br/> I enjoy creating web applications, 
          <br/> both front and backend.
          <br/>I hope you enjoy getting to know 
          <br/>alittle more about me.</p>
        </Reveal>
        <Bounce className= 'scroll-wrapper'>
          <h3 className='scroll'>HAPPY <span className='scrolling'>SCROLLING !</span></h3>
        </Bounce>

      </div> 
    </div>
  )
}

export default Home;