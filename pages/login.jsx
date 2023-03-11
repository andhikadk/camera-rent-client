import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    refreshToken();
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
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg w-96'>
        <h2 className='text-2xl font-medium mb-5 text-center'>Login</h2>
        <div className='mb-5'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='border border-gray-400 p-2 w-full rounded-md'
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='password'>
            Password
          </label>
          <input
            className='border border-gray-400 p-2 w-full rounded-md'
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 w-full rounded-md hover:bg-blue-700 transition-colors duration-300'>
          Login
        </button>
        <p className='text-center mt-3'>
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
