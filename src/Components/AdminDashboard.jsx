// src/Admin/AdminDashboard.jsx
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => (
  <div className="flex h-full  ">
    {/* Sidebar Navigation */}
    <div className="p-5 bg-slate-300 w-1/4 text-black h-screen  sticky top-0">
      <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
      <nav className="flex flex-col gap-4 ">
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
      </nav>
    </div>

    {/* Dynamic Content Section */}
    <div className="flex-1 p-5 ">
      <Outlet />
    </div>
  </div>
);

export default AdminDashboard;
