import Link from 'next/link';
import React from 'react';
import {
  FaHome,
  FaChartBar,
  FaFileInvoiceDollar,
  FaCog,
  FaUserAlt,
  FaCamera,
  FaCashRegister,
} from 'react-icons/fa';

const Sidebar = () => {
  const navLink1 = [
    {
      name: 'Dashboard',
      icon: <FaHome size={20} />,
      link: '/',
    },
    {
      name: 'Cashier',
      icon: <FaCashRegister size={20} />,
      link: '/cashier',
    },
    {
      name: 'Analytics',
      icon: <FaChartBar size={20} />,
      link: '/analytics',
    },
  ];

  const navLink2 = [
    {
      name: 'Transactions',
      icon: <FaFileInvoiceDollar size={20} />,
      link: '/transactions',
    },
    {
      name: 'Customers',
      icon: <FaUserAlt size={20} />,
      link: '/customers',
    },
    {
      name: 'Units',
      icon: <FaCamera size={20} />,
      link: '/units',
    },
    {
      name: 'Settings',
      icon: <FaCog size={20} />,
      link: '/settings',
    },
  ];

  return (
    <nav className='hidden lg:block fixed top-0 left-0 w-60 h-screen text-gray-700 dark:text-white'>
      <div className='flex flex-col justify-between h-full'>
        <div>
          <div className='flex flex-col items-center justify-center h-20'>
            <h1 className='text-2xl font-bold'>Rental System</h1>
          </div>
          <ul className='flex flex-col gap-2'>
            {navLink1.map((link) => (
              <Link href={link.link} key={link.name}>
                <li className='flex flex-row items-center gap-4 px-4 py-2 mx-2 rounded-md dark:hover:bg-slate-700 hover:bg-gray-300 transition-colors duration-300 cursor-pointer'>
                  {link.icon}
                  <span>{link.name}</span>
                </li>
              </Link>
            ))}
          </ul>
          <hr className='m-4 border border-gray-200 dark:border-gray-700' />
          <ul className='flex flex-col gap-2'>
            {navLink2.map((link) => (
              <Link href={link.link} key={link.name}>
                <li className='flex flex-row items-center gap-4 px-4 py-2 mx-2 rounded-md dark:hover:bg-slate-700 hover:bg-gray-300 transition-colors duration-300 cursor-pointer'>
                  {link.icon}
                  <span>{link.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
