import React from 'react'

function CallText() {
    
    const experienceStyles = {
        fontSize : "40px",
        fontWeight: "600",
        letterSpacing:"-1px"
    }

    const getInTouch ={
      fontSize: "30px",
      marginRight:"15rem",
      marginTop:"1rem",
      color:"white",
      textDecoration:"none"
    }

  return (
    <div className='container'>
    <div className="row">
    <div className='d-flex justify-content-between' style={{marginTop:"2rem"}} >
    <h3 style={experienceStyles}>HAVE AN IDEA?</h3>
    <a href='/'  style={getInTouch}>
    <span>Get in touch &rarr;</span>
    </a>
    </div>
    <p style={{fontSize:"30px", letterSpacing:"-1px", marginTop:"-10px"}}>We can help you to bring it life.</p>
  </div>
  </div>
  )
}

export default CallText
