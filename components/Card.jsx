import React from 'react';

const Card = ({ title, subtitle, icon, color }) => {
  return (
    <div className='min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800'>
      <div className='p-4 flex items-center'>
        <div className={`p-3 rounded-full text-slate-100 bg-orange-400 mr-4`}>
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
