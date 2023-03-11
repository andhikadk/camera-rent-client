import React from 'react';
import { FaHome, FaChartBar, FaDollarSign, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <nav className='hidden md:block fixed top-0 left-0 w-60 h-screen bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-white'>
      <div className='flex flex-col justify-between h-full'>
        <div>
          <div className='flex flex-col items-center justify-center h-20'>
            <h1 className='text-2xl font-bold'>Rental System</h1>
          </div>
          <ul className='flex flex-col gap-4'>
            <li className='flex flex-row items-center gap-4 px-4 py-2 mx-2 rounded-md dark:hover:bg-slate-700 hover:bg-gray-300 transition-colors duration-300 cursor-pointer'>
              <FaHome size={20} />
              <span>Dashboard</span>
            </li>
            <li className='flex flex-row items-center gap-4 px-4 py-2 mx-2 rounded-md dark:hover:bg-slate-700 hover:bg-gray-300 transition-colors duration-300 cursor-pointer'>
              <FaChartBar size={20} />
              <span>Analytics</span>
            </li>
            <li className='flex flex-row items-center gap-4 px-4 py-2 mx-2 rounded-md dark:hover:bg-slate-700 hover:bg-gray-300 transition-colors duration-300 cursor-pointer'>
              <FaDollarSign size={20} />
              <span>Transactions</span>
            </li>
            <li className='flex flex-row items-center gap-4 px-4 py-2 mx-2 rounded-md dark:hover:bg-slate-700 hover:bg-gray-300 transition-colors duration-300 cursor-pointer'>
              <FaCog size={20} />
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
