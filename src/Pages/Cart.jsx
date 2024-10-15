import React, { useContext, useEffect } from 'react';

import { CartDetails } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/Nav'
// import { CartDetails } from './CartContext'; // Adjust the import based on your context file structure

const Cart = () => {
  // const { cartItems } = useContext(CartDetails);
  const navigate = useNavigate();
  const { cartItems, removeItem, clearCart, incrementItem, decrementItem } = useContext(CartDetails);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);


  if (cartItems.length === 0) {
    return <div className="text-center">Your cart is empty!</div>;
  }
  return (
    // <div className="container mx-auto p-4">
    //   <div className='flex justify-around mb-4'>
    //     <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
    //     <button className='bg-greenDark text-white px-4 py-1'
    //       onClick={() => clearCart()}
    //     >CLEAR</button>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


    //     {cartItems.map(({ item }, index) => (
    //       <div key={item.product.id || index} className="border p-4 rounded shadow-md">
    //         <img src={item.product.image} alt={item.product.name} className=" w-full h-32 object-contain mb-2" />
    //         <h2 className="text-lg font-semibold">{item.product.name}</h2>
    //         <p>Price: ₹{item.product.price}</p>
    //         <p>Size: {item.product.size}</p>
    //         <div className="flex items-center mt-2">
    //           {/* button for decrementing quantity */}
    //           <button className="bg-gray-200 px-2 rounded" onClick={() => decrementItem(item.product.id)}>-</button>
    //           <span className="mx-2">{item.quantity}</span>
    //           {/* button for decrementing quantity */}
    //           <button className="bg-gray-200 px-2 rounded" onClick={() => incrementItem(item.product.id)}>+</button>
    //           {/* button for deleting  */}
    //           <button className="bg-gray-200 px-2 rounded ml-2" onClick={() => removeItem(item.product.id)}>DELETE</button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>


    //   <div className="mt-4">
    //     <h2 className="text-xl font-bold">
    //       Total: ${cartItems.reduce((total, cartitem) => {
    //         const price = cartitem.item.product.price;
    //         const quantity = cartitem.item.quantity;
    //         return total = price * quantity;
    //       }, 0)}
    //     </h2>
    //   </div>

    //     <div className='w-full flex justify-center items-center  mt-8 '>
    //       <button 
    //       className=' w-[80%] p-4 bg-greenDark text-white font-palanquin font-bold tracking-tight '
    //       onClick={()=>navigate('/checkout')}
    //       >CHECKOUT</button>
    //     </div>

    // </div>





<>

<Nav/>
<div className="max-w-7xl mx-auto p-4 mt-8 ">
  <div className='my-8'>

  <h1 className="text-xl   md:text-2xl font-bold mb-4 mr-3 tracking-tighter inline">
    SHOPPING CART
  </h1>
  <p className="inline">
    You have <span className="font-bold">{cartItems.length} item</span> in your cart
  </p>
  </div>
  <hr />

  {/* Header section */}
  <div className='hidden md:block'> 
  <div className="  grid grid-cols-3 gap-4 mt-3  items-center text-center ">
    <div className="product">
      <p className="font-semibold text-left">PRODUCT</p>
    </div>
    <div className="unitprice-quantity flex justify-center space-x-8">
      <p className="font-semibold">UNIT PRICE</p>
      <p className="font-semibold">QUANTITY</p>
    </div>
    <div className="subtotal">
      <p className="font-semibold text-end">TOTAL</p>
    </div>
  </div>

  </div>

  {/* Cart Items */}
  {cartItems.length > 0 ? (
    cartItems.map((cartItem, index) => (
      <div
        key={index}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4 border-b pb-2"
      >
        {/* Product Image and Details */}
        <div className="flex items-center">
          <img
            src={cartItem.item.product.image}
            alt={cartItem.item.product.name}
            className="w-24 h-24 object-cover mr-4"
          />
          <div className="product-details">
            <p className="font-semibold text-greenDark">
              {cartItem.item.product.name}
            </p>
            <p>Size: {cartItem.item.product.size}</p>
            <p>Category: {cartItem.item.product.category}</p>
            <p>Type: {cartItem.item.product.type}</p>
          </div>
        </div>

        {/* Price and Quantity Controls */}
        <div className="flex justify-center space-x-4 items-center  p-2 rounded">
          <p className="price">{cartItem.item.product.price}</p>
          <div className="incremen-decrement-delete flex items-center space-x-2">
            {/* Button for decrementing quantity */}
            <button
              className="bg-gray-200 px-2 rounded"
              onClick={() => decrementItem(cartItem.item.product.id)}
            >
              -
            </button>
            <span className="mx-2">{cartItem.item.quantity}</span>
            {/* Button for incrementing quantity */}
            <button
              className="bg-gray-200 px-2 rounded"
              onClick={() => incrementItem(cartItem.item.product.id)}
            >
              +
            </button>
            {/* Button for deleting item */}
            <button
              className="bg-gray-200 px-2 rounded ml-2"
              onClick={() => removeItem(cartItem.item.product.id)}
            >
              DELETE
            </button>
          </div>
        </div>

        {/* Subtotal */}
        <div className="text-end">
          <p className="font-semibold">
            ₹{cartItem.item.product.price * cartItem.item.quantity}
          </p>
        </div>
      </div>
    ))
  ) : (

    <div className='mx-auto bg-greenDark w-52 h-52'>
      <h1 className="mt-4 font-palanquin font-bold text-black text-4xl">Your cart is empty</h1>
    </div>
  )}

  <div className='flex justify-between'>

    <h2 className='text-xl font-bold'>TOTAL</h2>

  <h2 className="text-xl font-bold">
        {cartItems.reduce((total, cartitem) => {
            const price = cartitem.item.product.price;
             const quantity = cartitem.item.quantity;
             return total = total + price * quantity;
           }, 0)}
   </h2>


  </div>

  <div className='w-full flex justify-center items-center  mt-8 '>
           <button 
           className=' w-[80%] p-4 bg-greenDark text-white font-palanquin font-bold tracking-tight '
           onClick={()=>navigate('/checkout')}
          >CHECKOUT</button>
         </div>
</div>
</>

  )}


export default Cart;
