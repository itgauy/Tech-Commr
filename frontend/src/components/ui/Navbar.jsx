import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className='fixed left-1/2 -translate-x-1/2 top-8 px-6 py-4 rounded-lg bg-white/90 backdrop-blur-md'>
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
    </nav >
  )
}

export default Navbar
