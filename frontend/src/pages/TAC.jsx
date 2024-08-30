import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TechCommrLogo from '../assets/Tech-Commr-logo.svg'
import { Button } from '../components/ui'
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';

const TAC = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:pt-64 pb-24 pt-52 px-8 md:px-48'
    >
      <h1>Terms & Condition</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veritatis libero asperiores neque nesciunt ullam, veniam fugit optio, aspernatur adipisci cumque et ipsum facere voluptatum suscipit? Nulla illum sed cum?</p>
    </motion.section>
  )
}

export default TAC
