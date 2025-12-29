import React from 'react';
import './LogoSlider.css';

// Import your local logo files
import PhotoshopLogo from '../../logos/01.png'; 
import IllustratorLogo from '../../logos/gowamrit.png';
import CoralDrawLogo from '../../logos/mandia.png';
import PremiereProLogo from '../../logos/MCCafe.png';
import AfterEffectsLogo from '../../logos/perfume.png';




const designLogos = [
  { id: 1, name: 'Photoshop', logo: PhotoshopLogo },
  { id: 2, name: 'Illustrator', logo: IllustratorLogo },
  { id: 3, name: 'CorelDraw', logo: CoralDrawLogo },
  { id: 5, name: 'Premiere Pro', logo: PremiereProLogo },
  { id: 6, name: 'After Effects', logo: AfterEffectsLogo },
];

function LogoSlider() {
  // We duplicate the array 4 times to ensure the loop is seamless on large screens
  // and the animation has enough content to scroll through.
  const duplicatedLogos = Array(4).fill(designLogos).flat();

  return (
    <div className="logo-slider-section">
      {/* <h3 className="slider-title">Tools I Use</h3> */}
      
      <div className="logo-slider-container">
        <div className="logo-slider-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="logo-slide">
              <div className="logo-item">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="logo-image"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;