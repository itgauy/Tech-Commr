import React from 'react';

const Textarea = ({ label, placeholder, required, value, rows = 4, name, onChange, error }) => {
  const className = `block rounded-md w-full text-neutral-700 bg-neutral-50/70 border border-neutral-200/50 transition duration-300 ease-in-out focus:ring-1 focus:ring-green-500 focus:border-green-500 md:text-sm text-xs py-2 px-3 placeholder-neutral-400/80 ${error ? 'border-red-500' : ''}`;

  return (
    <div className='flex flex-col gap-1.5 items-start'>
      {label && <label className="md:text-sm text-xs font-medium text-neutral-600">{label} {required ? (<span className='text-red-500'>*</span>) : ('')}</label>}
      <textarea
        className={className}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        rows={rows}
        name={name}
      />
    </div>
  );
};

export default Textarea;
