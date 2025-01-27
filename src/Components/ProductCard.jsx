// //left to do 
// // quantity selector 
// // tag like best seller
// remove the search concept from here 

import React, { useContext, useEffect  } from 'react';
import { ProductDetails  } from '../context/ProductContext';
import { CartDetails } from '../context/CartContext';
import {  useNavigate } from 'react-router-dom';
import Product from '../Pages/Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProduct } from '../Features/ProductSlice';





const ProductCard = ({ catagory }) => {
  const navigate = useNavigate();
  // const { products , handleProductClik  } = useContext(ProductDetails);
  // const { addItem,user,addToWishlist } = useContext(CartDetails);

const dispacth = useDispatch();
const {products}=useSelector((state) => state.products);

useEffect(() => {
dispacth(fetchAllProduct());
},[dispacth])

// add to cart 
  const handleclick = (product) => {
    const isUserEmpty = localStorage.getItem('id');
    if(!isUserEmpty){
      navigate('/login');
    }
    else{

      addItem(product);
    }
  };


  //add to wishlist 

  // const handleWishlist = (product) =>{
  //   addToWishlist(product);
  // }  
  





  // Filter products by category 
  // const filteredProducts = products.filter((product) => {
  //   const matchesCategory = catagory ? product.category === catagory : true;
  //   const isProductAvailable = product.stock > 0 ;  // checking if the product stock is available ; 
  //   return matchesCategory && isProductAvailable  ;
  // });

    // return (
    //     <div className='w-full flex justify-center items-center  '>

            

    //         <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ' >
    //             {/* {filteredProducts.map((product) => ( */}
    //             {products.map((product) => (
    //                 <div className="product-card w-auto h-auto  flex-col justify-center items-center font-palanquin mx-4 my-4  pb-4   border border-transparent hover:" key={product.id}
    //                 >
    //                     {/* given image as the backgroundImage */}
    //                     <div className='image w-auto h-auto bg-slate-400  bg-cover bg-center flex  relative ' >
    //                         <img src={product.image} alt={product.name} className='w-full h-full object-fill cursor-pointer'
    //                         onClick={()=>handleProductClik(product) }
    //                         />
    //                         <img src="public/assets/images/love.png" alt="" className='wishlist absolute right-2 top-1 cursor-pointer'
    //                         onClick={()=>addToWishlist(product)}
                            
    //                         /> 
    //                         {/* div for showing title */}
    //                         <div className='absolute top-0 left-0 ml-1 mt-2 bg-greenDark   rounded-3xl  p-2 h-5 w-auto flex items-center justify-center'>
    //                             <p className='text-gold text-[12px] text-center mb-1'>{product.title}</p>
    //                         </div>
    //                     </div>


    //                     <div className='details  w-full h-auto flex flex-col items-center justify-center  space-y-2 bg-black bg-opacity-5'>

    //                         {/* product name */}
    //                         {/* <h3>{product.name}</h3> */}
    //                         <h1 className='font-bold text-black'>{product.name}</h1>
    //                         {/* color and type */}
    //                         <div className='colorandtype w-4/5    flex flex-col justify-center items-center text-black opacity-75'>
    //                             <p>{product.style}</p>
    //                             <p>{product.type}</p>
    //                         </div>
    //                         <div className='price w-4/5  text-center '>
    //                             {/* <p>{product.price}</p> */}
    //                             <p className='text-black opacity-75'>{product.price}</p>
    //                         </div>


    //                         <button className='w-4/5 bg-greenDark text-white rounded-md py-2  active:bg-greenLight'
    //                             onClick={() => handleclick(product)}
    //                         >Add to Cart</button>
    //                         {/* Quantity select*/}


    //                     </div>
    //                 </div>

    //             ))}
    //         </div>
    //     </div>
    // );


    // return (
    //   <div className="w-full flex justify-center items-center p-4">
    //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //       {products.map((product) => (
    //         <div
    //           className="product-card flex flex-col justify-between items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-200 hover:border-greenDark transition-all duration-300"
    //           key={product.productId}
    //         >
    //           {/* Image Section */}
    //           <div className="relative w-full h-48 bg-slate-400 rounded-lg overflow-hidden">
    //             <img
    //               src={product.imageUrl}
    //               alt={product.name}
    //               className="w-full h-full object-cover cursor-pointer"
    //               onClick={() => handleProductClik(product)}
    //             />
    //             {/* Wishlist Icon */}
    //             <img
    //               src="public/assets/images/love.png"
    //               alt="wishlist"
    //               className="wishlist absolute right-2 top-2 w-6 h-6 cursor-pointer"
    //               onClick={() => addToWishlist(product)}
    //             />
    //             {/* Product Category */}
    //             <div className="absolute top-2 left-2 bg-greenDark text-white text-xs font-semibold px-3 py-1 rounded-full">
    //               {product.category}
    //             </div>
    //           </div>
    
    //           {/* Product Details */}
    //           <div className="details w-full text-center mt-4">
    //             {/* Product Name */}
    //             <h1 className="text-lg font-semibold text-black">{product.name}</h1>
    
    //             {/* Color */}
    //             <p className="text-sm text-gray-600 mt-1">Color: {product.color}</p>
    
    //             {/* Stock and Price */}
    //             <div className="flex justify-between items-center mt-2 text-sm text-gray-600 w-full px-4">
    //               <p>Stock: {product.stock}</p>
    //               <p className="font-semibold text-greenDark">₹{product.price}</p>
    //             </div>
    //           </div>
    
    //           {/* Add to Cart Button */}
    //           <button
    //             className="w-full bg-greenDark text-white rounded-lg py-2 mt-4 hover:bg-greenLight active:scale-95 transition-transform duration-200"
    //             onClick={() => handleclick(product)}
    //           >
    //             Add to Cart
    //           </button>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );


    // return (
    //   <div className="w-full flex justify-center items-center p-4">
    //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //       {products.map((product) => (
    //         <div
    //           className="product-card flex flex-col justify-between items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-200 hover:border-greenDark transition-all duration-300"
    //           key={product.productId}
    //         >
    //           {/* Image Section */}
    //           <div className="relative w-full h-48 bg-slate-400 rounded-lg overflow-hidden">
    //             <img
    //               src={product.imageUrl}
    //               alt={product.name}
    //               className="w-full h-full object-cover cursor-pointer"
    //               onClick={() => handleProductClik(product)}
    //             />
    //             {/* Wishlist Icon */}
    //             <img
    //               src="public/assets/images/love.png"
    //               alt="wishlist"
    //               className="wishlist absolute right-2 top-2 w-6 h-6 cursor-pointer"
    //               onClick={() => addToWishlist(product)}
    //             />
    //             {/* Product Category */}
    //             <div className="absolute top-2 left-2 bg-greenDark text-white text-xs font-semibold px-3 py-1 rounded-full">
    //               {product.category}
    //             </div>
    //           </div>
    
    //           {/* Product Details */}
    //           <div className="details w-full text-center mt-4">
    //             {/* Product Name */}
    //             <h1 className="text-lg font-semibold text-black">{product.name}</h1>
    
    //             {/* Color */}
    //             <p className="text-sm text-gray-600 mt-1">Color: {product.color}</p>
    
    //             {/* Price */}
    //             <p className="text-lg font-semibold text-greenDark mt-2">₹{product.price}</p>
    //           </div>
    
    //           {/* Add to Cart Button */}
    //           <button
    //             className="w-full bg-greenDark text-white rounded-lg py-2 mt-4 hover:bg-greenLight active:scale-95 transition-transform duration-200"
    //             onClick={() => handleclick(product)}
    //           >
    //             Add to Cart
    //           </button>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );
    

    // return (
    //   <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //       {products.map((product) => (
    //         <div
    //           className="group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-gray-100 hover:border-emerald-100"
    //           key={product.productId}
    //         >
    //           {/* Image Section */}
    //           <div className="relative w-full aspect-square overflow-hidden rounded-t-xl">
    //             <img
    //               src={product.imageUrl}
    //               alt={product.name}
    //               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
    //               onClick={() => handleProductClik(product)}
    //             />
                
    //             {/* Wishlist Button */}
    //             <button 
    //               onClick={() => addToWishlist(product)}
    //               className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full shadow-sm hover:bg-white transition-colors"
    //               aria-label="Add to wishlist"
    //             >
    //               <svg 
    //                 className="w-5 h-5 text-rose-400 hover:text-rose-500" 
    //                 fill="none" 
    //                 stroke="currentColor" 
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path 
    //                   strokeLinecap="round" 
    //                   strokeLinejoin="round" 
    //                   strokeWidth="1.5" 
    //                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    //                 />
    //               </svg>
    //             </button>
    
    //             {/* Category Badge */}
    //             <div className="absolute bottom-3 left-3 px-3 py-1 bg-emerald-600/90 backdrop-blur text-xs font-medium text-white rounded-full shadow-sm">
    //               {product.category}
    //             </div>
    //           </div>
    
    //           {/* Product Details */}
    //           <div className="p-4 flex flex-col gap-2">
    //             <h2 
    //               onClick={() => handleProductClik(product)}
    //               className="text-lg font-semibold text-gray-800 hover:text-emerald-700 cursor-pointer line-clamp-2"
    //             >
    //               {product.name}
    //             </h2>
    
    //             {/* Color Swatches */}
    //             <div className="flex items-center gap-2 mt-1">
    //               <span className="text-sm text-gray-500">Colors:</span>
    //               <div 
    //                 className="w-5 h-5 rounded-full border border-gray-200"
    //                 style={{ backgroundColor: product.colorCode }}
    //                 title={product.color}
    //               />
    //             </div>
    
    //             {/* Price Section */}
    //             <div className="mt-2 flex items-center justify-between">
    //               <span className="text-xl font-bold text-emerald-700">
    //                 ₹{product.price}
    //               </span>
    //               <button
    //                 onClick={() => handleclick(product)}
    //                 className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
    //               >
    //                 <svg 
    //                   className="w-4 h-4" 
    //                   fill="none" 
    //                   stroke="currentColor" 
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path 
    //                     strokeLinecap="round" 
    //                     strokeLinejoin="round" 
    //                     strokeWidth="2" 
    //                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    //                   />
    //                 </svg>
    //                 Add
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );

    // return (
    //   <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    //       {products.map((product) => (
    //         <div
    //           className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border border-gray-100 hover:border-emerald-50"
    //           key={product.productId}
    //         >
    //           {/* Image Section */}
    //           <div className="relative w-full aspect-square overflow-hidden rounded-t-2xl">
    //             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                
    //             <img
    //               src={product.imageUrl}
    //               alt={product.name}
    //               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
    //               onClick={() => handleProductClick(product)}
    //             />
    
    //             {/* Quick View Button */}
    //             <button 
    //               className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 px-4 py-2 bg-white/90 backdrop-blur text-sm font-medium rounded-full shadow-sm hover:bg-white"
    //               onClick={() => handleQuickView(product)}
    //             >
    //               Quick View
    //             </button>
    
    //             {/* Top Badges */}
    //             <div className="absolute top-3 left-3 flex gap-2">
    //               {product.isNew && (
    //                 <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-md">
    //                   New
    //                 </span>
    //               )}
    //               {product.discount > 0 && (
    //                 <span className="px-3 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full shadow-md">
    //                   -{product.discount}%
    //                 </span>
    //               )}
    //             </div>
    //           </div>
    
    //           {/* Product Details */}
    //           <div className="p-5">
    //             {/* Category and Wishlist */}
    //             <div className="flex justify-between items-start mb-3">
    //               <span className="text-sm font-medium text-emerald-600">
    //                 {product.category}
    //               </span>
    //               <button
    //                 onClick={() => addToWishlist(product)}
    //                 className="p-2 hover:bg-gray-50 rounded-full transition-colors"
    //                 aria-label="Add to wishlist"
    //               >
    //                 <svg
    //                   className="w-5 h-5 text-rose-400 hover:text-rose-500 transition-colors"
    //                   fill={product.inWishlist ? "currentColor" : "none"}
    //                   stroke="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     strokeWidth="1.5"
    //                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    //                   />
    //                 </svg>
    //               </button>
    //             </div>
    
    //             {/* Product Name */}
    //             <h2 
    //               className="text-lg font-semibold text-gray-900 mb-2 cursor-pointer line-clamp-2 hover:text-emerald-700 transition-colors"
    //               onClick={() => handleProductClick(product)}
    //             >
    //               {product.name}
    //             </h2>
    
    //             {/* Rating */}
    //             <div className="flex items-center gap-2 mb-4">
    //               <div className="flex text-amber-400">
    //                 {[...Array(5)].map((_, i) => (
    //                   <svg
    //                     key={i}
    //                     className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'fill-gray-300'}`}
    //                     viewBox="0 0 20 20"
    //                   >
    //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //                   </svg>
    //                 ))}
    //               </div>
    //               <span className="text-sm text-gray-500">({product.reviews})</span>
    //             </div>
    
    //             {/* Price Section */}
    //             <div className="flex items-center justify-between">
    //               <div className="flex flex-col">
    //                 {product.discount > 0 && (
    //                   <span className="text-sm text-gray-400 line-through">
    //                     ₹{product.originalPrice}
    //                   </span>
    //                 )}
    //                 <span className="text-xl font-bold text-emerald-700">
    //                   ₹{product.price}
    //                 </span>
    //               </div>
    //               <button
    //                 onClick={() => handleAddToCart(product)}
    //                 className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2"
    //               >
    //                 <svg 
    //                   className="w-5 h-5" 
    //                   fill="none" 
    //                   stroke="currentColor" 
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path 
    //                     strokeLinecap="round" 
    //                     strokeLinejoin="round" 
    //                     strokeWidth="2" 
    //                     d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    //                   />
    //                 </svg>
    //                 Add
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );
    
  
   
    return (
      <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <div
              className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border border-gray-100 hover:border-emerald-50"
              key={product.productId}
            >
              {/* Image Section */}
              <div className="relative w-full aspect-square overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  onClick={() => handleProductClick(product)}
                />
    
                {/* Quick View Button */}
                {/* <button 
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 px-3 py-1.5 bg-white/90 backdrop-blur text-xs sm:text-sm font-medium rounded-full shadow hover:bg-white"
                  onClick={() => handleQuickView(product)}
                >
                  Quick View
                </button> */}

<button 
  className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 px-5 py-2 bg-white/90 backdrop-blur text-sm font-medium rounded-lg shadow hover:bg-white text-gray-800 flex items-center justify-center gap-2"
  onClick={() => handleQuickView(product)}
>
  <svg 
    className="w-4 h-4 text-greenDark" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M15 10l4.553-4.553m0 0A1.5 1.5 0 1118.033 3.5L13.5 8.033m4.553-4.553L10 15m5-5l-1.5 1.5M4 6.5v13A1.5 1.5 0 005.5 21h13a1.5 1.5 0 001.5-1.5v-13a1.5 1.5 0 00-1.5-1.5h-13A1.5 1.5 0 004 6.5z"
    />
  </svg>
  Quick View
</button>
    
                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {product.isNew && (
                    <span className="px-2 sm:px-3 py-1 bg-greenDark text-white text-xs sm:text-sm font-semibold rounded-full shadow-md">
                      New
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="px-2 sm:px-3 py-1 bg-rose-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow-md">
                      -{product.discount}%
                    </span>
                  )}
                </div>
              </div>
    
              {/* Product Details */}
              <div className="p-4 sm:p-5">
                {/* Category and Wishlist */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-medium text-greenDark">
                    {product.category}
                  </span>
                  <button
                    onClick={() => addToWishlist(product)}
                    className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <svg
                      className="w-5 h-5 text-rose-400 hover:text-rose-500 transition-colors"
                      fill={product.inWishlist ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
    
                {/* Product Name */}
                <h2 
                  className="text-sm sm:text-base font-semibold text-gray-900 mb-2 cursor-pointer line-clamp-2 hover:text-emerald-700 transition-colors"
                  onClick={() => handleProductClick(product)}
                >
                  {product.name}
                </h2>
    
                {/* Price Section */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    {product.discount > 0 && (
                      <span className="text-xs sm:text-sm text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                    <span className="text-base sm:text-lg font-bold text-greenDark">
                      ₹{product.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-3 sm:px-4 py-2 bg-gradient-to-r bg-greenDark hover:bg-greenLight text-white text-xs sm:text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                  >
                    <svg 
                      className="w-4 sm:w-5 h-4 sm:h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    


};

export default ProductCard







