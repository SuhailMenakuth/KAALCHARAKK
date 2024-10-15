
// use outlet for the Link //saved adress
import React, { useContext ,useState,useEffect } from 'react';
import { CartDetails } from '../context/CartContext';
import { Link , useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For form validation
import axios from 'axios';
import Modal from 'react-modal';



// Validation schema for the form using Yup
const validationSchema = Yup.object({
  country: Yup.string().required('Country is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  phone: Yup.string().required('Phone number is required'),
  paymentMethod: Yup.string().required('Please select a payment method'),
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  },
};


const Checkout = () => {
  const { cartItems ,user,clearCart } = useContext(CartDetails);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    country: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    state: '',
    city: '',
    phone: '',
    paymentMethod: '',
  });

  useEffect(() => {
    if (user) {
      setInitialValues((prevValues) => ({
        ...prevValues,
        firstName: user.fname || '',
        lastName: user.lname || '',
        email: user.email || '',
      }));
    }
  }, [user]);

  


const handleSubmit = async (values) => {
  try {
    setIsModalOpen(true);
    // Prepare the new order object
    const newOrder = {
      orderId: Date.now().toString(), // Generate a unique order ID
      items: cartItems, // All items from the cart
      total: cartItems.reduce(
        (total, item) => total + item.item.product.price * item.item.quantity,
        0
      ),
      paymentMethod: values.paymentMethod,
      orderDate: new Date().toLocaleDateString(),
    };
    // Prepare the new address object
    const newAddress = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      address: values.address,
      state: values.state,
      city: values.city,
      country: values.country,
    };
    // Create updated user object with new order and address
    const updatedUser = {
      ...user,
      orders: [...user.orders, newOrder], // Add new order to existing orders
      address: [...user.address, newAddress], // Add new address to existing addresses
      cart: [], // Clear the cart after checkout
    };
    // Make a pTCH request to update the user's data in the JSON server
    await axios.patch(`http://localhost:3001/users/${user.id}`, updatedUser);

    //used for delaying
    setTimeout(() => {
      setIsModalOpen(false); 
      clearCart();
      navigate('/'); 
    }, 3000);
    
  } catch (error) {
    console.error('Error during checkout:', error);
    alert('Checkout failed. Please try again.');
  }
};


  return (
    <div className="max-w-7xl mx-auto p-4 relative">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

        {/* Shipping Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6 ">
          <h3 className="text-xl font-semibold mb-4">Delivery</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true} // Allows reinitialization of the form when initialValues change

            onSubmit={handleSubmit}

          >
            {({ isSubmitting }) => (
              <Form>
                {/* Country */}
                <div className="mb-4">
                  <Field
                    as="select"
                    name="country"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark"
                  >
                    <option value="" disabled>Country/Region</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="JP">Japan</option>
                    <option value="BR">Brazil</option>
                  </Field>
                  <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Name Fields */}
                <div className="mb-4 flex">
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark mr-1"
                  />
                  <div>
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark ml-1"
                  />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark"
                  />
                </div>

                {/* Address */}
                <div className="mb-4">
                  
                  <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                  <Field
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark"
                  />
                  
                </div>

                {/* State, City, and Phone */}
                <div className="mb-4 flex space-x-3">
                  <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />
                  <Field
                    type="text"
                    name="state"
                    placeholder="State"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark"
                  />

                  <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                  <Field
                    type="text"
                    name="city"
                    placeholder="City"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark"
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark"
                  />
                </div>

          {/* to use already have detail need outlet for that  */}
                <div className='mb-4'>
              <Link className='text-sm '>use a saved adress</Link>
            </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <div className="flex items-center border p-2 rounded-lg">
                    <Field
                      type="radio"
                      name="paymentMethod"
                      value="payu"
                      className="cursor-pointer"
                    />
                    <span className="ml-2">Cards, UPI, NB, Wallets by PayU India</span>
                  </div>

                  <div className="flex items-center border p-2 rounded-lg mt-2">
                    <Field
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      className="cursor-pointer"
                    />
                    <span className="ml-2">Cash on Delivery (COD)</span>
                  </div>
                  <ErrorMessage name="paymentMethod" component="div" className="text-red-500 text-sm" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-greenDark text-white py-2 px-4 rounded-md"
                >
                  PLACE ORDER
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Cart Details Section */}
        <div className="bg-slate-50 shadow-md rounded-lg p-6 h-fit sticky top-0">
          <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
          {cartItems.length > 0 ? (
            cartItems.map((cartItem, index) => (
              <div key={index} className="flex items-center justify-between mb-4 ">
                <div className="flex items-center ">
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

                {/*  sub total price  */}
               
                <p className="font-semibold">₹{cartItem.item.product.price * cartItem.item.quantity}</p>

               
              </div>
            ))

            

          ) : (
            <p>Your cart is empty.</p>
          )}


           {/* total */}
           <div className="border-t pt-4 mt-4">
            <p className="text-lg font-bold">Total: ₹{cartItems.reduce((total, item) => total + item.item.product.price * item.item.quantity, 0)}</p>
          </div>


        </div>
      </div>

      <Modal
         isOpen={isModalOpen}
         onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel="Order Success"
        
      >
        <div className='bg-white w-50 h-24 text-greenDark'>

        <h2 className="text-2xl font-bold">Order Placed Successfully!</h2>
        <p className="mt-2">You will be redirected to the home page shortly.</p>
        </div>
      </Modal>
    </div>
  );
};

export default Checkout;
