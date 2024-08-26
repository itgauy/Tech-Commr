import React from 'react'
import TechCommrLogo from '../../assets/Tech-Commr-logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col md:gap-0 gap-8 md:justify-between justify-center md:items-end items-center md:px-24 px-4 md:py-12 py-6'>
      {/* Left Side */}
      <div className='flex flex-col items-center md:items-start gap-5'>
        {/* Tech-Commr Logo link */}
        <Link to='/' className=''>
          <img src={TechCommrLogo} alt="Tech-Commr Logo" className='shrink-0 md:w-16 w-12 h-auto' />
        </Link>
        {/* Logo, Description and Links */}
        <div className='flex flex-col items-center md:items-start gap-4'>
          <h3 className='leading-none'>Tech-Commr</h3>
          <p className='w-full max-w-md md:text-start text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo elit dignissimos deleniti voluptas assumenda porro recusandae quo sunt? Reprehenderit.</p>
          <div className='flex md:gap-4 gap-2'>
            <a href="" className='text-xs underline text-green-600'>Privacy Policy</a>
            <a href="" className='text-xs underline text-green-600'>Terms and Conditions</a>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <p className='text-xs text-nowrap'>
        2024 © Tech-Commr
      </p>
    </footer>
  )
}

export default Footer
