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






import React, { useContext, useState, useEffect } from 'react';
import { Footer, Hero, Modal, Nav, ProductCard } from '../Components/index';
import { ProductDetails } from '../context/ProductContext';
import { CartDetails } from '../context/CartContext';

const Landing = () => {
  const { products } = useContext(ProductDetails);
  const {fetchUser } = useContext(CartDetails);
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query


  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    if(userEmail){
      fetchUser(userEmail);
    }
  }, []);



  

  return (
    <div className="w-full h-full flex flex-col ">
      
      <Nav setFilter={setFilter} />
      <Hero />
      <ProductCard catagory={filter} />
      <Footer/>


      
    </div>
  );
};

export default Landing;
