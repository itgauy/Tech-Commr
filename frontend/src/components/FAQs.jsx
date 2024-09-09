import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from './ui';

const FAQs = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqsData = [
    {
      title: 'What services does Tech-Commr offer?',
      content:
        'Tech-Commr offers a range of services, including programming, web development, database management, graphic design, and professional documentation. We also provide personalized academic support, such as research assistance and essay writing.',
    },
    {
      title: 'How do I request a service?',
      content:
        'To request a service, simply visit our website and fill out the service request form. Be sure to provide all necessary information, such as task details, deadlines, and additional instructions.',
    },
    {
      title: 'What is the payment process?',
      content:
        'We operate on a “payment first” policy. Once we send proof of the output, you must make the payment before receiving the final task. Payments are typically made via GCash, but alternative methods may be considered based on your situation.',
    },
    {
      title: 'Can I request a service before paying?',
      content:
        'Yes, but only under specific conditions. You will need to provide two valid IDs and a picture of yourself. This option is available for clients using real accounts and may vary depending on the task.',
    },
    {
      title: 'How are prices determined?',
      content:
        'Our pricing varies depending on the complexity and urgency of the task. We provide a quote based on the requirements you share with us, ensuring you understand the costs before starting.',
    },
    {
      title: 'Do you charge extra for urgent tasks?',
      content:
        'Yes, we charge a rush fee for tasks with tight deadlines. If the deadline is within the same day, the fee ranges from PHP 50-100. For deadlines within 1-2 days, it ranges from PHP 10-50. For deadlines of 3 days or more, no rush fee is applied.',
    },
    {
      title: 'Can I ask for revisions?',
      content:
        'Yes, revisions are available depending on the agreement made during your service request. We typically offer 1-2 free revisions, but additional revisions may be subject to extra fees.',
    },
    {
      title: 'What happens if I violate the terms and conditions?',
      content:
        'If you violate any of our terms and conditions, we reserve the right to discontinue the service. If we fail to meet the agreed terms, you are entitled to request a refund if payment has been made.',
    },
  ];

  return (
    <section className='flex flex-col md:gap-12 gap-10 justify-center items-center md:py-24 py-16 px-6'>
      {/* Title and Description */}
      <div className='flex flex-col items-center gap-3'>
        <h1 className='leading-none'>FAQs</h1>
        <p className='text-center w-full max-w-xl'>These are the most commonly asked questions about Tech-Commr service. <br className='md:block hidden' />
          Can't find what you're looking for? Kindly <span className='underline text-green-500'><Link to='/contact'>contact our team.</Link></span>
        </p>
      </div>
      {/* Accordion */}
      <div className='w-full max-w-4xl'>
        {faqsData.map((accordion, index) => (
          <Accordion
            key={index}
            title={accordion.title}
            isOpen={openIndex === index}
            styles={'pt-6 gap-12 text-start pr-7'}
            onClick={() => handleAccordionClick(index)}
          >
            <div className='md:text-sm text-xs text-neutral-600'>
              {accordion.content}
            </div>
          </Accordion>
        ))}
      </div>
    </section>
  )
}

export default FAQs
