import React from 'react'
import logo from '../logo.png'

//font awsome import



const NavBar = () => {
  return (
    <nav id="scroll" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
        <div className='container'>
        
        
  <a class="navbar-brand" href="#">
  <img className="logo" src={logo}  />
</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
  </button>
  </div>
  
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto justify-content-end">

  

      <li className="nav-item active">
        <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#resume">About me</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Service</a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">contact us</a>
      </li>



        
    </ul>
    
  </div>
  </div>
</nav>
  )
}

export default NavBar
