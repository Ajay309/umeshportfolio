import React from 'react';
import "./Footer.css";
import logo from "../../assets/logo.svg";


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima dolores cum doloremque. Voluptatum non est consequatur beatae, provident at totam!</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                <i className="fa-regular fa-user"></i>
                <input type="email" placeholder='Enter your email' name='email' autoComplete="email"/>
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left"><i className="fa-regular fa-copyright"></i>Dinesh Singh. All rights reserved.</p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <a href="#contact" className='anchor-link'>Connect with me</a>
          </div>
        </div>
    </div>
  )
}

export default Footer;