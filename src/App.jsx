import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Landing from './pages/Landing'
import Portfolio from './pages/Portfolio'
import './App.css'

function AppRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/home" element={<Portfolio />} />
        <Route path="/about" element={<Portfolio />} />
        <Route path="/work" element={<Portfolio />} />
        <Route path="/contact" element={<Portfolio />} />
        <Route path="/dev" element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  // Handle GitHub Pages routing
  const basename = import.meta.env.BASE_URL || '/'
  
  return (
    <Router basename={basename}>
      <AppRoutes />
    </Router>
  )
}

export default App
