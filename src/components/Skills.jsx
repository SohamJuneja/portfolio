"use client"

import { useState } from "react"
import "./Skills.css"
import { motion } from "framer-motion"

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const categories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML5", icon: "html5", level: 95, color: "#E34F26" },
        { name: "CSS3", icon: "css3", level: 90, color: "#1572B6" },
        { name: "Bootstrap", icon: "bootstrap", level: 80, color: "#7952B3" },
        { name: "TailwindCSS", icon: "tailwindcss", level: 85, color: "#06B6D4" },
        { name: "Shadcn", icon: "shadcn", level: 80, color: "#FFFFFF" },
        { name: "JavaScript", icon: "javascript", level: 85, color: "#F7DF1E" },
        { name: "TypeScript", icon: "typescript", level: 80, color: "#3178C6" },
        { name: "React", icon: "react", level: 90, color: "#61DAFB" },
        { name: "Next.js", icon: "nextjs", level: 85, color: "#FFFFFF" },
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
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "nodejs", level: 85, color: "#339933" },
        { name: "Express.js", icon: "expressjs", level: 80, color: "#FFFFFF" },
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
      name: "Blockchain",
      skills: [
        { name: "Solidity", icon: "solidity", level: 75, color: "#00A8E8" },
        { name: "Remix", icon: "remix", level: 80, color: "#F2DF1E" },
        { name: "Hardhat", icon: "hardhat", level: 70, color: "#F7DF1E" },
        { name: "Foundry", icon: "foundry", level: 65, color: "#F7DF1E" },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", icon: "git", level: 90, color: "#F05032" },
        { name: "GitHub", icon: "github", level: 90, color: "#FFFFFF" },
        { name: "GitPod", icon: "gitpod", level: 75, color: "#FFAE33" },
        { name: "Docker", icon: "docker", level: 75, color: "#2496ED" },
        { name: "Vercel", icon: "vercel", level: 80, color: "#FFFFFF" },
        { name: "Netlify", icon: "netlify", level: 80, color: "#00C7B7" },
        { name: "Jenkins", icon: "jenkins", level: 65, color: "#D24939" },
        { name: "Figma", icon: "figma", level: 75, color: "#F24E1E" },
        { name: "Canva", icon: "canva", level: 80, color: "#00C4CC" },
        { name: "LaTeX", icon: "latex", level: 65, color: "#008080" },
        { name: "PowerShell", icon: "powershell", level: 60, color: "#5391FE" },
      ],
    },
  ]

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? null : skill)
  }

  return (
    <div className="skills-container">

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
                    borderColor: skill === selectedSkill ? "#E50914" : skill.color,
                  }}
                >
                  <div 
                    className="skill-icon" 
                    style={{ color: skill.color }}
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
