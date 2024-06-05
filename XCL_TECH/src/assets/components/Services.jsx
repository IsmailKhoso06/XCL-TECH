import React from 'react'
import CenterHeading from './CenterHeading'
import Cards from './Cards'
import ServiceCards from './ServiceCards'

function Services() {

  let heading = {
    Name : "SERVICES"
  }
  return (
    <div className='container' style={{paddingTop:"5rem", paddingBottom:"3rem"}}>
       <CenterHeading heading={heading.Name} />
       <h6 className="text-center">Services is our Bussiness, Perfection is our Goal, Satisfication is our Gurantee.</h6>      
      <ServiceCards/>
    </div>
  )
}

export default Services
 