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
      src: "https://media.licdn.com/dms/image/v2/D5622AQEKEqXWmyr90g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903732757?e=1750896000&v=beta&t=D1L_P5AuSR3HPruHxA8zRxY9YgtWHvcgFDQ6vcXqXiw",
      alt: "Design Competition",
      title: "Andromeda Stellarscape Hackathon",
      description: "Blockchain innovation reaches for the stars"
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQGfePJ8EPejqA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903731530?e=1750896000&v=beta&t=uFgRxCeZ6u6UTTtg4yFsyvyZuUn82N8rz1wErtfvhfQ",
      alt: "Hackathon Competition",
      title: "Civil Wars",
      description: ""
    },
    {
      src: "achievements/hackonhills1.jpg",
      alt: "Hackathon Competition",
      title: "Hack on Hills 6.0",
      description: ""
    },
    {
      src: "achievements/reverse1.jpg",
      alt: "Design Competition",
      title: "Reverse Pitch",
      description: "Blockchain innovation reaches for the stars"
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQHz_HxQjn8KGA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1710579050949?e=1750896000&v=beta&t=xbcb616XGY-SM0L6Z3yZTh1oxKJWPKA46ad4ZpKF96E",
      alt: "Design Competition",
      title: "Electrothon 6.0",
      description: "Blockchain innovation reaches for the stars"
    }
  ]

  const achievements = [
    {
      id: 1,
      title: "Hack on Hills 6.0",
      description: "🏆 CHAMPION - Overall First Position out of 150+ teams in a prestigious national hackathon conducted under Nimbus.",
      image: "achievements/hackonhills.jpg",
      icon: "crown",
      year: "2025",
      category: "Champion",
      tier: "gold"
    },
    {
      id: 4,
      title: "Andromeda Stellarscape Blockchain Hackathon",
      description: "🌟 TOP PERFORMER - Secured Top 15 rankings across ALL three categories: Auction, Marketplace and Crowdfunding.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQHXpz7liOxI5w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903732071?e=1750896000&v=beta&t=WENC_GbcJH30j1gZbNb2fD969tV8pcB5uO7HuZoKzO8",
      icon: "medal",
      year: "2024",
      category: "Hackathon",
      tier: "silver"
    },
    {
      id: 2,
      title: "Google Study Jams",
      description: "Prompt Design using Vertex AI, GenAI Apps with Gemini and Streamlit, and Generative AI concepts.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQHc_xuhuENB4w/feedshare-shrink_800/feedshare-shrink_800/0/1726836868917?e=1750896000&v=beta&t=OLYAeQtsZYng4e-64EHYRREPQXKo_CobxcD-fFsxTAQ",
      icon: "award",
      year: "2024",
      category: "Google Certified",
      tier: "gold"
    },
    {
      id: 3,
      title: "Google Arcade",
      description: "Conquered 10 skill badges and earned exclusive Google swags through consistent high-performance achievements.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFZyJ8Tjf1Uhg/feedshare-shrink_1280/feedshare-shrink_1280/0/1726836869469?e=1750896000&v=beta&t=to9yYQyUVMD90R7_TW9XVwgaXECZQHW-IJIrsQek9kA",
      icon: "gem",
      year: "2024",
      category: "Google Program",
      tier: "silver"
    },
    {
      id: 9,
      title: "Reverse Pitch - E-Summit NITH",
      description: "🥈 RUNNER-UP - Pitched game-changing startup solutions to real-world problems at NIT Hamirpur's premier entrepreneurship summit.",
      image: "achievements/reverse.jpg",
      icon: "medal",
      year: "2025",
      category: "Entrepreneurship",
      tier: "silver"
    },
    {
      id: 6,
      title: "Flipkart Grid 6.0",
      description: " Only second-year student from college to clear Level 1 of coding challenge by Flipkart.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQE9iMHdmoPxOg/feedshare-shrink_2048_1536/B56ZRqeWmtHsAs-/0/1736953131157?e=1750896000&v=beta&t=Z9kF6g_gqVMxzskGF36fkho1H96atcFsQYOypb25BB0",
      icon: "code",
      year: "2024",
      category: "Coding",
      tier: "silver"
    },
    {
      id: 7,
      title: "Tata Imagination Challenge",
      description: "Advanced through multiple elimination rounds in Tata's prestigious innovation challenge, showcasing creative problem-solving skills.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQHWZnWlxU9kkw/feedshare-shrink_2048_1536/B56ZRqeWnWHoAo-/0/1736953130861?e=1750896000&v=beta&t=SrBUt6VdhlqPLWGiwg7vi6nWYbkusMb4weeOZOTCnlc",
      icon: "lightbulb",
      year: "2024",
      category: "Innovation",
      tier: "bronze"
    },
    {
      id: 5,
      title: "Abhedya Cryptic Hunt",
      description: "BEST FIRST YEAR - Best first-year performer in the cryptic hunt challenge, decoding complex puzzles and unraveling digital mysteries.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQGO-hAfcsIpFQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903731323?e=1750896000&v=beta&t=5OpijII1mAv0tuPkjc7LGyFInFg6QnOOxPFRe9mWN3Q",
      icon: "lightbulb",
      year: "2024",
      category: "Competition",
      tier: "gold"
    },
    {
      id: 8,
      title: "Bidwiser Competition",
      description: "🥈 RUNNER-UP - Secured second position by mastering complex mathematical optimization algorithms and strategic score maximization.",
      image: "achievements/bidwiser.jpg",
      icon: "medal",
      year: "2025",
      category: "Mathematics",
      tier: "silver"
    },
    {
      id: 10,
      title: "Gear-O-Metry Challenge",
      description: "🥈 RUNNER-UP - Demonstrated exceptional skills in AutoCAD design and precision gear alignment engineering.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEzxoa1ifj-EA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903731753?e=1750896000&v=beta&t=HeYKj_KgLyktaK1-Iuo6PbvkqecKKByUMXmcAM0Mh9Y",
      icon: "medal",
      year: "2024",
      category: "Engineering",
      tier: "silver"
    },
    {
      id: 11,
      title: "Electrothon Scavenger Hunt",
      description: "🏆 TREASURE HUNTER - Emerged victorious in the college-wide digital treasure hunt during Electrothon 6.0.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFH0jeVNUVcGg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1710579047083?e=1750896000&v=beta&t=JwbmJyulA4Sui1Bi6zlH9CFHMumArHpU5dB9oSVIqa0",
      icon: "trophy",
      year: "2024",
      category: "Competition",
      tier: "gold"
    },
    {
      id: 12,
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