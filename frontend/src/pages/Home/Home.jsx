import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Doctors from '../../Components/Doctors/Doctors'
import OurServices from '../../Components/OurServices/OurServices'
import AboutUs from '../../Components/About/AboutUs'
import ContactUs from '../../Components/Contact Us/ContactUs'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <> <div>
        <Header />
        <Doctors />     
        <AboutUs />
        <OurServices />
        <Testimonials/>
        <ContactUs/>
        <Footer/>
    </div></>
  )
}

export default Home