import React from 'react'
import { products } from '../../utils/products';
import ProducCard from './ProducCard';
import { useState } from 'react';
import Buttonicon from "../../assets/button-icon.png"

function Products({ headline }) {
    const categories = ["Chair", "Beds", "Sofa", "Lamp"]
    const [selected, setSelected] = useState("Chair");
    const [visibleproduct, setVisibleproduct] = useState(4);
    const filterProducts = products.filter((product) => product.category === selected)

    const loadMoreProduct = () => {
        setVisibleproduct((prev) => prev + 4)
    }
    return (
        <div className="section-container">
            <div className="text-4xl font-bold text-center my-8">{headline}</div>

            {/* categori tabs */}
            <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
                <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
                    {
                        categories.map((categroy) => (
                            <button
                                onClick={() => {
                                    setSelected(categroy);
                                    setVisibleproduct(4)
                                }}
                                key={categroy} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${selected === categroy ? "bg-white text-primary" : "text-secondary"}`}>{categroy}</button>

                        ))
                    }
                </div>
            </div>

            {/* product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {
                    filterProducts.slice(0, visibleproduct).map((product, index) => (
                        <ProducCard key={index} product={product} />
                    ))
                }
            </div>

            {/* load more */}
            {
                visibleproduct < filterProducts.length && (
                    <div className="flex justify-center items-center">
                        <button
                        onClick={loadMoreProduct}
                        className="text-base font-semibold text-primary flex items-center gap- gap-1">
                            view All<img src={Buttonicon} alt="btn icon" />
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default Products;