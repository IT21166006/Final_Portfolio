import React from 'react';
import logo from '../logo.png';

const Footer = () => {
  return (
    <footer className="bg-light text-muted">
      <div className="container-fluid py-4">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-3 mb-4 px-5">
            <h5 className="text-uppercase fw-bold">Nextgen Labs</h5>
            <a className="navbar-brand"  href="#">
          <img className="logo" src={logo} alt="Logo" style={{ width: '80px', height: 'auto', position: 'fixed' }} />
        </a>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            {/* Social Media Icons */}
            <div>
              <a href="#!" className="me-3 text-reset"><i className="fab fa-facebook-f"></i></a>
              <a href="#!" className="me-3 text-reset"><i className="fab fa-twitter"></i></a>
              <a href="#!" className="me-3 text-reset"><i className="fab fa-instagram"></i></a>
              <a href="#!" className="me-3 text-reset"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-reset">About</a></li>
              <li><a href="#!" className="text-reset">Features</a></li>
              <li><a href="#!" className="text-reset">Works</a></li>
              <li><a href="#!" className="text-reset">Career</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold">Help</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-reset">Customer Support</a></li>
              <li><a href="#!" className="text-reset">Delivery Details</a></li>
              <li><a href="#!" className="text-reset">Terms & Conditions</a></li>
              <li><a href="#!" className="text-reset">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Subscribe to Newsletter</h6>
            <form action="#">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          © Copyright 2021, All Rights Reserved by Postcrafts
        </div>
      </div>
    </footer>
  );
};

export default Footer;
