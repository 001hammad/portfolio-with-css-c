import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';

const Home = () => {
  return (
    <div id='Home'>
      <Header/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
