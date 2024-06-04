import React from 'react'
import NavbarUl from './NavbarUl'

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src='./public/Logo.png' style={{width: "150px", margin: "20px", marginBottom: "0px"}}/>
    </a>
    </div>
      <NavbarUl/>
      </nav>
    </div>
  )
}

export default Navbar
 