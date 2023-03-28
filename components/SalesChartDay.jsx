import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import DayChart from './common/DayChart';

const SalesChartDay = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    try {
      const response = await axios.get('transactions/sales/day');
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full h-full p-4 bg-zinc-50 rounded-lg shadow-sm sm:p-8 dark:bg-zinc-800 dark:border-gray-700'>
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
          Sales Chart
        </h5>
        <a
          href='#'
          className='text-sm text-end font-medium text-blue-600 hover:underline dark:text-blue-500'>
          View All
        </a>
      </div>
      <div className='mt-8'>
        <DayChart data={transactions} />
      </div>
    </div>
  );
};

export default SalesChartDay;
