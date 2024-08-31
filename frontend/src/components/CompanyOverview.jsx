import React from 'react'
import { Link } from 'react-router-dom';
import TechCommrLogo from '../assets/Tech-Commr-logo.svg'
import { Button } from './ui'

const CompanyOverview = () => {

  const CompanyOverviewContent = [
    {
      icon: 'M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z',
      title: 'Fixed Price Projects',
      desc: 'Our fixed-price model ensures you know the cost upfront, with no hidden fees. This approach allows for transparent budgeting and peace of mind from the start.'
    },
    {
      icon: ['M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z', 'M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z'],
      title: 'On-Time Delivery',
      desc: 'We guarantee on-time delivery for all projects. If we miss a deadline, you get your money back. Your time is valuable, and we respect that.'
    },
    {
      icon: 'M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z',
      title: 'Quick Turnaround',
      desc: 'Our experienced team delivers high-quality work quickly, without sacrificing quality. You can rely on us to complete your project on time and to your satisfaction.'
    }
  ];

  return (
    <section className='relative'>
      {/* Company Logo */}
      <div className='absolute left-1/2 -translate-x-1/2 md:-top-36 -top-20 md:p-12 p-8 bg-white md:rounded-3xl rounded-2xl'>
        <img src={TechCommrLogo} alt="Tech-Commr Logo" className='md:w-40 w-24 h-auto' />
      </div>
      {/* Container */}
      <div className='flex flex-col items-center gap-9 md:mx-6 mx-4 md:mt-12 mt-0 px-6 md:pt-36 pt-28 md:pb-16 pb-10 bg-neutral-700 rounded-2xl'>
        {/* Title and Description */}
        <div className='flex flex-col items-center gap-3'>
          <h1 className='text-center text-neutral-100'>
            Tech-Commr
          </h1>
          <p className='text-center text-neutral-300 w-full max-w-xl border border-red-500'>At LinkrDev, we help you excel academically without the stress. Our expert solutions in university projects, programming, and design are tailored to ensure you achieve top grades effortlessly. Focus on your studies while we handle the rest.</p>
        </div>
        {/* CTA */}
        <Link to='/about'>
          <Button text={'Get to know us'} styles='text-nowrap bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
            trailingIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
            }
          />
        </Link>
      </div>
      <div className='flex flex-wrap md:gap-14 gap-10 justify-center md:px-20 md:py-20 pb-12 py-10 px-12'>
        {CompanyOverviewContent.map((content, index) => (
          <div className='w-full max-w-xs md:space-y-7 space-y-4' key={index}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 md:size-8 size-7">
              {Array.isArray(content.icon) ? content.icon.map((p, idx) => (
                <path d={p} key={idx} />
              )) : <path d={content.icon} />}
            </svg>
            <h3 className='leading-none'>
              {content.title}
            </h3>
            <p>{content.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CompanyOverview
