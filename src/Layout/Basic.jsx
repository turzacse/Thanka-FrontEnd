import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Basic = () => {
    return (
        <div>
            <Navbar/>

            <div className='bg-[#BBCCDB]'>
                <Outlet/>
            </div>

            <Footer/>
        </div>
    );
};

export default Basic;