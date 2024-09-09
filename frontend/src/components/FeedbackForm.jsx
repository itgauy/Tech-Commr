import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Textarea, Button, Select } from '../components/ui';

const StarRating = ({ rating, onRatingChange }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="flex gap-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          className={`text-4xl transition duration-300 ease-in-out ${(hovered || rating) >= star ? 'text-yellow-400' : 'text-neutral-200'
            } focus:outline-none`}
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(null)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='size-8'>
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
        </button>
      ))}
    </div>
  );
};

const FeedbackForm = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [errorFields, setErrorFields] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fname || !category || !desc || !rating) {
      setError('Please fill in all required fields');
      setSuccess(null);
      const errorFields = [];
      if (!fname) errorFields.push('fname');
      if (!category) errorFields.push('category');
      if (!desc) errorFields.push('desc');
      if (!rating) errorFields.push('rating');
      setErrorFields(errorFields);
      return;
    }
    setErrorFields([]);
    try {
      setError(null);
      setFname('');
      setLname('');
      setRating(0);
      setCategory('');
      setDesc('');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fname, lname, rating, category, desc }),
      });
      const data = await response.json();
      setSuccess(data.message);
      setError(null);
    } catch (error) {
      setError('Error creating feedback');
      setSuccess(null);
    }
  };

  return (
    <form className='grid md:grid-cols-2 grid-cols-1 bg-white rounded-2xl md:p-8 p-6 gap-5' onSubmit={handleSubmit}>
      {/* First Name */}
      <Input type={'text'} placeholder={'Juan'} value={fname} onChange={(e) => setFname(e.target.value)} error={errorFields.includes('fname')}>
        <p>First name <span className='text-red-500'>*</span></p>
      </Input>
      {/* Last Name */}
      <Input type={'text'} placeholder={'Dela Cruz'} value={lname} onChange={(e) => setLname(e.target.value)}>
        <p>Last name <span className='text-neutral-400 text-xs'>(Optional)</span></p>
      </Input>
      {/* Rating Component */}
      <div className='space-y-2'>
        <p>Rate your experience <span className='text-red-500'>*</span></p>
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
        {errorFields.includes('rating') && <div className='text-red-500 text-xs'>Please select a rating</div>}
      </div>
      {/* Select Component */}
      <div className=''>
        <Select
          label={
            <>
              Project category <span className='text-red-500'>*</span>
            </>
          }
          options={[
            'Programming',
            'Web Development',
            'Database Management',
            'UI/UX Design',
            'Paper Works',
          ]}
          value={category}
          onChange={handleCategoryChange}
          error={errorFields.includes('category')}
        />
        {errorFields.includes('category') && <div className='text-red-500 text-xs'>Please select a category</div>}
      </div>
      {/* Message */}
      <div className='md:col-span-2 col-span-1'>
        <Textarea
          label={
            <>
              Tell us your experience{' '}
              <span className='text-neutral-400 text-xs'>(Optional)</span>
            </>
          }
          placeholder="Enter your message here..."
          rows={2}
          name="message"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          error={errorFields.includes('desc')}
        />
        {errorFields.includes('desc') && <div className='text-red-500 text-xs'>Please enter a description</div>}
      </div>
      {/* Submit */}
      <div className='md:col-span-2 col-span-1 pt-2'>
        <Button type={'submit'} text={'Post comment'} styles='w-full flex items-center justify-center bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
        />
      </div>
      {error && <div className='text-red-500 md:text-sm text-xs'>{error}</div>}
      {success && <div className='text-green-500 md:text-sm text-xs'>{success}</div>}
    </form>
  );
};

export default FeedbackForm;
