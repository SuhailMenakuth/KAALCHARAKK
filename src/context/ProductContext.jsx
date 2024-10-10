import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductDetails = createContext();

export const ProductContext = ({ children }) => {
    // This is for storing product details
    const [products, setProducts] = useState([]);



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


    return (
        <ProductDetails.Provider value={{ products }}>
            {children} {/* Use lowercase "children" */}
        </ProductDetails.Provider>
    );
};