import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'
import { getAssetPath } from '../utils/assets'
import './Portfolio.css'

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set CSS variables for background images
    document.documentElement.style.setProperty('--banner1-bg', `url("${getAssetPath('media/Banner1.jpg')}")`)
    document.documentElement.style.setProperty('--banner2-bg', `url("${getAssetPath('media/Banner2.jpg')}")`)
    document.documentElement.style.setProperty('--banner3-bg', `url("${getAssetPath('media/Banner3.jpg')}")`)
    document.documentElement.style.setProperty('--banner4-bg', `url("${getAssetPath('media/Banner4.jpg')}")`)
    
    // Loading screen
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="portfolio-container">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="portfolio-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="loader-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="loader-spinner"></div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="loader-text"
              >
                Loading...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Emilio F. Rivas Avalos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Software Engineer II
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-description"
          >
            Platform Architecture • Building scalable systems at Morgan Stanley
          </motion.div>
        </div>
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </motion.section>

      {/* Development Section */}
      <Section id="development" className="development-section">
        <div className="section-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Development
          </motion.h2>
          <motion.div
            className="dev-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="tech-grid">
              {['Java', 'Python', 'C#', 'TypeScript', 'React.js', 'Vue.js', 'ASP.NET', 'Express.js', 'PostgreSQL', 'MySQL', 'Perl', 'Git', 'Linux', 'CI/CD'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="tech-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Work/Experience Section */}
      <Section id="work" className="work-section">
        <div className="section-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>
          <motion.div
            className="work-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>Software Engineer II - Platform Architecture</h3>
                  <p className="timeline-date">Morgan Stanley, Atlanta, GA • February 2024 – Present</p>
                  <ul className="timeline-bullets">
                    <li>Standardized engineering practices across 7 departments and 35+ teams</li>
                    <li>Architected reusable Python and Java libraries reducing duplicated effort</li>
                    <li>Led modernization of E*TRADE's batch processing, impacting 5.2M+ users</li>
                    <li>Designed DUF (Data Upload Framework) for reliable mass data uploads</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>Summer Technology Analyst - Platform Architecture</h3>
                  <p className="timeline-date">Morgan Stanley, Atlanta, GA • June 2023 – August 2023</p>
                  <ul className="timeline-bullets">
                    <li>Achieved 90%+ code coverage with comprehensive Java unit test suites</li>
                    <li>Ensured reliability for critical AML batch workflows during migration</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>Summer Technology Analyst - Digital Engagement</h3>
                  <p className="timeline-date">Morgan Stanley, Atlanta, GA • June 2022 – August 2022</p>
                  <ul className="timeline-bullets">
                    <li>Contributed to architectural transition from legacy to next-generation platform</li>
                    <li>Designed React.js UI components improving trader efficiency</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>Software Systems Management Intern</h3>
                  <p className="timeline-date">Santander Bank, Queretaro, Mexico • January 2021 - April 2021</p>
                  <ul className="timeline-bullets">
                    <li>Validated system reliability across 10,000 ATMs</li>
                    <li>Tested cashier and biometric authorization systems across 1,000+ branches</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className="education-section">
        <div className="section-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
          <motion.div
            className="education-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="education-item">
              <h3>B.S. Computer Engineering</h3>
              <p className="education-institution">Instituto Tecnológico y de Estudios Superiores de Monterrey</p>
              <p className="education-location">Queretaro, Mexico • December 2023</p>
              <p className="education-gpa">GPA: 4.0</p>
              <p className="education-dissertation">Dissertation: Stock Price Prediction Using Machine Learning</p>
            </div>
            <div className="education-certifications">
              <h4>Certifications</h4>
              <p>Cisco Network Associate (CCNA 1 & 2)</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* LinkedIn Section */}
      <Section id="linkedin" className="linkedin-section">
        <div className="section-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Connect With Me
          </motion.h2>
          <motion.div
            className="linkedin-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Let's connect and discuss opportunities!</p>
            <div className="social-links">
              <motion.a
                href="https://www.linkedin.com/in/emilio-rivas-avalos"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-button"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/RivasEmilio"
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="contact-section">
        <div className="section-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
            <div className="contact-info">
              <motion.a 
                href="mailto:miles.fra.2000@gmail.com" 
                className="contact-link"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>📧</span> miles.fra.2000@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>&copy; {new Date().getFullYear()} Emilio Rivas. All rights reserved.</p>
      </footer>
    </div>
  )
}

// Reusable Section Component
const Section = ({ id, className, children }) => {
  return (
    <motion.section
      id={id}
      className={`portfolio-section ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  )
}

export default Portfolio
