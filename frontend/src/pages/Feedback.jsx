import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';
import { GetInTouch, FeedbackForm } from '../components';

const StarRatingDisplay = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-4 ${index < rating ? 'text-yellow-400' : 'text-neutral-200'}`}>
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
};

const Feedback = () => {
  useLenisScroll();
  useScrollToTop();

  const [commentsData, setCommentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/accepted`)
      .then(response => {
        console.log('Response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setCommentsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  // Pagination logic
  const commentsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = commentsData.slice(indexOfFirstComment, indexOfLastComment);

  const totalPages = Math.ceil(commentsData.length / commentsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:pt-44 pt-32 md:space-y-28 space-y-24'
    >
      <div className='md:px-24 px-8 space-y-16'>
        {/* Container */}
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-12'>
          {/* Feedback Form Container */}
          <div className='space-y-10'>
            <div className="space-y-3">
              <h2>We value <br /> your <span className='text-green-500'>feedback</span>!
              </h2>
              <p className="w-full max-w-xl">
                Your insights help us improve and tailor our web services to better meet your needs. Please take a moment to share your thoughts with us.
              </p>
            </div>
            <div>
              <div className='flex items-start gap-2 pb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 text-green-500 size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <p className='text-xs'>Complete the form below, and we'll follow up with you soon to discuss your feedback.</p>
              </div>
              <FeedbackForm />
            </div>
          </div>
          {/* Recent Comments */}
          <div className='space-y-4'>
            <div className='flex justify-between items-end'>
              <div className='space-y-1'>
                <p className='text-base font-semibold'>Recent Feedbacks</p>
                <p className='text-xs'>Page {currentPage} of {totalPages}</p>
              </div>
              {/* Pagination Controls */}
              <div className='flex space-x-2'>
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className='px-3.5 py-1.5 rounded-lg text-xs md:text-sm bg-green-300/10 hover:bg-green-300/20 text-green-500 disabled:opacity-50 disabled:text-neutral-400 disabled:bg-neutral-200/50 active:scale-95 disabled:cursor-not-allowed transition duration-300 ease-in-out'
                >
                  Previous
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className='px-3.5 py-1.5 rounded-lg text-xs md:text-sm bg-green-300/10 hover:bg-green-300/20 text-green-500 disabled:opacity-50 disabled:text-neutral-400 disabled:bg-neutral-200/50 active:scale-95 disabled:cursor-not-allowed transition duration-300 ease-in-out'
                >
                  Next
                </button>
              </div>
            </div>
            {/* Container */}
            {loading ? (
              <p>Loading...</p>
            ) : (
              <motion.div
                key={currentPage} // Ensure each page has a unique key for proper animation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentComments.map((feedback, index) => (
                  <div className='border-b py-7 space-y-4' key={index}>
                    <div className='flex items-center gap-4'>
                      <span className='inline-flex md:size-9 size-8 -ml-1 border-2 border-neutral-50 ring-2 ring-neutral-300 items-center justify-center rounded-full bg-green-500 md:text-md text-[11px] leading-none text-white'>
                        {feedback.fname.charAt(0) + feedback.lname.charAt(0)}
                      </span>
                      <div className='flex flex-col items-start gap-[3px]'>
                        <p className='font-medium text-sm'>{feedback.fname} {feedback.lname}</p>
                        <p className='text-xs text-neutral-400'>{new Date(feedback.createdAt).toLocaleString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true,
                        })}</p>
                      </div>
                    </div>
                    <div className='pl-11 md:pl-12 space-y-3'>
                      <StarRatingDisplay rating={feedback.rating} />
                      <p>Category: {feedback.category}</p>
                      <p>{feedback.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Get in Touch */}
      <GetInTouch />
    </motion.section>
  )
}

export default Feedback
