import React from 'react'
import Team from './Team';
import TechCommrLogo from '../assets/Tech-Commr-logo.svg'

const Company = () => {

  const CompanyOverviewContent = [
    {
      icon:
        <>
          <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
          <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clipRule="evenodd" />
        </>
      ,
      title: 'Super Efficient',
      desc: 'We are able to complete your academic work quickly and efficiently, so you can focus on other things.'
    },
    {
      icon:
        <>
          <path d="M13.09 3.294c1.924.95 3.422 1.69 5.472.692a1 1 0 0 1 1.438.9v9.54a1 1 0 0 1-.562.9c-2.981 1.45-5.382.24-7.25-.701a38.739 38.739 0 0 0-.622-.31c-1.033-.497-1.887-.812-2.756-.77-.76.036-1.672.357-2.81 1.396V21a1 1 0 1 1-2 0V4.971a1 1 0 0 1 .297-.71c1.522-1.506 2.967-2.185 4.417-2.255 1.407-.068 2.653.453 3.72.967.225.108.443.216.655.32Z" />
        </>
      ,
      title: 'Deeply Committed',
      desc: 'We are committed to your success, and we will work with you to ensure that your work meets your highest standards.'
    },
    {
      icon:
        <>
          <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
          <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
          <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
        </>
      ,
      title: 'Highly Skilled',
      desc: 'Our servers are highly skilled and experienced in IT and other related tasks.'
    }
  ];

  return (
    <section className='relative'>
      {/* Company Logo */}
      <div className='absolute left-1/2 -translate-x-1/2 md:-top-36 -top-20 md:p-12 p-8 bg-white md:rounded-3xl rounded-2xl'>
        <img src={TechCommrLogo} alt="Tech-Commr Logo" className='md:w-40 w-24 h-auto' />
      </div>
      {/* Container */}
      <div className='flex flex-col items-center gap-9 md:mx-6 mx-4 md:mt-12 mt-0 px-6 md:pt-36 pt-28 md:pb-16 pb-10 bg-neutral-700 rounded-2xl'>
        {/* Title and Description */}
        <div className='flex flex-col items-center gap-8'>
          <h1 className='text-center text-neutral-100'>
            Tech-Commr
          </h1>
          <div className='space-y-8'>
            <div className='flex flex-col items-center justify-center gap-4'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <p className='text-neutral-400 text-xs'>Founded by</p>
                <img className="inline-block md:size-20 size-16 ring-2 border-4 border-neutral-700 ring-green-500 rounded-full" src="https://avatars.githubusercontent.com/u/143796803?v=4" alt="Lian Torres" />
                <div>
                  <p className='text-center text-lg text-green-400'>Lian Torres</p>
                  <p className='text-center text-xs text-neutral-400'>Populary known as <span className='text-neutral-200'>ITGAUY</span></p>
                </div>
              </div>
            </div>
            <p className='text-center text-neutral-300 w-full max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis porro aspernatur ducimus placeat ea fugit est nam laborum doloremque suscipit voluptatum autem reiciendis! Maxime exercitationem dicta cupiditate aliquam totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis porro aspernatur ducimus placeat</p>
            <p className='text-center text-neutral-300 w-full max-w-2xl'> Sea fugit est nam laborum doloremque suscipit voluptatum autem reiciendis! Maxime exercitationem dicta cupiditate aliquam totam.Sea fugit est nam laborum doloremque suscipit voluptatum autem reiciendis! Maxime exercitationem dicta cupiditate aliquam totam.</p>
          </div>
        </div>
      </div>
      {/* Team */}
      <Team />
      {/*  */}
      <div className='flex flex-wrap md:gap-14 gap-10 justify-center md:px-20 md:py-20 pb-12 py-10 px-12'>
        {CompanyOverviewContent.map((content, index) => (
          <div className='w-full max-w-xs md:space-y-7 space-y-4' key={index}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 md:size-8 size-7">
              {content.icon}
            </svg>
            <h3 className='leading-none'>
              {content.title}
            </h3>
            <p>{content.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Company
