import React from 'react'

const Input = ({ type, children, placeholder, required, value, onChange, error }) => {

  const className = `block rounded-md w-full text-neutral-700 bg-neutral-50/70 border border-neutral-200/50 transition duration-300 ease-in-out focus:ring-1 focus:ring-green-500 focus:border-green-500 md:text-sm text-xs py-2 px-3 placeholder-neutral-400/80 ${error ? 'border-red-500' : ''}`;

  return (
    <div className='flex flex-col gap-1.5 items-start'>
      {children}
      <input type={type} className={className} placeholder={placeholder} value={value} onChange={onChange} required={required} />
    </div>
  )
}

export default Input
