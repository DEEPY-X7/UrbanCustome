// src/services/adminAPI.js

import axios from 'axios';

// 🌐 Backend Base URL from .env
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/auth';

/**
 * 🔐 Admin Login – Authenticates admin and returns token + admin info
 * @param {Object} credentials - { email, password }
 * @returns {Object} { token, adminData }
 */
export const loginAdmin = async (credentials) => {
  try {
    const { data } = await axios.post(`${API_BASE}/login`, credentials);
    return data;
  } catch (error) {
    const msg = error?.response?.data?.message || 'Login failed. Please check your credentials.';
    console.error('❌ Login failed:', msg);
    throw new Error(msg);
  }
};

/**
 * 👤 Get Admin Profile – Validates JWT and returns admin details
 * @param {String} token - JWT from localStorage
 * @returns {Object} admin profile
 */
export const getAdminProfile = async (token) => {
  try {
    const { data } = await axios.get(`${API_BASE}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    const msg = error?.response?.data?.message || 'Failed to fetch admin profile.';
    console.error('❌ Profile fetch error:', msg);
    throw new Error(msg);
  }
};
