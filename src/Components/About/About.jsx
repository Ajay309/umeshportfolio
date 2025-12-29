import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";

// --- Helper Component for Number Animation ---
const CountUp = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    // We calculate step based on duration (2 seconds)
    const totalDuration = 2000; 
    const frameRate = 30; // ms per frame
    const totalFrames = totalDuration / frameRate;
    const increment = end / totalFrames;

    // Delay start to match CSS fade-in (0.6s delay in your CSS)
    const startTimeout = setTimeout(() => {
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, frameRate);
  
      return () => clearInterval(timer);
    }, 600); // 600ms delay matches CSS transition-delay

    return () => clearTimeout(startTimeout);

  }, [target, isVisible]);

  return <span>{count}{suffix}</span>;
};

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
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
        {/* Left Side: Image */}
        <div className="about-left">
          <div className="image-card">
             <img src={profile} alt="Umesh Profile" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-right">
          <div className="about-para">
            <p>
             I am a <span>Graphic Designer</span> and video editor over 2 years of experience who bring ideas to life through strong visuals and storytelling. I have worked on social media creatives, branding, and digital marketing visuals, ensuring strong brand consistency and adherence to project requirements. For me, creativity isn't just a skill—it's a mindset aimed at creating visuals people remember.
            </p>
            <p>
              My goal is to craft modern, aesthetically engaging designs that deliver meaningful value. I am constantly 
              exploring new trends in <strong>Photoshop, CorelDRAW, Illustrator, and Premiere Pro</strong> to stay ahead of the curve.
            </p>
          </div>

          <div className="about-skills">
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

      {/* --- ANIMATED ACHIEVEMENTS SECTION --- */}
      <div className="about-achievements">
        <div className="achievement-item">
          <h1>
            <CountUp target={2} suffix="+" isVisible={isVisible} />
          </h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        
        <div className="vertical-line"></div>
        
        <div className="achievement-item">
          <h1>
            <CountUp target={50} suffix="+" isVisible={isVisible} />
          </h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        
        <div className="vertical-line"></div>
        
        <div className="achievement-item">
          <h1>
            <CountUp target={25} suffix="+" isVisible={isVisible} />
          </h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>

    </div>
  );
}

export default About;