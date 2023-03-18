import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    refreshToken();
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('/token');
      if (response) {
        router.push('/');
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = await axios.post('/login', {
        email,
        password,
      });
      console.log(credentials);
      document.cookie = `refreshToken=${credentials.data.refreshToken}`;
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form
        onSubmit={handleSubmit}
        className='bg-white dark:bg-zinc-800 p-8 rounded-lg w-80 md:w-96'>
        <h1 className='text-center'>Login</h1>
        <div className='mb-5'>
          <label
            className='block text-zinc-700 dark:text-zinc-200 font-bold mb-2'
            htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-zinc-700 dark:text-zinc-200 font-bold mb-2'
            htmlFor='password'>
            Password
          </label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 w-full rounded-md hover:bg-blue-700 transition-colors duration-300'>
          Login
        </button>
        <p className='text-center mt-3 dark:text-zinc-200'>
          Don't have an account?{' '}
          <Link href='/register' className='text-blue-500'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
