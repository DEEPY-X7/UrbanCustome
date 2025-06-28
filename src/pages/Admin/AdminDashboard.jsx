import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const { isAuthenticated, admin, logout } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => logout();

  const menuItems = [
    { label: 'Dashboard', route: '/admin' },
    { label: 'Leads', route: '/admin/leads' },
    { label: 'Gallery', route: '/admin/gallery' },
    { label: 'Testimonials', route: '/admin/testimonials' },
  ];

  return (
    <div className="min-h-screen flex bg-background text-foreground transition-colors duration-300">
      
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border p-6 hidden md:flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">UrbanCustom Admin</h2>
          <nav className="space-y-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full text-left px-2 py-1 rounded hover:bg-muted hover:text-accent transition"
                onClick={() => navigate(item.route)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Welcome, {admin?.username || 'Admin'} 👋
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            This is your secure dashboard. Use the sidebar to manage your content.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Total Leads" value="52" />
            <StatCard title="Gallery Images" value="34" />
            <StatCard title="Testimonials" value="11" />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="p-6 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default AdminDashboard;
