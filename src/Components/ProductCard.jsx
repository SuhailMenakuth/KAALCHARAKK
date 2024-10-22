// //left to do 
// // quantity selector 
// // tag like best seller
// remove the search concept from here 

import React, { useContext, useEffect  } from 'react';
import { ProductDetails  } from '../context/ProductContext';
import { CartDetails } from '../context/CartContext';
import {  useNavigate } from 'react-router-dom';
import Product from '../Pages/Product';





const ProductCard = ({ catagory }) => {
  const navigate = useNavigate();
  const { products , handleProductClik  } = useContext(ProductDetails);
  const { addItem,user,addToWishlist } = useContext(CartDetails);



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
  const filteredProducts = products.filter((product) => {
    const matchesCategory = catagory ? product.category === catagory : true;
    const isProductAvailable = product.stock > 0 ;  // checking if the product stock is available ; 
    return matchesCategory && isProductAvailable  ;
  });

    return (
        <div className='w-full flex justify-center items-center  '>

            

            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ' >
                {filteredProducts.map((product) => (
                    <div className="product-card w-auto h-auto  flex-col justify-center items-center font-palanquin mx-4 my-4  pb-4   border border-transparent hover:" key={product.id}
                    >
                        {/* given image as the backgroundImage */}
                        <div className='image w-auto h-auto bg-slate-400  bg-cover bg-center flex  relative ' >
                            <img src={product.image} alt={product.name} className='w-full h-full object-fill cursor-pointer'
                            onClick={()=>handleProductClik(product) }
                            />
                            <img src="public/assets/images/love.png" alt="" className='wishlist absolute right-2 top-1 cursor-pointer'
                            onClick={()=>addToWishlist(product)}
                            
                            /> 
                            {/* div for showing title */}
                            <div className='absolute top-0 left-0 ml-1 mt-2 bg-greenDark   rounded-3xl  p-2 h-5 w-auto flex items-center justify-center'>
                                <p className='text-gold text-[12px] text-center mb-1'>{product.title}</p>
                            </div>
                        </div>


                        <div className='details  w-full h-auto flex flex-col items-center justify-center  space-y-2 bg-black bg-opacity-5'>

                            {/* product name */}
                            {/* <h3>{product.name}</h3> */}
                            <h1 className='font-bold text-black'>{product.name}</h1>
                            {/* color and type */}
                            <div className='colorandtype w-4/5    flex flex-col justify-center items-center text-black opacity-75'>
                                <p>{product.style}</p>
                                <p>{product.type}</p>
                            </div>
                            <div className='price w-4/5  text-center '>
                                {/* <p>{product.price}</p> */}
                                <p className='text-black opacity-75'>{product.price}</p>
                            </div>


                            <button className='w-4/5 bg-greenDark text-white rounded-md py-2  active:bg-greenLight'
                                onClick={() => handleclick(product)}
                            >Add to Cart</button>
                            {/* Quantity select*/}


                        </div>
                    </div>

                ))}
            </div>
        </div>






    );
};

export default ProductCard







