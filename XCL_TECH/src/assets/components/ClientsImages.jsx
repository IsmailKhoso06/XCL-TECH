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
            <div  key={index} className='col-lg-2'>
                <img src={image} style={imagesStyle}/>
            </div>
        ))}
    </div>
      
    </div>
  )
}

export default ClientsImages
