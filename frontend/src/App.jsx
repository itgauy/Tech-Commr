import React from 'react';
import { Home, About, Services, Contact, Feedback, TAC, Privacy, NoPage, Admin } from './pages'; // Import your Admin page
import { Navbar, Footer } from './components/ui';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/terms-and-conditions" element={<TAC />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </motion.div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
