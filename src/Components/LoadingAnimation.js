import React from 'react';
import logo from '../logo1.png';

const LoadingAnimation = () => {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Logo" className="loading-logo" />
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingAnimation; 