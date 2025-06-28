// client/src/routes/PrivateRoute.jsx

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {
  const { isAdminAuthenticated, loading } = useContext(AdminContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
        <Loader message="Checking admin credentials..." />
      </div>
    );
  }

  if (!isAdminAuthenticated) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
