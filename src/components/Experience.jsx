import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const experienceImages = [
  {
    src: "/webpimages/dscWorkshop.webp",
    alt: "GDSC Workshop",
    title: "Open Source Workshop",
  },
  {
    src: "/webpimages/anchoring.webp",
    alt: "Leadership Excellence",
    title: "Electrothon - Day 1",
  },
  {
    src: "/webpimages/electrothon_1.webp",
    alt: "Innovation & Development",
    title: "Electrothon - Day 2",
  },
  {
    src: "/webpimages/specfest.webp",
    alt: "Innovation & Development",
    title: "SpecFest",
  },
  {
    src: "/webpimages/dscGroup.webp",
    alt: "Innovation & Development",
    title: "GDSC 2K25",
  },
  {
    src: "/webpimages/specGroup.webp",
    alt: "Innovation & Development",
    title: "SPEC 2K25",
  },
];

const experiences = [
  {
    id: 1,
    role: "Open Source Contributor",
    company: "Nullshot — Jenkins Remote",
    period: "Nov 2024 – Present",
    type: "Open Source",
    bullets: [
      "Nullshot (AI Agent): Core developer for TaskMind, an autonomous agent. Integrated PostHog for granular event tracking & optimized NLP pipelines, boosting command recognition by 30%.",
      "Jenkins (CI/CD): Authored 15+ merged PRs optimizing Jelly UI files & legacy Java codebases. Contributed to high-priority UI/UX revamps for Jenkins Stories, improving the developer experience for thousands of users.",
      "Mentorship: Conducted an open-source seminar for 200+ students; maintained repositories with 40+ 'good first issues' to facilitate community growth."
    ],
    color: "#e50914",
    icon: "🚀"
  },
  {
    id: 2,
    role: "Campus Lead",
    company: "Google Developer Groups (GDG) NIT Hamirpur",
    period: "May 2025 – Present",
    type: "Development",
    bullets: [
      "Organized flagship technical events including 'Genesis,' driving 150,000+ interactions on social platforms.",
      "Led the club to win 'Best Technical Club' at Nimbus 2025 through consistent delivery of high-quality workshops."
    ],
    color: "#ff6b35",
    icon: "💻"
  },
  {
    id: 3,
    role: "Lead Organizer",
    company: "Society for Promotion of Electronics Culture (SPEC)",
    period: "May 2025 – Present",
    type: "Leadership",
    bullets: [
      "Electrothon 8.0: Leading India's largest MLH-backed hackathon. Scaled prize pool 12x from $1,600 to $20,000, increased attendance capacity by 50%, and drove registrations to an estimated 5,000+.",
      "Operations & Growth: Secured major corporate sponsorships and managed logistics for 2,200+ participants in Electrothon 7.0.",
      "Spearheaded the revamp of the SPEC website, improving load times and UX for 5,000+ unique visitors."
    ],
    color: "#00d4aa",
    icon: "⚡"
  },
  {
    id: 4,
    role: "Executive",
    company: "Google Developer Student Clubs",
    period: "Jan 2024 – May 2025",
    type: "Development",
    bullets: [
      "Developed 'Among Us' app with 300+ participants.",
      "Built BittuAI platform leveraging generative AI.",
      "Took various workshops and organised various events."
    ],
    color: "#ff6b35",
    icon: "💻"
  },
  {
    id: 5,
    role: "Executive",
    company: "Society for Promotion of Electronics Culture, NIT Hamirpur",
    period: "Aug 2024 – May 2025",
    type: "Leadership",
    bullets: [
      "Spearheaded website updates for 5,000+ users.",
      "Led 35-member team for workshops.",
      "Organized Electrothon 7.0 with 1,500+ registrations."
    ],
    color: "#00d4aa",
    icon: "⚡"
  },
  {
    id: 6,
    role: "Volunteer",
    company: "E-Cell, NIT Hamirpur",
    period: "Dec 2023 – Apr 2024",
    type: "Operations",
    bullets: [
      "Led financial operations and secured sponsorships for E-Cell events."
    ],
    color: "#4ecdc4",
    icon: "💼"
  },
  {
    id: 7,
    role: "Subject Matter Expert",
    company: "Chegg",
    period: "Nov 2023 – Present",
    type: "Education",
    bullets: [
      "Resolved academic queries with 4.63/5 quality score and 70% positive feedback."
    ],
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
  const timelineItemsRef = useRef([]);

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
      { threshold: 0.05 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for timeline items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    timelineItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

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
                loading="lazy"
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
        <div className="timeline-header fade-in-section">
          <h2 className="section-title">
            MY JOURNEY
            <div className="title-underline"></div>
          </h2>
        </div>

        <div 
          ref={timelineRef}
          className={`cinematic-timeline fade-in-section ${isVisible ? 'animate' : ''}`}
        >
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              ref={el => timelineItemsRef.current[index] = el}
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
                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;