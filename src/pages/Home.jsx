import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { getAssetPath } from '../utils/assets'
import './Home.css'

const Home = () => {
  const cards = [
    {
      icon: getAssetPath('media/computer.svg'),
      title: 'Development',
      description: 'Learn about all the software engineering tools I can work with.',
      link: '/dev',
      dataText: 'Dev',
    },
    {
      icon: getAssetPath('media/brief.svg'),
      title: 'Experience',
      description: 'Learn about my professional experience as a Software Engineer.',
      link: '/work',
      dataText: 'Work',
    },
    {
      icon: getAssetPath('media/dm.svg'),
      title: 'Contact',
      description: 'Learn about all the ways you can get in contact with me.',
      link: '/contact',
      dataText: 'Contact',
    },
    {
      icon: getAssetPath('media/portrait.svg'),
      title: 'About',
      description: 'Learn all important details about myself',
      link: '/about',
      dataText: 'About',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }

  return (
    <motion.div
      className="contCard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <motion.div
        className="container1 animate-this"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="card1"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="imgBx" data-text={card.dataText}>
              <img 
                src={card.icon} 
                alt={card.title}
                style={{ 
                  width: '120px', 
                  height: '120px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
            <div className="content1">
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link to={card.link}>Learn more</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Home
