import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isopen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on home page
  const isHomePage = location.pathname === '/';

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      // Home page par hain toh direct scroll karo
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Home page par nahi hain toh pehle home page par jao phir scroll karo
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

  // Menu set karna based on current section (home page par)
  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const sections = ['home', 'about', 'services', 'work', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) {
          setMenu(currentSection);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  // Close menu function
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link 
          to="/" 
          onClick={() => {
            setMenu("home");
            if (isHomePage) {
              scrollToSection('home');
            }
          }}
        >
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className='hamburger' onClick={() => setIsOpen(!isopen)}>
        <div className={`line ${isopen ? 'line1' : ''}`}></div>
        <div className={`line ${isopen ? 'line2' : ''}`}></div>
        <div className={`line ${isopen ? 'line3' : ''}`}></div>
      </div>

      <ul className={`nav-menu ${isopen ? "open" : ""}`}>
        {/* Home Link */}
        <li>
          <button 
            className='nav-link' 
            onClick={() => {
              setMenu("home");
              scrollToSection('home');
            }}
          >
            Home
          </button>
        </li>
        {/* About Link */}
        <li>
          <button 
            className='nav-link' 
            onClick={() => {
              setMenu("about");
              scrollToSection('about');
            }}
          >
            About
          </button>
        </li>
        {/* Services Link */}
        <li>
          <button 
            className='nav-link' 
            onClick={() => {
              setMenu('services');
              scrollToSection('services');
            }}
          >
            Services
          </button>
        </li>
        {/* Portfolio Link */}
        <li>
          <button 
            className='nav-link' 
            onClick={() => {
              setMenu('work');
              scrollToSection('work');
            }}
          >
            Portfolio
          </button>
        </li>
        {/* Contact Link */}
        <li>
          <button 
            className='nav-link' 
            onClick={() => {
              setMenu('contact');
              scrollToSection('contact');
            }}
          >
            Contact
          </button>
        </li>
        {/* Resume Link - Ye direct page navigate karega */}
        <li>
          <Link 
            to="/show-resume" 
            className='nav-link'
            onClick={() => {
              setMenu('resume');
              setIsOpen(false);
            }}
          >
            Resume
          </Link>
        </li>
      </ul>

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