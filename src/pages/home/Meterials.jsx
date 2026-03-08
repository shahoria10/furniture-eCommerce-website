import React from 'react'
import ExprienceImg from "../../assets/expricences.png"
import Button from '../../components/Button';
import meterialImg1 from '../../assets/material1.png'
import meterialImg2 from '../../assets/material2.png'
import meterialImg3 from '../../assets/material3.png'

function Meterials() {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between">
        
        <div className="md:w-1/2 mx-auto">
            <h3 className="uppercase text-lg font-semibold text-primary">Materials</h3>
            <h2 className="capitalize text-4xl font-bold mb-4 lg:w-1/2">Very serious materials for making furniture</h2>
            <p className="text-secondary dark:text-white mb-5 lg:w-1/2">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
            <Button text="More Info" />
        </div>

        <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center ">
            <div>
                <img src={meterialImg1} alt="" />
                <img src={meterialImg2} alt="" />
            </div>
            <div className="md:col-span-2 col-span-1">
                <img src={meterialImg3} alt="" className="w-full md:h-[541px]" />
            </div>
        </div>
    </section>
  )
}

export default Meterials;