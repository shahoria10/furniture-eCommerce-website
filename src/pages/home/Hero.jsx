import React from 'react'
import ToltipButton from '../../components/ToltipButton';
import { FaSearch } from "react-icons/fa";
import bannerImg from "../../assets/banner.png"
function Hero() {
  return (
    <section className="h-screen relative bg-cover bg-center text-white" style={{backgroundImage: `url(${bannerImg})` }}>
        <div className="md:pt-44 px-2 pt-24 text-center space-y-6 Md:w-1/2 mx-auto">
            <h1 className="text-4xl  lg:text-6xl font-medium lg:leading-tight leading-snug">Make your interior more
                minimalistic & modern</h1>
            <p className="text-xl font-normal lg:w-1/2 mx-auto">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

            {/* surch field */}
            <div className="relative inline-block z-30">
                <input type="text" placeholder="Surch furniture" className="w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none text-white placeholder:text-white" />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer">
                    <FaSearch />
                </div>
            </div>
        </div>
        {/* bootom blur effect */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent" />
        
        

        <div className="hidden xl:block absolute bottom-40 left-24 ">
            <ToltipButton position="bottom" />
        </div>
        <div className="hidden xl:block absolute bottom-52 left-96 ">
            <ToltipButton position="bottom" />
        </div>
        <div className="hidden xl:block absolute bottom-24 right-[820px] ">
            <ToltipButton position="bottom" />
        </div>
        <div className="hidden xl:block absolute bottom-12 right-20 ">
            <ToltipButton position="bottom" />
        </div>
    </section>
  )
}

export default Hero;