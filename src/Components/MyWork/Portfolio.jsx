import React, { useState } from 'react'
import "./Portfolio.css"
import { mywork_data } from "../../assets/mywork_data";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id='portfolio' className="portfolio-page">
      <div className="portfolio-container">
        <h1>My Complete Portfolio</h1>
        <p>Here are all my projects in detail</p>
        
        <div className="portfolio-grid">
          {mywork_data.map((data, index) => (
            <div 
              key={index} 
              className="portfolio-item"
              onClick={() => openImage(data.w_img)}
            >
              <img src={data.w_img} alt={`project-${index}`} />
              <div className="portfolio-content">
                <h3>{data.w_name || `Project ${index + 1}`}</h3>
                <p>{data.w_desc || "Project description coming soon..."}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full size image */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeImage}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={selectedImage} alt="Full size" />
            <div className="image-nav">
              <button className="nav-btn prev-btn">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="nav-btn next-btn">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio