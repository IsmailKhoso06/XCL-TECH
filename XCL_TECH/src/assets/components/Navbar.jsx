import React from 'react'
import NavbarUl from './NavbarUl'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/logo">
        <img src='./public/Logo.png' style={{width: "150px", margin: "20px", marginBottom: "0px"}}/>
    </Link>
    </div>
      <NavbarUl/>
      </nav>
    </div>
  )
}

export default Navbar
 