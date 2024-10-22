import React, { useContext, useState ,useEffect } from 'react'
import { ProductDetails } from '../context/ProductContext';
import { cross } from '../assets/Icons';


const Search = ({setShowSearch ,showSearch } , ref) => {
    // Toggle search input
    const { products , handleProductClik } = useContext(ProductDetails);
    const [serchinput, setSearchinput] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        setSearchResults(products);
    }, []);


    const handleSearchChange = (e)=>{
  
            const input = e.target.value.toLowerCase(); 
            setSearchinput(input);
    
            const filteredProducts = products.filter((product) =>
                product.name.toLowerCase().includes(input)
            );
    
            setSearchResults(filteredProducts); 
        

    }
    



    


    return (
        // left to do trasition from rigth to left 
        <div className={`h-full w-full md:w-[463px] fixed top-0 md:right-0 p-4 bg-white`}>  
            <div className='input-box-and-icon flex  border-b-2  p-1   ' >
                <input type="text"
                    className='p-4  w-full mr-3 mb-1 focus:outline-none '
                    placeholder='Search'
                    value={serchinput}
                    onChange={handleSearchChange}
                />
                <img src={cross} alt="" onClick={()=>setShowSearch(false)} className='w-[16px] h-[16px] cursor-pointer' />
               
            </div>
            <div className='search-results overflow-y-auto  max-h-screen ' style={{scrollbarWidth:"none"}}>
                <h1 className='font-bold my-4'>PRODUCTS</h1>
                 {searchResults.map((product) => ( 
                <div className='product-cards  flex mb-2 shadow-md cursor-pointer ' key={product.id} 
                onClick={() => handleProductClik(product)}
                 >
                    <img src={product.image} alt="" className='image w-24 h-24 ml-2 mr-6 object-fill '  />
                    <div className='product-details flex flex-col justify-center'>
                        <h1 className=''>{product.name}</h1>
                        <p className=''>{product.price}</p>
                    </div>
                </div>
   ))} 
  </div>


        </div>
    )
}

export default Search
