import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import { getAssetPath } from '../utils/assets'
import './Page.css'

const Development = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--banner1-bg', `url("${getAssetPath('media/Banner1.jpg')}")`)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      
      <motion.div
        className="parallax"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Development
        </motion.h1>
      </motion.div>

      <motion.div
        className="secCont"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div style={{ width: '80%', marginTop: '100px', marginBottom: '100px', color: 'white' }}>
          <motion.p
            style={{ textAlign: 'center', fontSize: '1.2rem', lineHeight: '1.8' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Development
