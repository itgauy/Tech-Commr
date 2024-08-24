import React from 'react'
import TechCommrLogo from '../assets/Tech-Commr-logo.svg'
import { Button } from './ui'

const CompanyOverview = () => {
  return (
    <div className='relative'>
      {/* Company Logo */}
      <div className='absolute left-1/2 -translate-x-1/2 -top-36 p-12 bg-white rounded-3xl'>
        <img src={TechCommrLogo} alt="Tech-Commr Logo" className='w-40 h-auto' />
      </div>
      {/* Container */}
      <div className='flex flex-col items-center gap-9 mx-6 mb-6 mt-12 px-6 pt-36 pb-16 bg-neutral-700 rounded-2xl'>
        {/* Title and Description */}
        <div className='flex flex-col items-center gap-3'>
          <h1 className='text-center text-neutral-100'>
            Tech-Commr
          </h1>
          <p className='text-center text-neutral-300 w-full max-w-xl'>At LinkrDev, we help you excel academically without the stress. Our expert solutions in university projects, programming, and design are tailored to ensure you achieve top grades effortlessly. Focus on your studies while we handle the rest.</p>
        </div>
        {/* CTA */}
        {/* bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-300 focus:ring-neutral-400 */}
        <Button text={'Get started'} styles='bg-green-500 hover:bg-green-600 text-white border-none focus:ring-green-300'
          trailingIcon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          }
        />
      </div>
    </div>
  )
}

export default CompanyOverview
