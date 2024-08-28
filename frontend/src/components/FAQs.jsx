import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from './ui';

const FAQs = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqsData = [
    {
      title: 'Wachu gana du wedu bip bap bo? wigi wigi wigi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit.',
    },
    {
      title: 'Wachu gana du wedu bip bap bo? wigi wigi wigi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit.',
    },
    {
      title: 'Wachu gana du wedu bip bap bo? wigi wigi wigi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit.',
    },
    {
      title: 'Wachu gana du wedu bip bap bo? wigi wigi wigi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit.',
    },
    {
      title: 'Wachu gana du wedu bip bap bo? wigi wigi wigi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit.',
    },
  ];

  return (
    <section className='flex flex-col md:gap-12 gap-10 justify-center items-center md:py-24 py-16 px-6'>
      {/* Title and Description */}
      <div className='flex flex-col items-center gap-3'>
        <h1 className='leading-none'>FAQs</h1>
        <p className='text-center w-full max-w-xl'>These are the most commonly asked questions about Tech-Commr service. <br className='md:block hidden' />
          Can't find what you're looking for? Kindly <span className='underline text-green-500'><Link to='/contact'>contact our team.</Link></span>
        </p>
      </div>
      {/* Accordion */}
      <div className='w-full max-w-4xl border border-red-500'>
        {faqsData.map((accordion, index) => (
          <Accordion
            key={index}
            title={accordion.title}
            isOpen={openIndex === index}
            styles={'pt-6 gap-12 text-start pr-7'}
            onClick={() => handleAccordionClick(index)}
          >
            <div className='md:text-sm text-xs text-neutral-600'>
              {accordion.content}
            </div>
          </Accordion>
        ))}
      </div>
    </section>
  )
}

export default FAQs
