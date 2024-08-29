import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TechCommrLogo from '../assets/Tech-Commr-logo.svg'
import { Button } from '../components/ui'
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';

const About = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:pt-64 pb-24 pt-52'
    >
      <div className='relative'>
        {/* Company Logo */}
        <div className='absolute left-1/2 -translate-x-1/2 md:-top-36 -top-20 md:p-12 p-8 bg-white md:rounded-3xl rounded-2xl'>
          <img src={TechCommrLogo} alt="Tech-Commr Logo" className='md:w-40 w-24 h-auto' />
        </div>
        {/* Container */}
        <div className='flex flex-col items-center gap-9 md:mx-6 mx-4 md:mt-12 mt-0 px-6 md:pt-36 pt-28 md:pb-16 pb-10 bg-neutral-700 rounded-2xl'>
          {/* Title and Description */}
          <div className='flex flex-col items-center gap-8'>
            <h1 className='text-center text-neutral-100'>
              Tech-Commr
            </h1>
            <div className='space-y-8'>
              <div className='flex flex-col items-center justify-center gap-4'>
                <div className='flex flex-col items-center justify-center gap-3'>
                  <p className='text-neutral-400 text-xs'>Founded by</p>
                  <img className="inline-block md:size-20 size-16 ring-2 border-4 border-neutral-700 ring-green-500 rounded-full" src="https://avatars.githubusercontent.com/u/143796803?v=4" alt="Lian Torres" />
                  <div>
                    <p className='text-center text-lg text-green-400'>Lian Torres</p>
                    <p className='text-center text-xs text-neutral-400'>Populary known as <span className='text-neutral-200'>ITGAUY</span></p>
                  </div>
                </div>
              </div>
              <p className='text-center text-neutral-300 w-full max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis porro aspernatur ducimus placeat ea fugit est nam laborum doloremque suscipit voluptatum autem reiciendis! Maxime exercitationem dicta cupiditate aliquam totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis porro aspernatur ducimus placeat</p>
              <p className='text-center text-neutral-300 w-full max-w-2xl'> Sea fugit est nam laborum doloremque suscipit voluptatum autem reiciendis! Maxime exercitationem dicta cupiditate aliquam totam.Sea fugit est nam laborum doloremque suscipit voluptatum autem reiciendis! Maxime exercitationem dicta cupiditate aliquam totam.</p>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default About
