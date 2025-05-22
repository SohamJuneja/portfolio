"use client"

import { useState, useEffect } from "react"
import "./Projects.css"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaEthereum } from "react-icons/fa"
import { SiTypescript, SiMongodb, SiSolidity, SiElectron, SiWebpack, SiArchlinux, SiHtml5, SiCss3, SiJavascript } from "react-icons/si"

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate Netflix loading experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const getTechIcon = (tech) => {
    const iconMap = {
      "React": <FaReact />,
      "TypeScript": <SiTypescript />,
      "Node.js": <FaNodeJs />,
      "MongoDB": <SiMongodb />,
      "Ethereum": <FaEthereum />,
      "Solidity": <SiSolidity />,
      "Electron": <SiElectron />,
      "Webpack": <SiWebpack />,
      "Arch Linux": <SiArchlinux />,
      "HTML5": <SiHtml5 />,
      "CSS": <SiCss3 />,
      "JavaScript": <SiJavascript />
    }
    return iconMap[tech] || null
  }

  const projects = [
    {
      id: 1,
      title: "ArthSetu",
      description: "Blockchain-based government fund tracking system with real-time processing",
      image: "/images/blue1.jpg",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Ethereum", "Solidity"],
      year: 2023,
    },
    {
      id: 2,
      title: "NextOS",
      description: "Arch Linux ISO generator with Electron-based GUI for simplified setup",
      image: "/images/blue1.jpg",
      tags: ["Electron", "Node.js", "Webpack", "Arch Linux"],
      year: 2022,
    },
    {
      id: 3,
      title: "Cinepedia",
      description: "Letterboxd-style web application for movie and TV show cataloging",
      image: "/images/blue1.jpg",
      tags: ["HTML5", "CSS", "JavaScript", "React"],
      year: 2023,
    },
    {
      id: 4,
      title: "GDSC NITH",
      description: "Website for Google Developer Student Club at NIT Hamirpur",
      image: "/images/blue1.jpg",
      tags: ["React", "CSS", "JavaScript"],
      year: 2022,
    },
    {
      id: 5,
      title: "Electrothon",
      description: "Website for college hackathon event",
      image: "/images/blue1.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      year: 2022,
    },
    {
      id: 6,
      title: "SPEC Website",
      description: "Website for Society for Promotion of Electronics Culture",
      image: "/images/blue1.jpg",
      tags: ["React", "CSS", "JavaScript"],
      year: 2021,
    },
  ]

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
    <div className="projects-container">
      

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            <div className="project-poster">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay"></div>
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="project-tag">
                    {getTechIcon(tag)}
                    <span className="tag-text">{tag}</span>
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="project-tag more-tag">+{project.tags.length - 4}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
