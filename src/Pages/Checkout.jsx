
// use outlet for the Link //saved adress
import React, { useContext } from 'react'
import { CartDetails } from '../context/CartContext'
import { Link } from 'react-router-dom';




const Checkout = () => {
  const { cartItems } = useContext(CartDetails);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout submission logic here
  };
  return (
    <div className="max-w-7xl mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">




        {/* Shipping Details Section */}

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Delivery</h3>
          <form onSubmit={handleSubmit}>

            <div className="mb-4">

              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                <option value="" className='opacity-5'>country/region</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="BR">Brazil</option>
              </select>

            </div>



            <div className="mb-4 flex">
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark mr-1" required placeholder='firstname' />
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark ml-1" required placeholder='lastname' />
            </div>

            <div className="mb-4">
              <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark" required placeholder='email' />
            </div>

            <div className="mb-4">
              <input type='text' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark" rows="3" required placeholder='Adress' />
            </div>



            <div className='mb-4 flex space-x-3'>
              <input type='text' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark" rows="3" required placeholder='State' />
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                <option value="" className=' text-gray-400 opacity-0'>country/region</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="BR">Brazil</option>
              </select>
              <input type='text' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark" rows="3" required placeholder='City' />
            </div>


            <div className="mb-4">
              <input type="tel" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark" required placeholder='Phone' />
            </div>

            <div className='mb-4'>
              <Link className='text-sm '>use a saved adress</Link>
            </div>


            <div className='mb-4 leading-none '>
              <h3 className="text-xl font-semibold mb-4">Payment</h3>
              <p className='text-sm'>All transactions are secure and encrypted</p>
            </div>


            <div className='mb-4   '>
              <div className='flex items-center border border-greenDark p-2 rounded-lg  group'>
                    <input type="radio" name="payment-method" value="payu" required className='cursor-pointer'  />
                    <h3 className='ml-2'> Cards, UPI, NB, Wallets, BNPL by PayU India </h3>
              </div>
             
              <br />

              <div className='flex items-center border border-greenDark p-2 rounded-lg  group'>
                    <input type="radio" name="payment-method" value="cod" className='cursor-pointer' required />
                    <h3 className='ml-4'> Cash on Delivery (COD)</h3>
              </div>
            </div>







            <button type="submit" className="w-full bg-greenDark text-white py-2 px-4 rounded-md ">
              PROCEED TO PAYMENT
            </button>
          </form>
        </div>

        {/* Cart Details Section */}

        <div className="bg-white shadow-md rounded-lg p-6  ">
          <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
          {cartItems.length > 0 ? (
            cartItems.map((cartItem, index) => (
              <div key={index} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={cartItem.item.product.image}
                    alt={cartItem.item.product.name}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{cartItem.item.product.name}</p>
                    <p className="text-gray-600">Quantity: {cartItem.item.quantity}</p>
                    <p className="text-gray-600">Price: ₹{cartItem.item.product.price}</p>
                  </div>
                </div>
                <p className="font-semibold">₹{cartItem.item.product.price * cartItem.item.quantity}</p>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div className="border-t pt-4 mt-4">
            <p className="text-lg font-bold">Total: ₹{cartItems.reduce((total, item) => total + item.item.product.price * item.item.quantity, 0)}</p>
          </div>
        </div>





      </div>
    </div>
  )
}

export default Checkout
