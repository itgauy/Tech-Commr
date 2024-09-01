import React, { useState } from 'react';
import { Input, Textarea, Checkbox, Button, Select } from '../components/ui';

const StarRating = ({ rating, onRatingChange }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          className={`size-12 text-4xl transition duration-300 ease-in-out ${(hovered || rating) >= star ? 'text-yellow-400' : 'text-neutral-200'
            } focus:outline-none`}
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(null)}
        >
          ★
        </button>
      ))}
    </div>
  );
};

const FeedbackForm = () => {
  // Rating
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Select (Categories)
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };


  return (
    <form className='grid md:grid-cols-2 grid-cols-1 bg-white rounded-2xl md:p-8 p-6 gap-5' onSubmit={''}>
      {/* First Name */}
      <Input type={'text'} placeholder={'Juan'} value={''} onChange={''} error={''}>
        <p>First name <span className='text-red-500'>*</span></p>
      </Input>
      {/* Last Name */}
      <Input type={'text'} placeholder={'Dela Cruz'} value={''} onChange={''} >
        <p>Last name <span className='text-neutral-400 text-xs'>(Optional)</span></p>
      </Input>
      {/* Rating Component */}
      <div className='space-y-2'>
        <p>Rate your experience <span className='text-red-500'>*</span></p>
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
      </div>
      {/* Select Component */}
      <div className=''>
        <Select
          label={
            <>
              Project Category <span className='text-red-500'>*</span>
            </>
          }
          options={[
            'Programming',
            'Web Development',
            'Database Management',
            'UI/UX Design',
            'Paper Works',
          ]}
          value={''}
          onChange={handleCategoryChange}
          error={''}
        />
      </div>
      {/* Message */}
      <div className='md:col-span-2 col-span-1'>
        <Textarea
          label={
            <>
              Please ama ama toto dutioas{' '}
              <span className='text-neutral-400 text-xs'>(Optional)</span>
            </>
          }
          placeholder="Enter your message here..."
          rows={2}
          name="message"
          value={''}
          onChange={''}
          error={''}
        />
      </div>
      {/* Checkbox */}
      <div className='md:col-span-2 col-span-1'>
        <Checkbox
          id="Agreement"
          label={'Wachu gana du wedu bi bap bo? wigi wigi wigi'}
          value={''}
          checked={''}
          onChange={''}
          error={''}
        />
        {/* {termsError && <div className='text-red-500 text-xs pt-2'>Please agree to the terms & conditions and privacy policy </div>} */}
      </div>
      {/* Submit */}
      <div className='md:col-span-2 col-span-1 pt-2'>
        <Button type={'submit'} text={'Submit'} styles='w-full flex items-center justify-center bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
        />
      </div>
    </form>
  )
}

export default FeedbackForm
