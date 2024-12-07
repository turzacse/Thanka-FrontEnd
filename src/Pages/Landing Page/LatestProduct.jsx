// import React from 'react';
// import SectionTitle from '../../Components/SectionTitle';

// const LatestProduct = () => {
//     return (
//         <div>
//             <SectionTitle title={'Latest product'}/>
//         </div>
//     );
// };

// export default LatestProduct;


import React from "react";
import SectionTitle from "../../Components/SectionTitle";

const LatestProduct = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Thanaka Lotion",
      price: "TK. 120.00",
      oldPrice: null, // If there's no old price
      image: "https://i.ibb.co.com/WWsGyp3/t1.jpg", // Replace with product image
      isOnSale: false,
    },
    {
      id: 2,
      name: "Thanaka Face Pack",
      price: "TK. 300.00",
      oldPrice: "TK. 521.00",
      image: "https://i.ibb.co.com/WWsGyp3/t1.jpg", // Replace with product image
      isOnSale: true,
    },
    {
      id: 3,
      name: "Thanaka Conditioner",
      price: "TK. 295.00",
      oldPrice: null,
      image: "https://i.ibb.co.com/WWsGyp3/t1.jpg", // Replace with product image
      isOnSale: false,
    },
    {
      id: 4,
      name: "Thanaka Shampoo",
      price: "TK. 150.00",
      oldPrice: null,
      image: "https://i.ibb.co.com/WWsGyp3/t1.jpg", // Replace with product image
      isOnSale: false,
    },
  ];

  return (
    <div className="py-10">
      {/* Section Title */}
      <SectionTitle title={"Latest Products"} />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 p-4 rounded-lg text-center"
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-40 object-contain"
              />
              {product.isOnSale && (
                <span className="absolute top-2 right-2 bg-[#f7b733] text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Sale
                </span>
              )}
            </div>

            {/* Product Price */}
            <div className="mt-4">
              <p className="text-orange-500 text-lg font-bold">{product.price}</p>
              {product.oldPrice && (
                <p className="text-sm text-gray-500 line-through">
                  {product.oldPrice}
                </p>
              )}
            </div>

            {/* Product Name */}
            <p className="mt-2 text-gray-800 font-medium">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
