import React, { useEffect } from 'react';
import logo from '../logo1.png';
import '../CSS/Header.css';

function Header() {
  useEffect(() => {
    const title = document.querySelector('.title-3d');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const rotateX = (clientY - centerY) * 0.01;
      const rotateY = (clientX - centerX) * 0.01;

      title.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="project-container-top-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-info">
              <h1 className="title-3d">I'M THARINDU DILSHAN</h1><br />
              <h3 className='welcome-text' style={{
                color: '#ffffff',
                textShadow: '0 0 3px #fff, 0 0 5px #fff, 0 0 7px #49ff18, 0 0 10px #49ff18, 0 0 15px #49ff18'
              }}>
                Welcome to NextGen Labs
              </h3>



              <br />
              <img className="logo" src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />


              <br></br>
              <div className="container">
                <div className="row">

                  <div className="col-md-12">
                    <button type="button" className="btn-primary"><a id="resumebtn" href='#resume'>Getting Start</a></button>
                  </div>
                </div>
              </div>
            </div>
            <br />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
