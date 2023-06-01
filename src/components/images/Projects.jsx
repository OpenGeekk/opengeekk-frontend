import React from 'react'

const Projects = ({ className, color = "#6691FF" }) => {
    return (
        <svg className={className} width="30" height="34" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3333 20.3598H21.9999" stroke={color} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.3333 27.56H17.6333" stroke={color} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.2666 2H13.6666C11.9999 2 10.3333 2 10.3333 5.6C10.3333 9.2 11.9999 9.2 13.6666 9.2H20.3333C23.6666 9.2 23.6666 7.4 23.6666 5.6C23.6666 2 21.9999 2 20.3333 2" stroke={color} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 16.4C2 8.19205 4.78333 5.96005 10.3333 5.63605" stroke={color} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.6667 5.63605C29.2167 5.96005 32 8.17405 32 16.4V27.2C32 34.4 30.3333 38 22 38H12C3.66667 38 2 34.4 2 27.2V23.438" stroke={color} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )

}

export default Projects