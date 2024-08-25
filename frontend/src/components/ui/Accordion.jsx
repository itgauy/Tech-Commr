import React from 'react';
import { motion } from 'framer-motion';

const Accordion = ({ title, svg, children, isOpen, onClick }) => {
  return (
    <div className={`w-full rounded-lg overflow-hidden`}>
      <button
        className={`w-full flex justify-between items-center px-4 py-3 text-gray-800 font-medium focus:outline-none ${isOpen ? 'bg-white' : ''}`}
        onClick={onClick}
      >
        <div className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-4 ${isOpen ? 'text-green-500' : ''}`}>
            <path fillRule="evenodd" d={svg} clipRule="evenodd" />
          </svg>
          <span className={`md:text-base text-sm ${isOpen ? 'text-green-600' : 'text-neutral-700'}`}>{title}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 transition-transform transform ${isOpen ? 'rotate-180 text-green-500' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-8 pt-4 pb-8 bg-white">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;
