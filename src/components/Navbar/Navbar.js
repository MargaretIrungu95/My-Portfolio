import React from 'react';
import logo from '../Images/logo.png';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='nav-wrapper'>
      <nav>      
        <img className='logo' src= {logo} alt='logo'/>
        <p className='name'>Margaret Irungu
          <span> |Software Developer</span>
        </p>
  
        <Link to= '/about' style={{color: 'white'}}>
          About me
        </Link>

        <Link to= '/projects' style={{color: 'white'}}>
          Projects
        </Link>

        <Link to= '/contact' style={{color: 'white'}}>
          Contact me
        </Link>

        <Link to= '/skills' style={{color: 'white'}}>
          Skills
        </Link>
      </nav>
    </div>
  )
}

export default Navbar;