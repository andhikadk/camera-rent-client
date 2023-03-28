import React, { useState, useEffect } from 'react';
import axios from '@/utils/axios';
import CustTypeChart from './common/CustTypeChart';

const TypeCustomer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCustomerType();
  }, []);

  const getCustomerType = async () => {
    try {
      const response = await axios.get('transactions/type');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full h-full p-4 bg-zinc-50 rounded-lg shadow-sm sm:p-8 dark:bg-zinc-800 dark:border-zinc-700'>
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-zinc-900 dark:text-white'>
          Customers Type
        </h5>
        <a
          href='#'
          className='text-sm text-end font-medium text-blue-600 hover:underline dark:text-blue-500'>
          View all
        </a>
      </div>
      <div className='flow-root'>
        <CustTypeChart data={data} />
      </div>
    </div>
  );
};

export default TypeCustomer;
