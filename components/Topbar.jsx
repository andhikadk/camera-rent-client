import React, { useState, useEffect } from 'react';
import Search from './Search';
import { useRouter } from 'next/router';
import axios from '../utils/axios';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
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
      const response = await axios.get('/token');
      getAccountSession(response.data.accessToken);
    } catch (error) {
      if (error.response) {
        router.push('/login');
      }
    }
  };

  const getAccountSession = async (token) => {
    try {
      const response = await axios.get('/account', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setName(response.data.name);
    } catch (error) {
      console.log(error);
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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

  const setNavbar = () => {};

  return (
    <nav className='fixed w-full px-4 sm:px-6 lg:px-8 shadow-md'>
      <div className='flex flex-row justify-between py-2'>
        <button
          style={{ color: darkMode ? 'white' : 'black' }}
          onClick={() => setNavbar()}
          className='p-2'>
          <AiOutlineMenu size={25} />
        </button>
        <Search />
        <div className='flex flex-row gap-8 lg:mr-60'>
          <div className='relative flex flex-row items-center gap-2'>
            <div
              className='flex items-center cursor-pointer'
              onClick={toggleDropdown}>
              <h2 className='text-gray-700 dark:text-gray-300 uppercase font-bold mr-2'>
                {name}
              </h2>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-700 dark:text-gray-300'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </div>

            {isOpen && (
              <div className='absolute right-0 mt-36 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10'>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-700 hover:bg-gray-300 dark:text-white'>
                  Account Settings
                </a>
                <a
                  onClick={handleLogout}
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-700 hover:bg-gray-300 dark:text-white'>
                  Logout
                </a>
              </div>
            )}
          </div>

          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <FaSun size={20} color='#ecf0f3' />
            ) : (
              <FaMoon size={18} color='#11142d' />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
