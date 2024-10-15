// import React,{useContext,useState} from 'react'
// import { Hero, Nav, ProductCard } from '../Components/index'
// import { ProductDetails } from '../context/ProductContext'

// const Landing = () => {
//     const {products} = useContext(ProductDetails);
//     const [filter , setFilter] = useState('');

//   return (
//     <div className='w-full h-full'>

//    <Nav setFilter={setFilter}/>
//     <Hero/>   
//     <ProductCard  catagory = {filter} />
        
      
//     </div>
//   )
// }

// export default Landing






import React, { useContext, useState } from 'react';
import { Hero, Modal, Nav, ProductCard } from '../Components/index';
import { ProductDetails } from '../context/ProductContext';

const Landing = () => {
  const { products } = useContext(ProductDetails);
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  return (
    <div className="w-full h-full flex flex-col ">
      
      <Nav setFilter={setFilter} setSearchQuery={setSearchQuery} />
      <div className='mt-20'>
      <Hero />
      

      <ProductCard catagory={filter} searchQuery={searchQuery} />
      </div>


      
    </div>
  );
};

export default Landing;
