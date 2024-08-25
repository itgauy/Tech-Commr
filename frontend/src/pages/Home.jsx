import React from 'react'
import { Hero, CompanyOverview, ServicesOverview, FAQs } from '../components'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <CompanyOverview />
      <ServicesOverview />
      <FAQs />
    </motion.main>
  )
}

export default Home
