// UserOrdersModal.js
import React from 'react';

const UserOrdersModal = ({ orders, onClose, userId }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-11/12 md:w-2/3">
        <h3 className="text-xl font-bold mb-4">Orders for User ID: {userId}</h3>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.orderId} className="mb-4">
              <h4 className="font-bold">Order ID: {order.orderId}</h4>
              <table className="w-full table-auto border-collapse border border-gray-300 mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Product</th>
                    <th className="border border-gray-300 px-4 py-2">Price</th>
                    <th className="border border-gray-300 px-4 py-2">Quantity</th>
                    <th className="border border-gray-300 px-4 py-2">Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {item.item.product.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        ${item.item.product.price.toFixed(2)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {item.item.quantity}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        ${(item.item.product.price * item.item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2 text-right" colSpan={3}>
                      <strong>Total</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ${order.items.reduce((total, item) => total + (item.item.product.price * item.item.quantity), 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p>No orders found for this user.</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserOrdersModal;
