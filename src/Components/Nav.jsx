import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';





const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    
    const navigate = useNavigate();

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-white  ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">



            <div className='search-icon '>

                <img src="public/assets/images/search.png" alt="" />

            </div>




            <div className="text-4xl tracking-tight font-bold font-palanquin lg:ml-14 text-greenDark">
              KAALCHARAKK
            </div>

           
            <div className="hidden md:flex space-x-4">

             <img src="public/assets/images/user.png" alt="" />
             <img src="public/assets/images/love.png" alt="" />
             <img src="public/assets/images/shoppingcart.png" alt="" 
             onClick={()=> {navigate('/cart')}}
             />

            </div>



            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-greenDark focus:outline-none" aria-label="Open menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 px-4 py-2">
              <a href="#" className="block text-black hover:text-greenDark">Home</a>
              <a href="#" className="block text-black hover:text-greenDark">Products</a>
              <a href="#" className="block text-black hover:text-greenDark">About</a>
              <a href="#" className="block text-black hover:text-greenDark">Contact</a>
            </div>
          </div>
        )}
        


        {/* bottomNav */}
        <div className='bottomnav mx-auto px-4 hidden lg:block ' >
            <div className='flex items-center justify-center h-12 space-x-12'>

                <Link to={''} className='text-black font-bold'>Home</Link>
                <Link to={''} className='text-black font-bold'>Home</Link>
                <Link to={''} className='text-black font-bold'>Home</Link>
                <Link to={''} className='text-black font-bold'>Home</Link>



            </div>

        </div>
      </nav>
    );
}

export default Nav














