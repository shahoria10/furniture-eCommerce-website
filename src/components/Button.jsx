import React from 'react'
import buttonicon from "../assets/button-icon.png"


function Button({text}) {
    return (
        <button className="text-sm text-primary flex items-center gap- gap-1">
            {text}<img src={buttonicon} alt="btn icon" />
        </button>
    )
}

export default Button;