import { useState } from 'react';

const EditModal = ({ product, onClose, onEditProduct }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProduct(updatedProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-3/5">
        <h3 className="text-xl font-bold mb-4">Edit Product</h3>
        <form onSubmit={handleSubmit}>
          {/** Name Input **/}
          <div className="flex items-center mb-2">
            <label htmlFor="name" className="w-32">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={updatedProduct.name}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>

          {/** Image URL Input **/}
          <div className="flex items-center mb-2">
            <label htmlFor="image" className="w-32">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={updatedProduct.image}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>

          {/** Category Input **/}
          <div className="flex items-center mb-2">
            <label htmlFor="category" className="w-32">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={updatedProduct.category}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>

          {/** Price Input **/}
          <div className="flex items-center mb-2">
            <label htmlFor="price" className="w-32">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>

          {/** Type Input **/}
          <div className="flex items-center mb-2">
            <label htmlFor="type" className="w-32">Type:</label>
            <input
              type="text"
              id="type"
              name="type"
              value={updatedProduct.type}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>

          {/** Style Input **/}
          <div className="flex items-center mb-2">
            <label htmlFor="style" className="w-32">Style:</label>
            <input
              type="text"
              id="style"
              name="style"
              value={updatedProduct.style}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>

          {/** Offer Input **/}
          <div className="flex items-center mb-2">
            <label htmlFor="offer" className="w-32">Offer:</label>
            <input
              type="number"
              id="offer"
              name="offer"
              value={updatedProduct.offer}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>

          {/** Title Input **/}
          <div className="flex items-center mb-2">
            <label htmlFor="title" className="w-32">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={updatedProduct.title}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>

          {/** Stock Input **/}
          <div className="flex items-center mb-4">
            <label htmlFor="stock" className="w-32">Stock:</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={updatedProduct.stock}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>

          {/** Buttons **/}
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
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
