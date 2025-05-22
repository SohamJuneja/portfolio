import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, image, onClick }) => {
  return (
    <div className="profile-card" onClick={onClick}>
      <img src={image} alt={name} className="profile-image" />
      <p className="profile-name">{name}</p>
    </div>
  );
};

export default ProfileCard; 