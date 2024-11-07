import React from "react";
import Featured from "./Featured";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <div className=" p-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#658BAE] to-[#123955] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Discover the Natural Benefits of Thanaka Face Pack</h1>
        <p className="text-lg mb-6">Experience the ancient beauty secret of Myanmar with our all-natural face pack.</p>
        <button className="bg-white text-green-600 px-6 py-3 font-semibold rounded-lg hover:bg-gray-200">
          Shop Now
        </button>
      </section>

      {/* Product Highlights */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-6">Why Choose Thanaka Face Pack?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="font-semibold text-xl mb-2 text-yellow-600 ">100% Natural Ingredients</h3>
            <p>Only the purest natural ingredients, with no chemicals or additives.</p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="font-semibold text-xl mb-2 text-yellow-600">Traditional Myanmar Formula</h3>
            <p>Based on centuries-old skincare practices passed down through generations.</p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="font-semibold text-xl mb-2 text-yellow-600">Suitable for All Skin Types</h3>
            <p>Gently nourishes and revitalizes every skin type.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <Featured/>

      {/* Customer Reviews */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-xs">
            <p className="italic mb-2">"The Thanaka Face Pack has transformed my skin!"</p>
            <p className="text-sm font-semibold">- Jane Doe</p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-xs">
            <p className="italic mb-2">"I love that it's all-natural and perfect for my sensitive skin."</p>
            <p className="text-sm font-semibold">- John Smith</p>
          </div>
          {/* Add more review cards as needed */}
        </div>
      </section>

      <FAQ/>
      <ContactUs/>
    </div>
  );
}

export default Home;
