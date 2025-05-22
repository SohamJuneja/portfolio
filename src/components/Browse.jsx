import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import './Browse.css';

const Browse = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    // Create and preload audio
    const audio = new Audio();
    audio.src = '/sounds/click.mp3';
    audio.preload = 'auto';
    audioRef.current = audio;

    // Test audio loading
    audio.addEventListener('canplaythrough', () => {
      console.log('Audio loaded successfully');
    });

    audio.addEventListener('error', (e) => {
      console.error('Error loading audio:', e);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const profiles = [
    {
      name: "Recruiter",
      image: "/images/blue1.jpg",
      backgroundGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZlaWNiam96c3NkMGpqazJ2dmlvZ25hdHFiYjRjZWlucmU1YjZiayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DqvaPxbqDww0g/giphy.gif"
    },
    {
      name: "Explorer",
      image: "/images/red1.jpg",
      backgroundGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGtsZzIxMnNleHRtYXY2YTdvbzY5MjFzcHdrbXJscHhneDJhcWI0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pdog9xWci8zRNj40oO/giphy.gif"
    }
  ];

  const handleProfileClick = (profile) => {
    // Play click sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
    }

    // Navigate immediately
    navigate(`/profile/${profile.name}`, { 
      state: { 
        profileName: profile.name,
        profileImage: profile.image, 
        backgroundGif: profile.backgroundGif 
      } 
    });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse; 