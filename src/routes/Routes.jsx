// src/routes/Routes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Public Pages
import HomePage from '../pages/HomePage';
import AdminLogin from '../pages/admin/AdminLogin';

// Admin Pages (Protected)
import AdminDashboard from '../pages/admin/AdminDashboard';
import GalleryManager from '../pages/admin/GalleryManager';
import LeadList from '../pages/admin/LeadList';

import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🌐 Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* 🔐 Protected Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/gallery"
        element={
          <ProtectedRoute>
            <GalleryManager />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/leads"
        element={
          <ProtectedRoute>
            <LeadList />
          </ProtectedRoute>
        }
      />

      {/* ❓ 404 Not Found Fallback (optional future setup) */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
