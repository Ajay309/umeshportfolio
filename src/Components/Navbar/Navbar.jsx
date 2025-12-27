import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // New state for scroll effect
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        // Offset for fixed navbar height
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      
      {/* Logo Section */}
      <div className="nav-logo-container">
        <Link 
          to="/" 
          onClick={() => {
            setMenu("home");
            if (isHomePage) scrollToSection('home');
          }}
        >
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Desktop & Mobile Menu */}
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        {['home', 'about', 'services', 'work', 'contact'].map((item) => (
          <li key={item} className="nav-item">
            <button 
              className={`nav-link ${menu === item ? "active-link" : ""}`}
              onClick={() => {
                setMenu(item);
                scrollToSection(item);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {menu === item && <div className="dot"></div>} {/* Active Dot */}
            </button>
          </li>
        ))}
        
        {/* Resume Link */}
        <li className="nav-item">
           <Link 
            to="/show-resume" 
            className="nav-link"
            onClick={() => {
              setMenu('resume');
              setIsOpen(false);
            }}
           >
            Resume
           </Link>
        </li>

        {/* Connect Button (Visible inside menu on mobile) */}
        <li className="mobile-connect">
           <button className="connect-btn-mobile" onClick={() => scrollToSection('contact')}>
             Connect With Me
           </button>
        </li>
      </ul>

      {/* Connect Button (Desktop Only) */}
      <div className="nav-connect">
        <button 
          className='connect-btn' 
          onClick={() => {
            setMenu('contact');
            scrollToSection('contact');
          }}
        >
          Connect With Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;