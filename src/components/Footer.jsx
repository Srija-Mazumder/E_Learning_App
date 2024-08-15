import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = ({ drawerOpen }) => {
  const footerStyle = {
    marginLeft: drawerOpen ? '240px' : '64px',
    transition: 'margin-left 0.3s ease', // Add ease for smoother transition
    padding: '20px'
  };

  return (
    <footer style={footerStyle} className="container-lg mt-auto p-4 foot">
      <div className="row justify-content-center text-center">
        <div className="col-md-6 mb-3">
          <h4 style={{ fontSize: '1.2rem' }}>Learning Academy</h4>
          <p className="lh-2" style={{ fontSize: '1rem' }}>
            This is a React-based web app developed by students of Hooghly Engineering and Technology College. This project is going to be submitted by us to Ardent as a result of our month-long training cum internship.
          </p>
        </div>
        <div className="col-md-3 mb-3">
          <h4 style={{ fontSize: '1.2rem' }}>Contact</h4>
          <ul className="list-unstyled" style={{ fontSize: '1rem' }}>
            <li>Mail - learningacademy@gmail.com</li>
            <li>Phone - +91-1230810547</li>
            <li>Address - Kolkata-700123, West Bengal, India</li>
          </ul>
        </div>
        <div className="col-md-2 mb-3">
          <h4 style={{ fontSize: '1.2rem' }}>Useful Links</h4>
          <ul className="list-unstyled" style={{ fontSize: '1rem' }}>
            <li><a href="#">Help</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
