import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContinueWatching.css';

const ContinueWatching = ({ profile }) => {
  const navigate = useNavigate();

  const continueWatchingConfig = {
    Recruiter: [
      {
        title: "Contact Me",
        imgSrc: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2FzcnM0NW42c3EwazY2aXg5dTlwYWxtczQ2dm1zZGNseGtieDh5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFyD4xKncK6ptR7qg/giphy.gif",
        route: "/contact-me"
      }
    ],
    Explorer: [
      {
        title: "Experience",
        imgSrc: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWQ3c3RnZjF2cjJseGI5Z3k2cmI5ZWJqZ3BqeTZtc243bWE2cW41MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMIPMieHhqReXvO/giphy.gif",
        route: "/work-experience"
      },
      {
        title: "Contact Me",
        imgSrc: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2FzcnM0NW42c3EwazY2aXg5dTlwYWxtczQ2dm1zZGNseGtieDh5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFyD4xKncK6ptR7qg/giphy.gif",
        route: "/contact-me"
      }
    ]
  };

  const continueWatching = continueWatchingConfig[profile] || continueWatchingConfig.Recruiter;

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((item, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(item.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={item.imgSrc} alt={item.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching; 