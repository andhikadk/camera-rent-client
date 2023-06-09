import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from '@/utils/axios';

const TopCustomer = () => {
  const [loyal, setLoyal] = useState(true);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getLoyalCustomers();
  }, []);

  const getLoyalCustomers = async () => {
    try {
      const response = await axios.get('transactions/loyal');
      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getHighestCustomers = async () => {
    try {
      const response = await axios.get('transactions/highest');
      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // switch between getLoyalCustomers and getHighestCustomers
  const switchData = (e) => {
    e.preventDefault();
    if (loyal) {
      getHighestCustomers();
    } else {
      getLoyalCustomers();
    }
    setLoyal(!loyal);
  };

  return (
    <div className='w-full h-full p-4 bg-zinc-50 rounded-lg shadow-sm sm:p-8 dark:bg-zinc-800 dark:border-zinc-700'>
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-zinc-900 dark:text-white'>
          Top Customers
        </h5>
        <a
          onClick={switchData}
          href='#'
          className='text-sm text-end font-medium text-blue-600 hover:underline dark:text-blue-500'>
          {loyal ? 'Highest Transactions' : 'Total Transactions'}
        </a>
      </div>
      <div className='flow-root'>
        <ul
          role='list'
          className='divide-y divide-zinc-200 dark:divide-zinc-700'>
          {customers.map((c) => (
            <li className='py-3 sm:py-4' key={c.customer._id}>
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  <Image
                    width={100}
                    height={100}
                    className='w-8 h-8 rounded-full'
                    src='https://xsgames.co/randomusers/avatar.php?g=male'
                    alt='Neil image'
                  />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-zinc-900 truncate dark:text-white'>
                    {c.customer.name}
                  </p>
                  <p className='text-sm text-zinc-500 truncate dark:text-zinc-400'>
                    {c.count} transactions
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  Rp {c.total_biaya.toLocaleString('id-ID').replace(',', '.')}
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* more */}
        <div className='mt-4 flex justify-end'>
          <Link
            href='/customers'
            className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'>
            View all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopCustomer;
