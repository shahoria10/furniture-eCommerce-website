import React from 'react'
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';
import Exprience from '../home/Exprience';
import Meterials from './Meterials';
import Testimonial from './Testimonial';


function Home() {
  return (
    <>
      <Hero/>
    <WhyChoose />
    <Products headline="Best Selling Product" />
    <Exprience />
    <Meterials />
    <Testimonial />
    </>
  )
}

export default Home;