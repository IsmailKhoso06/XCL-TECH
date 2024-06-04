import React, { useState } from 'react';
import "./ImageAnimation.css"


function HeroText() {

    const [isHovered, setHovered] = useState(false)


    const handleMouseEnter = () => {
        setHovered(true)
    }
    const handleMouseLeave = () => {
        setHovered(false)
    }

    
    const TechnologyStyle = {
        color : isHovered ?  "#F67510": "white" ,
        fontSize:"80px",
        letterSpacing:"2px"
    }

    
    const [isLets, setIsLets] = useState(false)

    
    const handleMouseEnterHeroLets = () => {
        setIsLets(true)
    }
    const handleMouseLeaveHeroLets = () => {
        setIsLets(false)
    }

    const HeroLets = {
        color : isLets ?  "#F67510": "white" ,
        fontSize:"40px", 
        letterSpacing:"2px",
    }
    
    
    const [isNew, setIsNew] = useState(false)

    
    const handleMouseEnterHeroNew = () => {
        setIsNew(true)
    }
    const handleMouseLeaveHeroNew = () => {
        setIsNew(false)
    }

    const HeroNew = {
        color : isNew ?  "#F67510": "white" ,
        fontSize:"40px",
        letterSpacing:"2px",
        cursor: "pointer"
    }


  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start"  style={{marginTop:"80px", marginLeft:"-100px"}}>
        <span className="display-4 text-white mb-3 HeroText">
        <span style={HeroLets} onMouseEnter={handleMouseEnterHeroLets} onMouseLeave={handleMouseLeaveHeroLets}>
        <span>Let's </span>
        <span>Take </span>
        </span>
         <br/>
        <span style={TechnologyStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >TECHNOLOGY</span> <br/>
        <span style={HeroNew} onMouseEnter={handleMouseEnterHeroNew} onMouseLeave={handleMouseLeaveHeroNew} >
        <span>To a </span>
        <span>New </span> 
        </span>
        <br/>
        <span style={{fontSize:"70px", fontWeight:"800", letterSpacing:"10px", color:"#F67510"}}>DIMENSION</span>
        </span>
        </div>
      <div className="col-md-10 mx-auto col-lg-5" style={{position:"relative"}}>
      <img src='./public/Man.png' className='imageAnimation' style={{width:"280px", position:"absolute", top:"-180px"}} />
      </div>
    </div>
  </div>
  )
} 

export default HeroText
