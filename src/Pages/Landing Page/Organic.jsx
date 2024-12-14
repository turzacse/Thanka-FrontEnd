import React from 'react';

const Organic = () => {
    return (
        <div
            style={{
                fontFamily: 'Josefin Sans sans-serif'
            }}
            className='bg-[#E1F3F3] py-20 px-10 josefin'>
            <h6 className='text-[18px] text-[#EE2D7A] text-center'>
                A Nature's Touch
            </h6>


            <h1 className='text-[50px] text-center font-semibold' ><span className='text-[#EE2D7A] '>100%</span> Original & Organic</h1>

            <p className='text-center md:w-1/2 w-full md:mx-auto mx-4'>Our products are of high quality, natural and organic. And, you'll never find anything synthetic or toxic in our skincare, makeup, hair, and body products. We follow a strict methodology in sourcing and using the ingredients in our products.</p>

            <div className="flex justify-center mt-5">
                
                <button className="rounded-full w-[250px] border-2 border-[#EE2D7A] py-2 px-4 mx-auto text-black font-medium hover:bg-[#EE2D7A] hover:text-white transition duration-300">
                    EXPLORE THANAKA IVA 
                </button>


            </div>
        </div>
    );
};

export default Organic;