import React from 'react'
// import styled from 'styled-components'

const Arrow = ({ innerClass, ...attr }) => {
  // const ArrowInner = styled.span`
  //   display: block;
  //   border-left: .375rem solid #be132d;
  // `
  return (
    <div {...attr}>
      <span className={innerClass}>
      </span>
    </div>
  )
}

export default Arrow
