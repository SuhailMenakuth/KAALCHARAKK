import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const ProductDetails = createContext();

export const ProductContext = ({ children }) => {
    // This is for storing product details
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();




    useEffect(() => {
        // This is for fetching the products details and setting to setProducts
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/products');
                // console.log(response.data);
                setProducts(response.data); // No need to await here
                
            } catch (error) {
                console.error('Error fetching products:', error); // Error handling
            }
        };
        fetchProducts();
    }, []);




  // this function is using for to show  the individual product details when the product card is clicked  , used in productcard component and navigating to the product component

const handleProductClik = (product) =>{
       navigate(`/product/${product.id}`);
}





    return (
        <ProductDetails.Provider value={{ products ,handleProductClik  }}>
            {children} {/* Use lowercase "children" */}
        </ProductDetails.Provider>
    );
};