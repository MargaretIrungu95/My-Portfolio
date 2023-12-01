import React from 'react';
import "./Home.css";
import Greetings from './greeting';
import { Link } from "react-router-dom";
import { Zoom, Bounce, Reveal, Fade } from "react-reveal";
import blckgirlcode from '../Images/Blckgirlcode.gif';
import ReactTyped from 'react-typed';

function Home() {
  return (
    <div className='home'>
      
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
            <em><span style={{color: '#EE82EE'}}><ReactTyped strings={["Margaret."]} typeSpeed={100} loop showCursor={false} /></span></em>
          </h1>
        </Zoom>
        <Reveal className= 'welcome-wrapper'>
          <p className='welcome-msg'>Welcome to my Portfolio! 
          <br/> I enjoy creating web applications, 
          <br/> both front and backend.
          <br/>I hope you enjoy getting to know 
          <br/>alittle more about me.</p>
        </Reveal>
        {/* <Bounce className= 'scroll-wrapper'>
          <h3 className='scroll'>HAPPY <span className='scrolling'>SCROLLING</span></h3>
        </Bounce> */}
        <br/>
        <Link to= '/about' className='linky'>
          <button>
            About Me
          </button>
        </Link> 
        <Link to= '/contact' className='linky'>
          <button>
            Contact Me
          </button>
        </Link>
      </div> 
        <div className='purpbg'>
          <Fade>
            <img src= {blckgirlcode} alt='coding girl' style={{width:'72%', position: 'relative', borderRadius: '130px'}}/>
          </Fade>
          
        </div>
    </div>
    
  )
}

export default Home;