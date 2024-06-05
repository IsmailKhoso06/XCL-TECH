import React from 'react'

function CenterHeading(props) {
  return (
    <>
      <h1 className="display-5 fw-bold text-center">{props.heading}</h1>
    </>
  )
}

export default CenterHeading
