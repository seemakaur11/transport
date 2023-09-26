import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import Service from './Service'
import OurSolution from './OurSolution'
import { OurClients } from './OurClients'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className=''>
        <Navbar />
        <Hero />
        <Card />
        <Service/>
        <OurSolution/>
        <OurClients/>
        <Footer/>
    </div>
  )
}

export default Layout