import './App.css';
import AboutUs from './assets/components/AboutUs';
import Cards from './assets/components/Cards';
import Experience from './assets/components/Experience';
import Header from "./assets/components/Header"
import HeroSec from './assets/components/HeroSec';
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
    </>
  )
}

export default App
