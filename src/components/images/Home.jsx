import React from 'react'

const Facebook = ({ className, color = "none" }) => {
    return (
        <svg className={className} width="30" height="34" viewBox="0 0 34 40" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1079 3.16707L3.71453 13.3473C2.54471 14.4845 1.79482 16.8875 2.04978 18.6851L4.04449 33.2859C4.40443 35.8906 6.44413 38 8.6038 38H25.4013C27.5459 38 29.6006 35.8722 29.9606 33.2859L31.9553 18.6851C32.1952 16.8875 31.4453 14.4845 30.2905 13.3473L19.8971 3.18541C18.2923 1.60793 15.6977 1.60793 14.1079 3.16707Z" stroke="#FF6678" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default Facebook