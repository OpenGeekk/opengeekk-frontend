import React from "react";
import Header from './header.js';
import Footer from './footer.js';
import { ThemeProvider } from "next-themes";

const MainLayout = ({ children }) => {
    return (
        <section className=" min-h-48  w-mx w-auto">
        <ThemeProvider>
            <Header />
            
            <main className="min-h-48  w-mx md:w-auto">{children}</main>
        
            <Footer />
        </ThemeProvider>
        </section>
    );
};

export default MainLayout;