import React, { useState } from 'react';
import { Button, Accordion } from './ui'

const ServicesOverview = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const accordions = [
    {
      svg: 'M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z',
      title: 'Web Development',
      content:
        'Basta bullet laman nitooo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit dignissimos deleniti voluptas assumenda porro recusandae quo sunt? Reprehenderit.',
    },
    {
      svg: 'M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z',
      title: 'Wombegang',
      content:
        'Basta bullet laman nitooo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit dignissimos deleniti voluptas assumenda porro recusandae quo sunt? Reprehenderit.',
    },
    {
      svg: 'M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z',
      title: 'Wombegang',
      content:
        'Basta bullet laman nitooo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit dignissimos deleniti voluptas assumenda porro recusandae quo sunt? Reprehenderit.',
    },
    {
      svg: 'M15.514 3.293a1 1 0 0 0-1.415 0L12.151 5.24a.93.93 0 0 1 .056.052l6.5 6.5a.97.97 0 0 1 .052.056L20.707 9.9a1 1 0 0 0 0-1.415l-5.193-5.193ZM7.004 8.27l3.892-1.46 6.293 6.293-1.46 3.893a1 1 0 0 1-.603.591l-9.494 3.355a1 1 0 0 1-.98-.18l6.452-6.453a1 1 0 0 0-1.414-1.414l-6.453 6.452a1 1 0 0 1-.18-.98l3.355-9.494a1 1 0 0 1 .591-.603Z',
      title: 'UI/UX Design',
      content:
        'Basta bullet laman nitooo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit dignissimos deleniti voluptas assumenda porro recusandae quo sunt? Reprehenderit.',
    },
    {
      svg: 'M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z',
      title: 'Wombgang',
      content:
        'Basta bullet laman nitooo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit dignissimos deleniti voluptas assumenda porro recusandae quo sunt? Reprehenderit.',
    },
  ];

  return (
    <section className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-12 gap-10 md:ml-6 ml-4 lg:mr-0 mr-4 md:pt-10'>
      {/* Illustration/Mockup */}
      <div className='lg:h-full h-[20rem] border bg-neutral-700 rounded-2xl self-start flex justify-center items-center text-white'>
        Basta illustration tooo
      </div>
      {/* Content */}
      <div className='lg:px-16 px-4'>
        <div className='space-y-6'>
          <div className='space-y-3.5'>
            <h1 className='leading-none'>What we offer?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit dignissimos deleniti voluptas assumenda porro recusandae quo sunt? Reprehenderit.</p>
          </div>
          {/* CTA */}
          <Button text={'View offer details'} styles='text-nowrap bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
            trailingIcon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            }
          />
          {/* Accordion */}
          <div>
            {accordions.map((accordion, index) => (
              <Accordion
                key={index}
                svg={accordion.svg}
                title={accordion.title}
                isOpen={openIndex === index}
                onClick={() => handleAccordionClick(index)}
              >
                <div className='md:text-sm text-xs text-neutral-600'>
                  {accordion.content}
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
