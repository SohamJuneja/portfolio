"use client"

import { useState, useEffect } from "react"
import "./Skills.css"
import { motion } from "framer-motion"

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate Netflix loading experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const categories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "react", level: 90, color: "#61DAFB" },
        { name: "JavaScript", icon: "javascript", level: 85, color: "#F7DF1E" },
        { name: "TypeScript", icon: "typescript", level: 80, color: "#3178C6" },
        { name: "HTML5", icon: "html5", level: 95, color: "#E34F26" },
        { name: "CSS3", icon: "css3", level: 90, color: "#1572B6" },
        { name: "TailwindCSS", icon: "tailwindcss", level: 85, color: "#06B6D4" },
        { name: "Bootstrap", icon: "bootstrap", level: 80, color: "#7952B3" },
        { name: "Next.js", icon: "next", level: 85, color: "#000000" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "nodejs", level: 85, color: "#339933" },
        { name: "Express.js", icon: "express", level: 80, color: "#000000" },
        { name: "GraphQL", icon: "graphql", level: 75, color: "#E10098" },
        { name: "Prisma", icon: "prisma", level: 70, color: "#2D3748" },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MongoDB", icon: "mongodb", level: 85, color: "#47A248" },
        { name: "MySQL", icon: "mysql", level: 80, color: "#4479A1" },
        { name: "PostgreSQL", icon: "postgresql", level: 75, color: "#4169E1" },
      ],
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: "docker", level: 75, color: "#2496ED" },
        { name: "AWS", icon: "aws", level: 70, color: "#FF9900" },
        { name: "Google Cloud", icon: "googlecloud", level: 65, color: "#4285F4" },
        { name: "Vercel", icon: "vercel", level: 80, color: "#000000" },
        { name: "Netlify", icon: "netlify", level: 80, color: "#00C7B7" },
        { name: "Jenkins", icon: "jenkins", level: 65, color: "#D24939" },
      ],
    },
    {
      name: "Languages",
      skills: [
        { name: "Python", icon: "python", level: 80, color: "#3776AB" },
        { name: "Java", icon: "java", level: 70, color: "#007396" },
        { name: "C", icon: "c", level: 65, color: "#A8B9CC" },
        { name: "C++", icon: "cplusplus", level: 65, color: "#00599C" },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", icon: "git", level: 90, color: "#F05032" },
        { name: "GitHub", icon: "github", level: 90, color: "#181717" },
        { name: "GitPod", icon: "gitpod", level: 75, color: "#FFAE33" },
        { name: "Adobe", icon: "adobe", level: 70, color: "#FF0000" },
        { name: "LaTeX", icon: "latex", level: 65, color: "#008080" },
        { name: "PowerShell", icon: "powershell", level: 60, color: "#5391FE" },
        { name: "Blockchain", icon: "blockchain", level: 70, color: "#F7931A" },
      ],
    },
  ]

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? null : skill)
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
    <div className="skills-container">
      <div className="netflix-header">
        <h1>My Skills</h1>
      </div>

      {categories.map((category, index) => (
        <div className="category-row" key={index}>
          <h2 className="category-title">{category.name}</h2>
          <div className="skills-row">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                className="skill-card"
                key={skillIndex}
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
                onClick={() => handleSkillClick(skill)}
              >
                <div
                  className="skill-content"
                  style={{
                    backgroundColor: skill === selectedSkill ? "rgba(20, 20, 20, 0.9)" : "#141414",
                    // Current version - Red borders with colored icons
                    // borderColor: skill === selectedSkill ? skill.color : "#E50914",
                    // Alternative version - Colored borders with red icons
                    borderColor: skill === selectedSkill ? "#E50914" : skill.color,
                  }}
                >
                  <div 
                    className="skill-icon" 
                    // Current version - Colored icons
                    style={{ color: skill.color }}
                    // Alternative version - Red icons
                    // style={{ color: "#E50914" }}
                  >
                    <i className={`devicon-${skill.icon}-plain`}></i>
                  </div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    {skill === selectedSkill && (
                      <motion.div
                        className="skill-details"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="skill-level-container">
                          <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                        </div>
                        <span>{skill.level}%</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
