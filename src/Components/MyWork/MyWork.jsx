import React, { useState, useEffect, useRef } from "react";
import "./MyWork.css";
import { mywork_data } from "../../assets/mywork_data";

// --- Internal SVG Icons ---
const Icons = {
  Close: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
  ArrowLeft: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>,
  ArrowRight: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
  Images: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
};

function MyWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Data State
  const [allImages, setAllImages] = useState([]);
  const [imageSources, setImageSources] = useState([]);
  const thumbnailsRef = useRef(null);

  // Initialize Data
  useEffect(() => {
    const combinedImages = [];
    const combinedSources = [];
    
    mywork_data.forEach((project) => {
      if (project.images && project.images.length > 0) {
        project.images.forEach((img, imgIndex) => {
          combinedImages.push(img);
          combinedSources.push({
            projectId: project.w_no,
            projectTitle: project.title || project.w_name || `Project ${project.w_no}`,
            imageIndex: imgIndex,
            totalImages: project.images.length
          });
        });
      } else {
        combinedImages.push(project.w_img);
        combinedSources.push({
          projectId: project.w_no,
          projectTitle: project.title || project.w_name || `Project ${project.w_no}`,
          imageIndex: 0,
          totalImages: 1
        });
      }
    });
    
    setAllImages(combinedImages);
    setImageSources(combinedSources);
  }, []);

  // Helpers
  const findStartingImageIndex = (projectId) => {
    return imageSources.findIndex(src => src.projectId === projectId);
  };

  // --- AUTOMATIC FULLSCREEN TRIGGER ---
  const openModal = (project) => {
    const startIndex = findStartingImageIndex(project.w_no);
    if(startIndex !== -1) {
      setSelectedProject(project);
      setCurrentImageIndex(startIndex);
      document.body.style.overflow = 'hidden';

      // FORCE BROWSER FULLSCREEN IMMEDIATELY
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
          console.warn("Fullscreen denied:", err);
        });
      }
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';

    // EXIT BROWSER FULLSCREEN
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.log(err));
    }
  };

  const navigateImage = (direction) => {
    if (allImages.length === 0) return;
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % allImages.length 
      : (currentImageIndex - 1 + allImages.length) % allImages.length;
    
    setCurrentImageIndex(newIndex);
    
    if (thumbnailsRef.current) {
      const thumb = thumbnailsRef.current.children[newIndex];
      if (thumb) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentImageIndex]);

  const currentInfo = imageSources[currentImageIndex] || {};

  return (
    <div id="work" className="portfolio-section">
      <div className="section-header">
        <h2 className="section-subtitle2">MY PORTFOLIO</h2>
        <h1 className="section-title">Latest Works</h1>
        <div className="title-underline"></div>
      </div>
      
      <div className="portfolio-grid2">
        {mywork_data.map((project, index) => (
          <div key={index} className="portfolio-card" onClick={() => openModal(project)}>
            <div className="card-image-wrapper">
              <img 
                src={project.w_img} 
                alt={project.w_name} 
                className="card-image2"
                loading="lazy" 
              />
              <div className="card-overlay">
                <div className="overlay-content">
                  <span className="project-category"> {index + 1}</span>
                  <h3 className="project-title">{project.w_name}</h3>
                  <button className="view-btn">
                    Open Fullscreen <Icons.ArrowRight />
                  </button>
                </div>
              </div>
              <div className="count-badge">
                <Icons.Images />
                <span>{project.images ? project.images.length : 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== FULLSCREEN LIGHTBOX ===== */}
      {selectedProject && (
        <div className="lightbox fullscreen-active">
          {/* Main Content Area */}
          <div className="lightbox-content">
            
            {/* Top Bar */}
            <div className="lightbox-header">
              <div className="header-info">
                <h3>{currentInfo.projectTitle}</h3>
                <span className="pagination">
                  {currentInfo.imageIndex + 1} / {currentInfo.totalImages}
                </span>
              </div>
              <button onClick={closeModal} className="icon-btn close-btn" title="Close (Esc)">
                <Icons.Close />
              </button>
            </div>

            {/* Main Image Stage */}
            <div className="lightbox-stage">
              <button className="nav-btn prev" onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}>
                <Icons.ArrowLeft />
              </button>
              
              <div className="image-wrapper" onClick={() => navigateImage('next')}>
                <img 
                  src={allImages[currentImageIndex]} 
                  alt="Project View" 
                  className="main-image" 
                />
              </div>

              <button className="nav-btn next" onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}>
                <Icons.ArrowRight />
              </button>
            </div>

            {/* Bottom Thumbnails */}
            <div className="lightbox-footer">
              <div className="thumbnails-track" ref={thumbnailsRef}>
                {allImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`thumb-item ${idx === currentImageIndex ? 'active' : ''} ${imageSources[idx]?.projectId === currentInfo.projectId ? 'same-project' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <img src={img} alt="thumb" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyWork;