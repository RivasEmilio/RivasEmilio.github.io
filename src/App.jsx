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
  return (
    <Router basename="/RivasEmilio.github.io">
      <AppRoutes />
    </Router>
  )
}

export default App
