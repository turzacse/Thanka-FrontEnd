import React from 'react';
import Quality from './Quality';
import LatestProduct from './LatestProduct';
import Organic from './Organic';
import Beautify from './Beautify';

const LandingPage = () => {
    return (
        <div className=''>
            {/* <img src='slider1.jpg' className='' /> */}

            {/* Header Section */}
            <div className='h-[80px]'>

            </div>
            <div
                className="relative h-screen bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: "url('slider1.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>

                {/* Content */}
                <div className='flex w-full justify-between'>
                    <div className='flex-1'>

                    </div>
                    
                    
                    

                 
                    <div className="flex-1 ml-48 px-10 z-10 text-black">
                        <h6 className="text-lg text-[#EE2D7A] font-medium">
                            20% Discount for all products
                        </h6>
                        <h1 className="text-5xl text-black font-bold leading-snug mt-4">
                            A Perfect and Incredible Cosmetics!
                        </h1>
                        <p className="text-lg mt-4">
                            Choose our herbal beauty cosmetic products to look good which last
                            all day, get smooth gentle skin, natural glow, silky soft hair.
                        </p>
                        <button className="rounded-full mt-8 w-[200px] border-2 border-[#EE2D7A] py-2 px-4 mx-auto  hover:bg-[#EE2D7A] hover:text-white transition duration-300">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>

            <LatestProduct />
            <Quality />
            <Organic />
            <Beautify />
        </div>
    );
};

export default LandingPage;