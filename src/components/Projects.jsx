"use client"

import { motion } from "framer-motion"
import "./Projects.css"
import { FaReact, FaNodeJs, FaEthereum, FaPython } from "react-icons/fa"
import { SiTypescript, SiMongodb, SiSolidity, SiElectron, SiWebpack, SiArchlinux, SiHtml5, SiCss3, SiJavascript, SiTensorflow, SiDocker, SiLinux, SiTailwindcss, SiVite, SiExpress } from "react-icons/si"

const Projects = () => {
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
      "JavaScript": <SiJavascript />,
      "Python": <FaPython />,
      "TensorFlow": <SiTensorflow />,
      "Docker": <SiDocker />,
      "Linux": <SiLinux />,
      "TailwindCSS": <SiTailwindcss />,
      "Vite": <SiVite />,
      "Express": <SiExpress />
    }
    return iconMap[tech] || null
  }

  const projects = [
    {
      id: 3,
      title: "VittaSutra",
      description: "Blockchain-based government fund tracking system with enhanced transparency",
      image: "/images/vittasutra.png",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Solidity", "TailwindCSS"],
      year: 2023,
    },
    {
      id: 4,
      title: "NextOS",
      description: "Custom operating system with multitasking support and driver abstraction",
      image: "/images/blue1.jpg",
      tags: ["C", "C++", "Assembly", "GCC"],
      year: 2022,
    },
    {
      id: 5,
      title: "Cinepedia",
      description: "Letterboxd-style web application for movie and TV show cataloging",
      image: "/images/cinepedia.png",
      tags: ["HTML5", "CSS", "JavaScript", "React"],
      year: 2023,
    },
    {
      id: 1,
      title: "DDoS.AI",
      description: "AI-powered system for real-time DDoS attack detection and mitigation using machine learning",
      image: "/images/ddos.png",
      tags: ["Python", "Node.js", "TensorFlow", "React", "Docker"],
      year: 2024,
    },
    {
      id: 2,
      title: "MindSync",
      description: "AI-powered note-taking app with smart concept clustering and blockchain integration",
      image: "/images/mindsync.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Blockchain"],
      year: 2024,
    },
    {
      id: 6,
      title: "GDSC NITH",
      description: "Website for Google Developer Student Club at NIT Hamirpur",
      image: "/images/dsc.png",
      tags: ["React", "CSS", "JavaScript"],
      year: 2022,
    },
    {
      id: 7,
      title: "Electrothon",
      description: "Website for college hackathon event",
      image: "/images/electrothon.png",
      tags: ["HTML", "CSS", "JavaScript"],
      year: 2022,
    },
    {
      id: 8,
      title: "SPEC Website",
      description: "Website for Society for Promotion of Electronics Culture",
      image: "/images/spec.png",
      tags: ["React", "CSS", "JavaScript"],
      year: 2021,
    },
  ]

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
                {project.tags.slice(0, 6).map((tag, index) => (
                  <span key={index} className="project-tag">
                    {getTechIcon(tag)}
                    <span className="tag-text">{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
