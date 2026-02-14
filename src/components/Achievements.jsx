"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import "./Achievements.css"
import { FaTrophy, FaAward, FaMedal, FaStar, FaCode, FaLightbulb, FaCrown, FaGem } from "react-icons/fa"

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef(null)

  // Auto-advance carousel with pause on hover
  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % competitionImages.length)
      }, 10000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const competitionImages = [
    {
      src: "achievements/hackonhills1.jpg",
      alt: "Hackathon Competition",
      title: "Hack on Hills 6.0",
      description: ""
    },
    {
      src: "/webpimages/placeholder.svg",
      alt: "Design Competition",
      title: "Andromeda Stellarscape Hackathon",
      description: "Blockchain innovation reaches for the stars"
    },
    {
      src: "/webpimages/placeholder.svg",
      alt: "Hackathon Competition",
      title: "Civil Wars",
      description: ""
    },
    {
      src: "achievements/reverse1.jpg",
      alt: "Design Competition",
      title: "Reverse Pitch",
      description: ""
    },
    {
      src: "/webpimages/placeholder.svg",
      alt: "Design Competition",
      title: "Electrothon 6.0",
      description: ""
    }
  ]

  const achievements = [
    {
      id: 1,
      title: "Morph Consumer Hackathon",
      description: "🏆 WINNER — $4,500 prize. Built an innovative consumer-facing dApp on the Morph ecosystem.",
      image: "achievements/morph.jpg",
      icon: "crown",
      year: "2025",
      category: "Hackathon",
      tier: "gold"
    },
    {
      id: 2,
      title: "Casper Hackathon 2026",
      description: "🥉 THIRD PRIZE — $3,000 prize. Developed a decentralized solution on the Casper blockchain.",
      image: "achievements/casper.jpg",
      icon: "trophy",
      year: "2026",
      category: "Hackathon",
      tier: "gold"
    },
    {
      id: 3,
      title: "Somnia AI Hackathon",
      description: "🥈 SECOND PRIZE — $1,500 prize. Built an AI-powered solution at the Somnia AI hackathon.",
      image: "achievements/somnia.jpg",
      icon: "medal",
      year: "2025",
      category: "Hackathon",
      tier: "gold"
    },
    {
      id: 4,
      title: "Aptos Hackathon",
      description: "🏆 WINNER — $500 prize. Shipped a project on the Aptos blockchain ecosystem.",
      image: "achievements/aptosflow.jpg",
      icon: "trophy",
      year: "2025",
      category: "Hackathon",
      tier: "gold"
    },
    {
      id: 5,
      title: "Hack on Hills 6.0",
      description: "🏆 CHAMPION — Overall First Position out of 150+ teams. $500 prize in a prestigious national hackathon under Nimbus.",
      image: "achievements/hackonhills.jpg",
      icon: "crown",
      year: "2025",
      category: "Champion",
      tier: "gold"
    },
    {
      id: 6,
      title: "Hack on Hills 5.0",
      description: "🏆 WINNER — $300 prize. Secured a top position in the national hackathon under Nimbus.",
      image: "achievements/hackonHills2.jpg",
      icon: "crown",
      year: "2024",
      category: "Hackathon",
      tier: "gold"
    },
    {
      id: 7,
      title: "Launch IO",
      description: "🎖️ HONOURABLE MENTION — $200 prize. Recognized for an outstanding project submission.",
      image: "achievements/launchio.jpg",
      icon: "award",
      year: "2025",
      category: "Hackathon",
      tier: "silver"
    },
    {
      id: 8,
      title: "SIH Internal Round",
      description: "🏆 WINNER — Won the internal Smart India Hackathon selection round at NIT Hamirpur.",
      image: "achievements/sih.jpg",
      icon: "crown",
      year: "2025",
      category: "Hackathon",
      tier: "gold"
    },
    {
      id: 9,
      title: "Andromeda Stellarscape Blockchain Hackathon",
      description: "🌟 TOP PERFORMER — Secured Top 15 rankings across ALL three categories: Auction, Marketplace and Crowdfunding.",
      image: "achievements/andromeda1.jpg",
      icon: "medal",
      year: "2024",
      category: "Hackathon",
      tier: "silver"
    },
    {
      id: 10,
      title: "Google Study Jams",
      description: "Prompt Design using Vertex AI, GenAI Apps with Gemini and Streamlit, and Generative AI concepts.",
      image: "achievements/studyjams.jpg",
      icon: "award",
      year: "2024",
      category: "Google Certified",
      tier: "gold"
    },
    {
      id: 11,
      title: "Google Arcade",
      description: "Conquered 10 skill badges and earned exclusive Google swags through consistent high-performance achievements.",
      image: "achievements/arcade.jpg",
      icon: "gem",
      year: "2024",
      category: "Google Program",
      tier: "silver"
    },
    {
      id: 12,
      title: "Reverse Pitch - E-Summit NITH",
      description: "🥈 RUNNER-UP — Pitched game-changing startup solutions to real-world problems at NIT Hamirpur's premier entrepreneurship summit.",
      image: "achievements/reverse.jpg",
      icon: "medal",
      year: "2025",
      category: "Entrepreneurship",
      tier: "silver"
    },
    {
      id: 13,
      title: "Flipkart Grid 6.0",
      description: "Only second-year student from college to clear Level 1 of coding challenge by Flipkart.",
      image: "achievements/flipkartgrid.jpg",
      icon: "code",
      year: "2024",
      category: "Coding",
      tier: "silver"
    },
    {
      id: 14,
      title: "Tata Imagination Challenge",
      description: "Advanced through multiple elimination rounds in Tata's prestigious innovation challenge, showcasing creative problem-solving skills.",
      image: "achievements/tataImaginationChallenge.jpg",
      icon: "lightbulb",
      year: "2024",
      category: "Innovation",
      tier: "bronze"
    },
    {
      id: 15,
      title: "Abhedya Cryptic Hunt",
      description: "BEST FIRST YEAR — Best first-year performer in the cryptic hunt challenge, decoding complex puzzles and unraveling digital mysteries.",
      image: "achievements/abhedya.jpg",
      icon: "lightbulb",
      year: "2024",
      category: "Competition",
      tier: "gold"
    },
    {
      id: 16,
      title: "Bidwiser Competition",
      description: "🥈 RUNNER-UP — Secured second position by mastering complex mathematical optimization algorithms and strategic score maximization.",
      image: "achievements/bidwiser.jpg",
      icon: "medal",
      year: "2025",
      category: "Mathematics",
      tier: "silver"
    },
    {
      id: 17,
      title: "Gear-O-Metry Challenge",
      description: "🥈 RUNNER-UP — Demonstrated exceptional skills in AutoCAD design and precision gear alignment engineering.",
      image: "achievements/gearometry.jpg",
      icon: "medal",
      year: "2024",
      category: "Engineering",
      tier: "silver"
    },
    {
      id: 18,
      title: "Electrothon Scavenger Hunt",
      description: "🏆 TREASURE HUNTER — Emerged victorious in the college-wide digital treasure hunt during Electrothon 6.0.",
      image: "achievements/electrothon.jpg",
      icon: "trophy",
      year: "2024",
      category: "Competition",
      tier: "gold"
    },
    {
      id: 19,
      title: "Swachhta Pakhwada Riddle Competition",
      description: "Secured second place in the riddle competition organized during the national cleanliness campaign.",
      image: "achievements/riddle.jpg",
      icon: "lightbulb",
      year: "2024",
      category: "Puzzle Solving",
      tier: "bronze"
    },
  ]

  const getIcon = (iconName) => {
    switch (iconName) {
      case "crown":
        return <FaCrown className="achievement-icon" />
      case "trophy":
        return <FaTrophy className="achievement-icon" />
      case "award":
        return <FaAward className="achievement-icon" />
      case "medal":
        return <FaMedal className="achievement-icon" />
      case "star":
        return <FaStar className="achievement-icon" />
      case "code":
        return <FaCode className="achievement-icon" />
      case "lightbulb":
        return <FaLightbulb className="achievement-icon" />
      case "gem":
        return <FaGem className="achievement-icon" />
      default:
        return <FaStar className="achievement-icon" />
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % competitionImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + competitionImages.length) % competitionImages.length)
  }

  return (
    <div className="netflix-achievements">
      {/* Hero Carousel */}
      <div 
        className="hero-carousel"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="carousel-container">
          {competitionImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${currentSlide === index ? "active" : ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
              />
              <div className="carousel-content">
                <h1 className="carousel-title netflix-title">{image.title}</h1>
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
          {competitionImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="achievements-container">
        <div className="netflix-header">
          <h2 className="achievements-title">Hall of Fame</h2>
          <p className="achievements-subtitle">9X Hackathon Winner</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <motion.div
              className={`achievement-card ${achievement.tier}`}
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: achievement.id * 0.05 }}
            >
              <div className="achievement-poster">
                <img src={achievement.image} alt={achievement.title} />
              </div>

              <div className="achievement-info">
                <div className="achievement-header">
                  {getIcon(achievement.icon)}
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-category">
                  <span className="category-tag">{achievement.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievements