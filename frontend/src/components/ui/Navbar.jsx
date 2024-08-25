import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from './index'
import TechCommrLogo from '../../assets/Tech-Commr-logo.svg'
import { motion } from 'framer-motion';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Nav Scroll Effect
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // For Menu in small screens
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-button') && !event.target.closest('.menu-dropdown')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 md:top-8 top-6 flex justify-between items-center gap-32 md:gap-[20rem] lg:gap-28 p-4 rounded-xl transition-transform duration-500 bg-white z-50 ${showNavbar ? 'md:translate-y-0' : 'md:-translate-y-28'}`}>
      {/* Logo Container */}
      <div className='inline-flex items-center md:text-base text-xs md:gap-3 gap-2 font-bold text-nowrap'>
        <img src={TechCommrLogo} alt="Tech-Commr Logo" className='shrink-0 md:w-8 w-6 h-auto' />
        Tech-Commr
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={handleToggleMenu}
        className='menu-button lg:hidden px-2 size-8 flex justify-center items-center bg-green-300/10 hover:bg-green-300/20 text-green-500 active:scale-95 rounded-md'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          className='menu-dropdown absolute top-full right-[15px] space-y-4 p-4 w-36 bg-white rounded-2xl shadow-lg lg:hidden'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <ul className='flex flex-col gap-4 text-center md:text-sm text-xs'>
            {[
              { name: 'Home', link: '/' },
              { name: 'About', link: '/about' },
              { name: 'Services', link: '/services' },
              { name: 'Contact', link: '/contact' },
              { name: 'Feedback', link: '/feedback' },
            ].map((link, index) => (
              <li key={index}>
                <Link to={link.link} onClick={handleMenuItemClick} className={`${pathname === link.link ? 'text-green-500' : ''} transition duration-300 ease-in-out`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex flex-col justify-center items-center w-full gap-3'>
            <Button
              onClick={handleMenuItemClick}
              text={'Get started'}
              styles='text-xs text-nowrap bg-green-300/10 hover:bg-green-300/20 text-green-500 active:scale-95'
            />
            <Button
              onClick={handleMenuItemClick}
              text={'Get started'}
              styles='text-xs text-nowrap bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
              trailingIcon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              }
            />
          </div>
        </motion.div>
      )}

      {/* Links */}
      <ul className='lg:flex hidden gap-8 text-sm'>
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

      {/* CTAs */}
      <div className='lg:flex hidden items-center gap-3'>
        <Button
          onClick={handleMenuItemClick}
          text={'Get started'}
          styles='text-nowrap bg-green-300/10 hover:bg-green-300/20 text-green-500 active:scale-95'
        />
        <Button
          onClick={handleMenuItemClick}
          text={'Get started'}
          styles='text-nowrap bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
          trailingIcon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          }
        />
      </div>
    </nav >
  );
};

export default Navbar;
