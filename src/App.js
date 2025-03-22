import React, { useState, useEffect } from 'react';
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
import Technology from './Components/Technologies';
import Animater from './Components/Animater';
import LoadingAnimation from './Components/LoadingAnimation';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <>
    
      <NavBar />
      <Animater/>
      
      <br></br>
      <Header />
      <br></br>
 

      <Resume/>
      <br></br>
      
      <Projects/>
      <br></br>
      <Quote/>
      <br></br>
      <Technology/>
      <br></br>
     
      <br></br>
      <Footer/>
      <ScrollToTopButton />
    

    </>
  );
}

export default App;
