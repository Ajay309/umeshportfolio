import React from 'react'
import './LogoSlider.css'

// Import your local logo files
import PhotoshopLogo from '../../logos/gowamrit.png' // Update with your actual paths
import IllustratorLogo from '../../logos/perfume.png'
import CoralDrawLogo from '../../logos/01.png'
import AfterEffectsLogo from '../../logos/MCCafe.png'
import PremiereProLogo from '../../logos/Mandia.png'


const designLogos = [
  { id: 1, name: 'Photoshop', logo: PhotoshopLogo },
  { id: 2, name: 'Illustrator', logo: IllustratorLogo },
  { id: 3, name: 'CoralDraw', logo: CoralDrawLogo },
  { id: 4, name: 'After Effects', logo: AfterEffectsLogo },
   { id: 5, name: 'Premiere Pro', logo: PremiereProLogo },
  
];

function LogoSlider() {
  // Duplicate logos for seamless infinite effect
  const duplicatedLogos = [...designLogos, ...designLogos];
  
  return (
    <div className="logo-slider-container">
      <div className="logo-slider-track">
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="logo-slide">
            <div className="logo-item">
              <img
                src={logo.logo} // Use imported logo variable
                alt={logo.name}
                className="logo-image"
                loading="lazy"
                onError={(e) => {
                  // Fallback if needed
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="logo-fallback">${logo.name}</div>`;
                }}
              />
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;