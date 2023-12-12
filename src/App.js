import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Quote from './Components/Quote';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Tech from './Components/tech';





function App() {
  return (
    <>
    
      <NavBar />
      <Header />
      <br></br>
      <Projects/>
      <br></br>
      <Resume/>
      <br></br>
      <Quote/>
      <br></br>
      <Tech/>
      <br></br>
      <Footer/>
      <ScrollToTopButton />
    

    </>
  );
}

export default App;
