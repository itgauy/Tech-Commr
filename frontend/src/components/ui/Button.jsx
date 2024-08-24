import React from 'react'

const Button = ({ text, styles, leadingIcon, trailingIcon }) => {
  return (
    <button className={`${styles} inline-flex items-center gap-2.5 px-4 py-2.5 text-sm transition duration-300 ease-in-out border font-medium rounded-md focus:outline-none focus:ring-2`}>
      {leadingIcon}
      {text}
      {trailingIcon}
    </button>
  )
}

export default Button
