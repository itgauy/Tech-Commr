import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Badge } from './ui'

const Hero = () => {

  return (
    <section className='flex flex-col items-center justify-center md:gap-7 gap-6 px-6 py-36'>
      {/* Badge */}
      <Badge text={'New Startup'} styles='bg-green-200/20 text-green-500 border-green-500/40'
        trailingIcon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
          </svg>
        }
      />
      {/* Heading & Description */}
      <div className='flex gap-3.5 flex-col items-center'>
        <h1 className='text-center'>
          <span className='text-green-500'>Excel</span> Academically, <br />
          Eliminate the <span className='line-through decoration-2'>Pressure</span>.
        </h1>
        <p className='text-center w-full max-w-xl'>Excel in your studies without the burden of stress. Our service is dedicated to helping you achieve academic success, providing what you need to thrive with confidence and ease. Let us guide you on your path to excellence.</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-5'>
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
        {/* Terms and Condition */}
        <Link to='/terms-and-conditions'>
          <span className='text-xs underline text-green-500'>Terms and Conditions</span>
        </Link>
        {/* Avatars */}
        <div className='inline-flex items-center md:gap-4 gap-3'>
          <div>
            {[
              { initial: 'LT', color: 'bg-yellow-500' },
              { initial: 'FM', color: 'bg-amber-700' },
              { initial: 'RC', color: 'bg-violet-400' },
              { initial: 'KS', color: 'bg-pink-400' }
            ].map((avatar, index) => (
              <span className={`inline-flex md:size-7 size-6 -ml-1 ring-2 ring-white items-center justify-center rounded-full ${avatar.color} md:text-xs text-[9px] leading-none text-white`} key={index}> {avatar.initial} </span>
            ))}
          </div>
          <span className='md:text-sm text-xs text-neutral-600'>Trusted by over 99+ clients</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
