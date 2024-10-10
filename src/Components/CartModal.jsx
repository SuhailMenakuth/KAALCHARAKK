//src/CartModal.js
// import React from 'react';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // Set the app element for accessibility

// const CartModal = ({ isOpen, onClose, cartItems, onQuantityChange }) => {
//     const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//     return (
//         <Modal
//             isOpen={isOpen}
//             onRequestClose={onClose}
//             className="bg-white w-1/4 h-full p-4 shadow-lg rounded-l-md"
//             overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center"
//         >
//             <button onClick={onClose} className="absolute top-2 right-2">
//                 &times;
//             </button>
//             <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
//             <div className="space-y-4">
//                 {cartItems.map((item) => (
//                     <div key={item.id} className="flex justify-between items-center">
//                         <span>{item.name}</span>
//                         <div className="flex items-center">
//                             <button onClick={() => onQuantityChange(item.id, -1)} className="bg-gray-200 px-2">-</button>
//                             <span className="mx-2">{item.quantity}</span>
//                             <button onClick={() => onQuantityChange(item.id, 1)} className="bg-gray-200 px-2">+</button>
//                         </div>
//                         <span>${(item.price * item.quantity).toFixed(2)}</span>
//                     </div>
//                 ))}
//             </div>
//             <div className="flex justify-between font-bold mt-4">
//                 <span>Total:</span>
//                 <span>${total.toFixed(2)}</span>
//             </div>
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Checkout</button>
//         </Modal>
//     );
// };

// export default CartModal;











// this is from the chatgpt 



