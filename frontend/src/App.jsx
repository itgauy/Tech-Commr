import React from 'react'
import { Home, About, Services, Contact, TAC, Privacy } from './pages'
import { Navbar, Footer } from './components/ui'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion';

const App = () => {
  return (
    <BrowserRouter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/terms-and-condition"
            element={<TAC />}
          />
          <Route
            path="/privacy-policy"
            element={<Privacy />}
          />
        </Routes>
        <Footer />
      </motion.div>
    </BrowserRouter>

  )
}

export default App