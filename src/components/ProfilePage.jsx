import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import './ProfilePage.css';

const ProfilePage = () => {
  const location = useLocation();
  const profileName = location.state?.profileName || "Recruiter";
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif";

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner />
      </div>
      <TopPicksRow profile={profileName} />
      <ContinueWatching profile={profileName} />
    </>
  );
};

export default ProfilePage; 