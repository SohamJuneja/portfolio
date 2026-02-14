"use client"

import { motion } from "framer-motion"
import "./Projects.css"
import { FaReact, FaNodeJs, FaEthereum, FaPython, FaGithub } from "react-icons/fa"
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
      description: "CasperLink simplifies cross-chain DeFi with intent-based transactions. Express what you want ('Swap BTC→ETH'), we handle the rest. Built on Casper with Oracle price feeds, slippage protection, and production-ready smart contracts.",
      image: "/images/casperlink.png",
      github: "https://github.com/SohamJuneja/CasperLink",
      tags: ["React", "Node.js", "Blockchain", "TypeScript"],
      year: 2025,
    },
    {
      id: 2,
      title: "MorphStream",
      description: "MorphStream makes money flow like data. By leveraging Morph's L2 speed and low fees, we unlock real-time, per-second payments for salaries and subscriptions, making traditional lump-sum models obsolete.",
      image: "/images/morphstream.png",
      github: "https://github.com/SohamJuneja/morphHackathon",
      tags: ["React", "Node.js", "Solidity", "TailwindCSS"],
      year: 2025,
    },
    {
      id: 3,
      title: "Evolvagotchi",
      description: "Web3 assets are cold and static. Evolvagotchi solves this by breathing life into NFTs. We use a multi-layer AI system to create autonomous on-chain companions that live, feel, remember, and talk back to you.",
      image: "/images/evolvagotchi.png",
      github: "https://github.com/SohamJuneja/evolvagotchi",
      tags: ["Solidity", "React", "TypeScript", "TailwindCSS"],
      year: 2025,
    },
    {
      id: 4,
      title: "AptosFlow",
      description: "The AI-powered autonomous execution layer for Aptos DeFi, turning plain-English user intent into secure on-chain actions across swaps, liquidity, and complex multi-protocol strategies.",
      image: "/images/aptosflow.png",
      github: "https://github.com/SohamJuneja/AptosFlow",
      tags: ["TypeScript", "React", "Node.js", "TailwindCSS"],
      year: 2025,
    },
    {
      id: 5,
      title: "KRWQ-Sentinel",
      description: "Democratizing DeFi alpha discovery through AI-powered intelligence verification. Community members earn commissions by providing verified market tips while protecting fund capital from misinformation.",
      image: "/images/krwq.png",
      github: "https://github.com/SohamJuneja/KRWQ-SENTINEL",
      tags: ["Python", "TensorFlow", "Docker", "React"],
      year: 2025,
    },
    {
      id: 6,
      title: "AI Meeting Agent",
      description: "Intelligent meeting assistant that transcribes, summarizes, and generates actionable insights from meetings.",
      image: "/webpimages/placeholder.svg",
      tags: ["Python", "React", "Node.js", "TensorFlow"],
      year: 2025,
    },
    {
      id: 7,
      title: "Protocol Zero",
      description: "Transform Web3 security through autonomous AI agents. Make smart contract auditing instant, affordable, and accessible — replacing $50k manual audits with AI-powered analysis that developers can trust.",
      image: "/images/protocolZero.png",
      github: "https://github.com/SohamJuneja/protocol-zero",
      tags: ["Solidity", "TypeScript", "React", "Node.js"],
      year: 2025,
    },
    {
      id: 8,
      title: "AeroMesh",
      description: "The first on-chain Air Traffic Control for drone swarms. Using Somnia Data Streams, we coordinate 50+ autonomous agents in real-time, with live 3D spatial visualization and decentralized collision avoidance.",
      image: "/images/aeromesh.png",
      github: "https://github.com/SohamJuneja/AeroMesh",
      tags: ["Python", "C++", "React", "Docker"],
      year: 2025,
    },
    {
      id: 9,
      title: "ArchiveChain",
      description: "Immutable Web History & Cryptographic Provenance. Blockchain-powered document archival system ensuring tamper-proof record storage.",
      image: "/images/archiveChain.png",
      github: "https://github.com/SohamJuneja/ArchiveChain",
      tags: ["Solidity", "React", "Node.js", "MongoDB"],
      year: 2025,
    },
    {
      id: 10,
      title: "EvolvNFT",
      description: "Static NFTs are dead art. EvolvNFT creates the world's first living digital assets that autonomously evolve with real-world weather data from 6 global cities, transforming art into dynamic experiences.",
      image: "/images/evolvNFT.png",
      github: "https://github.com/SohamJuneja/evolvnft-global",
      tags: ["Solidity", "React", "TypeScript", "Ethereum"],
      year: 2025,
    },
    {
      id: 11,
      title: "VittaSutra",
      description: "Blockchain-based government fund tracking system with enhanced transparency.",
      image: "/webpimages/vittasutra.webp",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Solidity", "TailwindCSS"],
      year: 2023,
    },
    {
      id: 12,
      title: "NextOS",
      description: "Custom operating system with multitasking support and driver abstraction.",
      image: "/webpimages/nextos.webp",
      tags: ["C", "C++", "Assembly", "GCC"],
      year: 2022,
    },
    {
      id: 13,
      title: "Cinepedia",
      description: "Letterboxd-style web application for movie and TV show cataloging.",
      image: "/webpimages/cinepedia.webp",
      tags: ["HTML5", "CSS", "JavaScript", "React"],
      year: 2023,
    },
    {
      id: 14,
      title: "DDoS.AI",
      description: "AI-powered system for real-time DDoS attack detection and mitigation using machine learning.",
      image: "/webpimages/ddos.webp",
      tags: ["Python", "Node.js", "TensorFlow", "React", "Docker"],
      year: 2024,
    },
    {
      id: 15,
      title: "MindSync",
      description: "AI-powered note-taking app with smart concept clustering and blockchain integration.",
      image: "/webpimages/mindsync.webp",
      tags: ["React", "Node.js", "MongoDB", "Express", "Blockchain"],
      year: 2024,
    },
    {
      id: 16,
      title: "GDSC NITH",
      description: "Website for Google Developer Student Club at NIT Hamirpur.",
      image: "/webpimages/dsc.webp",
      tags: ["React", "CSS", "JavaScript"],
      year: 2022,
    },
    {
      id: 17,
      title: "Electrothon",
      description: "Website for college hackathon event.",
      image: "/webpimages/electrothon.webp",
      tags: ["HTML", "CSS", "JavaScript"],
      year: 2022,
    },
    {
      id: 18,
      title: "SPEC Website",
      description: "Website for Society for Promotion of Electronics Culture.",
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
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github-link">
                  <FaGithub /> View Source
                </a>
              )}
            </div>
          </motion.div>        ))}
      </motion.div>
    </div>
  )
}

export default Projects
