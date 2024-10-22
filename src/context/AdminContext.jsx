import axios from 'axios';
import React,{createContext , useState , useEffect} from 'react'


export const admin = createContext();
export const AdminContext = ({children}) => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchProducts();
        fetchUsers();
      }, []);
    
     const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:3001/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
    
      const addProduct = async (product) => {
        try {
          const response = await axios.post('http://localhost:3001/products', product);
          setProducts([...products, response.data]);
        } catch (error) {
          console.error('Error adding product:', error);
        }
      };
    
      const editProduct = async (product) => {
        try {
          await axios.put(`http://localhost:3001/products/${product.id}`, product);
          setProducts(
            products.map((p) => (p.id === product.id ? product : p))
          );
        } catch (error) {
          console.error('Error editing product:', error);
        }
      };
    
      const deleteProduct = async (id) => {
        try {
          await axios.delete(`http://localhost:3001/products/${id}`);
          setProducts(products.filter((product) => product.id !== id));
        } catch (error) {
          console.error('Error deleting product:', error);
        }
      };



  
    
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:3001/users');
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
    
      const toggleBlockUser = async (user) => {
        try {
          const updatedUser = { ...user, isBlocked: !user.isBlocked };
          await axios.put(`http://localhost:3001/users/${user.id}`, updatedUser);
          setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
        } catch (error) {
          console.error('Error blocking/unblocking user:', error);
        }
      };
    
      const fetchUserOrders = async (userId) => {
        try {
          const response = await axios.get(`http://localhost:3001/users/${userId}`);
          const user = response.data;
          setOrders(user.orders || []);
          setSelectedUser(userId);
          setIsModalOpen(true); // Open modal when orders are fetched
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
      };


  return (
    <admin.Provider value={{products,addProduct,editProduct,deleteProduct ,users, setUsers,selectedUser, setSelectedUser , fetchUserOrders,toggleBlockUser,closeModal,orders, setOrders,isModalOpen, setIsModalOpen}}>
        {children}
    </admin.Provider>
  )
}


