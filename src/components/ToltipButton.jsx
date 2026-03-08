import React from 'react'

function ToltipButton({position="bottom", colors=['bg-red-700', 'bg-green-700','bg-blue-700']}) {
  const positinClasses = {
    bottom:{
      toltip:'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
      arrow:'left-1/2 -translate-x-1/2 -bottom-2 border-1'
    },
    top:{
      toltip:'top-full left-1/2 transform -translate-x-1/2 mt-3',
      arrow:'left-1/2 -translate-x-1/2 -top-2 border-b'
    }
  }
  return (
    
        <div className="relative group">
            <button className="relative p-4 rounded-full border border bg-white text-xl ">
                <div className={`hidden absolute  p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex  ${positinClasses[position].toltip}`}>
                {
                  colors?.map((colors, index)=>(
                    <div ke={index} className={`size-6 ${colors} border border-white rounded-full `}></div>
                  ))
                }
                    
                    {/* toottip arrow */}
                    <div className={`absolute ${positinClasses[position].arrow} w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent border-t-8 border-t-white/35`}></div>

                </div>
            </button>
      </div>
  )
}

export default ToltipButton;