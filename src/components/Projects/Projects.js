import React from 'react';
import "./Projects.css";
import { Fade, Bounce, Zoom } from "react-reveal";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// setting up the carousel
// styles for the divs
// const divStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundSize: "contain",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   width: "30%",
// };
const slideImages = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg',
    Title: 'Marvel Character App',
    Description: 'It displays a variety of superheroes, their power statistics, most polpular characters etc. Upon signing in (persistent log in), the user can favourite the characters they like, set their profile pictures etc.',
    Frontend: 'React, NodeJs, CSS3, JavaScript, HTML5',
    FrontendLink: 'https://github.com/MargaretIrungu95/marvel', 
    Backend: 'MySQL, Express',
    BackendLink: 'https://github.com/MargaretIrungu95/marvel-backend',
    Website: 'https://marvel-codenation.netlify.app/'
  },
  {
    url: 'https://live.staticflickr.com/65535/52880173539_631b5d4184_b.jpg',
    Title: 'Cats 4 Lyf',
    Description: 'Ecommerce site for purchasing cats. Information pulled from an API.',
    Frontend: 'React, NodeJS, CSS3, JavaScript, HTML5',
    FrontendLink: 'https://github.com/MargaretIrungu95/cats4lyfe', 
    Backend: 'API',
    // BackendLink: 'N/A',
    Website: 'https://gtinsley99.github.io/cats4life/'
  },
  {
    url: 'https://4.bp.blogspot.com/-hwZOmlb85Ys/UH05y5zgxPI/AAAAAAAAHII/YsoHxfWrk8w/s1600/1.jpg',
    Description: 'This is a game called CyberPet. It includes instructions to the player to keep doing in order to keep their pet alive.',
    Title: 'Cyber Pet',
    Frontend: 'NodeJS, CSS3, JavaScript, HTML5',
    FrontendLink: 'https://github.com/MargaretIrungu95/Week4-assignment', 
    Backend: 'N/A',
    // BackendLink: 'N/A',
    Website: 'https://margaretirungu95.github.io/Week4-assignment/'
  },
  {
    url: 'https://img.freepik.com/premium-vector/weekly-daily-planners-note-papers-todo-lists-sticker-templates-decorated-with-cute-retro-1970s-illustrations-trendy_567840-603.jpg',
    Title: 'To Do List',
    Description: 'A ToDo app created to keep track of your activities and what you have left to do',
    Frontend: 'React, NodeJS, CSS3, JavaScript, HTML5',
    FrontendLink: 'https://github.com/MargaretIrungu95/to-do-list-', 
    Backend: 'N/A',
    // BackendLink: 'N/A',
    Website: 'https://margetodolist.netlify.app/'
  },
];


function Projects() {
  return (
    <div className='project-wrap'>
      <br/>
      <br/>
      <br/>
      <Bounce>
        <div >
          <h1 className='proj-title'>
          <em>PROJECTS</em>
          </h1>
        </div>
      </Bounce>
      
      <Zoom>
        <div className='slide'>
          <Slide className= 'slide-itself'>
            {slideImages.map((slideImage, index) => (
              <div key={index} className='proj-page'>
                <div className='wholeslide'>
                  <div className="slide-image">
                    <img src={slideImage.url} alt='' style={{width: '400px', height: '400px'}} className='sliderimg'></img>
                  </div>
                  <div className='slide-content'>
                    {/* title */}
                    <h2 className='slide-title'>
                      {slideImage.Title}
                    </h2>
                    {/* Desc */}
                    <h3 className='label'>
                      Description: 
                    </h3>
                    <p className='value'>
                      {slideImage.Description}
                    </p>
                    {/* frontend */}
                    <h3 className='label'>
                      Frontend: 
                    </h3>
                    <p className='value'>
                      {slideImage.Frontend}
                    </p>
                    <a href= {slideImage.FrontendLink} className='web-link value'>
                      Github Repository
                    </a>
                    {/* backend */}
                    <h3 className='label'>
                      Backend: 
                    </h3>
                    <p className='value'>
                      {slideImage.Backend}
                    </p>
                    <a href= {slideImage.BackendLink} className='web-link value'>
                      Github Repository
                    </a>
                    {/* web link */}
                    <h3 className='label'>
                      Website: 
                    </h3>
                    <a href= {slideImage.Website} className='web-link value'>
                      Click to view the finished product!
                    </a>
                  </div>
                </div>
                
              </div>
            ))}
          </Slide>
        </div>
      </Zoom>
      
      <Fade>
        <div className='gitlink'>
          <p className='aboutcont'>
            Please visit my&nbsp; 
            <a href='https://github.com/MargaretIrungu95?tab=repositories' className='git web-link'>Github</a>
            &nbsp;page and take a look at some of my other projects!
          </p>
      </div>
      </Fade>
      
    </div>
  )
}


export default Projects;
