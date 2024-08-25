import React from 'react'
import { Button, Badge } from './ui'

const Hero = () => {

  // Temporary Constants
  const avatarProfiles = [
    {
      img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      alt: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      alt: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      alt: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      alt: ''
    },
  ]

  return (
    <section className='flex flex-col items-center justify-center md:gap-7 gap-6 px-6 py-36'>
      {/* Badge */}
      <Badge text={'Wow ganern'} styles='bg-green-200/20 text-green-500 border-green-500/40'
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
        <p className='text-center w-full max-w-xl'>At LinkrDev, we help you excel academically without the stress. Our expert solutions in university projects, programming, and design are tailored to ensure you achieve top grades effortlessly. Focus on your studies while we handle the rest.</p>
      </div>
      {/* CTA */}
      {/* bg-neutral-700 hover:bg-neutral-900/90 text-zinc-100 border-neutral-800 focus:ring-neutral-400 */}
      <Button text={'Get started'} styles='bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
        trailingIcon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        }
      />
      {/* Avatars */}
      <div className='inline-flex items-center gap-4'>
        <div>
          {avatarProfiles.map((avatar, index) => (
            <img className="inline-block ring-2 ring-neutral-200 md:size-8 size-7 rounded-full -ml-1.5" src={avatar.img} alt={avatar.alt} key={index} />
          ))}
        </div>
        <span className='md:text-sm text-xs text-neutral-600'>Lorem ipsum dolor sit.</span>
      </div>
    </section>
  )
}

export default Hero
