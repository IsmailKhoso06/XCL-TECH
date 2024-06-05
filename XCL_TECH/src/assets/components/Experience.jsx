import React from 'react'
import ExperienceItems from './ExperienceItems'

function Experience() {

    const ExperienceStyles = {
        height: "130px",
        background: "#F67510",
        marginBottom:"50px"
    }


  return (
    <div style={ExperienceStyles}>
      <ExperienceItems/>
    </div>
  )
}

export default Experience
