import React from 'react';
import Chart from './common/Chart';

const SalesChart = () => {
  return (
    <div className='w-full h-full p-4 bg-white rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
          Sales Chart
        </h5>
        <a
          href='#'
          className='text-sm text-end font-medium text-blue-600 hover:underline dark:text-blue-500'>
          View all
        </a>
      </div>
      <div className='mt-8'>
        <Chart />
      </div>
    </div>
  );
};

export default SalesChart;
