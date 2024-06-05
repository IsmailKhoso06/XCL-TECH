import React from 'react'
import CenterHeading from './CenterHeading'
import ClientsImages from './ClientsImages'

function Clients() {

    const Clients =[
        "./public/01.png",
        "./public/02.png",
        "./public/03.png",
        "./public/04.png",
        "./public/05.png",
        "./public/06.png",
        "./public/07.png",
        "./public/08.png",
        "./public/09.png",
        "./public/10.png",
        "./public/11.png",
        "./public/12.png",
        "./public/13.png",
        "./public/14.png",
        "./public/15.png",
        "./public/16.png",
        "./public/17.png",
        "./public/18.png",
        "./public/19.png",
        "./public/20.png",
        "./public/21.png",
        "./public/22.png",
        "./public/23.png",
        "./public/24.png",
    ]

  return (
    <div className='my-5'>
      <CenterHeading heading={"OUR CLIENTS"}/>
      <ClientsImages images={Clients} />
    </div>
  )
}

export default Clients
