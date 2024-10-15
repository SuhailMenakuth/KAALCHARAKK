// // SearchModal.js
// import React from 'react';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // Avoid accessibility issues

// const Modal = ({ isOpen, onClose, search, setSearch, searchResults }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-4"
//       overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//     >
//       <button onClick={onClose} className="text-gray-500 float-right">X</button>
//       <h2 className="text-xl font-bold mb-4">Search Products</h2>

//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-full p-2 border rounded-md mb-4"
//         placeholder="Search for products..."
//       />

//       <div>
//         {searchResults.length > 0 ? (
//           searchResults.map((item) => (
//             <div key={item.id} className="p-2 border-b">
//               <p className="font-bold">{item.name}</p>
//               <p className="text-sm text-gray-500">₹{item.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </Modal>
//   );
// };

// export default Modal;
// Modal.jsx
const Modal = ({isOpen}) => {

 
  return <div className="fixed">
    <h1>verindo</h1>
    
    
    </div>;
};

export default Modal;
