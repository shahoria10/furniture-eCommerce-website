import React from 'react'
import { PiStarFill } from "react-icons/pi";
import { AiOutlineStar } from "react-icons/ai";

function Rating({ rating }) {
    const totalStar = 5;
    return (
        <>
            <div className="flex space-x-1">
                {
                    Array.from({ length: totalStar }, (_, index) => {
                        const starIndex = index + 1;
                        return starIndex <= rating ? (<PiStarFill key={index} className="text-yellow-500" />
                        ) : (<AiOutlineStar key={index} className="text-gray-400" />)
                    })
                }
            </div>
        </>
    )
}

export default Rating;