import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Signup, Login, Landing, About, Cart, Whishlist, Profile } from './Pages/index'
import { Footer, Hero, Nav, ProductCard } from './Components/index'
import { ProductContext } from './context/ProductContext';
import { CartContext } from './context/CartContext';
import Checkout from './Pages/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from './Components/Search';
import Filter from './Components/Filter';
import Product from './Pages/Product';
import Wishlist from './Pages/Whishlist';
import AdminDashboard from './Components/AdminDashboard';
import AdminProductManagement from './Components/AdminProductManagement';
import AdminUserManagement from './Components/AdminUserManagement';
import { AdminContext } from './context/AdminContext';
import ProtectedRoute from './context/ProtectedRoute';




const App = () => {
  return (



    <Router>
      <ProductContext>
        <CartContext>
          <AdminContext>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/hero' element={<Hero />} />
              {/* landinginte ulill aavanam product card  */}
              <Route path='/productcard' element={<ProductCard />} />
              <Route path='/about' element={<About />} />
              <Route path='/nav' element={<Nav />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/footer' element={<Footer />} />
              <Route path='/search' element={<Search />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/filter' element={<Filter />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/profile' element={<Profile />} />
              {/* admin */}
              <Route path='/admin' element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }>
                {/* Render the Admin Dasrd initially */}
                <Route index element={<AdminDashboard />} />
                <Route path='productManagement' element={<AdminProductManagement />} />
                <Route path='userManagement' element={<AdminUserManagement />} />
              </Route>
            </Routes>
          </AdminContext>
        </CartContext>
      </ProductContext>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </Router>
  );
};



export default App;
