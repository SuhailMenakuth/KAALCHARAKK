






import React, { useContext, useState, useEffect } from 'react';
import { Footer, Hero, Modal, Nav, ProductCard } from '../Components/index';
import { ProductDetails } from '../context/ProductContext';
import { CartDetails } from '../context/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Loader3 from '../Components/Loader3';

const Landing = () => {

 const {loading, products} = useSelector((state) => state.products);
  // const { products } = useContext(ProductDetails);
  // const {fetchUser } = useContext(CartDetails);
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
      {loading &&  <Loader3 />}
      
      <Nav setFilter={setFilter} />
      <Hero />
      <ProductCard catagory={filter} />
      <Footer/>


      
    </div>
  );
};

export default Landing;
