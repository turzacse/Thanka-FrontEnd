import React from 'react';

// Import the Parisienne font from Google Fonts
import './Beautify.css'; // (optional: if you want to use a separate CSS file)
import img from './beautify.jpg'
import SectionTitle from '../../Components/SectionTitle';
import icon from '../../assets/Icons/img-9_180x.png'

const Beautify = () => {
    return (
        <section className='md:mx-32 mx-4 py-10'>
            <div className='flex gap-10'>
                <div className=''>
                    <h3 className="beautify-container">
                        Chemical Free
                    </h3>
                    <h2 className='text-[30px]'>Natural Product</h2>
                    <img src={img} alt="" />
                </div>
                <div className='md:py-10 flex flex-col justify-center w-[300px] mx-auto'>
                  <img className='h-[80px] w-[80px] mx-auto mb-0 pb-0' src={icon} alt="" />
                  <SectionTitle/>
                  <h2 className='text-[30px]  mx-auto text-center font-medium'>PERFECT FLAWLESS SKIN TONE</h2>
                  <p className=' mx-auto text-center'>Professional makeup all in one set, including blush, eyeshadow, compact, foundation, lip color, and brushes. Select the perfect kit depending on your skin</p>
                  <button className='mt-10 text-white bg-gradient-to-r from-[#E49814] via-[#E49814] to-[#E49814] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#E49814] dark:focus:ring-[#E49814] shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 '>SHOP NOW</button>
                </div>
            </div>
        </section>
    );
};

export default Beautify;
