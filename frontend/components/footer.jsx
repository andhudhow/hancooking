import React from 'react';

const Footer = () => (
  <div className="footer">
  <div className="footer-container">
    <div className="footer-about-container">
      <div className="footer-header">About us</div>
      <div className="footer-about-description">
        Hancooking is a digital cookbook that helps home cooks of every level discover, save and organize the world’s best Korean recipes. Sign up today!
      </div>
    </div>
    <div className="learn-more-container">
      <ul className="footer-header">About us</ul>
        <li key="li" lassName="online-presence">
          <span className="online-presence-logo">LI</span>
          <span className="online-presence">-textLinkedIn</span>
        </li>
        <li key="gh" className="online-presence">
          <span className="online-presence-logo">GH</span>
          <span className="online-presence-text">Github</span>
        </li>
        <li key="resume" className="online-presence">
          <span className="online-presence-logo">Res</span>
          <span className="online-presence-text">Resume</span>
        </li>
      </div>
    </div>
    </div>
);

export default Footer;