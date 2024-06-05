import './App.css';
import AboutUs from './assets/components/AboutUs';
import CallToAction from './assets/components/CallToAction';
import Cards from './assets/components/Cards';
import Clients from './assets/components/Clients';
import Experience from './assets/components/Experience';
import Explore from './assets/components/Explore';
import Footer from './assets/components/Footer';
import Header from "./assets/components/Header"
import HeroSec from './assets/components/HeroSec';
import Products from './assets/components/Products';
import Services from './assets/components/Services';

function App() {

  return (
    <>
    <Header/>
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

export default App
