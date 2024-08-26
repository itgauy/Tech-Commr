import React from 'react'
import { Home, Contact } from './pages'
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
            path="/contact"
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </motion.div>
    </BrowserRouter>

  )
}

export default App

