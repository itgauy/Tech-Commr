import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GetInTouch } from '../components'
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';

const TAC = () => {
  useLenisScroll();
  useScrollToTop();

  const tacData = [
    {
      title: 'I. Information',
      content:
        <>
          <p>If you wish to have any of the available services, you may be required to provide some important information such as <span className='font-semibold'>clear</span> instructions and other details including the following:</p>
          <ul className='space-y-2.5'>
            {['Deadline of the task', 'Supporting Instructions', 'Additional Information'].map((item, index) => (
              <li className='flex items-center text-base text-neutral-700' key={index}>
                <span className="flex size-2 me-4 bg-green-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className='italic'>Note that failing to provide a <span className='font-semibold'>clear</span> instruction and other details will not be the responsibility of the server especially if you didn’t receive an output that you expected.</p>
        </>
    },
    {
      title: 'II. Transaction',
      content:
        <div className='md:space-y-9 space-y-7'>
          {[
            {
              title: 'II - A. Process',
              content:
                <div className='space-y-6'>
                  <p>If you wish to have any of the available services, please keep in mind that the process is always <span className='font-semibold'>“payment first.”</span> That is, after the server sends the proof of the output, you must pay before receiving the actual output of the task.</p>
                  <p>You may want to ask for a <span className='font-semibold'>“service first”</span> process if you only meet all the following requirements:</p>
                  <ul className='space-y-2.5'>
                    {['You are using a real account.', 'You can send two (2) valid IDs.', 'You can send a picture of yourself.'].map((item, index) => (
                      <li className='flex items-center text-base text-neutral-700' key={index}>
                        <span className="flex size-2 me-4 bg-green-500 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
            },
            {
              title: 'II - B. Method',
              content:
                <div className='space-y-6'>
                  <p>If you wish to have any of the available services, please keep in mind that the payment method is only through <span className='font-semibold'>GCash</span>.</p>
                  <p className='italic'>The server might accept a mode of payment through <span className='font-semibold'>other methods</span> depending on the situation.</p>
                </div>
            },
            {
              title: 'II - C. Pre-Service',
              content:
                <div className='space-y-6'>
                  <p>If you wish to have any of the available services, please keep in mind that a <span className='font-semibold'>50% down payment</span> is required before the server starts doing the service. This is to avoid cancellations and to give proof that you are sure to have the service and cannot get a refund.</p>
                  <p className='italic'>The server might disregard this condition depending on the situation.</p>
                </div>
            },
            {
              title: 'II - D. Pricing',
              content:
                <div className='space-y-6'>
                  <p>If you wish to have any of the available services, please keep in mind that the price depends on the task.</p>
                  <p>The server has its own rates and may vary depending on the lightness or heaviness of the task given.</p>
                </div>
            }
          ].map((items, index) => (
            <div className='space-y-3' key={index}>
              <h4>{items.title}</h4>
              {items.content}
            </div>
          ))}
        </div>
    },
    {
      title: 'III. Revisions',
      content:
        <>
          <p>If you wish to have any of the available services, please keep in mind that revisions depend on your agreement with the server.</p>
          <p>The server may agree with the following if asked:</p>
          <ul className='space-y-2.5'>
            {['1-2 Free Revisions', 'Paid Revisions', 'No Revisions'].map((item, index) => (
              <li className='flex items-center text-base text-neutral-700' key={index}>
                <span className="flex size-2 me-4 bg-green-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </>
    },
    {
      title: 'IV. Rush Deadlines',
      content:
        <>
          <p>If you wish to have any of the available services, please keep in mind that rush fee depends on the given date and time of the deadline.</p>
          <p>You may refer to the following:</p>
          <ul className='space-y-2.5'>
            {['For any tasks with a deadline within the day, the rush fee ranges from PHP 50-100 depending on the task.', 'For any tasks with a deadline within 1-2 days, the rush fee ranges from PHP 10-50 depending on the task.', 'For any tasks with a deadline within 3 days or more, there will be no rush fee to be charged.'].map((item, index) => (
              <li className='flex items-start text-sm text-neutral-700' key={index}>
                <span className="flex-shrink-0 flex size-2 me-4 bg-green-500 rounded-full"></span>
                <div className='-mt-2'>
                  {item}
                </div>
              </li>
            ))}
          </ul>
          <p className='italic'>Note that this is just the estimated rush fee and may still depends on the server and the task given.</p>
        </>
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:pt-52 pt-36 space-y-20'
    >
      <div className='px-8 md:px-[23rem] space-y-20'>
        {/* Header */}
        <div className='space-y-12'>
          <div className='space-y-6'>
            <h1>Terms & Conditions</h1>
            <p className='text-xs'>Last updated: August 17, 2023 | 2:33 AM</p>
          </div>
          <div className='space-y-6 w-full max-w-2xl'>
            <p>Please read these Terms and Conditions Agreement carefully before using the <a href="#" className='text-green-500 underline'>https://tech-commr.rf.gd</a> website operated by Lian Torres.</p>
            <p>Acceptance and compliance with these terms is required for access to and use of the service. All visitors, users, and others who access or use the service are subject to these conditions.</p>
            <p className='text-neutral-700 font-semibold'>By accessing or using the service, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.</p>
          </div>
        </div>
        {/* Terms and Conditions items */}
        {tacData.map((item, index) => (
          <div className='md:space-y-6 space-y-4' key={index}>
            <h3>{item.title}</h3>
            {item.content}
          </div>
        ))}
        {/* Important Notice */}
        <div>
          <div className='space-y-2 pb-3'>
            <h3>Important Notice!</h3>
            <p>If you violate any of the terms of the agreement while using the service, the server is free to decline or discontinue the service. If the server, on the other hand, violates any of the terms and conditions stated above, you have the right to ask for a refund if there is money involved.</p>
          </div>
          <Link to='/' className='text-xs text-green-500 underline'>Go to home page</Link>
        </div>
      </div>
      {/* Get in Touch */}
      <GetInTouch />
    </motion.section>
  )
}

export default TAC
