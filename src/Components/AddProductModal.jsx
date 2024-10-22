import React, { useState } from 'react';

const AddProductModal = ({ onClose, onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    category: '',
    name: '',
    image: '',
    price: '',
    type: '',
    size: '',
    style: '',
    offer: '',
    title: '',
    stock: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-3/5">
        <h3 className="text-xl font-bold mb-4">Add New Product</h3>
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          name='category'
          placeholder='category'
          onChange={handleChange}
          className='w-full p-2 border mb-2'
          />
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            className="w-full p-2 border mb-2"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="w-full p-2 border mb-2"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="w-full p-2 border mb-2"
          />
          <input
            type="text"
            name="type"
            placeholder="type"
            onChange={handleChange}
            className="w-full p-2 border mb-2"
          />
          <input
            type="number"
            name="size"
            placeholder="size"
            onChange={handleChange}
            className="w-full p-2 border mb-2"
          />
          <input
            type="text"
            name="style"
            placeholder="style"
            onChange={handleChange}
            className="w-full p-2 border mb-2"
          />
          <input
            type="number"
            name="offer"
            placeholder="offer"
            onChange={handleChange}
            className="w-full p-2 border mb-2"
          />
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            className="w-full p-2 border mb-2"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            onChange={handleChange}
            className="w-full p-2 border mb-4"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
