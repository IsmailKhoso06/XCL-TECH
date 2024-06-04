import React from 'react'
import CardData from './CardData'

function Cards() {
    return (
    <>
        <div className="container marketing">

            <div className="row">
                <CardData imageSrc={"./public/Creative.png"} heading={"CREATIVE"} para={"With our wild minds and disciplined eyes, our creativity is naturally connected to our enthusiasm."} />
                
                <CardData imageSrc={"./public/Innovative.png"} heading={"INNOVATIVE"} para={"We push beyond our limits to make each of our works stand out and bring out something new"} />

                <CardData imageSrc={"./public/Proactive.png"} heading={"PROACTIVE"} para={"Our Proactive culture simplifying leadership, increase positive results and build a more joyful workplace."} />
            </div>
                </div>
            </>
            )
}

            export default Cards
