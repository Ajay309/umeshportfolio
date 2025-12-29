import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

import photoshop from "../../assets/photoshop.png";
import illustrator from "../../assets/illustrator.png";
import premiere from "../../assets/premiere.png";
import aftereffects from "../../assets/coral.png"; 

function Hero() {
  
  // We removed the 'style' property from here.
  // We will handle positions in CSS using the class names.
  const tools = [
    { img: photoshop, alt: "Photoshop", className: "icon-1" },
    { img: illustrator, alt: "Illustrator", className: "icon-2" },
    { img: premiere, alt: "Premiere Pro", className: "icon-3" },
    { img: aftereffects, alt: "After Effects", className: "icon-4" },
  ];

  return (
    <div id="home" className="hero">
      
      {/* Floating Tool Icons Background */}
      <div className="floating-icons">
        {tools.map((tool, index) => (
          <img 
            key={index} 
            src={tool.img} 
            alt={tool.alt} 
            // We combine the base class "tool-icon" with the specific "icon-1", "icon-2" etc.
            className={`tool-icon ${tool.className}`} 
          />
        ))}
      </div>

      <div className="profile-container">
        <div className="glow-circle"></div>
        <img src={profile} alt="Umesh Saini" className="profile-img" />
      </div>

      <h1 className="hero-title">
        <span className="gradient-text">I'm Umesh Saini,</span> <br />
        Graphic Designer.
      </h1>
      
      <p className="hero-description">
        I’m a creative designer and video editor who brings ideas to life through 
        <strong> strong visuals</strong> and <strong>storytelling</strong>.
      </p>

      <div className="hero-action">
        <a href="#contact" className="btn-primary">Connect with me</a>
        <Link to="/show-resume" className="btn-secondary">My resume</Link>
      </div>

    </div>
  );
}

export default Hero;