//here im checking if the cartitems are available by its stock , if the product doesnot have the stock products are filtered and not displayed thid product
import React, { useContext, useEffect } from 'react';
import { CartDetails } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/Nav'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyCart } from '../Features/CartSlice';
import Loader3 from '../Components/Loader3';
// import { CartDetails } from './CartContext'; // Adjust the import based on your context file structure

const Cart = () => {
  const navigate = useNavigate();
  // const { cartItems, removeItem, clearCart, incrementItem, decrementItem } = useContext(CartDetails);

 const dispatch = useDispatch();
  const {statusCode ,error, loading , cart } = useSelector((state) => state.cart);

useEffect(async ()=> {
await dispatch(fetchMyCart());
},[dispatch])
 


   if (statusCode === 202) {
     return <div className="text-center">Your cart is empty!</div>;
  }
  return (
<div>

  {loading && <Loader3 />}

<Nav/>
<div className="max-w-7xl mx-auto p-4  ">
  <div className=' mt-4 '>

  <h1 className="text-xl   md:text-2xl font-bold mb-4 mr-3 tracking-tighter inline">
    SHOPPING CART
  </h1>
  <p className="inline">
    You have <span className="font-bold">{cart.length} item</span> in your cart
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
  {cart.length > 0 ? (
    cart.map((cartItem, index) => (
      <div
        key={index}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4 border-b pb-2"
      >
        {/* Product Image and Details */}
        <div className="flex items-center">
          <img
            src={cartItem.imageUrl}
            alt={cartItem.name}
            className="w-24 h-24 object-cover mr-4"
          />
          <div className="product-details">
            <p className="font-semibold text-greenDark">
              {cartItem.name}
            </p>
            
            <p>Category: {cartItem.category}</p>
            {/* <p>Type: {cartItem.item.product.type}</p> */}
          </div>
        </div>

        {/* Price and Quantity Controls */}
        <div className="flex justify-center space-x-4 items-center  p-2 rounded">
          <p className="price">{cartItem.price}</p>
          <div className="incremen-decrement-delete flex items-center space-x-2">
            {/* Button for decrementing quantity */}
            <button
              className="bg-gray-200 px-2 rounded"
              // onClick={() =>  decrementItem(cartItem.productId) }
            >
              -
            </button>
            <span className="mx-2">{cartItem.quantity}</span>
            {/* Button for incrementing quantity */}
            <button
              className="bg-gray-200 px-2 rounded"
              // onClick={() => incrementItem(cartItem.item.product.id)}
            >
              +
            </button>
            {/* Button for deleting item */}
            <button
              className="bg-gray-200 px-2 rounded ml-2"
              // onClick={() => removeItem(cartItem.item.product.id)}
            >
              DELETE
            </button>
          </div>
        </div>

        {/* Subtotal */}
        <div className="text-end">
          <p className="font-semibold">
            ₹{cartItem.total}
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
        {cart.totalPrice}
   </h2>


  </div>

  <div className='w-full flex justify-center items-center  mt-8 '>
           <button 
           className=' w-[80%] p-4 bg-greenDark text-white font-palanquin font-bold tracking-tight '
           onClick={()=>navigate('/checkout')}
           >CHECKOUT</button>
         </div>
</div>
</div>


  )
  // return <h1>fghjkl;kjh</h1>
}


 export default Cart;
