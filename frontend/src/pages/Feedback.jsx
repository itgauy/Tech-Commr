import React from 'react';
import { motion } from 'framer-motion';
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';
import { GetInTouch, FeedbackForm } from '../components';

const Feedback = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:pt-44 pt-32 md:space-y-28 space-y-24'
    >
      <div className='md:px-24 px-8 space-y-16'>
        {/* Header */}
        <div className="space-y-3">
          <h1>Pidbak</h1>
          <p className="w-full max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis praesentium ipsum omnis. Alias natus vel error corrupti non laudantium harum odio nam, optio hic nesciunt impedit perspiciatis explicabo aspernatur?
          </p>
        </div>
        {/* Container */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
          {/* Feedback Form Container */}
          <div>
            <div className='flex items-start gap-2 pb-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 text-green-500 size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <p className='text-xs'>Kindly fill out this form, and we'll get in touch with you shortly!</p>
            </div>
            <FeedbackForm />
          </div>
          {/* Recent Feedbacks Container */}
          <div className='border'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste at voluptate explicabo maxime ipsum laborum eum temporibus. Iste quibusdam facere non eius dolorem itaque voluptates blanditiis earum repellat velit.</div>
        </div>
      </div>
      {/* Get in Touch */}
      <GetInTouch />
    </motion.section>
  )
}

export default Feedback