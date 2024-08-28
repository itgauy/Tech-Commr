import React from 'react'
import { Link } from 'react-router-dom';
import TechCommrLogo from '../assets/Tech-Commr-logo.svg'
import { Button } from './ui'

const CompanyOverview = () => {

  const CompanyOverviewContent = [
    {
      icon: 'M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z',
      title: 'Wow ganern',
      desc: 'At LinkrDev, we help you excel academically without the stress. Our expert solutions in university projects, programming, and design are tailored to ensure y'
    },
    {
      icon: 'M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z',
      title: 'Wow ganern',
      desc: 'At LinkrDev, we help you excel academically without the stress. Our expert solutions in university projects, programming, and design are tailored to ensure y'
    },
    {
      icon: 'M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z',
      title: 'Wow ganern',
      desc: 'At LinkrDev, we help you excel academically without the stress. Our expert solutions in university projects, programming, and design are tailored to ensure y'
    }
  ]
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
          <div className='w-full max-w-xs border border-red-500' key={index}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 md:size-8 size-7">
              <path fillRule="evenodd" d={content.icon} clipRule="evenodd" />
            </svg>
            <h3>
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
