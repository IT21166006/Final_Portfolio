import React from 'react';
import propic from '../images/profilepic2.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Resume() {
  const showToast = () => {
    toast.success("Downloading Resume...");
  };

  return (
    <div>
      <ToastContainer />
      <div id="resume" className="project-container2">
        <div className='glasswindow2'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5 '>                   
                <img src={propic} className="img-fluid" />
              </div>
              <div className='col-md-6'>
                <div className="resume-details">
                  <h1 >Name: </h1>
                  <h3>Y. Tharindu Dilshan</h3><br></br>
                  <h2>Objective:</h2>
                  <p>
                    Motivated IT student with a passion for web app design and graphic designing, seeking an internship opportunity
                    to enhance my skills and contribute to real-world projects.
                  </p>
                  <h2>Education:</h2>
                  <p>
                    Bachelor of Science (BSc) in Information Technology
                    <br />
                    Sri Lanka Institute of Information Technology (SLIIT)
                    <br />
                    2021 - Present / Expected Graduation: 2025
                  </p>
                  <h2>Skills:</h2>
                  <ul>
                    <li>Web App Design: Proficient in HTML, CSS, JavaScript, and front-end frameworks (e.g., React), MERN Stack Developing</li>
                    <li>Graphic Design: Skilled in Adobe Creative Suite (Photoshop, Illustrator) for creating visually appealing designs</li>
                    <li>Video Editing: Adobe Premiere Pro, Capcut</li>
                    <li>Problem Solving: Able to analyze and solve complex technical problems efficiently</li>
                    <li>Collaboration: Effective team player with strong communication skills</li>
                    <li>Time Management: Proven ability to manage tasks and meet deadlines</li>
                  </ul>
                  <h2>Languages:</h2>
                  <p>English, Sinhala</p>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-12 d-flex '>
                        <button className="button btn-primary" onClick={showToast}>
                          <a id='resumebtn2' href='https://www.mediafire.com/file/ldzoxcgja15gafu/Y_Tharindu_Dilshan_Resume.pdf/file'>Resume</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
