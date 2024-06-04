import React, { useState } from 'react'

function CardData(props) {


    const [imageScale, setImageScale] = useState(false)


    const handleOnMouseEnterImage =()=>{
        setImageScale(true)
    }


    const handleOnMouseLeaveImage =() =>{
        setImageScale(false)
    }

    const imgScale = {
        transform: imageScale ? "scale(1.2)" : "scale(1)",
    }
    

    const cardStyles ={
        textAlign: "center",
        padding:"0rem 5rem"
    }

    return ( 
        <>
            <div className="col-lg-4" style={cardStyles}>
                <img className="bd-placeholder-img rounded-circle cardsImages" width="140" height="140" role="img" style={imgScale} src={props.imageSrc} onMouseEnter={handleOnMouseEnterImage} onMouseLeave={handleOnMouseLeaveImage} aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title>
                <h2 className="fw-normal">{props.heading}</h2>
                <p>{props.para}</p>
            </div>
        </>
    )
}

export default CardData
