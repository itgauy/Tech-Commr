import React from 'react'
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
    <div className='relative'>
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
          <p className='text-center text-neutral-300 w-full max-w-xl'>At LinkrDev, we help you excel academically without the stress. Our expert solutions in university projects, programming, and design are tailored to ensure you achieve top grades effortlessly. Focus on your studies while we handle the rest.</p>
        </div>
        {/* CTA */}
        <Button text={'Get started'} styles='text-nowrap bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
          trailingIcon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          }
        />
      </div>
      <div className='flex flex-wrap md:gap-12 gap-8 justify-center md:px-24 md:py-16 py-10 px-12'>
        {CompanyOverviewContent.map((content, index) => (
          <div className='w-full max-w-sm' key={index}>
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
    </div>
  )
}

export default CompanyOverview
