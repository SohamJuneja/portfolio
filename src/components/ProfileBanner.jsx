import React from 'react';
import PlayButton from './PlayButton';
import MoreInfoButton from './MoreInfoButton';
import './ProfileBanner.css';

const bannerData = {
  headline: 'Soham Juneja',
  summaries: {
    recruiter: `Ambitious Computer Science student at NIT Hamirpur with a proven track record of building impactful tech solutions and leading dynamic teams. My expertise spans data structures, web development, and blockchain development, with a passion for open-source contributions. I thrive on building—from personal projects to winning competitive hackathons. Beyond technical skills, I'm a natural communicator and approachable leader who turns ambitious ideas into reality.`,
    explorer: `Curious Computer Science student at NIT Hamirpur with an insatiable appetite for exploring new domains and pushing creative boundaries. I'm a storytelling enthusiast who gets lost in compelling movies, web series, story-driven games, and diverse music genres. My competitive spirit spans from sports fields to screens—actively playing and following everything from cricket to Formula 1. What sets me apart is my ability to connect with people across varied interests, building meaningful relationships both professionally and personally.`
  },
  resumeLink: { url: 'https://drive.google.com/file/d/1mMUPCmHSasbgXqOfMBaTa5rmRzR6uhoA/view?usp=sharing' },
  linkedinLink: 'https://www.linkedin.com/in/soham-juneja/',
};

const ProfileBanner = ({ profileType = 'recruiter' }) => {
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{bannerData.headline}</h1>
        <p className="banner-description">{bannerData.summaries[profileType]}</p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner; 