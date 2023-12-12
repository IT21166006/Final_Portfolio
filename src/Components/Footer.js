import React from 'react'

const Footer = () => {
  return (
    <div id='contact'>
        <div className='footer'>
        <div className='container'>
            
            <div className='row'>
                
                <div className='col-md-2 '></div>
                <div className='col-md-8 '>
                <br></br>
               Get In Touch<br></br>
               <a href="mailto:it21166006@my.sliit.lk" data-hover="Let's talk!" class="needdev">Need a developer?</a>
            </div>
            </div>
        </div>
        <br></br>
        <hr className="custom-hr" />
        <div className='details'>
        <div className='row'>
                <div className='col-md-4'>
                    Call Me
                </div>
                <div className='col-md-4'>
                    Social
                </div>
                <div className='col-md-4'>
                    Grab A Cofee
                </div>
                </div>

                <div className='row'>
                <div className='col-md-4'>
                    +94 714753953
                </div>
                <div className='col-md-4'>
                    <a className="linkedin" href='https://www.linkedin.com/in/tharindu-dilshan-543886285/'>Linkedin</a>
                </div>
                <div className='col-md-4'>
                    it21166006@my.sliit.lk
                </div>
                </div></div>
                <hr className="custom-hr" />
                <footer>
               <p className='copyright'>&copy; Copyright by TDMaxer</p>
               </footer>

        </div>
        
    </div>
  )
}

export default Footer
