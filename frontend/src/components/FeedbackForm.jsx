import React from 'react'
import { Input } from '../components/ui';

const FeedbackForm = () => {
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
    </form >

  )
}

export default FeedbackForm
