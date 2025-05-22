"use client"

import { motion } from "framer-motion"
import "./NetflixLoading.css"

const NetflixLoading = () => {
  return (
    <div className="netflix-loading">
      <motion.div 
        className="netflix-loading-logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span>N</span>
        <motion.div 
          className="loading-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  )
}

export default NetflixLoading 