// src/services/galleryAPI.js

import axios from 'axios';

// 🌐 Base URL from environment or fallback
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/gallery';

/**
 * 🖼️ Get Top 3 Gallery Images – Homepage Preview
 */
export const getGalleryPreview = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}/preview`);
    return data;
  } catch (error) {
    handleError('Fetching gallery preview failed', error);
  }
};

/**
 * 🖼️ Get Full Gallery – For /gallery page
 */
export const getFullGallery = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}`);
    return data;
  } catch (error) {
    handleError('Fetching full gallery failed', error);
  }
};

/**
 * 📤 Upload Gallery Item – Admin Protected Route
 * @param {FormData} formData - Image + Title
 * @param {String} token - JWT token
 */
export const uploadGalleryItem = async (formData, token) => {
  try {
    const { data } = await axios.post(`${API_BASE}/upload`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    handleError('Gallery image upload failed', error);
  }
};

/**
 * ❌ Delete Gallery Item – Admin Protected
 * @param {String} id - MongoDB ID
 * @param {String} token - JWT token
 */
export const deleteGalleryItem = async (id, token) => {
  try {
    const { data } = await axios.delete(`${API_BASE}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    handleError('Deleting gallery item failed', error);
  }
};

/**
 * 🔐 Centralized error handler (can be expanded for Sentry, toast, etc.)
 */
const handleError = (message, error) => {
  const errMsg = error?.response?.data?.message || error.message || 'Unknown error';
  console.error(`❌ ${message}:`, errMsg);
  throw new Error(errMsg);
};
