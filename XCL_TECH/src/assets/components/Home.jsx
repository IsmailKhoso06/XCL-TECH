import React from 'react';

import AboutUs from './AboutUs';
import CallToAction from './CallToAction';
import Cards from './Cards';
import Clients from './Clients';
import Experience from './Experience';
import Explore from './Explore';
import Footer from './Footer';
import Header from "./Header"
import HeroSec from './HeroSec';
import Products from './Products';
import Services from './Services';

function Home() {
  return (
    <>
        {/* <Header/> */}
    <HeroSec/>
    <div style={{paddingTop:"12rem", paddingBottom: "6rem"}}>
    <Cards/>
    </div>
    <AboutUs/>
    <Services/> 
    <Experience/>
    <Explore/>  
    <Clients/>
    <Products/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default Home
