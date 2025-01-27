
// import React, { useContext, useState,useEffect,useRef } from 'react'

// import { Link, useNavigate } from 'react-router-dom';
// import { CartDetails } from '../context/CartContext';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';              
// import 'swiper/css/navigation';    
// import 'swiper/css/pagination';
// import Search from './Search';
//  import { toast } from 'react-toastify'; 
//  import 'react-toastify/dist/ReactToastify.css';  







// const Nav = ({ setFilter }) => {

//     // const { cartItems ,setCartItems } = useContext(CartDetails);
//   const [isOpen, setIsOpen] = useState(false); // mobile menu
//    const [showSearch, setShowSearch] = useState(false); // Toggle search input
//    const [dropdownOpen, setDropdownOpen] = useState(false); //togle for logout and login
//   const [user, setUser] = useState('');
//   const searchRef = useRef(null); // Reference to the search component
//   const navigate = useNavigate();

//   useEffect(()=>{
//    const id = localStorage.getItem('id')
//     setUser(id || null) ;
//   },[user])
  
  
  
  
//   const carouselItems = [
//     { text: "Welcome to our site!" },
//     { text: "Our products are amazing!" },
//     { text: "Check out our latest collections!" },
//     { text: "Enjoy shopping with us!" },
//   ];
  
  
  
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
 
  
//   // logout 
//   const handleLogout = () => {
//         //  localStorage.removeItem('id');
//         // localStorage.removeItem('email');
//         setCartItems([]); // Clear cart items
//        setDropdownOpen(false);
//          setUser(null);
//         toast.success('Logout successful!', { position: 'top-right', autoClose: 3000 }); // Toast on logout
//          navigate('/login'); // Navigate to login
//        };




  
//   return (
//     <nav className=" w-full bg-white z-50  sticky top-0   ">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">



//           {/* Search Icon */}
//            <div className="search-icon">
//              <img
//                src="public/assets/images/search.png"
//               alt=""
//                onClick={() => setShowSearch(!showSearch)} // Toggle input visibility
//                className="cursor-pointer"
//              />
//            </div>





//           <div className="text-4xl tracking-tighter font-bold font-palanquin lg:ml-14 text-greenDark">
//             KAALCHARAKK
//           </div>


//           <div className="flex  space-x-4">

//             <img src="public/assets/images/user.png" alt=""
//               className={`hidden md:flex cursor-pointer`} 
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               onMouseEnter={() => setDropdownOpen(true)} 
//              // onMouseLeave={() => setDropdownOpen(false)}
    
//               />

//             <img src="public/assets/images/love.png" alt=""
//               className='hidden md:flex' />
//             <div className='relative'>

//               <img src="public/assets/images/shoppingcart.png" alt=""
//                 onClick={() => { navigate('/cart') }}
//                 className='cursor-pointer mr-2  '
//               />
//               <div className='absolute rounded-full bg-greenDark text-white text-[8px] p-1 px-2 bottom-3 left-4  cursor-pointer'
//                 onClick={() => { navigate('/cart') }}
//               >
//                 {/* <p>{cartItems.length}</p> */}
//                 <p>3</p>

//               </div>
//             </div>

//           </div>

//           <div className="md:hidden cursor-pointer">
//             <button onClick={toggleMenu} className="text-greenDark focus:outline-none" aria-label="Open menu">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Dropdown Menu for Profile */}
//       {dropdownOpen && (
//         <div className="absolute top-11 right-24 mt-2 bg-greenDark border border-greenDark shadow-lg rounded-md z-20 p-5">
//           <div className="flex flex-col p-2 text-white space-y-2">
//           {!user ? (
//               <Link
//                  to="/login"
//                className="block text-white hover:text-greenLight mb-3"
//                 onClick={() => setDropdownOpen(false)}
//               >
//                 Login
//               </Link>
//             ) : (
//               <>
//                 <button
//                   className="block text-white hover:text-opacity-75 text-left mb-3"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//                 <Link to="/profile" className="text-white hover:text-opacity-75">
//                   My Account
//                 </Link>
//               </>
//             )}



          
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white z-20 sticky top-0 ">
//           <div className="flex flex-col space-y-2 px-4 py-2  bg-white z-30 w-full  ">
//             <a href="#" className="block text-black hover:text-greenDark"
//             onClick={()=>{ setFilter('men') }}
//             >Men</a>
//             <a href="#" className="block text-black hover:text-greenDark"
//             onClick={()=>{ setFilter('women')}}>Women</a>
//             <a href="#" className="block text-black hover:text-greenDark">About</a>
//             <a href="#" className="block text-black hover:text-greenDark">Contact</a>
//           </div>
//         </div>
//       )}



//       {/* bottomNav */}
//       <div className='bottomnav mx-auto px-4 hidden lg:block ' >
//         <div className='flex items-center justify-center h-12 space-x-12'>

//           <a href="#" className=' text-black hover:text-greenDark'>WHAT'S NEW</a>
//           <a href="#" className="block text-black hover:text-greenDark"
//             onClick={()=>{ setFilter('men') }}
//             >Men</a>
//             <a href="#" className="block text-black hover:text-greenDark"
//             onClick={()=>{ setFilter('women')}}>Women</a>

//             <a href="" className=' text-black hover:text-greenDark'>OUR STORY</a>
//             <a href="" className=' text-black hover:text-greenDark'>SHOE CARE</a>

//         </div>

//       </div>


//        {/* Carousel Section */}

      
//        <div className='w-full bg-greenDark flex items-center justify-center h-12 lg:h-8'>
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
          
//           loop={Infinity}
//           autoplay={{ 
//             delay: 3000,  // Adjust the delay in milliseconds (3 seconds)
//             disableOnInteraction: false, // Autoplay won't stop when the user interacts
//           }}
//           pagination={{ clickable: true }}
          
//         >
//     {carouselItems.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className='flex items-center justify-center h-full z-0'>
//                 <p className='text-white font-montserrat font-bold text-md'>
//                   {item.text}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
// </div>


//       {showSearch &&<Search  setShowSearch ={setShowSearch}  showSearch={showSearch}  /> //passing the setShowSearch for closing the search when clicking the cross icon 
        
//        }
//     </nav>

//   );
//  }


//  export default Nav





//setDropdown commented

import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartDetails } from "../context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Search from "./Search";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

SwiperCore.use([Autoplay, Pagination]);

const Nav = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("id");
    setUser(id || null);
  }, [user]);

  const carouselItems = [
    { text: "Welcome to our site!" },
    { text: "Our products are amazing!" },
    { text: "Check out our latest collections!" },
    { text: "Enjoy shopping with us!" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    setUser(null);
    toast.success("Logout successful!", { position: "top-right", autoClose: 3000 });
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white z-50 sticky top-0 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Search Icon */}
          <div className="cursor-pointer">
            <img
              src="public/assets/images/search.png"
              alt="Search"
              onClick={() => setShowSearch(!showSearch)}
              className="w-6 h-6"
            />
          </div>

          {/* Logo */}
          <div className="text-4xl font-bold tracking-tighter text-greenDark">
            KAALCHARAKK
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <img
              src="public/assets/images/user.png"
              alt="User"
              className="w-6 h-6 hidden md:block cursor-pointer"
              onClick={() =>
                //  setDropdownOpen(!dropdownOpen)
                navigate("/profile")
                }
              // onMouseEnter={() => setDropdownOpen(true)}
            />
            <img
              src="public/assets/images/love.png"
              alt="Wishlist"
              className="w-6 h-6 hidden md:block"
            />
            <div className="relative cursor-pointer">
              <img
                src="public/assets/images/shoppingcart.png"
                alt="Cart"
                onClick={() => navigate("/cart")}
                className="w-6 h-6"
              />
              <span className="absolute rounded-full bg-greenDark text-white text-xs px-2 py-1 -top-2 -right-2">
                3
              </span>
            </div>
            <button
              className="md:hidden text-greenDark"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute top-16 right-4 mt-2 bg-greenDark shadow-lg rounded-lg p-4 z-30">
          <div className="flex flex-col space-y-2 text-white">
            {!user ? (
              <Link
                to="/login"
                className="hover:text-greenLight"
                onClick={() => setDropdownOpen(false)}
              >
                Login
              </Link>
            ) : (
              <>
                <button
                  onClick={handleLogout}
                  className="hover:text-greenLight text-left"
                >
                  Logout
                </button>
                <Link to="/profile" className="hover:text-greenLight">
                  My Account
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <button onClick={() => setFilter("men")} className="text-black hover:text-greenDark">
              Men
            </button>
            <button onClick={() => setFilter("women")} className="text-black hover:text-greenDark">
              Women
            </button>
            <button className="text-black hover:text-greenDark">About</button>
            <button className="text-black hover:text-greenDark">Contact</button>
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <div className="hidden lg:block py-2 bg-gray-50">
        <div className="flex justify-center space-x-8">
          <button onClick={() => setFilter("new")} className="hover:text-greenDark">
            WHAT'S NEW
          </button>
          <button onClick={() => setFilter("men")} className="hover:text-greenDark">
            Men
          </button>
          <button onClick={() => setFilter("women")} className="hover:text-greenDark">
            Women
          </button>
          <button className="hover:text-greenDark">OUR STORY</button>
          <button className="hover:text-greenDark">SHOE CARE</button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full bg-greenDark py-2">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center text-white font-medium">{item.text}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {showSearch && <Search setShowSearch={setShowSearch} />}
    </nav>
  );
};

export default Nav;
