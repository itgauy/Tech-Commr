import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GetInTouch } from '../components'
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';

const NoPage = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:pt-52 pt-36 md:space-y-28 space-y-12'
    >
      <div className='px-8 md:px-[23rem] space-y-2'>
        <h4>404 | Page not found</h4>
        <div className='space-y-5'>
          <h1>Oops! We can't <br />find that page.</h1>
          <p className='w-full md:max-w-md pb-3'>
            It looks like the page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link to='/' className='underline text-green-500 md:text-sm text-xs'>Return to homepage</Link>
        </div>
      </div>
      {/* Get in Touch */}
      <GetInTouch />
    </motion.section>
  )
}

export default NoPage
