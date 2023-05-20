import Head from 'next/head';
import Nav from './nav.jsx';

const Header = () => {
    return (
        <header className='border-b border-gray-400'>
            <Head>
                <title>Explore OpenGeekk's</title>
                <meta name="description" content="A promotional OpenGeeks official web application." />
            </Head>
            <div className='mt-6 px-6'>
                <Nav />
            </div>
            <br />
        </header>
    );
}


export default Header;