import React from 'react';
import "./CardsAnimation.css";

function ServiceCards() {


    const ImageCSS = {
         marginRight:"0.7rem",
         borderRadius:"50%", 
         border:"1px solid black", 
         padding:"3px"
    }

    const cardCSS = {
        width:"32%",
        borderRadius:"8px"
    }


  return (
    <>
      <div className="row">
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover" style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/Domain.png' style={ImageCSS} />
        <h4 className="fw-normal py-3">Domain & Web Hosting</h4>
      </div>
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover" style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/Digital.png' style={ImageCSS} />
        <h4 className="fw-normal py-3">Digital Marketing</h4>
      </div>
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover" style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/Branding.png' style={ImageCSS} />
        <h4 className="fw-normal py-3">Branding & Graphic Design</h4>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover"  style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/WebDevelopment.png' style={ImageCSS} />
        <h4 className="fw-normal py-3">Web Design & Development</h4>
      </div>
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover"  style={cardCSS} >
        <img className="rounded-circle serviceImages" src='./public/CMS.png'style={ImageCSS} />
        <h4 className="fw-normal py-3">CMS & E-commerce</h4>
      </div>
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover"  style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/Human.png' style={ImageCSS} />
        <h4 className="fw-normal py-3">Human Resource</h4>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover"  style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/AppDev.png' style={ImageCSS} />
        <h4 className="fw-normal py-3">App Development</h4>
      </div>
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover"  style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/Newtwork.png' style={ImageCSS} />
        <h4 className="fw-normal py-3">Network & Surveillance</h4>
      </div>
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover"  style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/Software.png' style={ImageCSS} />
        <h4 className="fw-normal py-3">Software Development</h4>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover"  style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/General.png' style={ImageCSS}/>
        <h4 className="fw-normal py-3">General Procurment</h4>
      </div>
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover"  style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/Security.png' style={ImageCSS}/>
        <h4 className="fw-normal py-3">Surveillance Security System</h4>
      </div>
      <div className="col-lg-3 d-flex text-dark my-2 py-3 mx-2 cardHover"  style={cardCSS} >
        <img className="rounded-circle  serviceImages" src='./public/IT.png' style={ImageCSS}/>
        <h4 className="fw-normal py-3">IT Infrastructure Setup</h4>
      </div>
      </div>
    </>
  )
}

export default ServiceCards
