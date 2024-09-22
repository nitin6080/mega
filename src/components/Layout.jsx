import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div className='h-screen w-screen flex flex-col m-0 p-0'>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
);

export default Layout;
