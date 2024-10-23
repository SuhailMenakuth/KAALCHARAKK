import React, { useState, useEffect , useContext} from 'react';
import axios from 'axios';
import AddProductModal from './AddProductModal'
import EditModal from './EditModal';
import { admin } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';


const AdminProductManagement = ({ref}) => {
  const navigate = useNavigate();
  const{products,addProduct,editProduct,deleteProduct} = useContext(admin);
  // const [products, setProducts] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3001/products');
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // };

  // const addProduct = async (product) => {
  //   try {
  //     const response = await axios.post('http://localhost:3001/products', product);
  //     setProducts([...products, response.data]);
  //   } catch (error) {
  //     console.error('Error adding product:', error);
  //   }
  // };

  // const editProduct = async (product) => {
  //   try {
  //     await axios.put(`http://localhost:3001/products/${product.id}`, product);
  //     setProducts(
  //       products.map((p) => (p.id === product.id ? product : p))
  //     );
  //   } catch (error) {
  //     console.error('Error editing product:', error);
  //   }
  // };

  // const deleteProduct = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/products/${id}`);
  //     setProducts(products.filter((product) => product.id !== id));
  //   } catch (error) {
  //     console.error('Error deleting product:', error);
  //   }
  // };

  return (
    <div className="container mx-auto p-4" >

      <div className='sticky top-0 bg-white'>
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <button
  onClick={() => setAddModalOpen(true)}
  className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
>
  Add New Product
</button>

<button 
className='ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"'
onClick={()=> navigate('/admin')}
>
  Dashboard</button>
  </div>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
           <th className="border border-gray-300 px-4 py-2">Product ID</th>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Product</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Stock</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">{product.name}</td>          
              <td className="border border-gray-300 px-4 py-2 text-center">{product.price}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{product.stock}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
              <button
  onClick={() => {
    setCurrentProduct(product); // Ensure product is set correctly.
    setEditModalOpen(true);
  }}
  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
>
  Edit
</button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAddModalOpen && (
        <AddProductModal
          onClose={() => setAddModalOpen(false)}
          onAddProduct={addProduct}
        />
      )}

      {/* {isEditModalOpen && currentProduct && (
        <EditProductModal
          product={currentProduct}
          onClose={() => setEditModalOpen(false)}
          onEditProduct={editProduct}
        />
      )} */}
      {isEditModalOpen && currentProduct && (
  <EditModal
    product={currentProduct}
    onClose={() => {
      setEditModalOpen(false);
      setCurrentProduct(null); // Clear product after editing.
    }}
    onEditProduct={editProduct}
  />
)}
    </div>
  );
};

export default AdminProductManagement;
