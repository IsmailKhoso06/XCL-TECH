import React, { useState } from 'react'

function ExploreImages({ExploreImages}) {



    const [imgScale, setImgScale] = useState(false)

    const handleOnMouseEnter = () => {
        setImgScale(true)
    }

    const handleOnMouseLeave = () => {
        setImgScale(false)
    }



    const imgStyle ={
        // transform: imgScale ? "scale(1.2)" : "scale(1)",
        width:"430px",
        marginTop: "10px"
    }

  return (
    <div className='container'>
    <div className='row'>
        {ExploreImages.map((image, index)=>(
            
        <div key={index} className='col-lg-4'>
            <img src={image} style={imgStyle} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} />
        </div>
        ))}


    </div>
      
    </div>
  )
}

export default ExploreImages
