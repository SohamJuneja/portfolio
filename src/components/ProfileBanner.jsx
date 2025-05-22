import React from 'react';
import PlayButton from './PlayButton';
import MoreInfoButton from './MoreInfoButton';
import './ProfileBanner.css';

const bannerData = {
  headline: 'Soham Juneja ',
  profileSummary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.`,
  resumeLink: { url: 'https://drive.google.com/file/d/1mMUPCmHSasbgXqOfMBaTa5rmRzR6uhoA/view?usp=sharing' },
  githubLink: 'https://github.com/SohamJuneja',
};

const ProfileBanner = () => {
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleGithubClick = () => {
    window.open(bannerData.githubLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{bannerData.headline}</h1>
        <p className="banner-description">{bannerData.profileSummary}</p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleGithubClick} label="GitHub" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner; 