import React from 'react'
import CenterHeading from './CenterHeading'
import ExperienceFilterButtons from './ExperienceFilterButtons'
import ExploreImages from './ExploreImages'

function Explore() {

    const paraStyle ={
        textAlign: "center",
        marginLeft:"34rem",
        marginRight: "34rem"
    }

    const  buttons = [
        "All",
        "Software",
        "Branding",
        "Digital",
        "E-Commerce",
        "SEO"
    ]

    const WorkImages = [
     
        "./public/Explore01.png",
        "./public/Explore02.jpg",
         "./public/Explore03.jpg",
        "./public/Explore04.jpg",
        "./public/Explore05.jpg",
        "./public/Explore06.jpg",
        
    ]

  return (
    <>
      <CenterHeading heading={"EXPLORE OUR WORK"} />
      <p style={paraStyle}>Build your brand with an insight-driven advertising agency that believes in taking action. Read on to discover just how.
      </p>

    <ExperienceFilterButtons button={buttons} />
    <ExploreImages ExploreImages={WorkImages} />
    </>
  )
}

export default Explore
