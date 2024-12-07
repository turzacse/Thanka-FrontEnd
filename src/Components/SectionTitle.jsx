import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className="text-center my-10">
            {/* Title */}
            <h2 className="text-3xl tracking-wider text-gray-700 font-playfair uppercase">{title}</h2>

            {/* Underline */}
            <div className="mt-2 flex justify-center">
                <div className="relative bg-[#f7b733] h-[4px] w-24 ">
                    {/* White strip */}
                    <div className="absolute top-[1px] left-1/2 transform -translate-x-1/2 bg-white  h-[2px] w-8"></div>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;