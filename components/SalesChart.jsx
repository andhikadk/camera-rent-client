import React from 'react';

const SalesChart = () => {
  return (
    <div className='w-full p-4 bg-white rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
          Sales Chart
        </h5>
      </div>
      <div className='flow-root'></div>
    </div>
  );
};

export default SalesChart;
