import { useContext , useEffect  } from 'react';
import { Link, Outlet ,useNavigate } from 'react-router-dom';
import DashboardCharts from './DashboardCharts';
import { admin } from '../context/AdminContext';

const AdminDashboard = () => {
  const{products,users,totalOrders,blockedCount , unblockedCount,mostSoldedProduct,totalRevenue} = useContext(admin);
  const navigate = useNavigate();

  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem('email');
  //   };
  // }, []);

 
  

  return (
    <div className="flex h-full">
      {/* Sidebar Navigation */}
      <div className="p-5 bg-slate-300 w-1/4 text-black h-screen sticky top-0">
        <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
        <nav className="flex flex-col gap-4">
          <Link
            to="/admin/productManagement"
            className="bg-green-500 text-white p-3 rounded hover:bg-green-600"
          >
            Manage Products
          </Link>
          <Link
            to="/admin/userManagement"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
            >
            Manage Users
          </Link>
          
          <button 
          className=' bg-greenDark text-white p-3 hover:bg-opacity-95 rounded-md w-2/3 self-center'
          onClick={()=> {
            localStorage.removeItem('email');
            localStorage.removeItem('id');
            navigate('/login', { replace: true });
          }}
          >
            Log Out
          </button>
        </nav>
      </div>

      {/* Admin Dashboard Details */}
      <div className="flex-1 p-5 ">
        <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="total users bg-white p-4 rounded shadow border border-greenDark">
            <h3 className=" font-bold">Total Users</h3>
            <p>{users.length}</p>
          </div>
          <div className="productslength bg-white p-4 rounded shadow border border-greenDark">
            <h3 className="font-bold">Total Products</h3>
            <p>{products.length}</p>
          </div>
          <div className="totalorders bg-white p-4 rounded shadow border border-greenDark">
            <h3 className="font-bold">Total Orders</h3>
            <p>{totalOrders}</p>
          </div>
          <div className="totalrevenue bg-white p-4 rounded shadow border border-greenDark">
            <h3 className="font-bold">Total Revenue</h3>
            <p>₹{totalRevenue}</p>
          </div>
          <div className="mostSoldProducts bg-white p-4 rounded shadow border border-greenDark">
            <h3 className="font-bold">Most Sold Product</h3>
            <p>{mostSoldedProduct.name} : {mostSoldedProduct.sold}</p>
          </div>
          <div className="BlockedUsers bg-white p-4 rounded shadow border border-greenDark">
            <h3 className="font-bold">Blocked Users</h3>
            <p>{blockedCount}</p>
          </div>
          <div className="unblockedusers bg-white p-4 rounded shadow border border-greenDark">
            <h3 className="font-bold">Unblocked Users</h3>
            <p>{unblockedCount}</p>
          </div>
        </div>



          {/* Dashboard Charts Section */}
          <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Analytics Overview</h2>
          <DashboardCharts /> {/* Render the chart component */}
        </div>

        {/* Render the Outlet for nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
