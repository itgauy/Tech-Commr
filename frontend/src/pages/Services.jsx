import React from 'react';
import useLenisScroll from '../hooks/useLenisScroll';
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion';

const Services = () => {
  useLenisScroll();
  useScrollToTop();

  const servicesData = [
    // Programming
    {
      graphics: 'https://placehold.co/700x450',
      name: 'Programming',
      description: [
        'Our commitment to providing high-quality programming services is reflected in our affordable pricing structure. We offer a variety of payment options to fit your budget, and we are always willing to negotiate.',
        'We are passionate about programming and committed to providing our customers with the best possible service. We provide high-quality programming in:',
      ],
      items: [
        ['PHP', 'Java', 'JavaScript', 'Python'],
        ['C#', 'ASP.Net', 'VB.Net'],
      ],
    },
    // Web Development
    {
      graphics: 'https://placehold.co/700x450',
      name: 'Web Development',
      description: [
        'We offer comprehensive web development services designed to build robust, user-friendly websites that cater to your specific needs. From front-end to back-end development, our team ensures that your website not only looks great but also performs optimally.',
        'Our expertise spans various technologies, enabling us to deliver dynamic and responsive web solutions that engage users and drive conversions. We specialize in:',
      ],
      items: [
        ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
        ['NextJS', 'VueJS', 'Tailwind CSS', 'Bootstrap'],
      ],
    },
    // Database Management
    {
      graphics: 'https://placehold.co/700x450',
      name: 'Database Management',
      description: [
        'Effective database management is crucial for the smooth operation of any business. We offer professional database management services that ensure your data is organized, secure, and easily accessible.',
        'Our team is skilled in both relational and non-relational database systems, providing you with reliable solutions for data storage, retrieval, and maintenance. We specialize in:',
      ],
      items: [
        ['MySQL', 'MongoDB'],
      ],
    },
    // Graphic Design
    {
      graphics: 'https://placehold.co/700x450',
      name: 'Graphic Design',
      description: [
        'Visual appeal is key to effective communication. Our graphic design services are tailored to create visually stunning and memorable designs that align with your brand identity.',
        'Whether you need designs for digital or print media, our creative team is dedicated to delivering high-quality graphics that capture your audience’s attention. Our areas of expertise include:',
      ],
      items: [
        ['UI/UX Design', 'Brand Identity Design', 'Brochure and Flyer Designs', 'Social Media Graphics'],
        ['Posters and Banners', 'Infographic Design'],
      ],
    },
    // Paper Works
    {
      graphics: 'https://placehold.co/700x450',
      name: 'Paper Works',
      description: [
        'When it comes to academic and professional documentation, precision and clarity are essential. We provide comprehensive paper works services to help you craft well-structured and polished documents that meet your specific requirements.',
        'From academic papers to business presentations, our team is equipped to assist you with a variety of writing tasks. Our services include:',
      ],
      items: [
        ['Thesis/Capstone Paper', 'School Assignments', 'School Reviewers', 'Essay Writing'],
        ['PowerPoint Presentations', 'Website Copywriting'],
      ],
    },
  ];


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="md:pt-44 pb-24 pt-32 md:px-24 px-8 space-y-20"
    >
      <div className="space-y-3">
        <h1>Our Services</h1>
        <p className="w-full max-w-xl">
          We offer a wide range of services to meet your needs. From expert programming and web development to reliable database management and creative graphic design, we deliver high-quality solutions. Additionally, our paper works service ensures your documentation is professional and polished. Let us help elevate your projects to success.
        </p>
      </div>
      <div className='space-y-24'>
        {servicesData.map((service, index) => (
          <div className="grid lg:grid-cols-2 grid-cols-1" key={index}>
            <div className="relative md:h-[28rem] h-[15rem]">
              <img
                src={service.graphics}
                alt={`'${service.graphics}'`}
                className="absolute object-cover w-full h-full md:rounded-2xl rounded-xl"
              />
            </div>
            <div className="lg:pl-16 pt-6 lg:pt-0 md:space-y-12 space-y-8">
              <div className="space-y-4">
                <h3 className="leading-none">{service.name}</h3>
                {service.description.map((desc, descIndex) => (
                  <p key={descIndex}>{desc}</p>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 text-neutral-600">
                {service.items.map((column, colIndex) => (
                  <ul className="space-y-1" key={colIndex}>
                    {column.map((item, itemIndex) => (
                      <li className="flex gap-3 items-start md:text-sm text-xs" key={itemIndex}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="shrink-0 mt-[2px] size-4 text-green-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
