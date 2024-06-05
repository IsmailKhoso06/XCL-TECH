import React from 'react'

function ExperienceFilterButtons({button}) {

    const buttonCSS = {
        color : "white",
        background: "#F67510",
        width:"150px",
        borderRadius : "20px",
        fontSize: "15px",
        margin: "20px 0px"
    }

  return (
    <div className='container'>
      <ul className='d-flex justify-content-around'>
        {button.map((button, index)=>(
            <button style={buttonCSS} key={index} className='btn btn primary'>{button}</button>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceFilterButtons
