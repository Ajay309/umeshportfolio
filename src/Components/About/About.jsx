import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // If the section is visible, trigger the state
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once visible so animation runs only once
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the component is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    // We add the 'section-visible' class conditionally based on state
    <div 
      id="about" 
      className={`about ${isVisible ? "section-visible" : ""}`} 
      ref={aboutRef}
    >
      
      <div className="about-title">
        <h1>About me</h1>
        <div className="title-underline"></div>
      </div>

      <div className="about-sections">
        
        {/* Image Slides in from Left */}
        <div className="about-left">
          <div className="image-card">
             <img src={profile} alt="Umesh Profile" />
          </div>
        </div>

        {/* Content Slides Up */}
        <div className="about-right">
          <div className="about-para">
            <p>
             I am a <span>Graphic Designer</span> and video editor over 2 years of experience who bring ideas to life through strong visuals and storytelling. I have worked on social media creatives, branding, and digital marketing visuals, ensuring strong brand consistency and adherence to project requirements. For me, creativity isn't just a skill—it's a mindset aimed at creating visuals people remember.
            </p>
            <p>
              My goal is to craft modern, aesthetically engaging designs that deliver meaningful value. I am constantly 
              exploring new trends in <strong>Photoshop,CorelDRAW, Illustrator, and Premiere Pro</strong> to stay ahead of the curve.
            </p>
          </div>

          <div className="about-skills">
            {/* Note: We pass the width as a custom CSS variable '--w' */}
            
            <div className="skill-item">
              <div className="skill-info"> <p>Photoshop</p> <p>95%</p> </div>
              <div className="skill-bar"><div className="skill-fill" style={{"--w": "95%"}}></div></div>
            </div>

            <div className="skill-item">
              <div className="skill-info"> <p>Illustrator</p> <p>90%</p> </div>
              <div className="skill-bar"><div className="skill-fill" style={{"--w": "90%"}}></div></div>
            </div>

            <div className="skill-item">
              <div className="skill-info"> <p>CorelDraw</p> <p>80%</p> </div>
              <div className="skill-bar"><div className="skill-fill" style={{"--w": "80%"}}></div></div>
            </div>

            <div className="skill-item">
              <div className="skill-info"> <p>Premiere Pro</p> <p>75%</p> </div>
              <div className="skill-bar"><div className="skill-fill" style={{"--w": "75%"}}></div></div>
            </div>

          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="achievement-item">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="vertical-line"></div>
        <div className="achievement-item">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="vertical-line"></div>
        <div className="achievement-item">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>

    </div>
  );
}

export default About;