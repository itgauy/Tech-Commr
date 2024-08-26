import React from 'react'
import { motion } from 'framer-motion';
import useLenisScroll from '../hooks/useLenisScroll';

const Contact = () => {
  useLenisScroll();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:py-44 py-32 border grid md:grid-cols-2 grid-cols-1 gap-12 md:px-24 px-8'
    >
      {/* Additional Infos */}
      <div className='md:space-y-6 space-y-5'>
        <div className='md:space-y-5 space-y-3'>
          <h2 className=''>
            Got projects? <br />We've got the skills, <br /> let's <span className='text-green-500'>team up</span>!
          </h2>
          <p className='w-full max-w-xl'>At LinkrDev, we help you excel academically without the stress. Our expert solutions in university projects, programming, and design are tailored to ensure you achieve top grades effortlessly. Focus on your studiHere are some useful links:</p>
        </div>
        {/* Contacts */}
        <div className='grid md:grid-cols-3 grid-cols-2 gap-3'>
          {[
            {
              name: 'Call',
              path: 'M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z',
              label: '+912 123 1234'
            },
            {
              link: 'sss',
              name: 'Messenger',
              path: 'M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z',
              label: 'Tech-Commr'
            },
            {
              link: 'sss',
              name: 'Gmail',
              path: ['M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z', 'M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z'],
              label: 'tech-commr.io@gmal.com'
            }
          ].map((contact, index) => (
            <a href={contact.link} className='group transition duration-300 ease-in-out hover:bg-green-100/20 hover:border-green-500/30 inline-flex flex-col gap-4 md:p-4 p-3 md:rounded-xl rounded-lg border' key={index}>
              <div className='flex justify-between'>
                <div className='flex gap-2.5 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-700 group-hover:text-green-500 transition duration-300 ease-in-out md:w-5 md:h-5 w-4 h-4">
                    {Array.isArray(contact.path) ? contact.path.map((p, idx) => (
                      <path d={p} key={idx} />
                    )) : <path d={contact.path} />}
                  </svg>
                  <p className='group-hover:text-green-500 transition duration-300 ease-in-out'>{contact.name}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${index === 0 ? 'hidden' : 'text-green-500 md:w-4 md:h-4 w-3 h-3'}`}>
                  <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                </svg>
              </div>
              <p className='text-xs truncate transition duration-300 ease-in-out group-hover:text-green-500'>{contact.label}</p>
            </a>
          ))}
        </div>
        {/* Socials */}
        <div className='space-y-3'>
          <p className='text-xs'>Or reach us out through this following platforms:</p>
          <div className='flex items-center md:gap-4 gap-3'>
            {[
              {
                link: 'https://web.facebook.com/profile.php?id=61564666055725&mibextid=ZbWKwL&_rdc=1&_rdr',
                svg: 'M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z'
              },
              {
                link: 'https://www.instagram.com/tech_commr/',
                svg: 'M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
              },
              {
                link: 'https://www.tiktok.com/@tech.commr?_t=8p7H2p04C5R&_r=1',
                svg: 'M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
              },
            ].map((social, index) => (
              <a key={index} href={social.link} className='hover:bg-neutral-200/30 group p-2 rounded-md transition duration-300 ease-in-out'>
                <svg className="group-hover:text-green-500 md:size-5 size-4 text-neutral-700 transition duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d={social.svg} clip-rule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Form */}
      <div>
        <h1>Formm dineyyy</h1>
      </div>
    </motion.section>
  )
}

export default Contact
