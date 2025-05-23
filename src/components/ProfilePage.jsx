import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import './ProfilePage.css';

const ProfilePage = () => {
  const location = useLocation();
  const profileName = location.state?.profileName || "Recruiter";
  const backgroundGif = location.state?.backgroundGif || "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZlaWNiam96c3NkMGpqazJ2dmlvZ25hdHFiYjRjZWlucmU1YjZiayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DqvaPxbqDww0g/giphy.gif";
  const profileType = profileName.toLowerCase();

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner profileType={profileType} />
      </div>
      <TopPicksRow profile={profileName} />
      <ContinueWatching profile={profileName} />
    </>
  );
};

export default ProfilePage; 