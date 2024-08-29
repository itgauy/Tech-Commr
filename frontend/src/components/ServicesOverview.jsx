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
      svg: 'm6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z',
      title: 'Programming',
      content:
        <div className='grid grid-cols-2 md:gap-24 gap-2 md:px-12'>
          <ul className='space-y-1'>
            {['PHP', 'Java', 'JavaScript', 'Python'].map((programming, index) => (
              <li className='flex gap-3 items-start' key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2px] size-4 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                {programming}
              </li>
            ))}
          </ul>
          <ul className='space-y-1'>
            {['C#', 'ASP.Net', 'VB.Net'].map((programming, index) => (
              <li className='flex gap-3 items-start' key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2px] size-4 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                {programming}
              </li>
            ))}
          </ul>
        </div>
    },
    {
      svg: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5',
      title: 'Web Development',
      content:
        <div className='grid grid-cols-2 md:gap-24 gap-2 md:px-12'>
          <ul className='space-y-1'>
            {['HTML', 'CSS', 'JavaScript', 'ReactJS'].map((programming, index) => (
              <li className='flex gap-3 items-start' key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2px] size-4 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                {programming}
              </li>
            ))}
          </ul>
          <ul className='space-y-1'>
            {['NextJS', 'VueJS', 'Tailwind CSS', 'Bootstrap'].map((programming, index) => (
              <li className='flex gap-3 items-start' key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2px] size-4 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                {programming}
              </li>
            ))}
          </ul>
        </div>
      ,
    },
    {
      svg: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
      title: 'Database Management',
      content:
        <div className='grid grid-cols-2 md:gap-24 gap-2 md:px-12'>
          <ul className='space-y-1'>
            {['MySQL', 'MongoDB'].map((programming, index) => (
              <li className='flex gap-3 items-start' key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2px] size-4 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                {programming}
              </li>
            ))}
          </ul>
        </div>
    },
    {
      svg: 'M15.514 3.293a1 1 0 0 0-1.415 0L12.151 5.24a.93.93 0 0 1 .056.052l6.5 6.5a.97.97 0 0 1 .052.056L20.707 9.9a1 1 0 0 0 0-1.415l-5.193-5.193ZM7.004 8.27l3.892-1.46 6.293 6.293-1.46 3.893a1 1 0 0 1-.603.591l-9.494 3.355a1 1 0 0 1-.98-.18l6.452-6.453a1 1 0 0 0-1.414-1.414l-6.453 6.452a1 1 0 0 1-.18-.98l3.355-9.494a1 1 0 0 1 .591-.603Z',
      title: 'Graphic Design',
      content:
        <div className='grid grid-cols-2 md:gap-24 gap-2 md:px-12'>
          <ul className='space-y-1'>
            {['UI/UX Design', 'Brand Identity Design', 'Brochure and Flyer Designs', 'Social Media Graphics'].map((programming, index) => (
              <li className='flex gap-3 items-start' key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2px] size-4 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                {programming}
              </li>
            ))}
          </ul>
          <ul className='space-y-1'>
            {['Posters and Banners', 'Infographic Design'].map((programming, index) => (
              <li className='flex gap-3 items-start' key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2px] size-4 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                {programming}
              </li>
            ))}
          </ul>
        </div>
    },
    {
      svg: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z',
      title: 'Paper Works',
      content:
        <div className='grid grid-cols-2 md:gap-24 gap-2 md:px-12'>
          <ul className='space-y-1'>
            {['Thesis/Capstone Paper', 'School Assignments', 'School Reveiwers', 'Essay Writing'].map((programming, index) => (
              <li className='flex gap-3 items-start' key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2px] size-4 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                {programming}
              </li>
            ))}
          </ul>
          <ul className='space-y-1'>
            {['PowerPoint Presentations', 'Website Copywriting'].map((programming, index) => (
              <li className='flex gap-3 items-start' key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-[2px] size-4 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                {programming}
              </li>
            ))}
          </ul>
        </div>
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
        <div className='space-y-7'>
          <div className='space-y-3.5 pb-6'>
            <h1 className='leading-none'>What we offer?</h1>
            <p>We offer tailored services for students and small businesses, providing the expertise and resources needed to achieve your goals. Whether you need support with projects or help enhancing your operations, we're here to assist with precision and ease.</p>
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
          <div className='space-y-3'>
            <div className='flex items-start gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 text-green-500 size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <p className='text-xs'>Here's an overview of our offerings:</p>
            </div>
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
      </div>
    </section>
  )
}

export default ServicesOverview
