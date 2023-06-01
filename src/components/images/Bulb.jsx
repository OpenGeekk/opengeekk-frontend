import React from 'react'

const Bulb = ({ className, color = "#6691FF" }) => {
    return (
        <svg className={className} width="30" height="34" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 25.3514C7 22.1075 2 19.5135 2 13.6757C2 7.83784 7 2 17 2C27 2 32 7.83784 32 13.6757C32 19.5135 27 22.1075 27 25.3514" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.25 31.1892H25.75M12 38H22" stroke={color} strokeWidth="3" strokeLinecap="round" />
        </svg>

    )
}

export default Bulb