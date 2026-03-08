import React from 'react' 
import bannerImg from "../../assets/banner.png"
import Products from './Products'


function Shop() {
  return (
    <section className="min-h-screen">
      {/*banner */}
      <div className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white" style={{backgroundImage: `url(${bannerImg})` }}>
        <h1 className="text-4x font-bold ">Shop Our Products</h1>
      </div >
      <Products headline="Whats Your Choise" />
    </section>
  )
}

export default Shop