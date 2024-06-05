import React from 'react'
import ExperienceItems from './ExperienceItems'

function Experience() {

    const ExperienceStyles = {
        height: "130px",
        marginBottom:"200px",
        background: "#F67510"
    }


  return (
    <div style={ExperienceStyles}>
      <ExperienceItems/>
    </div>
  )
}

export default Experience
