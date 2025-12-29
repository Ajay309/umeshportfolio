import React, { useState, useEffect } from 'react';
import './Resume.css';
import profilePhoto from '../../assets/profile.jpg';

// Simple Icon Components
const Icons = {
  Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  MapPin: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  Linkedin: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  Github: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3 1.5l2.5 2.5c3.5 0 3.5 0 7.5 0 3.5-2.5 6-7.5 6-7.5-6-.28-1.15-1-3.5-1-3.5z"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  Download: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  Camera: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>,
  Video: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>,
  Bulb: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2 1.5 3.5 2.5 1.6 3.5 2.3 4 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
};

function Resume() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo = {
    name: "Umesh Saini",
    title: "Graphic Designer & Video Editor",
    email: "umeshsaini773396@gmail.com",
    phone: "7733962307",
    location: "Ranoli, Sikar",
    photo: profilePhoto,
    about: "I am a Graphic Designer and video editor who bring ideas to life through strong visuals and storytelling. I have worked on social media creatives, branding, and digital marketing visuals, ensuring strong brand consistency and adherence to project requirements. For me, creativity isn't just a skill—it's a mindset aimed at creating visuals people remember."
  };

  const skills = {
    software: [
      { name: "Photoshop", level: 95 },
      { name: "Corel Draw", level: 90 },
      { name: "Illustrator", level: 80 },
      { name: "Premier Pro", level: 75 }
    ],
    expertise: [
      "Visual Storytelling", "Brand Consistency", "Social Media Creatives", 
      "Color Correction", "Video Compositing", "Motion Graphics"
    ]
  };

  const experience = [
    {
      id: 1,
      position: "Graphic Designer & Video Editor",
      company: "Sikar Inotech - Sikar",
      period: "2023 - Present",
      achievements: [
        "Skilled in Adobe Creative Suite (Photoshop, Illustrator, Corel Draw, Premiere Pro).",
        "Collaborated with marketing and creatives to craft video content for social media, websites, and client campaigns.",
        "Strong with color correction, video compositing, and adding motion graphics.",
        "Created visuals for print, digital media, and branding, always making visuals stand out."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Sc Applied Science",
      institution: "(PDUSU) Pandit Deendayal Upadhyaya Shekhawati University",
      period: "Sikar, Rajasthan"
    },
    {
      degree: "12th Higher Secondary",
      institution: "Paramhans Vidya Mandir",
      period: "Sikar, Rajasthan"
    },
    {
      degree: "10th Secondary",
      institution: "Paramhans Vidya Mandir",
      period: "Sikar, Rajasthan"
    }
  ];

  const hobbies = [
    { name: "Videography", icon: <Icons.Video /> },
    { name: "Photography", icon: <Icons.Camera /> },
    { name: "Learn New Skill", icon: <Icons.Bulb /> }
  ];

  return (
    <>
      <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>

      <div className={`app-container ${isVisible ? 'visible' : ''}`}>
        
        {/* ===== Header Grid ===== */}
        <header className="header-grid">
          
          {/* Left: Profile Card */}
          <div className="glass-panel profile-card">
            <div className="profile-img-wrapper2">
              <img src={personalInfo.photo} alt={personalInfo.name} className="profile-img2" />
              <div className="status-indicator"></div>
            </div>
            <h2 className="profile-name">Umesh</h2>
            <p className="profile-role" style={{fontSize: '0.9rem'}}>{personalInfo.title}</p>
            
            <div className="social-links">
              <a href="#" className="social-btn" title="Call"><Icons.Phone /></a>
              <a href="#" className="social-btn" title="Email"><Icons.Mail /></a>
            </div>
          </div>

          {/* Right: Info Card */}
          <div className="glass-panel info-card">
            <div className="intro-text">
              <h1>Hello, I'm <span className="highlight">{personalInfo.name}</span></h1>
              <p className="tagline">
                Graphic Designer & Video Editor bringing ideas to life through strong visuals and storytelling.
              </p>
            </div>
            
            <div className="contact-row">
              <div className="contact-pill">
                <Icons.Mail /> {personalInfo.email}
              </div>
              <div className="contact-pill">
                <Icons.Phone /> {personalInfo.phone}
              </div>
              <div className="contact-pill">
                <Icons.MapPin /> {personalInfo.location}
              </div>
            </div>
          </div>
        </header>

        {/* ===== Main Content Grid ===== */}
        <main className="main-grid">
          
          {/* Sidebar */}
          <aside>
            <div className="glass-panel" style={{ padding: '25px' }}>
              <h3 className="section-title">Software Skills</h3>
              <div className="skill-group">
                {skills.software.map((skill, index) => (
                  <div key={index} className="skill-row">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bg">
                      <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="section-title">Key Expertise</h3>
              <div className="tag-cloud">
                {skills.expertise.map((item, index) => (
                  <span key={index} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="glass-panel content-wrapper">
            
            {/* Navigation */}
            <nav className="nav-container">
              {['about', 'experience', 'education', 'hobbies'].map(tab => (
                <button 
                  key={tab}
                  className={`nav-item ${activeSection === tab ? 'active' : ''}`}
                  onClick={() => setActiveSection(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>

            {/* Dynamic Content */}
            <div className="content-body">
              
              {activeSection === 'about' && (
                <div className="animate-fade-in">
                  <h2 className="card-title">About Me</h2>
                  <p style={{ lineHeight: '1.8', color: '#cbd5e1', fontSize: '1.05rem' }}>
                    {personalInfo.about}
                  </p>
                </div>
              )}

              {activeSection === 'experience' && (
                <div className="animate-fade-in">
                  <h2 className="card-title">Work Experience</h2>
                  {experience.map(exp => (
                    <div key={exp.id} className="timeline-card">
                      <div className="role-header">
                        <div>
                          <div className="role-name">{exp.company}</div>
                          <span className="company-name">{exp.position}</span>
                        </div>
                        <span className="year-badge">{exp.period}</span>
                      </div>
                      <ul className="description-list">
                        {exp.achievements.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'education' && (
                <div className="animate-fade-in">
                  <h2 className="card-title">Education</h2>
                  {education.map((edu, index) => (
                    <div key={index} className="timeline-card">
                      <div className="role-header">
                        <div>
                          <div className="role-name">{edu.degree}</div>
                          <span className="company-name">{edu.institution}</span>
                        </div>
                        <span className="year-badge" style={{fontSize: '0.75rem'}}>{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'hobbies' && (
                <div className="animate-fade-in">
                  <h2 className="card-title">Hobbies & Interests</h2>
                  <div className="projects-grid">
                    {hobbies.map((hobby, index) => (
                      <div key={index} className="project-card" style={{alignItems: 'center', textAlign: 'center'}}>
                        <div style={{color: 'var(--primary)', marginBottom: '15px'}}>
                          {hobby.icon}
                        </div>
                        <h4 style={{fontSize: '1.1rem', color: 'white'}}>{hobby.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Resume;