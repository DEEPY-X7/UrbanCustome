// utils/imageUploader.js

/**
 * 📤 Uploads an image to Cloudinary and returns its secure URL
 * @param {File} file - The image file to upload
 * @returns {Promise<string>} - Secure Cloudinary image URL
 */
export const imageUploader = async (file) => {
  try {
    if (!file) throw new Error('No file provided');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // .env based
    formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);       // .env based

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();

    if (!data.secure_url) throw new Error(data.error?.message || 'Upload failed');

    return data.secure_url;
  } catch (error) {
    console.error('❌ Cloudinary Upload Error:', error.message);
    throw error;
  }
};
