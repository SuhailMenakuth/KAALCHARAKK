import React, { useContext, useEffect, useState } from 'react';
import { Footer, Nav } from '../Components';
import { CartDetails } from '../context/CartContext';

const Whishlist = () => {
  const { wishlist, user, addItem } = useContext(CartDetails);
  
  


  // useEffect(() => {
  //   console.log("Current Wishlist:", whishlist);
  // }, [whishlist]);
  

const handleclick = (product) => {
  addItem(product);
};

  // Handle click to add product to the cart

  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto p-10 font-montserrat">

        {/* Heading Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl text-black font-bold">
            {user.fname} {user.lname}'s Wishlist
          </h1>
        </div>

        {/* Products Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlist.length > 0 ? (
            // Mapping through wishlist items
            wishlist.map((product) => (
              <div
                key={product.id} 
                className="product-card flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-md"
              >
                {/* Product Image with Title Overlay */}
                <div className="relative h-56 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  {/* Title Overlay */}
                  <div className="absolute top-2 left-2 bg-greenDark text-gold text-xs px-3 py-1 rounded-full">
                    {product.title}
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="p-4 bg-white flex flex-col items-center space-y-2">
                  {/* Product Name */}
                  <h1 className="text-lg font-bold text-black">
                    {product.name}
                  </h1>

                  {/* Style and Type */}
                  <div className="text-sm text-gray-600">
                    <p>Style: {product.style}</p>
                    <p>Type: {product.type}</p>
                  </div>

                  {/* Price Section */}
                  <p className="text-lg text-black opacity-75">
                    ₹{product.price}
                  </p>

                  {/* Add to Cart Button */}
                  <button
                    className="mt-2 w-full bg-greenDark text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200"
                    onClick={() => handleclick(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            // Fallback message when the wishlist is empty
            <p className="col-span-full text-center text-gray-500">
              No items in your wishlist yet.
            </p>
          )}
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default Whishlist;
