import React from "react";

function Home() {
  return (
    <div className="bg-gray-400 p-4">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Discover the Natural Benefits of Thanaka Face Pack</h1>
        <p className="text-lg mb-6">Experience the ancient beauty secret of Myanmar with our all-natural face pack.</p>
        <button className="bg-white text-green-600 px-6 py-3 font-semibold rounded-lg hover:bg-gray-200">
          Shop Now
        </button>
      </section>

      {/* Product Highlights */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Thanaka Face Pack?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="font-semibold text-xl mb-2">100% Natural Ingredients</h3>
            <p>Only the purest natural ingredients, with no chemicals or additives.</p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="font-semibold text-xl mb-2">Traditional Myanmar Formula</h3>
            <p>Based on centuries-old skincare practices passed down through generations.</p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="font-semibold text-xl mb-2">Suitable for All Skin Types</h3>
            <p>Gently nourishes and revitalizes every skin type.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-200 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
            <img src="https://via.placeholder.com/150" alt="Thanaka Face Pack" className="w-full rounded-md mb-4" />
            <h3 className="font-semibold text-xl mb-2">Thanaka Face Pack</h3>
            <p>$20.00</p>
            <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-700">
              Add to Cart
            </button>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </section>

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
    </div>
  );
}

export default Home;
