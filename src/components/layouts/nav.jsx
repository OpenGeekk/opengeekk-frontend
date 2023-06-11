import React from 'react';
import Link from 'next/link';

/* Import SVGs */
import Brain from '../images/Brain';
import Bulb from '../images/Bulb';
import Home from '../images/Home';
import Team from '../images/Team';
import Dark from '../Dark';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Projects from '../images/Projects';
import Facebook from '../images/Facebook';
import Twitter from '../images/Twitter';
import Instagram from '../images/Instagram';
import { useState } from 'react';
 function App() {
    const [nav , setNav]= useState(false);
    const showNav =()=>{
        if(nav==='close'){
            setNav('open');
            }else{
                setNav('close');
            }
            
    
    }
    return (
        <section>
            <nav className='flex md:flex-row justify-around '>
            
            <h1 className='font-bold ml-8'>OpenGeekk</h1>
                <ul className=' flex  md:flex-row flex-col  gap-x-32 flex-wrap px-[60px] '>
                    <li>
                        <Link href="/">
                            <Home /><p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <Projects /><p>Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills">
                            <Brain /><p>Skills</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/team">
                            <Team /><p>Team</p>
                        </Link>
                    </li> 
                    <li>
                        <Dark />
                    </li>
                </ul>
            </nav>
            <div className=''>
                <button
                    className="fixed right-[40px] text-3xl z-50 flex-nowrap md:hidden"
                    aria-hidden="false"
                    onClick={showNav}>
                    {nav ==='close'?  <CloseIcon/>:<MenuIcon/> }
                </button>
            </div>   
        </section>
    );
};

export default App;