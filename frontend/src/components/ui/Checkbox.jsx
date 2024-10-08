import React from 'react';

const Checkbox = ({ id, label, checked, onChange, disabled, required, error }) => {
  return (
    <div className="flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        className={`rounded border border-neutral-200 focus:ring-green-500 focus:ring-1 text-green-500 cursor-pointer transition duration-300 ease-in-out ${error ? 'border-red-500' : ''}`}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
      <label
        htmlFor={id}
        className={`text-xs text-neutral-700 select-none ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
