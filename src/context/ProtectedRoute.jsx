
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CartDetails } from './CartContext';  

const ProtectedRoute = () => {
  const { user } = useContext(CartDetails);

  if ( !user?.email) {
    return <Navigate to="/login" replace />;
  }
  // Render the nested routes if authenticated
  return <Outlet />;
};

export default ProtectedRoute;
