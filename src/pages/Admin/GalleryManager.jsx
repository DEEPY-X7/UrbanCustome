import React, { useEffect, useState } from 'react';
import { getFullGallery as getGallery, uploadGalleryItem as uploadGalleryImage, deleteGalleryItem as deleteGalleryImage } from '../../services/galleryAPI';

import { uploadImageToCloudinary } from '../../utils/imageUploader';
import { useAdmin } from '../../context/AdminContext';
import Loader from '../../components/Loader';

const GalleryManager = () => {
  const { isAuthenticated } = useAdmin();
  const [gallery, setGallery] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) loadGallery();
  }, [isAuthenticated]);

  const loadGallery = async () => {
    setLoading(true);
    try {
      const res = await getGallery();
      setGallery(res?.data || []);
    } catch (error) {
      alert('❌ Failed to fetch gallery images.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!title || !newImage) {
      alert('⚠️ Please provide both a title and image.');
      return;
    }

    try {
      setUploading(true);
      const imageUrl = await uploadImageToCloudinary(newImage);
      await uploadGalleryImage({ title, image: imageUrl });
      setTitle('');
      setNewImage(null);
      await loadGallery();
      alert('✅ Image uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('❌ Failed to upload image.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      await deleteGalleryImage(id);
      setGallery((prev) => prev.filter((img) => img._id !== id));
    } catch (err) {
      alert('❌ Failed to delete image.');
    }
  };

  if (!isAuthenticated) return <p className="text-center py-10">🚫 Access Denied</p>;
  if (loading) return <Loader />;

  return (
    <div className="p-6 bg-background text-foreground min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Gallery Manager</h1>

      {/* Upload Form */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Image Title"
          className="px-4 py-2 border border-border rounded w-full md:w-1/3 bg-card"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="dark:text-white"
          accept="image/*"
        />
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition disabled:opacity-60"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.length > 0 ? (
          gallery.map((item) => (
            <div
              key={item._id}
              className="border border-border bg-card rounded overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-sm bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">📭 No images in the gallery yet.</p>
        )}
      </div>
    </div>
  );
};

export default GalleryManager;
