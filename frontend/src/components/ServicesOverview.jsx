import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Accordion } from './ui'
import TechCommrMockup from '../assets/Tech-Commr-Mockup.png'

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
      <div className='relative lg:h-full h-[20rem] border rounded-2xl self-start flex justify-center items-center text-white'>
        <img src={TechCommrMockup} alt="Tech-Commr Mockup" className='absolute object-cover w-full h-full rounded-2xl' />
      </div>
      {/* Content */}
      <div className='lg:px-16 px-4'>
        <div className='space-y-6'>
          <div className='space-y-3.5 pb-6'>
            <h1 className='leading-none'>What we offer?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit dignissimos deleniti voluptas assumenda porro recusandae quo sunt? Reprehenderit.</p>
          </div>
          {/* CTA */}
          <Link to='/services'>
            <Button text={'Explore our services'} styles='text-nowrap bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
              trailingIcon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                </svg>
              }
            />
          </Link>
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
