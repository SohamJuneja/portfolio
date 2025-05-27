import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixTitle.css';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    // Create and preload audio
    const audio = new Audio('/sounds/click.mp3');
    audio.preload = 'auto';
    audioRef.current = audio;

    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setShowInstruction(false);
      
      // Add delay to sync with animation
      setTimeout(() => {
        // Play the sound using the ref
        if (audioRef.current) {
          audioRef.current.currentTime = 0; // Rewind to the start
          audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
        }
      }, 800); // 800ms delay to sync with brush animation
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