import React from 'react';

const Select = ({ label, options, value, onChange, error }) => {
  return (
    <div>
      <label className="block md:text-sm text-xs text-neutral-700">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full pl-3 pr-10 py-2 md:text-sm text-xs text-neutral-700 bg-neutral-50/70 border border-neutral-200/50 transition duration-300 ease-in-out ${error ? 'border-red-500' : ''
          } focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md`}
      >
        <option value="" disabled>Select category</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
