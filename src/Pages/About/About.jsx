import React from "react";
import img from './Founded.jpg'

const AboutUs = () => {
  return (
    <div className=" py-12">
      {/* Header */}
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">About Us</h2>
      
      {/* Introduction Section */}
      <div className=" text-center mx-20 mb-12">
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to [Your Business Name]! We are dedicated to providing high-quality, natural skincare products, with our signature Thanaka Face Pack as a customer favorite.
          Our mission is to bring the best of natural skincare to everyone, enhancing both beauty and confidence through eco-friendly and safe ingredients.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="flex bg-gradient-to-r px-20 from-[#658BAE] to-[#123955] mb-10 py-16">
      <div className="bg-white rounded-lg shadow-md p-6 w-1/3 text-center mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Our mission is to empower individuals by providing natural skincare products that enhance well-being and confidence. We envision a world where beauty and sustainability go hand in hand, promoting healthy skin and a healthy planet.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 w-1/3 text-center mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Our mission is to empower individuals by providing natural skincare products that enhance well-being and confidence. We envision a world where beauty and sustainability go hand in hand, promoting healthy skin and a healthy planet.
        </p>
      </div>
      </div>

      {/* Team Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h3>
        <div className="flex justify-center gap-10">
          
            <div className="bg-gradient-to-r px-20 from-[#658BAE] to-[#123955]  rounded-lg shadow-lg p-4 text-center">
              <img
                src={img}
                // alt={}
                className="w-44 h-44 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-extrabold text-gray-200">Jannatul Ferdous</h4>
              <p className="text-gray-50 font-bold">Founder</p>
            </div>

            <div className="bg-gradient-to-r px-20 from-[#658BAE] to-[#123955]  rounded-lg shadow-lg p-4 text-center">
              <img
                src={img}
                // alt={}
                className="w-44 h-44 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-extrabold text-gray-200">Jannatul Ferdous</h4>
              <p className="text-gray-50 font-bold">Technical Officer</p>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
