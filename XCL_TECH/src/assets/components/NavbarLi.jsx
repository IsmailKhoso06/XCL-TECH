import React, { useState } from 'react'

function NavbarLi(props) {


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
    <>     
      <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#" style={liStyle} onMouseEnter={handleOnMouseEnterLi} onMouseLeave={handleOnMouseLeaveLi} >{props.name}</a>

        </li>

    </>
  )
}

export default NavbarLi
