import React from 'react'

const Badge = ({ text, styles, leadingIcon, trailingIcon }) => {
  return (
    <span className={`${styles} border inline-flex items-center gap-2.5 rounded-full px-3 py-1.5 text-xs`}>
      {leadingIcon}
      {text}
      {trailingIcon}
    </span>
  )
}

export default Badge
