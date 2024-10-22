// AdminUserManagement.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserOrdersModal from './UserOrdersModal';
import { admin } from '../context/AdminContext';

const AdminUserManagement = () => {
 const {users, setUsers,selectedUser, setSelectedUser , fetchUserOrders,toggleBlockUser,closeModal,orders, setOrders,isModalOpen, setIsModalOpen} =  useContext(admin);
  // const [users, setUsers] = useState([]);
  // const [selectedUser, setSelectedUser] = useState(null);
  // const [orders, setOrders] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3001/users');
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

  // const toggleBlockUser = async (user) => {
  //   try {
  //     const updatedUser = { ...user, isBlocked: !user.isBlocked };
  //     await axios.put(`http://localhost:3001/users/${user.id}`, updatedUser);
  //     setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
  //   } catch (error) {
  //     console.error('Error blocking/unblocking user:', error);
  //   }
  // };

  // const fetchUserOrders = async (userId) => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/users/${userId}`);
  //     const user = response.data;
  //     setOrders(user.orders || []);
  //     setSelectedUser(userId);
  //     setIsModalOpen(true); // Open modal when orders are fetched
  //   } catch (error) {
  //     console.error('Error fetching orders:', error);
  //   }
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedUser(null);
  // };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      <table className="w-full table-auto border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">User ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{user.fname} {user.lname}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {user.isBlocked ? 'Blocked' : 'Active'}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center w-80">
                <button
                  onClick={() => toggleBlockUser(user)}
                  className={`px-2 py-1 rounded mr-2 ${user.isBlocked ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} text-white`}
                >
                  {user.isBlocked ? 'Unblock' : 'Block'}
                </button>
                <button
                  onClick={() => fetchUserOrders(user.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  View Orders
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <UserOrdersModal
          orders={orders}
          onClose={closeModal}
          userId={selectedUser}
        />
      )}
    </div>
  );
};

export default AdminUserManagement;
