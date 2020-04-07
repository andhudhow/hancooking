import React from 'react';

const Footer = () => (
  <div className="footer">
  <div className="footer-container">
    <div className="footer-about-container">
      <div className="footer-header">About us</div>
      <div className="footer-about-description">
        Hancooking is a digital cookbook that helps home cooks of every level discover, save and organize the world’s best Korean recipes.
        <br /><br />
        Sign up today!
      </div>
    </div>
    <div className="learn-more-container">
      <ul className="footer-header">Contact</ul>
        <li key="li" className="online-presence">
          <a href="https://www.linkedin.com/in/andrewhhowell/" target="_blank">
            <img className="online-presence-icon" src={window.linkedinLogoURL} />
              LinkedIn
          </a>
        </li>
        <li key="gh" className="online-presence">
          <a href="https://github.com/andhudhow" target="_blank">
          <img className="online-presence-icon" src={window.githubLogoURL} /> 
            GitHub
          </a>
        </li>
        <li key="resume" className="online-presence">
          <a href="https://drive.google.com/open?id=1CVIZ6PiTux9nYKQ2HY6xbUl4naoPQlCv"
            target="_blank">
          <img className="online-presence-icon" src={window.pdfIconURL} />
            Resume
          </a>
        </li>
      </div>
    </div>
    </div>
);

export default Footer;