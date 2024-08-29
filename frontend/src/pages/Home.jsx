import React from 'react'
import { Hero, CompanyOverview, ServicesOverview, FAQs, GetInTouch } from '../components'
import { motion } from 'framer-motion';
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';

const Home = () => {
  useLenisScroll();
  useScrollToTop();
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
      <GetInTouch />
    </motion.main>
  )
}

export default Home
