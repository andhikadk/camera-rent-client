import React from 'react';

const Card = ({ title, subtitle, icon }) => {
  return (
    <div className='min-w-0 rounded-lg shadow-sm overflow-hidden bg-zinc-50 dark:bg-zinc-800'>
      <div className='p-4 flex items-center'>
        <div className={`p-4 rounded-full text-zinc-100 bg-blue-600 mr-4`}>
          {icon}
        </div>
        <div>
          <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
            {title}
          </p>
          <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
