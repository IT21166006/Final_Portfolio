import React from 'react';
import logo from '../logo1.png';

const NavBar = () => {
  return (
    <nav id="scroll" className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className='container'>
        <a className="navbar-brand"  href="#">
          <img className="logo" src={logo} alt="Logo" style={{ width: '80px', height: 'auto', position: 'fixed' }} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto justify-content-end">
          <li className="nav-item active">
            <a className="nav-link" href="/" style={{ color: 'white' }}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume" style={{ color: 'white' }}>About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects" style={{ color: 'white' }}>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" style={{ color: 'white' }}>Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;