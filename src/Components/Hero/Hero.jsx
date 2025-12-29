import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

import photoshop from "../../assets/photoshop.png";
import illustrator from "../../assets/illustrator.png";
import premiere from "../../assets/premiere.png";
import aftereffects from "../../assets/coral.png";

function Hero() {
  // Create a ref to store the array of icon elements
  const iconsRef = useRef([]);

  const tools = [
    { img: photoshop, alt: "Photoshop", className: "icon-1" },
    { img: illustrator, alt: "Illustrator", className: "icon-2" },
    { img: premiere, alt: "Premiere Pro", className: "icon-3" },
    { img: aftereffects, alt: "After Effects", className: "icon-4" },
  ];

  useEffect(() => {
    // --- GSAP ANIMATION LOGIC ---
    
    // Loop through each icon ref
    iconsRef.current.forEach((icon, index) => {
      if (!icon) return;

      // 1. Initial Fade In (Pop effect)
      gsap.fromTo(icon, 
        { scale: 0, opacity: 0 }, 
        { 
          scale: 1, 
          opacity: window.innerWidth < 768 ? 0.4 : 0.8, // Respect mobile opacity
          duration: 1, 
          delay: index * 0.2, 
          ease: "back.out(1.7)" 
        }
      );

      // 2. Continuous Floating Motion (The "Organic" feel)
      // We use random values for X and Y to make it look natural, not robotic
      gsap.to(icon, {
        y: "random(-20, 20)", // Move up/down randomly
        x: "random(-15, 15)", // Move left/right randomly
        rotation: "random(-10, 10)", // Slight rotation
        duration: "random(2, 4)", // Random speed for each icon
        repeat: -1, // Infinite loop
        yoyo: true, // Go back and forth
        ease: "sine.inOut", // Smooth sine wave movement
      });
    });

    // Cleanup isn't strictly necessary for simple tweens, but good practice
    return () => {
      gsap.killTweensOf(iconsRef.current);
    };
  }, []);

  // Helper to add elements to the ref array
  const addToRefs = (el) => {
    if (el && !iconsRef.current.includes(el)) {
      iconsRef.current.push(el);
    }
  };

  return (
    <div id="home" className="hero">
      
      {/* Floating Icons Background */}
      <div className="floating-icons">
        {tools.map((tool, index) => (
          <img
            key={index}
            ref={addToRefs} // Add this image to our GSAP list
            src={tool.img}
            alt={tool.alt}
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