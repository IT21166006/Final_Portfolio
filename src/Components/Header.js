import React from 'react';


function Header() {
  return (
    <div className="project-container-top-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-info">
              <h1 className="animate-charcter">I'M THARINDU DILSHAN</h1><br />
              <h3>I PROVIDING</h3>
              {/* <Typed
                className="typed-text"
                strings={[
                  "Mern Web Design",
                  "Android App Development",
                  "UX/UI Design",
                  "Creative Designing",
                  "Graphic Designing",
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
              /> */}
              <br />
              <h3 className="animate-charcter">Services.</h3>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <button  type="button" className="btn-primary"><a id="resumebtn" href='#resume'>RESUME</a></button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <i
              data-mdb-toggle="animation"
              data-mdb-animation-reset="true"
              data-mdb-animation="slide-right"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
