import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, Textarea, Checkbox } from '../components/ui'

const ContactForm = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [desc, setDesc] = useState('')
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [errorFields, setErrorFields] = useState([])
  const [categoriesError, setCategoriesError] = useState(false)
  const [termsError, setTermsError] = useState(false)

  const categories = [
    'Programming',
    'Web Development',
    'Database Management',
    'Graphic Design',
    'Paper Works',
    'Others',
  ];
  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!fname || !email || !desc || !termsAgreed || selectedCategories.length === 0) {
      setError('Please fill in all required fields')
      setSuccess(null)
      const errorFields = []
      if (!fname) errorFields.push('fname')
      if (!email) errorFields.push('email')
      if (!desc) errorFields.push('desc')
      if (selectedCategories.length === 0) setCategoriesError(true)
      if (!termsAgreed) setTermsError(true)

      setErrorFields(errorFields)

      return
    }
    setErrorFields([])
    setCategoriesError(false)
    setTermsError(false)
    try {
      setError(null)
      setFname('')
      setLname('')
      setEmail('')
      setSelectedCategories([])
      setDesc('')
      setTermsAgreed(false)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fname, lname, email, category: selectedCategories, desc, termsAgreed })
      })
      const data = await response.json()
      setSuccess(data.message)
      setError(null)
    } catch (error) {
      setError('Error creating inquiry')
      setSuccess(null)
    }
  }

  const handleChange = (e) => {
    setChecked(e.target.checked);
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
      {/* Email Address */}
      <div className='md:col-span-2 col-span-1'>
        <Input type={'email'} placeholder={'juan.dela.cruz@email.com'} value={email} onChange={(e) => setEmail(e.target.value)} error={errorFields.includes('email')}>
          <p>Email address <span className='text-red-500'>*</span></p>
        </Input>
      </div>
      {/* Category Updated AAAAaAAAASASASAAAAA */}
      <div className='space-y-2 md:col-span-2 col-span-1'>
        <p>I'm interested in: <span className='text-red-500'>*</span></p>
        <div className='flex flex-wrap md:gap-3 gap-2'>
          {categories.map((category, index) => (
            <div key={index} className='inline-flex'>
              <div
                className={`transition duration-300 ease-in-out flex items-center justify-between w-full md:px-5 px-3 md:py-2.5 py-2 text-neutral-700 bg-white border rounded-lg cursor-pointer ${selectedCategories.includes(category) ? 'border-green-500 text-green-500 bg-green-100/20' : categoriesError ? 'border-red-500 text-red-500' : ''
                  } hover:bg-neutral-50/70`}
                onClick={() => handleCategoryClick(category)}
              >
                <span className="block w-full md:text-sm text-xs">{category}</span>
              </div>
            </div>
          ))}
        </div>
        {categoriesError && <div className='text-red-500 text-xs'>Please select at least one category</div>}
      </div>
      {/* Message */}
      <div className='md:col-span-2 col-span-1'>
        <Textarea
          label="Tell us about your project"
          ast={true}
          placeholder="Enter your message here..."
          rows={2}
          name="message"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          error={errorFields.includes('desc')}
        />
      </div>
      {/* Checkbox */}
      <div className='md:col-span-2 col-span-1'>
        <Checkbox
          id="Agreement"
          label={
            <>
              Do you agree to the{' '}
              <Link to="/terms-and-conditions" className="text-green-500 underline">
                terms & conditions
              </Link>{' '}
              and{' '}
              <Link to="/privacy-policy" className="text-green-500 underline">
                privacy policy
              </Link>?
            </>
          }
          value={termsAgreed}
          checked={termsAgreed}
          onChange={(e) => setTermsAgreed(e.target.checked)}
          error={termsError}
        />
        {termsError && <div className='text-red-500 text-xs pt-2'>Please agree to the terms & conditions and privacy policy </div>}
      </div>
      {/* TO BE CHANGED BY OUR HEADMASTER UI/UX DESIGNER */}
      {error && <div className='text-red-500 md:text-sm text-xs'>{error}</div>}
      {success && <div className='text-green-500 md:text-sm text-xs'>{success}</div>}
      {/* Submit */}
      <div className='md:col-span-2 col-span-1 pt-2'>
        <Button type={'submit'} text={'Submit'} styles='w-full flex items-center justify-center bg-green-500 hover:bg-green-600/90 text-white active:scale-95'
        />
      </div>
    </form>
  )

}

export default ContactForm


