// used for to view individual products 
import React, { useContext, useEffect, useState  } from 'react'
import { Link , useParams } from 'react-router-dom'
import { ProductDetails } from '../context/ProductContext'
import { Nav } from '../Components';




const Product = () => {
  

  const {id}  = useParams();
  const {products} = useContext(ProductDetails);
  const product =  products.find((product)=> product.id == id);

console.log(id);  
console.log(product);


   



  return (
    <>
    <Nav/>
    {products.length > 0 &&
    
    <div className='w-full   grid grid-cols-1 md:grid-cols-5 font-montserrat  relative top-0   '>
      <div className=' image  col-span-3 flex justify-center items-center w-full h-full  '>
        <img src={product.image} alt={product.name} className='w-[70%] h-[70%] max-w-[80%] max-h-[80%] object-contain ' />
      </div>

      {/* second section */}
      <div className='details col-span-2 p-4 bg-slate-50 '>

        <div className='headings flex space-x-4'>
          <Link to={'/'} className="text-greenDark underline ">HOME</Link>
          <p>{product.size}</p>
          <p>fall winter</p>
        </div>
        <div className='flex flex-col mt-1  '>
          <h1 className='text-3xl text-black text-opacity-75 mb-1 font-bold'>{product.name}</h1>
          <h3 className='text-xl mb-1'>{product.style}</h3>
          <h1 className='text-3xl mb-2 font-bold  text-greenDark'>₹{product.price}</h1>
          <p className='text-sm'>Inclusive of all taxes </p>
        </div>

        <div className='image-size flex flex-col mt-5 space-y-2'>
          <img src={product.image} alt="dfdasf"  className='w-16 h-12 bg-red-500'/>
          <p className='font-bold inline'>SIZE : {product.size} <p className='opacity-500 inline'> </p> EU | <p className='opacity-50 inline'> UK</p> </p>

        </div>

        <div className='footsize-regular space-y-6 mb-6 '>
          <h2 className='font-bold'>FOOT SIZE: {product.size} <p className='opacity-50'>40</p></h2> 
          <div className='regular w-52 h-12 bg-greenDark flex items-center justify-center rounded-md'>
            <h1 className=' text-white'>Regular</h1>
          </div>

          <div className='flex w-full  '>
            <div className='wishlisticon w-[20%] h-12 border border-greenDark rounded-md'  >
              <h1 className='text-center'>love</h1>
            </div>
            <button className='h-12 w-[80%] bg-greenDark text-white ml-3 rounded-md' >ADD TO SHOPPING CART</button>

          </div>

        </div>
      </div>    
    </div>
}
    </>
  )
}

export default Product





