import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui'
import { motion } from 'framer-motion';

// Inquiries
const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://tech-commr-backend.vercel.app/api/inquiries')
      .then(response => {
        console.log('Response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setInquiries(data);
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
  const currentComments = inquiries.slice(indexOfFirstComment, indexOfLastComment);

  const totalPages = Math.ceil(inquiries.length / commentsPerPage);

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
    <>
      <div className='space-y-4'>
        <div className='flex justify-between items-end'>
          <div className='space-y-1'>
            <p className='text-base font-semibold'>Inquiries</p>
            <p className='text-xs'>Peyds {currentPage} of {totalPages}</p>
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
            {currentComments.map((inquiry, index) => (
              <div className='border-b bg-blue-200 py-7 space-y-4' key={index}>
                <div className='flex flex-col items-start gap-6'>
                  <div className='space-y-1'>
                    <div className='flex items-center gap-3'>
                      <p className='font-medium text-sm'>{inquiry.fname} {inquiry.lname}</p>
                      <p className='font-medium text-xs text-neutral-500'>({inquiry.email})</p>
                    </div>
                    <p className='text-xs text-neutral-400'>{new Date(inquiry.createdAt).toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })}</p>
                  </div>
                  <div className='space-y-2'>
                    <p>Project Category: <span className='bg-green-200/20 text-green-500 border-green-500/40 border inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs mx-2'>{inquiry.category}</span></p>
                    <p>{inquiry.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  )
}
// End of Inquiries


// Feedback
const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://tech-commr-backend.vercel.app/api/feedbacks')
      .then(response => {
        console.log('Response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setFeedbacks(data);
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
  const currentComments = feedbacks.slice(indexOfFirstComment, indexOfLastComment);

  const totalPages = Math.ceil(feedbacks.length / commentsPerPage);

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

  return (
    <>{/* Recent Comments */}
      <div className='space-y-4'>
        <div className='flex justify-between items-end'>
          <div className='space-y-1'>
            <p className='text-base font-semibold'>Oberol Koments</p>
            <p className='text-xs'>Peyds {currentPage} of {totalPages}</p>
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
              <div className='border-b bg-red-200 py-7 space-y-4' key={index}>
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
                {feedback.isAccepted ? (
                  <p className='text-green-500'>Displayed</p>
                ) : (
                  <Button
                    type={'submit'}
                    text={'Display'}
                    styles='py-1 px-[9px] text-xs flex items-center justify-center bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
                    onClick={async () => {
                      try {
                        const response = await fetch(`https://tech-commr-backend.vercel.app/api/feedbacks/${feedback._id}`, {
                          method: 'PATCH',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ isAccepted: true }),
                        });
                        const data = await response.json();
                        console.log(data);
                        // Update the feedback state
                        const updatedFeedbacks = [...feedbacks];
                        const index = updatedFeedbacks.findIndex((f) => f._id === feedback._id);
                        updatedFeedbacks[index].isAccepted = true;
                        setFeedbacks(updatedFeedbacks);
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  )
}
// End of Feedback


const Admin = () => {

  return (
    <main className='relative h-screen'>
      <div className='absolute border bg-green-300 border-green-500 w-full'>
        Tech-Commr admin
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 h-full'>
        <div className='p-4 pt-12 lg:h-full h-[70vh] bg-orange-300 border border-red-500 overflow-auto'>
          <Inquiries />
        </div>
        <div className='p-4 pt-12 lg:h-full h-[70vh] bg-orange-300 border border-red-500 overflow-auto'>
          <Feedbacks />
        </div>
      </div>
    </main>
  )
}

export default Admin
