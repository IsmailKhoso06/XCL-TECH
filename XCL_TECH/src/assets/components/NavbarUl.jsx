import React from 'react'
import NavbarLi from './NavbarLi'

function NavbarUl() {

  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white" style={{paddingRight: "50px" , fontSize:"20px", gap:"20px", color:"white !important"}}>
      <NavbarLi name={"Home"} />
      <NavbarLi name={"About"}/>
      <NavbarLi name={"Clients"}/>
      <NavbarLi name={"Products"}/>
      <NavbarLi name={"Services"}/>
      <NavbarLi name={"Work"}/>
      <NavbarLi name={"Careers"}/>
      <NavbarLi name={"Contact"}/>
      </ul>
    </div> 
  )
}

export default NavbarUl
