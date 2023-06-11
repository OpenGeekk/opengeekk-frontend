import React from 'react'
import Twitter from '../images/Twitter';
import Facebook from '../images/Facebook';
import Instagram from '../images/Instagram';

const footer = () => {
    return (
        <footer className='border-t border-gray-400'>
            <div className='md:max-auto'>
                <div>
                    <h1 className='flex font-normal justify-center'>
                       <span>&copy; 2023 Your Company. All rights reserved.</span>
                    </h1>
                </div>
                <div className='flex justify-between w-1/3 mx-auto mt-4'>
                      <div>
                        <Twitter />
                      </div>
                      <div>
                        <Facebook />
                      </div>
                      <div>
                        <Instagram /> 
                      </div>
                </div>

            </div>
        </footer>
    );
}

export default footer