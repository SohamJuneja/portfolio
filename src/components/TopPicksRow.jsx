import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';

const TopPicksRow = ({ profile }) => {
  const navigate = useNavigate();

  const topPicksConfig = {
    Recruiter: [
      {
        title: "Skills",
        imgSrc: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDBhaTN3NGpzc2wwNDB4N3JkNzJ1anB4bmJ0bmlzcnNlNXVwYTNqbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8IGuMMq3Aka8Zq9Kax/giphy.gif",
        route: "/skills",
        loading: "lazy"
      },
      {
        title: "Experience",
        imgSrc: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWQ3c3RnZjF2cjJseGI5Z3k2cmI5ZWJqZ3BqeTZtc243bWE2cW41MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMIPMieHhqReXvO/giphy.gif",
        route: "/work-experience"
      },
      {
        title: "Projects",
        imgSrc: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXdvZDBxNHU0amZqMWs2NzhncGk4aDV1d2Q5azF2NmFvbWV1aDdzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kluzPOxBzGk4U/giphy.gif",
        route: "/projects"
      },
      {
        title: "Blogs",
        imgSrc: "https://64.media.tumblr.com/78609a83ec6e8d54388efb6dcd2b2c40/tumblr_ppluuwcNOI1ta6mabo2_400.gifv",
        route: "/blogs"
      },
    ],
    Explorer: [
      {
        title: "Music",
        imgSrc: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmM2b2xhMXFyOG1mcG83aTVzaGNmNno2ZWZpcWpsbzhjbmw1dDc1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4oMoIbIQrvCjm/giphy.gif",
        route: "/music"
      },
      {
        title: "Cinema",
        imgSrc: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamJ5d2xsZWtuNXdrcjBsMXMyMjRsMzM5bmJvbm03cGR6c2djc3dlcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFIoWBxZp2EKM38IO3/giphy.gif",
        route: "/cinema"
      },
      {
        title: "Projects",
        imgSrc: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXdvZDBxNHU0amZqMWs2NzhncGk4aDV1d2Q5azF2NmFvbWV1aDdzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kluzPOxBzGk4U/giphy.gif",
        route: "/projects"
      },
      {
        title: "Blogs",
        imgSrc: "https://64.media.tumblr.com/78609a83ec6e8d54388efb6dcd2b2c40/tumblr_ppluuwcNOI1ta6mabo2_400.gifv",
        route: "/blogs"
      },
    ]
  };

  const topPicks = topPicksConfig[profile] || topPicksConfig.Recruiter;

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route, { state: { profileName: profile } })}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow; 