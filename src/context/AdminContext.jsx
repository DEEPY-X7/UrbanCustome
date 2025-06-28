// src/context/AdminContext.js

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../services/authAPI';

// 🔐 ADMIN CONTEXT STARTS
const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('adminToken') || null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    if (token && !admin) {
      const verifyToken = async () => {
        try {
          const verifiedAdmin = { username: 'Admin' }; // Placeholder
          setAdmin(verifiedAdmin);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Token verification failed:', error);
          logout();
        }
      };
      verifyToken();
    }
  }, [token, admin]);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const { admin, token } = await loginAdmin(email, password);

      setAdmin(admin);
      setToken(token);
      setIsAuthenticated(true);
      localStorage.setItem('adminToken', token);

      navigate('/admin');
      return true;
    } catch (error) {
      console.error('❌ Admin login failed:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setAdmin(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        token,
        login,
        logout,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

// 🌗 THEME CONTEXT STARTS HERE
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light';
    setTheme(stored);
    document.documentElement.classList.toggle('dark', stored === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
