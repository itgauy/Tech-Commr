import React from 'react'

const Button = ({ text, styles, leadingIcon, trailingIcon }) => {
  return (
    <button className={`${styles} inline-flex items-center gap-2.5 px-3.5 py-2 text-sm transition duration-300 ease-in-out font-medium rounded-lg`}>
      {leadingIcon}
      {text}
      {trailingIcon}
    </button>
  )
}

export default Button
