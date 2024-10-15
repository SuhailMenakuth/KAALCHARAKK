// state

// cartItems: An array of items currently in the cart.
// totalAmount: The total price of items in the cart.
// itemCount: The total number of items in the cart.



// functions
// addItem(item): Adds an item to the cart.
// removeItem(itemId): Removes an item from the cart.
// clearCart(): Clears all items from the cart.
// updateItemQuantity(itemId, quantity): Updates the quantity of a specific item.



// usage

// You can use CartContext in various components of your application:
// Shopping Cart Component:
// Display the items currently in the cart, along with total cost, and allow users to proceed to checkout.
// Product Detail Page:
// Use the addItem function to add products to the cart directly from the product detail view.
// Navigation Bar:
// Show a cart icon that updates to reflect the number of items in the cart.
// Checkout Page:
// Access cart details for processing orders.









import axios from 'axios';
import React, { createContext, useState,useEffect } from 'react';
export const CartDetails = createContext();
export const CartContext = ({ children }) => {

  // this is for cartItems of the user 
  const [user , setUser] = useState({});
  const [cartItems, setCartItems] = useState([]);


  
 
 const fetchUser = async (userEmail) => {
  if (userEmail) {
      try {
          const response = await axios.get(`http://localhost:3001/users?email=${userEmail}`);
          const userData = response.data[0];

          if (userData) {
               console.log("User Data:", userData);
              setUser(userData);
              
              const userCartItems = userData.cart || [];
              setCartItems(userCartItems); // Set cart items directly
          } else {
              console.log("No user found for this email.");
          }
      } catch (error) {
          console.error('Error fetching user data:', error);
      }
  } else {
      console.log("No email found in localStorage.");
  }
};

useEffect(() => {
  const userEmail = localStorage.getItem('email');
  fetchUser(userEmail);
}, []); // Run once when the component mount initially

// since we are updating cartItems retriving from db  action that updates cartItems, we need seperate useEfeect to render it 
useEffect(() => {
  if (user) {
      // Assuming 'user' is updated based on user actions
      setCartItems(user.cart || []);
      console.log(user)
  }
}, [user]); // Run when the user  changes 
    


  // const addItem = async (item,quantity) => {
  //   try{
      
  //     // const userEmail = localStorage.getItem('email')
  //     // console.log("this is email",userEmail);

  //     // setCartItems((prevItems) => [...prevItems, item]);
      
  //     // console.log("this is cart state",cartItems);
      
  //     const newcart = [...cartItems]
  //     newcart.push({item})
  //     const userId = localStorage.getItem("id")
      
  //     const response=await axios.patch(`http://localhost:3001/users/${userId}`, {cart: newcart});
  //     // console.log("this is third item s", cartItems);
  //     console.log(response)
  //     setCartItems(newcart)
  //   }
  //   catch(error){
  //     console.log(error.message);
  //   }
  // };



  const addItem = async (newItem, quantity = 1) => {
    try {
      const existingCartItem = cartItems.find(cartItem => cartItem.item.product.id === newItem.id);
  
      if (existingCartItem) {
        // If the item already exists in the cart, increase its quantity
        const updatedCart = cartItems.map(cartItem => 
          cartItem.item.product.id === newItem.id
            ? { ...cartItem, item: { ...cartItem.item, quantity: cartItem.item.quantity + quantity } }
            : cartItem
        );
  
        const userId = localStorage.getItem("id");
        const response = await axios.patch(`http://localhost:3001/users/${userId}`, { cart: updatedCart });
        setCartItems(updatedCart);
        console.log(response);
      } else {
        // If the item does not exist, add it to the cart
        const newCart = [...cartItems, { item: { product: newItem, quantity } }];
        const userId = localStorage.getItem("id");
  
        const response = await axios.patch(`http://localhost:3001/users/${userId}`, { cart: newCart });
        setCartItems(newCart);
        console.log(response);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error.message);
    }
  };
  




  const removeItem = async (itemId) => {
    const updatedCart = cartItems.filter(cartItem => cartItem.item.product.id !== itemId); //filtering with id 
    
  
    try {
      const userId = localStorage.getItem("id"); // geting id from localstorage for patching  
      const response = await axios.patch(`http://localhost:3001/users/${userId}`, { cart: updatedCart });
      console.log(response);
      setCartItems(updatedCart);  // Update the state after successfully updating the backend
    } catch (error) {
      console.error('Error removing item:', error.message);
    }
  };
  



  const clearCart = async () => {
    try{
      const userId = localStorage.getItem("id");
      const response = await axios.patch(`http://localhost:3001/users/${userId}`, { cart: [] });
      setCartItems([]);

    }catch(error){
      console.log("error when clearing cart :", error.message);
    }
  };

  const decrementItem = async (itemId) => {
    const updatedCart = cartItems.map(cartItem =>
      cartItem.item.product.id === itemId && cartItem.item.quantity > 1
        ? { ...cartItem, item: { ...cartItem.item, quantity: cartItem.item.quantity - 1 } }
        : cartItem
    );
  
    setCartItems(updatedCart);
  
    try {
      const userId = localStorage.getItem("id");
      await axios.patch(`http://localhost:3001/users/${userId}`, { cart: updatedCart });
    } catch (error) {
      console.error('Error decrementing item quantity:', error.message);
    }
  };
  



  const incrementItem = async (itemId) => {
  const updatedCart = cartItems.map(cartItem => 
    cartItem.item.product.id === itemId 
      ? { ...cartItem, item: { ...cartItem.item, quantity: cartItem.item.quantity + 1 } }
      : cartItem
  );

  // Update the state
  setCartItems(updatedCart);

  // Update the backend
  try {
    const userId = localStorage.getItem("id");
    await axios.patch(`http://localhost:3001/users/${userId}`, { cart: updatedCart });
  } catch (error) {
    console.error('Error incrementing item quantity:', error.message);
  }
};

  

  return (
    <CartDetails.Provider value={{ cartItems,user, addItem, removeItem, clearCart, fetchUser , incrementItem ,decrementItem }}>
      {children}
    </CartDetails.Provider>
  );
};


































