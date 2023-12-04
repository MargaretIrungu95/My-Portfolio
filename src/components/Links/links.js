import React from 'react';
import './links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Links() {
    return (
        <div className='contactme'>
            <a href='https://github.com/MargaretIrungu95?tab=repositories'>
                <FontAwesomeIcon icon={faGithub} spin spinReverse size='xl' title='Visit my Github page!' className='linkyyy'/>
            </a>
            <br/>
            <br/>
            <a href='http://linkedin.com/in/margaret-irungu-809959245'>
                <FontAwesomeIcon icon={faLinkedin} spin spinReverse  size='xl' title='Visit my LinkedIn page!' className='linkyyy'/>
            </a>
            
        </div>
    );
};

export default Links;