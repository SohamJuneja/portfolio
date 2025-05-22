import React from 'react';

const SimpleBlogPage = () => {
  return (
    <div style={{
      backgroundColor: '#000000',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #000000 0%, #141414 50%, #000000 100%)',
        zIndex: 1
      }} />
      
      {/* Subtle red glow effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(229, 9, 20, 0.1) 0%, transparent 70%)',
        zIndex: 2
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '800px'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 900,
          marginTop:"100px",
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #e50914 0%, #ff6b35 50%, #e5e5e5 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: '"Bebas Neue", Arial Black, sans-serif',
          letterSpacing: '0.1em',
          lineHeight: 1.1,
          animation: 'fadeInUp 1s ease-out'
        }}>
          YOU SHOULD WRITE IT DOWN
        </h1>

        {/* Attribution */}
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 300,
          color: '#e5e5e5',
          marginBottom: '3rem',
          fontStyle: 'italic',
          opacity: 0.9,
          animation: 'fadeInUp 1s ease-out 0.2s both'
        }}>
        </p>

        {/* Main text */}
        <p style={{
          fontSize: '1.2rem',
          color: '#999',
          lineHeight: 1.6,
          marginBottom: '3rem',
          animation: 'fadeInUp 1s ease-out 0.4s both'
        }}>
          I don't know I'll be writing blogs soon or not. This was just to add the fleabag scene - You Should Write It Down
        </p>

        {/* GIF */}
        <div style={{
          display: 'inline-block',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          animation: 'fadeInUp 1s ease-out 0.6s both'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px) scale(1.02)';
          e.target.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.7)';
          e.target.style.borderColor = '#e50914';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }}>
          <img 
            src="https://64.media.tumblr.com/78609a83ec6e8d54388efb6dcd2b2c40/tumblr_ppluuwcNOI1ta6mabo2_400.gifv"
            alt="Fleabag - You Should Write It Down"
            style={{
              width: '400px',
              height: '350px',
              display: 'block',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          
          p:nth-of-type(1) {
            font-size: 1.2rem !important;
          }
          
          p:nth-of-type(2) {
            font-size: 1rem !important;
          }
          
          img {
            width: 300px !important;
            height: 225px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SimpleBlogPage;