// https://jsfiddle.net/psullivan6/0eL3jezk/

import React from 'react'

const PlusMinus = ({ isExpanded, innerClass, plusClass, minusClass, children, ...attr }) => {
  return (
    <button aria-expanded={isExpanded} aria-label="Expand button" type="button" {...attr}>
        <div className={`${isExpanded ? minusClass : plusClass} ${innerClass}`}></div>
    </button>
  )
}

export default PlusMinus

// <button className="container" aria-label="Expand button" type="button" {...attr}>
//   <div className="button">+ and -</div>
// </button>
