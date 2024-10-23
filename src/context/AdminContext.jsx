import axios from 'axios';
import React,{createContext , useState , useEffect} from 'react'


export const admin = createContext();
export const AdminContext = ({children}) => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // dashbored 

   const  [totalOrders, SetTotalOrders]=useState([]);
   const [blockedCount , SetblockedCount] = useState([]);
   const [mostSoldedProduct , SeMostSoldedProduct] = useState([]);
   const [totalRevenue , setTotalRevenue] = useState(0)
   const unblockedCount = users.length - blockedCount;


    useEffect(() => {
        fetchProducts();
        fetchUsers();
      }, []);

      useEffect(() => {   // Call this whenever users are fetched
        fetchTotalOrders();
        fetchTotalBlockedOrders(); 
        fetchMostsoldProduct();
        fetchTotalRevenue(); 
      }, [users]);



    
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
   

      const fetchTotalOrders = () =>{
        const total = users.reduce((total, user) => {
          return total + (user.orders ? user.orders.length : 0); 
        }, 0);
       SetTotalOrders(total);
      };
   

      const fetchTotalBlockedOrders = () =>{
        const count = users.reduce((count,user)=>{
          return count + (user.isBlocked ? 1 : 0);
        },0);
        SetblockedCount(count);
      }
      

      const fetchMostsoldProduct = () =>{
        if (products.length === 0) return null;
        const product = products.reduce((product,cProduct) =>
         cProduct.sold > product.sold ?  cProduct : product
        )
        console.log("this is product " , product.name);
        SeMostSoldedProduct(product);
      }

      const fetchTotalRevenue = () => {
        if (users.length === 0) return null;
        const totalRevenue = users.reduce((total, user) => {
          const userOrders = user.orders || [];
          // Sum the total of all orders for each user
          const userTotal = userOrders.reduce((sum, order) => sum + order.total, 0);
          return total + userTotal;
        }, 0);
      
        console.log("Total Revenue: ", totalRevenue);
        setTotalRevenue(totalRevenue);
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
    <admin.Provider value={{products,addProduct,editProduct,deleteProduct ,users, setUsers,selectedUser, setSelectedUser , fetchUserOrders,toggleBlockUser,closeModal,orders, setOrders,isModalOpen, setIsModalOpen,totalOrders,blockedCount,unblockedCount ,mostSoldedProduct,totalRevenue}}>
        {children}
    </admin.Provider>
  )
}


