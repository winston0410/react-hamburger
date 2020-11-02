import React from 'react'

const Hamburger = ({ isExpanded, children, boxAttr, innerAttr, ...attr }) => {
  return (
    <button className='hamburger' aria-label="Menu button" aria-expanded={isExpanded} type="button" {...attr}>
      <span className="hamburger-box" {...boxAttr}>
        <span className="hamburger-inner" {...innerAttr}>
          {children}
        </span>
      </span>
    </button>
  )
}

export default Hamburger
