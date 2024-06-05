import React from 'react'

function ClientsImages({images}) {

    const imagesStyle = {
        width: "108%",
        marginTop:"7px"
    }

  return (
    <div className='container'>
    <div className='row'>
        {images.map((image, index)=>(
            <div className='col-lg-2'>
                <img src={image}key={index} style={imagesStyle}/>
            </div>
        ))}
    </div>
      
    </div>
  )
}

export default ClientsImages
