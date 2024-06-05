import React from 'react'

function ExperienceItems() {

    const experienceStyles = {
        fontSize : "50px",
        fontWeight: "600"
    }

  return (
    <div className='container'>
      <div class="row">
      <div className='d-flex justify-content-around align-items-center' style={{marginTop:"1.3rem"}} >
      <span className='align-items-center'>
         <span style={experienceStyles}>20+ </span>Years of Experience
      </span>
      <span>
      <span style={experienceStyles}>25K </span>Complete Projects
      </span> 
      <span>
      <span style={experienceStyles}>2.2K </span>Trusted Companies
      </span>
      </div>
    </div>
    </div>
  )
}

export default ExperienceItems
