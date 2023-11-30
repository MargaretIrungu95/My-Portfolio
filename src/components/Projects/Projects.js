import React from 'react';
import "./Projects.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// setting up the carousel
const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: '550px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];




function Projects() {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <div>
        <h1 className='proj-title'>
          PROJECTS
        </h1>
      </div>
      <div>
        <Slide>
          {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div>
        <p>
          Please visit my
          <a href='https://github.com/MargaretIrungu95?tab=repositories' style={{textDecoration:'none', color: '#fa9ffa'}} className='git'> Github </a>
          page and take a look at some of my other projects!
        </p>
      </div>
    </div>
  )
}

export default Projects;