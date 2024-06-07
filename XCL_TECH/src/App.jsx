import './App.css';
import AboutUs from './assets/components/AboutUs';
import Clients from './assets/components/Clients';
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Products from './assets/components/Products';
import Services from './assets/components/Services';
import Experience from './assets/components/Experience';
import Cards from './assets/components/Cards';
import Explore from './assets/components/Explore';
import Products from './assets/components/Products';
import CallToAction from './assets/components/CallToAction';
import Footer from './assets/components/Footer';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logo' element={<Home />} />
          <Route path='/about' element={<>
            <AboutUs />
            <Services />
            <Experience />
            <Explore />
            <Clients />
            <Products />
            <CallToAction />
            <Footer />
            </>} />
          <Route path='/clients' element={<> <Clients />
            <Products />
            <CallToAction />
            <Footer /> </>} />
          {/* <Route path='/products' element={<Products/>} /> */}
          <Route path='/services' element={<Services />} />
          <Route path='/work' element={<Experience />} />
          <Route path='/careers' element={<Cards />} />
        </Routes>
      </Router>
    </>
  )
}

export default App