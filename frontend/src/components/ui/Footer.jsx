import React from 'react'
import { Link } from 'react-router-dom';
import TechCommrLogo from '../../assets/Tech-Commr-logo.svg'

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
          <p className='w-full max-w-md md:text-start text-center'>At Tech-Commr, we remove academic stress by offering expert support for your projects. Our tailored services are designed to ensure your success, allowing you to focus on excelling with confidence.</p>
          <div className='flex md:gap-4 gap-2'>
            <Link to='/privacy-policy'>
              <span className='text-xs underline text-green-500'>Privact Policy</span>
            </Link>
            <Link to='/terms-and-conditions'>
              <span className='text-xs underline text-green-500'>Terms and Conditions</span>
            </Link>
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
