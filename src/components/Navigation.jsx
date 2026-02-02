import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAssetPath } from '../utils/assets'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize() // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navLinks = [
    { path: '/portfolio', label: 'Home', scrollTo: 'top' },
    { path: '/portfolio', label: 'Development', scrollTo: 'development' },
    { path: '/portfolio', label: 'Work', scrollTo: 'work' },
    { path: '/portfolio', label: 'Education', scrollTo: 'education' },
    { path: '/portfolio', label: 'Contact', scrollTo: 'contact' },
  ]

  const handleNavClick = (e, scrollTo) => {
    const currentPath = location.pathname
    if (currentPath === '/portfolio' || currentPath.startsWith('/portfolio') || currentPath === '/home' || currentPath === '/about' || currentPath === '/work' || currentPath === '/contact' || currentPath === '/dev') {
      e.preventDefault()
      // Small delay to ensure we're on the portfolio page
      setTimeout(() => {
        if (scrollTo === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const element = document.getElementById(scrollTo)
          if (element) {
            const offset = 100 // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - offset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
          }
        }
      }, 100)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`nav ${isScrolled ? 'black' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="logo1">
        <img src={getAssetPath('media/Logo.jpeg')} alt="Logo" />
      </Link>
      
      {isMobile && (
        <button
          className="toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <i className="large material-icons">{isMobileMenuOpen ? 'close' : 'dehaze'}</i>
        </button>
      )}

      <ul className={isMobileMenuOpen ? 'active1' : ''}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={location.pathname.includes('portfolio') ? 'active' : ''}
              onClick={(e) => handleNavClick(e, link.scrollTo)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navigation
