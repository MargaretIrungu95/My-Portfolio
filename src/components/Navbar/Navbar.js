import React from 'react';
import logo from '../Images/logo.png';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';



function Navbar() {

  return (
    <div className='nav-wrapper'>
      <nav> 
        <img className='logo' src= {logo} alt='logo'/>
        <p className='name'>Margaret Irungu
          <span style={{color: '#cc9dcc'}}> |Software Developer</span>
        </p>

        <Link to= '/' className='link'>
          <FontAwesomeIcon icon={faFortAwesome} bounce size="xl"/> <br/>
          Home
        </Link>

        <Link to= '/about' className='link'>
          <FontAwesomeIcon icon={faAddressCard} bounce size="xl"/> <br/>
          About
        </Link>

        <Link to= '/skills' className='link'> 
          <FontAwesomeIcon icon={faNode} bounce size="xl"/> <br/>
          Skills
        </Link>

        <Link to= '/projects' className='link'>
          <FontAwesomeIcon icon={faBarsProgress} bounce size="xl"/> <br/>
          Projects
        </Link>

        <Link to= '/contact' className='link'>
          <FontAwesomeIcon icon={faAddressBook} bounce size="xl"/> <br/>
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default Navbar;