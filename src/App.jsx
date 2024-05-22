import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import MultipleItems from './Components/Slider/SliderData'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
      <div>
        <Navbar />
        <Hero/>
        <Title subTitle='OUR PROGRAMS' title='We Offer Program' />
        <Programs />
        <Title title='About Us' />
        <About />
        <Title subTitle='Gallery' title='campus Photos' />
        <Campus />
        <Title subTitle='Testimonials' title='What Student Says' />
        <MultipleItems/>
        <Title subTitle='Contact Us' title='Get In Touch' />
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App
