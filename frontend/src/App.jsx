import React from 'react'
import { Home, About, Services, Contact, Feedback, TAC, Privacy, NoPage } from './pages'
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
            path="/feedback"
            element={<Feedback />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TAC />}
          />
          <Route
            path="/privacy-policy"
            element={<Privacy />}
          />
          <Route
            path="*"
            element={<NoPage />}
          />
        </Routes>
        <Footer />
      </motion.div>
    </BrowserRouter>

  )
}

export default App