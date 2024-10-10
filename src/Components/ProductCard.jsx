//left to do 
// quantity selector 
// tag like best seller 

import React, { useContext } from 'react'
import { ProductDetails } from '../context/ProductContext';
import { CartDetails } from '../context/CartContext';


const ProductCard = () => {
    const { products } = useContext(ProductDetails);
    const { addItem } = useContext(CartDetails);
    //  console.log(products);

    const handleclick = (product) => {

        addItem(product);
    }

    return (


        <div className='w-full flex justify-center items-center '>

            <div className='flex flex-wrap w-[90%]  items-center justify-center  ' >
                {products.map((product) => (
                    <div className="product-card w-64 h-96  flex-col justify-center items-center font-palanquin mx-4 my-4 hover:shadow-xl" key={product.id}>
                        {/* given image as the backgroundImage */}
                        <div className='image w-full h-52 bg-slate-400  bg-cover bg-center flex items-center justify-center relative'

                        >
                            <img src={product.image} alt={product.name}
                                className='w-full h-full object-fill '
                            />
                            {/* div for showing title */}
                            <div className='absolute top-0 left-0 ml-1 mt-2 bg-greenDark   rounded-3xl  p-2 h-5 w-auto flex items-center justify-center'>
                                <p className='text-gold text-[12px] text-center mb-1'>{product.title}</p>
                            </div>
                        </div>


                        <div className='details  w-full h-44 flex flex-col items-center justify-center  space-y-3 bg-black bg-opacity-5'>

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





                            <button className='w-4/5 bg-greenDark text-white '

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