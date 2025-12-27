import React from 'react';
import "./Footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className='footer'>
      
      {/* Background Glow Effect */}
      <div className="footer-glow"></div>

      <div className="footer-top">
        
        {/* Left Side: Brand & Description */}
        <div className="footer-top-left">
            <img src={logo} alt="Umesh Logo" className="footer-logo"/>
            <p>
              I am a creative designer based in India, dedicated to building visual stories that connect brands with people.
            </p>
        </div>

        {/* Right Side: Subscription */}
        <div className="footer-top-right">
            <div className="footer-email-input">
                <i className="fa-regular fa-envelope user-icon"></i>
                <input type="email" placeholder='Enter your email' name='email' autoComplete="email"/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>

      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Umesh Saini. All rights reserved.
        </p>
        
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <a href="#contact" className='footer-connect-link'>Connect with me</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;