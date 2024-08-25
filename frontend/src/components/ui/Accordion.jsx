import React from 'react';
import { motion } from 'framer-motion';

const Accordion = ({ title, svg, children, isOpen, onClick, styles }) => {
  return (
    <div className={`w-full rounded-2xl overflow-hidden`}>
      <button
        className={`${styles} w-full flex justify-between items-center px-4 py-3 text-gray-800 font-medium focus:outline-none ${isOpen ? 'bg-white' : ''}`}
        onClick={onClick}
      >
        <div className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-4 ${isOpen ? 'text-green-500' : ''}`}>
            <path fillRule="evenodd" d={svg} clipRule="evenodd" />
          </svg>
          <span className={`md:text-base text-sm ${isOpen ? 'text-green-600' : 'text-neutral-700'}`}>{title}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`shrink-0 size-4 transition-opacity ${isOpen ? 'text-green-500' : 'text-neutral-500'}`}>
          {isOpen ? (
            <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          )}
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
