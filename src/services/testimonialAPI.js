// src/services/testimonialAPI.js

import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/testimonials';

/**
 * 📥 Public: Fetch all approved testimonials for frontend UI
 * @returns {Array} testimonials[]
 */
export const getTestimonials = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}/`);
    return data;
  } catch (error) {
    handleError('Fetching testimonials failed', error);
  }
};

/**
 * 🛠️ Admin Only: Add a new testimonial (manual insertion)
 * @param {Object} testimonial - { clientName, message, rating?, imageURL? }
 * @param {String} token - Admin JWT
 * @returns {Object} { success, testimonial }
 */
export const addTestimonial = async (testimonial, token) => {
  try {
    const { data } = await axios.post(`${API_BASE}/add`, testimonial, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    handleError('Adding testimonial failed', error);
  }
};

/**
 * 🔐 Admin Only: Delete a testimonial by ID
 * @param {String} id - Testimonial MongoDB ID
 * @param {String} token - Admin JWT
 * @returns {Object} { success, message }
 */
export const deleteTestimonial = async (id, token) => {
  try {
    const { data } = await axios.delete(`${API_BASE}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    handleError('Deleting testimonial failed', error);
  }
};

/**
 * 📛 Error Handler Utility
 */
const handleError = (msg, error) => {
  const errMsg = error?.response?.data?.message || error.message || 'Unknown error';
  console.error(`❌ ${msg}:`, errMsg);
  throw new Error(errMsg);
};
