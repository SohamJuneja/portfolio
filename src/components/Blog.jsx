import React from 'react';
import './Blog.css'; // Import the CSS file

const SimpleBlogPage = () => {
  return (
    <div className="blog-page-body">
      {/* Background gradient */}
      <div className="blog-background-gradient" />
      
      {/* Subtle red glow effect */}
      <div className="blog-background-glow" />

      {/* Main content */}
      <div className="blog-main-content">
        {/* Title */}
        <h1 className="blog-title">
          YOU SHOULD WRITE IT DOWN
        </h1>

        {/* Attribution */}
        <p className="blog-attribution">
        </p>

        {/* Main text */}
        <p className="blog-main-text">
          I don't know I'll be writing blogs soon or not. This was just to add the fleabag scene - You Should Write It Down
        </p>

        {/* GIF */}
        <div className="blog-gif-container">
          <img 
            src="https://64.media.tumblr.com/78609a83ec6e8d54388efb6dcd2b2c40/tumblr_ppluuwcNOI1ta6mabo2_400.gifv"
            alt="Fleabag - You Should Write It Down"
            className="blog-gif"
          />
        </div>
      </div>

      {/* Inline styles for animations and media queries are moved to Blog.css */}
    </div>
  );
};

export default SimpleBlogPage;