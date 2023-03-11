import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '../utils/axios';
import TableTransaction from './TableTransaction';
import { FaSun, FaMoon } from 'react-icons/fa';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    refreshToken();
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const refreshToken = async () => {
    try {
      await axios.get('/token');
    } catch (error) {
      if (error.response) {
        router.push('/login');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await axios.delete('/logout');
    } catch (error) {
      console.log(error);
    }
    router.push('/login');
  };

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6'>
      <div className='flex flex-row justify-between mb-8'>
        <h1>Transactions</h1>
        <div className='flex flex-row gap-8'>
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <FaSun size={20} color='#ecf0f3' />
            ) : (
              <FaMoon size={18} color='#11142d' />
            )}
          </button>
          <button
            onClick={handleLogout}
            className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300'>
            Log out
          </button>
        </div>
      </div>
      <TableTransaction />
    </div>
  );
};

export default Dashboard;
