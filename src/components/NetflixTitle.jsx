import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixTitle.css';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setShowInstruction(false);
    }
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 6000); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handleClick}>
      <div className={`logo-container ${isClicked ? 'animate' : ''}`}>
        {/* Replace with your actual logo path */}
        <img 
          src="/webpimages/logo-2.webp" 
          alt="Your Logo" 
          className="logo-image"
        />
        
        {/* Brush overlay effects */}
        <div className="brush-overlay">
          <div className="brush-section">
            <div className="effect-brush">
              {Array.from({ length: 16 }, (_, i) => (
                <span key={i} className="brush-stroke"></span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Light effects */}
        <div className="light-effects">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className={`light-beam light-${i + 1}`}></span>
          ))}
        </div>
      </div>
      
      {showInstruction && (
        <div className="click-instruction">
          Click to initiate Lights, Camera, and Action
        </div>
      )}
    </div>
  );
};

export default NetflixTitle;