import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const experienceImages = [
  {
    src: "/experience/dscWorkshop.jpg",
    alt: "GDSC Workshop",
    title: "GDSC Open Source Workshop",
  },
  {
    src: "/experience/anchoring.jpg",
    alt: "Leadership Excellence",
    title: "Electrothon - Day 1",
  },
  {
    src: "/experience/electrothon.jpg",
    alt: "Innovation & Development",
    title: "Electrothon - Day 2",
  },
  {
    src: "/experience/specfest.JPG",
    alt: "Innovation & Development",
    title: "SpecFest",
  },
  {
    src: "/experience/dscGroup.jpg",
    alt: "Innovation & Development",
    title: "GDSC 2K25",
  },
  {
    src: "/experience/specGroup.JPG",
    alt: "Innovation & Development",
    title: "SPEC 2K25",
  },
];

const experiences = [
  {
    id: 1,
    role: "Open Source Contributor",
    company: "Jenkins",
    period: "Nov 2024 - Present",
    type: "Open Source",
    description: "Created around 15 PRs and active member in meets & office hours",
    color: "#e50914",
    icon: "🚀"
  },
  {
    id: 2,
    role: "Executive",
    company: "Society for Promotion of Electronics Culture, NIT Hamirpur",
    period: "Aug 2024 – Present",
    type: "Leadership",
    description: "Spearheaded website updates for 5000+ users, led 35-member team for workshops, organized Electrothon 7.0 with 1500+ registrations",
    color: "#00d4aa",
    icon: "⚡"
  },
  {
    id: 3,
    role: "Volunteer",
    company: "Google Developer Student Clubs",
    period: "Jan 2024 – Present",
    type: "Development",
    description: "Developed 'Among Us' app with 300+ participants, built BittuAI platform leveraging generative AI . Took various workshops and organised various events",
    color: "#ff6b35",
    icon: "💻"
  },
  {
    id: 4,
    role: "Volunteer",
    company: "E-Cell, NIT Hamirpur",
    period: "Dec 2023 – Apr 2024",
    type: "Operations",
    description: "Led financial operations and secured sponsorships for E-Cell events",
    color: "#4ecdc4",
    icon: "💼"
  },
  {
    id: 5,
    role: "Subject Matter Expert",
    company: "Chegg",
    period: "Nov 2023 – Present",
    type: "Education",
    description: "Resolved academic queries with 4.63/5 quality score and 70% positive feedback",
    color: "#ffe66d",
    icon: "📚"
  }
];

const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeExperience, setActiveExperience] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  // Auto-advance carousel with pause on hover
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % experienceImages.length);
      }, 10000); // 10 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, experienceImages.length]);

  // Intersection Observer for timeline animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experienceImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experienceImages.length) % experienceImages.length);
  };

  return (
    <div className="netflix-experience">
      {/* Hero Carousel */}
      <div
        className="hero-carousel"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="gradient-overlay" aria-hidden="true"></div>

        <div className="carousel-container">
          {experienceImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${currentSlide === index ? "active" : ""}`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="carousel-image"
              />
              <div className="carousel-content">
                <h1 className="carousel-title netflix-title">{image.title}</h1>
                <p className="carousel-description">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-button prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <i className="chevron-left"></i>
          <span className="sr-only">Previous slide</span>
        </button>

        <button
          className="carousel-button next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <i className="chevron-right"></i>
          <span className="sr-only">Next slide</span>
        </button>

        <div className="carousel-indicators">
          {experienceImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Cinematic Experience Timeline */}
      <div className="experience-content-container">
        <div className="timeline-header">
          <h2 className="section-title">MY JOURNEY</h2>
        </div>

        <div 
          ref={timelineRef}
          className={`cinematic-timeline ${isVisible ? 'animate' : ''}`}
        >
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ '--delay': `${index * 0.2}s`, '--color': exp.color }}
              onMouseEnter={() => setActiveExperience(exp.id)}
              onMouseLeave={() => setActiveExperience(null)}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{exp.icon}</span>
                <div className="pulse-ring"></div>
              </div>
              
              <div className={`experience-card ${activeExperience === exp.id ? 'active' : ''}`}>
                <div className="card-glow"></div>
                <div className="experience-type">{exp.type}</div>
                <h3 className="experience-role">{exp.role}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <div className="experience-period">{exp.period}</div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;