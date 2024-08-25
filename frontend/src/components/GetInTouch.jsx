import React from 'react'
import { Button } from './ui'

const GetInTouch = () => {
  return (
    <section className='md:p-16 p-8 rounded-2xl bg-neutral-700 md:mx-6 mx-4 md:mb-6 mb-4'>
      <div className='flex flex-col md:items-center items-start md:gap-7 gap-6'>
        {/* Title and Description */}
        <div className='space-y-3 md:text-center text-start'>
          <h1 className='text-neutral-100'>
            Get in Touch
          </h1>
          <p className='text-neutral-300 w-full max-w-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque incidunt totam ipsa rem perferendis quisquam excepturi.</p>
        </div>
        {/* CTA */}
        <Button text={'Wow ganern'} styles='text-nowrap bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
          trailingIcon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          }
        />
        <div className='flex flex-col md:items-center items-start gap-6'>
          <p className='text-xs md:text-center text-start text-neutral-400'>Or you can reach us out through <br className='md:block hidden' /> these following platforms:</p>
          <div className='flex items-center md:gap-4 gap-3'>
            {[
              {
                link: 'mailto:techcommr.io@gmail.com',
                svg: 'M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z'
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
                svg: 'M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
              },
            ].map((social, index) => (
              <a key={index} href={social.link} className='hover:bg-neutral-600/80 group p-2 rounded-md transition duration-300 ease-in-out'>
                <svg className="group-hover:text-green-500 md:size-5 size-4 text-neutral-200 transition duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d={social.svg} clip-rule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
