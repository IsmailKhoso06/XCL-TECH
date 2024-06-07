import React from 'react';
import "./Footer.css";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import Copyright from './Copyright';






function Footer() {


  const SectionStyle = {
    fontSize: "40px",
    textAlign: "center"
  }

  const paraStyle = {
    textAlign: "center",
    lineHeight: "2"
  }

  return (
    <div>
      <div className="container footer"  style={{marginTop:"50px"}}>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-4 my-2">
          <div className="col-lg-4 mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              <img style={{ width: "150px", marginTop:"-30px" }} src='./public/FooterLogo.png' />
            </a>
            <ul className="nav flex-column" style={{ lineHeight: "2.3" }}>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><MdOutlineMail /> info@xcltechnologies.com</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><FaWhatsapp /> +92 332 2007888</a></li>
            </ul>
              <ul className="d-flex mt-3" style={{listStyle:"none", fontSize:"20px", gap:"20px", marginLeft:"-20px"}}>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><FaFacebook /></a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><FaLinkedin /></a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><IoLogoInstagram /></a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><FaTwitter /></a></li>
              </ul>
          </div>

          <div className="col-lg-4 mb-3">
            <h5 className='pakistan' style={SectionStyle}>PAKISTAN</h5>
            <div className='row' style={{ marginLeft: "-70px" }} >
              <div className='col-lg-6'>
                <p style={paraStyle}>DEFENCE <br /> HYDERABAD, <br /> SINDH <br /> (022) 6111876</p>
              </div>
             
              <div className='col-lg-6'>
                <p style={paraStyle}>House No:51-L <br /> Block 2 P.E.C.H.S <br /> Karachi <br /> +92 332 3549993</p>

              </div>
            </div>
          </div>

          <div className="col-lg-2 mb-3">
            <h5 style={SectionStyle}>UAE</h5>
            <p style={paraStyle}>HAMRIYA FREE ZONE <br /> P.O BOX:49167 <br /> +971 06 52 69112</p>

          </div>

          <div className="col-lg-2 mb-3">
            <h5 style={SectionStyle}>USA</h5>
            <p style={paraStyle}>VIENNA , VA <br /> P.O BOX:22182 <br />  +1 443 653 5673</p>
          </div>

          <Copyright/>
        </footer>
      </div>
    </div>
  )
}

export default Footer
