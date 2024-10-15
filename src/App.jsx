import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Signup, Login, Landing, About, Cart} from './Pages/index'
import {Footer, Hero, Nav, ProductCard} from './Components/index'
import { ProductContext } from './context/ProductContext';
import { CartContext } from './context/CartContext';
import Checkout from './Pages/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 



const App = () => {
  return (
 
 

<ProductContext>
  <CartContext>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/hero' element ={<Hero/>} />
        {/* landinginte ulill aavanam product card  */}
        <Route path='/productcard' element={<ProductCard/>} /> 
        <Route path='/about' element={<About/>}/>
        <Route path='/nav' element={<Nav/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/footer' element={<Footer/>} />
      </Routes>
    </Router>
    </CartContext>
    </ProductContext>
  );
};



export default App;
