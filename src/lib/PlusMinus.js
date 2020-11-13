// https://jsfiddle.net/psullivan6/0eL3jezk/

import React from 'react'

// <button aria-expanded={isExpanded} aria-label="Expand button" type="button" {...attr}>
//     <div className={`${isExpanded ? minusClass : plusClass} ${innerClass}`}></div>
// </button>

const PlusMinus = ({ isExpanded, innerClass, plusClass, minusClass, children, ...attr }) => {
  return (
    <button aria-expanded={isExpanded} aria-label="Expand button" type="button" {...attr}>
        <span className={`${isExpanded ? minusClass : plusClass} ${innerClass}`}>
          {children}
        </span>
    </button>
  )
}

export default PlusMinus

// <button aria-expanded={isExpanded} aria-label="Expand button" type="button" {...attr}>
//     <div>
//       {isExpanded ? '-' : '+'}
//     </div>
// </button>
