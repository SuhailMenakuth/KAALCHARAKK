import React, { useContext, useEffect } from 'react';
import { Footer, Nav } from '../Components';
import { CartDetails } from '../context/CartContext';
import { Link, useNavigate,  } from 'react-router-dom';

const Profile = () => {
 const {user, setCartItems} = useContext(CartDetails);
 const navigate = useNavigate();
 
 
 useEffect(()=>{
   const Id = localStorage.getItem('id');
  if(!Id){
    navigate('/');
  }
},[user]);
 
  // logout 
  const handleLogout = () => {
    localStorage.removeItem('id'); 
    localStorage.removeItem('email'); 
    setCartItems([]);
    setDropdownOpen(false);

    
  };
  

  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 w-full p-8  ">
        
        {/* Sidebar Section */}
        <div className="col-span-1 bg-slate-200 text-black p-6 rounded-lg font-montserrat">
          <h1 className="text-2xl font-bold mb-5 text-greenDark ">My Account</h1>
          <ul className="space-y-4 flex flex-col "> 
            <Link to={'/orders'}>Address book</Link>
            <Link className='text-red-500' onClick={handleLogout} >Logout</Link>
          </ul>
        </div>

        {/* Main Content Section */}
        <div className="col-span-3  p-6 rounded-lg font-montserrat flex flex-col ">
          <h1 className="text-xl font-bold mb-4 ">Welcome {user.fname} {user.lname}</h1>
          <h2 className='mt-4 mb-4 bg-slate-200 p-3 '>Personal Information</h2>
          <h2 className='inline p-3'>Full Name: <p className='font-bold inline'>{user.fname} {user.lname}</p></h2>
          <h2 className='inline p-3'>Email Adress: <p className='font-bold inline'>{user.email}</p></h2>
          <Link to={'/orders'}  className='mt-5 mb-4 bg-slate-200 p-3 ' >Order History</Link>



        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Profile;
