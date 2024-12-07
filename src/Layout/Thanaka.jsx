import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Thanaka = () => {
    return (
        <div>
            <div className='fixed w-full'>
                <Navbar />
            </div>

            <div className='bg-[#FFFFFF]'>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Thanaka;