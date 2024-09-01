import React from 'react';
import { motion } from 'framer-motion';
import { Company, GetInTouch, Team } from '../components';
import TechCommrMockup from '../assets/Tech-Commr-MobileMockup.png'
import { Link } from 'react-router-dom';
import { Button } from '../components/ui'
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';

const About = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:pt-64 pt-52'
    >
      <Company />
      <section className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-12 gap-10 md:mr-6 mr-4 lg:ml-0 ml-4 md:pt-10'>
        {/* Content */}
        <div className='order-2 lg:order-1 lg:px-16 px-4'>
          <div className='space-y-7'>
            <div className='space-y-6 pb-6'>
              <h2 className='leading-none'>We are driven by values</h2>
              <div className='space-y-5'>
                <p>We are driven by the values of excellence, integrity, respect, teamwork, and innovation. These values guide our decisions and actions, and they help us to create a positive and productive work environment.</p>
                <p>We believe that these values are essential for success in any business, but they are especially important in the academic world. When we are driven by these values, we are able to provide our clients with the best possible service and help them to achieve their academic goals.</p>
              </div>
            </div>
            {/* CTA */}
            <Link to='/contact'>
              <Button text={"Let's talk"} styles='bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
                trailingIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                  </svg>
                }
              />
            </Link>
          </div>
        </div>
        {/* Illustration/Mockup */}
        <div className='order-1 lg:order-2 relative lg:h-full h-[11rem] border rounded-2xl self-start flex justify-center items-center text-white'>
          <img src={TechCommrMockup} alt="Tech-Commr Mockup" className='absolute object-cover w-full h-full rounded-2xl' />
        </div>
      </section>
      {/* Vision and Mission */}
      <div className='flex flex-wrap md:gap-14 gap-10 justify-center md:px-20 md:py-24 py-16 px-12'>
        {[
          { title: 'Vision', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis porro aspernatur ducimus placeat ea fugit est nam laborum doloremque suscipit voluptatum autem reiciendis! Maxime exercitationem dicta cupiditate aliquam totaam.' },
          { title: 'Mission', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis porro aspernatur ducimus placeat ea fugit est nam laborum doloremque suscipit voluptatum autem reiciendis! Maxime exercitationem dicta cupiditate aliquam totaam.' }
        ].map((content, index) => (
          <div className='text-center w-full max-w-md md:space-y-7 space-y-4 border border-red-500' key={index}>
            <h3 className='leading-none'>
              Our <span className='text-green-500'>{content.title}</span>
            </h3>
            <p>{content.content}</p>
          </div>
        ))}
      </div>
      {/* Get in Touch */}
      <GetInTouch />
    </motion.section>
  )
}

export default About
