"use client"

import { motion } from "framer-motion"
import "./Projects.css"
import { FaReact, FaNodeJs, FaEthereum, FaPython } from "react-icons/fa"
import { SiTypescript, SiMongodb, SiSolidity, SiElectron, SiWebpack, SiArchlinux, SiHtml5, SiCss3, SiJavascript, SiTensorflow, SiDocker, SiLinux, SiTailwindcss, SiVite, SiExpress, SiCplusplus, SiC, SiAssemblyscript, SiGnu, SiBlockchaindotcom } from "react-icons/si"

const Projects = () => {  const getTechIcon = (tech) => {
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
      "HTML": <SiHtml5 />,
      "CSS": <SiCss3 />,
      "JavaScript": <SiJavascript />,
      "Python": <FaPython />,
      "TensorFlow": <SiTensorflow />,
      "Docker": <SiDocker />,
      "Linux": <SiLinux />,
      "TailwindCSS": <SiTailwindcss />,
      "Vite": <SiVite />,
      "Express": <SiExpress />,
      "C": <SiC />,
      "C++": <SiCplusplus />,
      "Assembly": <SiAssemblyscript />,
      "GCC": <SiGnu />,
      "Blockchain": <SiBlockchaindotcom />
    }
    return iconMap[tech] || null
  }

  const projects = [
    {
      id: 1,
      title: "CasperLink",
      description: "Decentralized communication platform enabling secure, peer-to-peer messaging with end-to-end encryption",
      image: "/webpimages/placeholder.svg",
      tags: ["React", "Node.js", "Blockchain", "TypeScript"],
      year: 2025,
    },
    {
      id: 2,
      title: "KRWQ-Sentinel",
      description: "Real-time threat detection and monitoring system with AI-driven anomaly analysis",
      image: "/webpimages/placeholder.svg",
      tags: ["Python", "TensorFlow", "Docker", "React"],
      year: 2025,
    },
    {
      id: 3,
      title: "Protocol Zero",
      description: "Zero-knowledge proof protocol for privacy-preserving identity verification on-chain",
      image: "/webpimages/placeholder.svg",
      tags: ["Solidity", "TypeScript", "React", "Node.js"],
      year: 2025,
    },
    {
      id: 4,
      title: "AeroMesh",
      description: "Distributed mesh networking solution for low-latency IoT device communication",
      image: "/webpimages/placeholder.svg",
      tags: ["Python", "C++", "React", "Docker"],
      year: 2025,
    },
    {
      id: 5,
      title: "OneGotchi",
      description: "Virtual pet companion app with on-chain evolution mechanics and community interaction",
      image: "/webpimages/placeholder.svg",
      tags: ["React", "Solidity", "Node.js", "MongoDB"],
      year: 2025,
    },
    {
      id: 6,
      title: "ArchiveChain",
      description: "Blockchain-powered document archival system ensuring tamper-proof record storage",
      image: "/webpimages/placeholder.svg",
      tags: ["Solidity", "React", "Node.js", "MongoDB"],
      year: 2025,
    },
    {
      id: 7,
      title: "Evolvagotchi",
      description: "NFT-based evolving digital creatures with dynamic traits and generative artwork",
      image: "/webpimages/placeholder.svg",
      tags: ["Solidity", "React", "TypeScript", "TailwindCSS"],
      year: 2025,
    },
    {
      id: 8,
      title: "AptosFlow",
      description: "DeFi dashboard and transaction manager built on the Aptos blockchain ecosystem",
      image: "/webpimages/placeholder.svg",
      tags: ["TypeScript", "React", "Node.js", "TailwindCSS"],
      year: 2025,
    },
    {
      id: 9,
      title: "EvolvNFT",
      description: "Dynamic NFT platform where tokens evolve based on holder activity and on-chain events",
      image: "/webpimages/placeholder.svg",
      tags: ["Solidity", "React", "TypeScript", "Ethereum"],
      year: 2025,
    },
    {
      id: 10,
      title: "ZetaForge",
      description: "Cross-chain asset bridge and swap protocol for seamless multi-chain interoperability",
      image: "/webpimages/placeholder.svg",
      tags: ["TypeScript", "Solidity", "React", "Node.js"],
      year: 2025,
    },
    {
      id: 11,
      title: "MorphStream",
      description: "Real-time video streaming platform with adaptive bitrate and AI-powered content moderation",
      image: "/webpimages/placeholder.svg",
      tags: ["React", "Node.js", "Python", "Docker"],
      year: 2025,
    },
    {
      id: 12,
      title: "AI Meeting Agent",
      description: "Intelligent meeting assistant that transcribes, summarizes, and generates actionable insights from meetings",
      image: "/webpimages/placeholder.svg",
      tags: ["Python", "React", "Node.js", "TensorFlow"],
      year: 2025,
    },
    {
      id: 13,
      title: "VittaSutra",
      description: "Blockchain-based government fund tracking system with enhanced transparency",
      image: "/webpimages/vittasutra.webp",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Solidity", "TailwindCSS"],
      year: 2023,
    },
    {
      id: 14,
      title: "NextOS",
      description: "Custom operating system with multitasking support and driver abstraction",
      image: "/webpimages/nextos.webp",
      tags: ["C", "C++", "Assembly", "GCC"],
      year: 2022,
    },
    {
      id: 15,
      title: "Cinepedia",
      description: "Letterboxd-style web application for movie and TV show cataloging",
      image: "/webpimages/cinepedia.webp",
      tags: ["HTML5", "CSS", "JavaScript", "React"],
      year: 2023,
    },
    {
      id: 16,
      title: "DDoS.AI",
      description: "AI-powered system for real-time DDoS attack detection and mitigation using machine learning",
      image: "/webpimages/ddos.webp",
      tags: ["Python", "Node.js", "TensorFlow", "React", "Docker"],
      year: 2024,
    },
    {
      id: 17,
      title: "MindSync",
      description: "AI-powered note-taking app with smart concept clustering and blockchain integration",
      image: "/webpimages/mindsync.webp",
      tags: ["React", "Node.js", "MongoDB", "Express", "Blockchain"],
      year: 2024,
    },
    {
      id: 18,
      title: "GDSC NITH",
      description: "Website for Google Developer Student Club at NIT Hamirpur",
      image: "/webpimages/dsc.webp",
      tags: ["React", "CSS", "JavaScript"],
      year: 2022,
    },
    {
      id: 19,
      title: "Electrothon",
      description: "Website for college hackathon event",
      image: "/webpimages/electrothon.webp",
      tags: ["HTML", "CSS", "JavaScript"],
      year: 2022,
    },
    {
      id: 20,
      title: "SPEC Website",
      description: "Website for Society for Promotion of Electronics Culture",
      image: "/webpimages/spec.webp",
      tags: ["React", "CSS", "JavaScript"],
      year: 2021,
    },
  ]
  return (
    <div className="projects-container">
      {/* Main Header */}      <motion.div 
        className="netflix-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>MY CREATIONS</h1>
        <p>Building innovative solutions that shape the digital future</p>
      </motion.div>

      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {projects.map((project) => (          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.3 }
            }}
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
          </motion.div>        ))}
      </motion.div>
    </div>
  )
}

export default Projects
