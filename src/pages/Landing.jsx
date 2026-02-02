import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAssetPath } from '../utils/assets'
import './Landing.css'

const Landing = () => {
  useEffect(() => {
    // Set CSS variables for background images
    document.documentElement.style.setProperty('--logo-bg', `url("${getAssetPath('media/Logo.jpeg')}")`)
    document.documentElement.style.setProperty('--logo2-bg', `url("${getAssetPath('media/logo2.jpeg')}")`)
    document.documentElement.style.setProperty('--bg1-bg', `url("${getAssetPath('media/bg1.png')}")`)
  }, [])

  return (
    <>
      <motion.main
        className="cnt1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          className="reveal"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.3 }}
        />
        
        <motion.div
          className="textcol animate-this"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.5 }}
        >
          <motion.div
            id="text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>Emilio Rivas</p>
          </motion.div>

          <motion.div
            id="text2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p>-Software Engineering-</p>
          </motion.div>
          
          <motion.div
            className="cnt2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="btcon">
              <Link to="/portfolio" className="tbn tbn1">
                Lets go!
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
    </>
  )
}

export default Landing
