import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { Button } from './index'
import TechCommrLogo from '../../assets/Tech-Commr-logo.svg'

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className='fixed left-1/2 -translate-x-1/2 top-8 flex justify-between items-center gap-28 p-4  rounded-lg bg-white/90 backdrop-blur-md z-50'>
      <div className='inline-flex items-center gap-3 font-bold text-nowrap'>
        <img src={TechCommrLogo} alt="Tech-Commr Logo" className='shrink-0 w-8 h-auto' />
        Tech-Commr
      </div>
      <ul className='flex gap-8 text-sm'>
        {[
          { name: 'Home', link: '/' },
          { name: 'About', link: '/about' },
          { name: 'Services', link: '/services' },
          { name: 'Contact', link: '/contact' },
          { name: 'Feedback', link: '/feedback' },
        ].map((link, index) => (
          <li key={index}>
            <Link to={link.link} className={`${pathname === link.link ? 'text-green-500' : ''} transition duration-300 ease-in-out`}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className='flex items-center gap-3'>
        <Button text={'Get started'} styles='text-nowrap bg-green-400/10 hover:bg-green-600 text-green-500 border-none focus:ring-green-300' />
        <Button text={'Get started'} styles='text-nowrap bg-green-500 hover:bg-green-600 text-white border-none focus:ring-green-300'
          trailingIcon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          }
        />
      </div>
    </nav >
  )
}

export default Navbar
