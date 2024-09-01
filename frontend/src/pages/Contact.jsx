import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';

const Contact = () => {

  useLenisScroll();
  useScrollToTop();

  const contactData = [
    {
      name: 'Call',
      path: 'M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z',
      label: '0953 482 3144'
    },
    {
      link: 'https://www.facebook.com/profile.php?id=61564666055725',
      name: 'Messenger',
      path: 'M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z',
      label: 'Tech-Commr'
    },
    {
      link: 'mailto:techcommr.io@gmail.com',
      name: 'Gmail',
      path: ['M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z', 'M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z'],
      label: 'techcommr.io@gmail.com'
    }
  ]

  const socialsData = [
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
      svg: ['M16.8218 5.1344C16.0887 4.29394 15.648 3.19805 15.648 2H14.7293C14.9659 3.3095 15.7454 4.43326 16.8218 5.1344Z', 'M8.3218 11.9048C6.73038 11.9048 5.43591 13.2004 5.43591 14.7931C5.43591 15.903 6.06691 16.8688 6.98556 17.3517C6.64223 16.8781 6.43808 16.2977 6.43808 15.6661C6.43808 14.0734 7.73255 12.7778 9.324 12.7778C9.62093 12.7778 9.90856 12.8288 10.1777 12.9124V9.40192C9.89927 9.36473 9.61628 9.34149 9.324 9.34149C9.27294 9.34149 9.22654 9.34614 9.1755 9.34614V12.0394C8.90176 11.9558 8.61873 11.9048 8.3218 11.9048Z', 'M19.4245 6.67608V9.34614C17.6429 9.34614 15.9912 8.77501 14.6456 7.80911V14.7977C14.6456 18.2851 11.8108 21.127 8.32172 21.127C6.97621 21.127 5.7235 20.6998 4.69812 19.98C5.8534 21.2198 7.50049 22 9.32392 22C12.8083 22 15.6478 19.1627 15.6478 15.6707V8.68211C16.9933 9.64801 18.645 10.2191 20.4267 10.2191V6.78293C20.0787 6.78293 19.7446 6.74574 19.4245 6.67608Z', 'M14.6456 14.7977V7.80911C15.9912 8.77501 17.6429 9.34614 19.4245 9.34614V6.67608C18.3945 6.45788 17.4899 5.90063 16.8218 5.1344C15.7454 4.43326 14.9704 3.3095 14.7245 2H12.2098L12.2051 15.7775C12.1495 17.3192 10.8782 18.5591 9.32393 18.5591C8.35884 18.5591 7.50977 18.0808 6.98085 17.3564C6.06219 16.8688 5.4312 15.9076 5.4312 14.7977C5.4312 13.205 6.72567 11.9094 8.31708 11.9094C8.61402 11.9094 8.90168 11.9605 9.17079 12.0441V9.35079C5.75598 9.42509 3 12.2298 3 15.6707C3 17.3331 3.64492 18.847 4.69812 19.98C5.7235 20.6998 6.97621 21.127 8.32172 21.127C11.8061 21.127 14.6456 18.2851 14.6456 14.7977Z']
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:pt-44 pb-24 pt-32 grid lg:grid-cols-2 grid-cols-1 gap-12 md:px-24 px-8'
    >
      {/* Additional Infos */}
      <div className='md:space-y-6 space-y-5'>
        <div className='md:space-y-5 space-y-3'>
          <h2 className=''>
            Got projects? <br />We've got the skills, <br /> let's <span className='text-green-500'>team up</span>!
          </h2>
          <p className='w-full max-w-xl'>Got any questions about our services? We're here to help. Chat to our friendly team 24/7 and we'll get in touch within 24 hours. Here are some useful links:</p>
        </div>
        {/* Contacts */}
        <div className='grid md:grid-cols-3 grid-cols-2 gap-3'>
          {contactData.map((contact, index) => (
            <a href={contact.link} target='_blank' rel='noopener noreferrer' className='group transition duration-300 ease-in-out hover:bg-green-100/20 hover:border-green-500/30 inline-flex flex-col gap-4 md:p-4 p-3 md:rounded-xl rounded-lg border' key={index}>
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
          <p className='text-xs'>Or reach us out through these platforms:</p>
          <div className='flex items-center md:gap-4 gap-2'>
            {socialsData.map((social, index) => (
              <a key={index} target='_blank' rel='noopener noreferrer' href={social.link} className='hover:bg-neutral-200/30 group p-2 rounded-md transition duration-300 ease-in-out'>
                <svg className="group-hover:text-green-500 md:size-5 size-4 text-neutral-700 transition duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  {/* <path fill-rule="evenodd" d={social.svg} clip-rule="evenodd" /> */}
                  {Array.isArray(social.svg) ? social.svg.map((p, idx) => (
                    <path d={p} key={idx} />
                  )) : <path d={social.svg} />}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Form */}
      <div>
        <div className='flex items-start gap-2 pb-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 text-green-500 size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <p className='text-xs'>Kindly fill out this form, and we'll get in touch with you shortly!</p>
        </div>
        <ContactForm />
      </div>
    </motion.section>
  )
}

export default Contact