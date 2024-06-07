import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavbarUl() {

  
  const [liColor, setLiColor] = useState(false)

  const handleOnMouseEnterLi = () => {
    setLiColor(true)
  }

  const handleOnMouseLeaveLi = () => {
    setLiColor(false)
  }



  const liStyle = {
    color: liColor ? "#F67510" : "white", 
    cursor: "pointer"
  }



  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white" style={{paddingRight: "50px" , fontSize:"20px", gap:"20px", color:"white !important"}}>
     <li className="nav-item">
          <Link className="nav-link" to='/' style={liStyle} onMouseEnter={handleOnMouseEnterLi} onMouseLeave={handleOnMouseLeaveLi} >Home</Link>
        </li>
     <li className="nav-item">
          <Link className="nav-link" to='/about' style={liStyle} onMouseEnter={handleOnMouseEnterLi} onMouseLeave={handleOnMouseLeaveLi} >About</Link>
        </li>
     <li className="nav-item">
          <Link className="nav-link" to='/clients' style={liStyle} onMouseEnter={handleOnMouseEnterLi} onMouseLeave={handleOnMouseLeaveLi} >Clients</Link>
        </li>
     <li className="nav-item">
          <Link className="nav-link" to='/products' style={liStyle} onMouseEnter={handleOnMouseEnterLi} onMouseLeave={handleOnMouseLeaveLi} >Products</Link>
        </li>
     <li className="nav-item">
          <Link className="nav-link" to='/services' style={liStyle} onMouseEnter={handleOnMouseEnterLi} onMouseLeave={handleOnMouseLeaveLi} >Services</Link>
        </li>
     <li className="nav-item">
          <Link className="nav-link" to='/work' style={liStyle} onMouseEnter={handleOnMouseEnterLi} onMouseLeave={handleOnMouseLeaveLi} >Work</Link>
        </li>
     <li className="nav-item">
          <Link className="nav-link" to='/careers' style={liStyle} onMouseEnter={handleOnMouseEnterLi} onMouseLeave={handleOnMouseLeaveLi} >Careers</Link>
        </li>
     <li className="nav-item">
          <Link className="nav-link" to='/contact' style={liStyle} onMouseEnter={handleOnMouseEnterLi} onMouseLeave={handleOnMouseLeaveLi} >Contact</Link>
        </li>
      </ul>
    </div> 
  )
}

export default NavbarUl
