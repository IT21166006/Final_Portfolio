import React from 'react';
import project1img from '../images/1.png';
import project1imgHover from '../images/1h.png'; // Hover image
import project2img from '../images/2.png';
import project2imgHover from '../images/2h.png'; // Hover image
import projectFuture from '../images/F.png';


const Projects = () => {
  return (
    
    <div id="projects" className="project-container">
        <div className='glasswindow'>
      <div className="container">
        <div className='row'>
          <div className='col-md-12'>
          <h1 className='text-white text-4xl font-bold '>Projects</h1>
          <h3 className='text-white '>Selected projects I've worked on recently.</h3><a href='https://github.com/IT21166006'> <h4 className='text-red-500 '>Wan't to see more?</h4></a>
          <br></br>
          </div>
        </div>
        <div className="row">

          <div className="col-md-4">
          <div className="project-image-container">
              <img src={project1img} alt="Project 1" className="project-image" />
              <img src={project1imgHover} alt="Project 1 Hover" className="project-hover-image" />
            </div>
          </div>
          
          <div className="col-md-4">
          <div className="project-image-container">
              <img src={project2img} alt="Project 2" className="project-image" />
              <img src={project2imgHover} alt="Project 2 Hover" className="project-hover-image" />
            </div>
          </div>

          <div className="col-md-4">
            <img src={projectFuture} alt="Project 3" className="project-image" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img src={projectFuture} alt="Project 1" className="project-image" />
          </div>
          <div className="col-md-4">
            <img src={projectFuture} alt="Project 2" className="project-image" />
          </div>
          <div className="col-md-4">
            <img src={projectFuture} alt="Project 3" className="project-image" />
          </div>
        </div>


      </div>
    </div>
    </div>
  );
}

export default Projects;
