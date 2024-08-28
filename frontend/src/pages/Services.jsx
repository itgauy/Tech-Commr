import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll';
import { motion } from 'framer-motion';

const Services = () => {
  useLenisScroll();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:pt-44 pb-24 pt-32 md:px-24 px-8 space-y-12'
    >
      <div className='space-y-3'>
        <h1>Our Services</h1>
        <p className='w-full max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sit earum ipsa at laudantium aliquam quas eos? Doloremque facilis animi reprehenderit possimus, dolor enim nulla velit culpa consequuntur fugiat magnam.</p>
      </div>
      <div className='flex'>
        <img src="https://placehold.co/700x450" alt="" className='rounded-2xl' />
        <div className='border pl-16 space-y-12'>
          <div className='space-y-3'>
            <h2 className='leading-none'>Programming</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sit earum ipsa at laudantium aliquam quas eos? Doloremque facilis animi reprehenderit possimus, dolor enim nulla velit culpa consequuntur fugiat magnam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis velit placeat iure quia hic quidem nulla, libero ullam amet laborum mollitia cumque iusto, pariatur dolores facere, odit saepe veniam sit.</p>
          </div>
          <div className='flex items-start gap-16 text-neutral-600'>
            <ul className='space-y-1'>
              {['Thesis/Capstone Paper', 'School Assignments', 'School Reveiwers', 'Essay Writing'].map((programming, index) => (
                <li className='flex gap-3 items-start' key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2.4px] size-4 text-green-500">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                  {programming}
                </li>
              ))}
            </ul>
            <ul className='space-y-1'>
              {['PowerPoint Presentations', 'Website Copywriting'].map((programming, index) => (
                <li className='flex gap-3 items-start' key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2.4px] size-4 text-green-500">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                  {programming}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Services
