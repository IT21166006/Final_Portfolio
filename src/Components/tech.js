import React from 'react';
import technologiesImage from '../images/tech.png'; // Renamed the imported image variable

const TechComponent = () => { // Renamed the functional component name
  return (
    <div>
      <div className='container' id='familid'>
            <div className='row'>
              <div className='col-md-12'>
              <h1 className='famil'>Technologies I am familiar with</h1>
              <img className="img-fluid" id="tech" src={technologiesImage}  alt="Technologies" /> {/* Updated the image variable name */}
            </div>
          </div>
          </div>
        
      
    </div>
  );
}

export default TechComponent;
