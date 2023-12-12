import React from 'react';

const Quote = () => {
  return (
    <div id='quote' className='container'>
      <div className='row'>
        <div className='col-md-12'>
         <h1 >Success comes to <br />those who dare to begin.</h1> 
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-8 d-flex justify-content-center align-items-center'>
            {/* Use className instead of class for React components */}
            <img className="gif img-fluid" src='https://camo.githubusercontent.com/5ddf73ad3a205111cf8c686f687fc216c2946a75005718c8da5b837ad9de78c9/68747470733a2f2f7468756d62732e6766796361742e636f6d2f4576696c4e657874446576696c666973682d736d616c6c2e676966' alt="Quote GIF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
