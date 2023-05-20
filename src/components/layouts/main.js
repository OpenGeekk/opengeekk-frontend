import React from "react";
import Header from './header.js';
import Footer from './footer.js';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="min-h-48">{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;