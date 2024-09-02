import React, { useState } from 'react';
import { Button } from '../components/ui'
import { motion } from 'framer-motion';

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

const Admin = () => {
  const commentsData = [
    {
      initial: 'JC',
      name: 'Juan Dela Cruz',
      date: 'September 1, 2024 at 3:33 PM',
      rate: 4,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint unde harum accusantium veritatis ipsam recusandae eveniet soluta minus. Eum dicta sed dolores perspiciatis eligendi amet blanditiis enim eius nesciunt.',
    },
    {
      initial: 'JC',
      name: 'Juan Dela Cruz',
      date: 'September 1, 2024 at 3:33 PM',
      rate: 2,
      comment: 'Lorem ipsum domet blanditiis enim eius nesciunt.',
    }, {
      initial: 'JC',
      name: 'Juan Dela Cruz',
      date: 'September 1, 2024 at 3:33 PM',
      rate: 4,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisigendi amet blanditiis enim eius nesciunt.',
    },
    {
      initial: 'JC',
      name: 'Juan Dela Cruz',
      date: 'September 1, 2024 at 3:33 PM',
      rate: 1,
      comment: 'Lorem ipsum dolor sit amet consectetur adipiss sint unde harum accusantium veritatis ipsam recusandae eveniet soluta minus. Eum dicta sed dolores piciatis eligendi amet blanditiis enim eius nesciunt.',
    },
    {
      initial: 'JC',
      name: 'Juan Dela Cruz',
      date: 'September 1, 2024 at 3:33 PM',
      rate: 4,
      comment: 'Lorem ipsum dolor sit amet consect eligendi amet blanditiis enim eius nesciunt.',
    }
  ]


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
    <main className='relative h-screen'>
      <div className='absolute border bg-green-300 border-green-500 w-full'>
        Tech-Commr admin
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 h-full'>
        <div className='lg:h-full h-[70vh] bg-orange-300 border border-red-500 overflow-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat commodi nam culpa veniam mollitia facilis officia deleniti cupiditate architecto voluptatibus debitis ab est voluptate, nostrum sunt eius pariatur? Quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum vel totam est. Reiciendis esse voluptatum harum maiores culpa, nisi consequatur. Cupiditate impedit excepturi delectus quae fugiat harum natus iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis accusamus quasi necessitatibus repudiandae magni, sed quod debitis quae veniam ad non temporibus! Nostrum sit corrupti velit optio esse et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque veniam, odio molestias dolores nihil tenetur nobis totam fuga distinctio quas ex labore maxime dolor officiis illum et animi! Eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nulla ex odit magni quibusdam, dolore assumenda vel modi nostrum doloremque fugit ipsa facere. Nam cum nostrum optio hic odio quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil omnis in libero doloribus perferendis, iusto commodi ut facilis nobis doloremque atque earum sit ea, hic aliquid cum quibusdam reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat commodi nam culpa veniam mollitia facilis officia deleniti cupiditate architecto voluptatibus debitis ab est voluptate, nostrum sunt eius pariatur? Quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum vel totam est. Reiciendis esse voluptatum harum maiores culpa, nisi consequatur. Cupiditate impedit excepturi delectus quae fugiat harum natus iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis accusamus quasi necessitatibus repudiandae magni, sed quod debitis quae veniam ad non temporibus! Nostrum sit corrupti velit optio esse et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque veniam, odio molestias dolores nihil tenetur nobis totam fuga distinctio quas ex labore maxime dolor officiis illum et animi! Eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nulla ex odit magni quibusdam, dolore assumenda vel modi nostrum doloremque fugit ipsa facere. Nam cum nostrum optio hic odio quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil omnis in libero doloribus perferendis, iusto commodi ut facilis nobis doloremque atque earum sit ea, hic aliquid cum quibusdam reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat commodi nam culpa veniam mollitia facilis officia deleniti cupiditate architecto voluptatibus debitis ab est voluptate, nostrum sunt eius pariatur? Quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum vel totam est. Reiciendis esse voluptatum harum maiores culpa, nisi consequatur. Cupiditate impedit excepturi delectus quae fugiat harum natus iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis accusamus quasi necessitatibus repudiandae magni, sed quod debitis quae veniam ad non temporibus! Nostrum sit corrupti velit optio esse et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque veniam, odio molestias dolores nihil tenetur nobis totam fuga distinctio quas ex labore maxime dolor officiis illum et animi! Eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nulla ex odit magni quibusdam, dolore assumenda vel modi nostrum doloremque fugit ipsa facere. Nam cum nostrum optio hic odio quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil omnis in libero doloribus perferendis, iusto commodi ut facilis nobis doloremque atque earum sit ea, hic aliquid cum quibusdam reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat commodi nam culpa veniam mollitia facilis officia deleniti cupiditate architecto voluptatibus debitis ab est voluptate, nostrum sunt eius pariatur? Quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum vel totam est. Reiciendis esse voluptatum harum maiores culpa, nisi consequatur. Cupiditate impedit excepturi delectus quae fugiat harum natus iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis accusamus quasi necessitatibus repudiandae magni, sed quod debitis quae veniam ad non temporibus! Nostrum sit corrupti velit optio esse et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque veniam, odio molestias dolores nihil tenetur nobis totam fuga distinctio quas ex labore maxime dolor officiis illum et animi! Eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nulla ex odit magni quibusdam, dolore assumenda vel modi nostrum doloremque fugit ipsa facere. Nam cum nostrum optio hic odio quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil omnis in libero doloribus perferendis, iusto commodi ut facilis nobis doloremque atque earum sit ea, hic aliquid cum quibusdam reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat commodi nam culpa veniam mollitia facilis officia deleniti cupiditate architecto voluptatibus debitis ab est voluptate, nostrum sunt eius pariatur? Quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum vel totam est. Reiciendis esse voluptatum harum maiores culpa, nisi consequatur. Cupiditate impedit excepturi delectus quae fugiat harum natus iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis accusamus quasi necessitatibus repudiandae magni, sed quod debitis quae veniam ad non temporibus! Nostrum sit corrupti velit optio esse et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque veniam, odio molestias dolores nihil tenetur nobis totam fuga distinctio quas ex labore maxime dolor officiis illum et animi! Eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nulla ex odit magni quibusdam, dolore assumenda vel modi nostrum doloremque fugit ipsa facere. Nam cum nostrum optio hic odio quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil omnis in libero doloribus perferendis, iusto commodi ut facilis nobis doloremque atque earum sit ea, hic aliquid cum quibusdam reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat commodi nam culpa veniam mollitia facilis officia deleniti cupiditate architecto voluptatibus debitis ab est voluptate, nostrum sunt eius pariatur? Quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum vel totam est. Reiciendis esse voluptatum harum maiores culpa, nisi consequatur. Cupiditate impedit excepturi delectus quae fugiat harum natus iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis accusamus quasi necessitatibus repudiandae magni, sed quod debitis quae veniam ad non temporibus! Nostrum sit corrupti velit optio esse et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque veniam, odio molestias dolores nihil tenetur nobis totam fuga distinctio quas ex labore maxime dolor officiis illum et animi! Eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nulla ex odit magni quibusdam, dolore assumenda vel modi nostrum doloremque fugit ipsa facere. Nam cum nostrum optio hic odio quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil omnis in libero doloribus perferendis, iusto commodi ut facilis nobis doloremque atque earum sit ea, hic aliquid cum quibusdam reiciendis</div>
        <div className='p-4 pt-12 lg:h-full h-[70vh] bg-orange-300 border border-red-500 overflow-auto'>
          {/* Recent Comments */}
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
                      {feedback.initial}
                    </span>
                    <div className='flex flex-col items-start gap-[3px]'>
                      <p className='font-medium text-sm'>{feedback.name}</p>
                      <p className='text-xs text-neutral-400'>{feedback.date}</p>
                    </div>
                  </div>
                  <div className='pl-11 md:pl-12 space-y-3'>
                    <StarRatingDisplay rating={feedback.rate} />
                    <p>{feedback.comment}</p>
                  </div>
                  <Button type={'submit'} text={'Wag'} styles='py-1 px-[9px] text-xs flex items-center justify-center bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Admin
