import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui'

const GetInTouch = () => {
  return (
    <section className='md:p-16 p-8 rounded-2xl bg-neutral-700 md:mx-6 mx-4'>
      <div className='flex flex-col md:items-center items-start md:gap-7 gap-6'>
        {/* Title and Description */}
        <div className='flex flex-col items-center gap-3 md:text-center text-start'>
          <h1 className='text-neutral-100'>
            We would love to help.
          </h1>
          <p className='text-neutral-300 w-full max-w-md'>Have a project in mind? We're here to help bring your ideas to life. Simply fill out our contact form, and we'll reach out to discuss how we can support your goals and make your vision a reality.</p>
        </div>
        {/* CTA */}
        <Link to='/contact'>
          <Button text={'Connect with us'} styles='bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
            trailingIcon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
              </svg>
            }
          />
        </Link>
        <div className='flex flex-col md:items-center items-start gap-4'>
          <p className='text-xs md:text-center text-start text-neutral-400'>You can reach us out through these  <br className='md:block hidden' /> following platforms:</p>
          <div className='flex items-center md:gap-4 gap-3'>
            {[
              {
                link: 'mailto:techcommr.io@gmail.com',
                svg: 'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
              },
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
            ].map((social, index) => (
              <a key={index} href={social.link} target='_blank' rel='noopener noreferrer' className='hover:bg-neutral-600/80 group p-2 rounded-md transition duration-300 ease-in-out'>
                {index === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-hover:text-green-500 md:size-5 size-4 text-neutral-200 transition duration-300 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.svg} />
                  </svg>
                ) : (
                  <svg className="group-hover:text-green-500 md:size-5 size-4 text-neutral-200 transition duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    {Array.isArray(social.svg) ? social.svg.map((p, idx) => (
                      <path d={p} key={idx} />
                    )) : <path d={social.svg} />}
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
