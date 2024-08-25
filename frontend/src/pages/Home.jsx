import React from 'react'
import { Hero, CompanyOverview } from '../components'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <CompanyOverview />
    </motion.div>
  )
}

export default Home
