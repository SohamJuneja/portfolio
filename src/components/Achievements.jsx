"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import "./Achievements.css"
import { FaTrophy, FaAward, FaMedal, FaStar } from "react-icons/fa"

const Achievements = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

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
      src: "https://media.licdn.com/dms/image/v2/D5622AQGfePJ8EPejqA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903731530?e=1750896000&v=beta&t=uFgRxCeZ6u6UTTtg4yFsyvyZuUn82N8rz1wErtfvhfQ",
      alt: "Hackathon Competition",
      title: "Civil Wars",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQEzxoa1ifj-EA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903731753?e=1750896000&v=beta&t=HeYKj_KgLyktaK1-Iuo6PbvkqecKKByUMXmcAM0Mh9Y",
      alt: "Coding Challenge",
      title: "Gear-O-Metry",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQEKEqXWmyr90g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903732757?e=1750896000&v=beta&t=D1L_P5AuSR3HPruHxA8zRxY9YgtWHvcgFDQ6vcXqXiw",
      alt: "Design Competition",
      title: "Andromeda Stellarscape Hackathon",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQGO-hAfcsIpFQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903731323?e=1750896000&v=beta&t=5OpijII1mAv0tuPkjc7LGyFInFg6QnOOxPFRe9mWN3Q",
      alt: "Tech Conference",
      title: "Abhedya",
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "Civil Wars",
      description: "First place in the National Web Dev Competition",
      image: "https://media.licdn.com/dms/image/v2/D5622AQGfePJ8EPejqA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903731530?e=1750896000&v=beta&t=uFgRxCeZ6u6UTTtg4yFsyvyZuUn82N8rz1wErtfvhfQ",
      icon: "trophy",
      year: "2023",
      category: "Hackathon"
    },
    {
      id: 2,
      title: "Gear-O-Metry",
      description: "Led team to victory in 48-hour coding challenge",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEzxoa1ifj-EA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903731753?e=1750896000&v=beta&t=HeYKj_KgLyktaK1-Iuo6PbvkqecKKByUMXmcAM0Mh9Y",
      icon: "award",
      year: "2023",
      category: "Competition"
    },
    {
      id: 3,
      title: "Andromeda Stellarscape",
      description: "Award for exceptional UI/UX design implementation",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEKEqXWmyr90g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903732757?e=1750896000&v=beta&t=D1L_P5AuSR3HPruHxA8zRxY9YgtWHvcgFDQ6vcXqXiw",
      icon: "medal",
      year: "2023",
      category: "Hackathon"
    },
    {
      id: 4,
      title: "Abhedya",
      description: "Recognized for creating a groundbreaking AI solution",
      image: "https://media.licdn.com/dms/image/v2/D5622AQGO-hAfcsIpFQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716903731323?e=1750896000&v=beta&t=5OpijII1mAv0tuPkjc7LGyFInFg6QnOOxPFRe9mWN3Q",
      icon: "star",
      year: "2023",
      category: "Competition"
    }
  ]

  const getIcon = (iconName) => {
    switch (iconName) {
      case "trophy":
        return <FaTrophy className="achievement-icon" />
      case "award":
        return <FaAward className="achievement-icon" />
      case "medal":
        return <FaMedal className="achievement-icon" />
      case "star":
        return <FaStar className="achievement-icon" />
      default:
        return null
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % competitionImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + competitionImages.length) % competitionImages.length)
  }

  if (isLoading) {
    return (
      <div className="netflix-loading">
        <div className="netflix-loading-logo">
          <span>LOADING</span>
        </div>
      </div>
    )
  }

  return (
    <div className="netflix-achievements">
      {/* Hero Carousel */}
      <div 
        className="hero-carousel"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="gradient-overlay" aria-hidden="true"></div>

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

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <motion.div
              className="achievement-card"
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: achievement.id * 0.1 }}
            >
              <div className="achievement-poster">
                <img src={achievement.image} alt={achievement.title} />
                <div className="achievement-overlay"></div>
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
