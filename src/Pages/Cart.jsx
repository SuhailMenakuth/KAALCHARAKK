import React, { useContext, useEffect  } from 'react';

import { CartDetails } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
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
    <div className="container mx-auto p-4">
      <div className='flex justify-around mb-4'>
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <button className='bg-greenDark text-white px-4 py-1'
          onClick={() => clearCart()}
        >CLEAR</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


        {cartItems.map(({ item }, index) => (
          <div key={item.product.id || index} className="border p-4 rounded shadow-md">
            <img src={item.product.image} alt={item.product.name} className=" w-full h-32 object-contain mb-2" />
            <h2 className="text-lg font-semibold">{item.product.name}</h2>
            <p>Price: ₹{item.product.price}</p>
            <p>Size: {item.product.size}</p>
            <div className="flex items-center mt-2">
              {/* button for decrementing quantity */}
              <button className="bg-gray-200 px-2 rounded" onClick={() => decrementItem(item.product.id)}>-</button>
              <span className="mx-2">{item.quantity}</span>
              {/* button for decrementing quantity */}
              <button className="bg-gray-200 px-2 rounded" onClick={() => incrementItem(item.product.id)}>+</button>
              {/* button for deleting  */}
              <button className="bg-gray-200 px-2 rounded ml-2" onClick={() => removeItem(item.product.id)}>DELETE</button>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-4">
        <h2 className="text-xl font-bold">
          Total: ${cartItems.reduce((total, cartitem) => {
            const price = cartitem.item.product.price;
            const quantity = cartitem.item.quantity;
            return total = price * quantity;
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
  );

};

export default Cart;
