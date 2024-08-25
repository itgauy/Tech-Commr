import React from 'react'
import { Home } from './pages'
import { Navbar } from './components/ui'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </motion.div>
    </BrowserRouter>

  )
}

export default App

