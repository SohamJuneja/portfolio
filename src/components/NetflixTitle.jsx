import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixTitle.css';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handleClick}>
      <img 
        src="/logo-2.png" 
        alt="Netflix Logo" 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
      />
    </div>
  );
};

export default NetflixTitle; 