// src/services/leadAPI.js

import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/leads';

/**
 * 📤 Submit a new user lead (Contact / Enquiry form)
 * @param {Object} formData - { name, email, phone, message }
 * @returns {Object} - { success: true, lead }
 */
export const submitLead = async (formData) => {
  try {
    const { data } = await axios.post(`${API_BASE}/submit`, formData);
    return data;
  } catch (error) {
    handleError('Submitting new lead failed', error);
  }
};

/**
 * 🔐 Admin Only: Fetch all leads
 * @param {String} token - JWT Token (from admin login)
 * @returns {Array} - All leads
 */
export const getAllLeads = async (token) => {
  try {
    const { data } = await axios.get(`${API_BASE}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    handleError('Fetching all leads failed', error);
  }
};

/**
 * 🗑️ Admin Only: Delete a lead by ID
 * @param {String} id - Lead MongoDB ID
 * @param {String} token - JWT Token
 * @returns {Object} - { success: true, message }
 */
export const deleteLead = async (id, token) => {
  try {
    const { data } = await axios.delete(`${API_BASE}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    handleError('Deleting lead failed', error);
  }
};

/**
 * 📛 Central Error Logger
 */
const handleError = (msg, error) => {
  const errMsg = error?.response?.data?.message || error.message || 'Unknown error';
  console.error(`❌ ${msg}:`, errMsg);
  throw new Error(errMsg);
};
