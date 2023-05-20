import React from 'react';
import Link from 'next/link';

/* Import SVGs */
import Brain from '../images/Brain';
import Bulb from '../images/Bulb';
import Home from '../images/Home';
import Team from '../images/Team';
import Projects from '../images/Projects';
import Facebook from '../images/Facebook';
import Twitter from '../images/Twitter';
import Instagram from '../images/Instagram';



const Nav = () => {
    return (
        <nav>
            <ul className='flex flex-row justify-between flex-wrap'>
                <li>
                    <Link href="/">
                        <Home />
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <Projects />
                    </Link>
                </li>
                <li>
                    <Link href="/skills">
                        <Brain />
                    </Link>
                </li>
                <li>
                    <Link href="/team">
                        <Team />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Bulb />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;