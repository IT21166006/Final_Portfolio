import React from 'react';
import arrow from '../images/arrow-up.svg';

const ScrollToTopButton = () => {
  return (
    <div className="scroll-to-top">
    
        <a href="/"><img src={ arrow }  className="arrowup" /></a>
      
    </div>
  );
};

export default ScrollToTopButton;
