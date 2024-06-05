import React from 'react'

function Footer() {


    const SectionStyle ={
        fontSize:"40px",
        marginLeft:"-20px"
    }

  return (
    <div>
      <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
       <img src='./public/Logo.png'/>
      </a>
      <p class="">© 2024</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5 style={SectionStyle}>PAKISTAN</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5 style={SectionStyle}>UAE</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5 style={SectionStyle}>USA</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">About</a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer
