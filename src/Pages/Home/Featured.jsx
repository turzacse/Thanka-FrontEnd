import React from 'react';
import img from './thanka.jpg'

const Featured = () => {
    const products = [
        {
            name: 'Thanka Face Pack',
            price: 250,
        },
        {
            name: 'Thanka Face Pack',
            price: 250,
        },
        {
            name: 'Thanka Face Pack',
            price: 250,
        },
        {
            name: 'Thanka Face Pack',
            price: 250,
        },
        // {
        //     name: 'Thanka Face Pack',
        //     price: 250,
        // },
        // {
        //     name: 'Thanka Face Pack',
        //     price: 250,
        // },
    ]
    return (
        <section className="bg-gradient-to-r from-[#658BAE] to-[#123955] py-8 pb-16 rounded-lg px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Featured Products</h2>
        <div className='grid grid-cols-4 gap-4'>
            {
                products?.map((item, index) => <div className="bg-white p-4 rounded-lg shadow-md max-w-xs">
                <img src={img} alt="Thanaka Face Pack" className="rounded-md mb-4 h-[200px] w-[250px] mx-auto" />
                <h3 className="font-semibold text-xl mb-2">{item?.name}</h3>
                <p>TK {item?.price}</p>
                <button className="bg-[#163D5A] text-white px-4 py-2 mt-4 rounded-lg hover:bg-[#0c63a5]">
                  Add to Cart
                </button>
              </div>)
            }
        </div>
      </section>
    );
};

export default Featured;