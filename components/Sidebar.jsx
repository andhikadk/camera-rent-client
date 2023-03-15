import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import {
  FaHome,
  FaChartBar,
  FaFileInvoiceDollar,
  FaUserAlt,
  FaCamera,
  FaCashRegister,
} from 'react-icons/fa';
import Logo from '@/public/logo.svg';

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;

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
  ];

  return (
    <nav
      id='sidebar'
      className={`hidden lg:block shadow-xl fixed top-0 left-0 w-60 h-screen text-gray-700 dark:text-white duration-300`}>
      <div className='flex flex-col justify-between h-full'>
        <div>
          <div className='flex flex-col items-center justify-center h-20'>
            <Image src={Logo} />
          </div>
          <ul className='flex flex-col gap-2'>
            {navLink1.map((link) => (
              <Link href={link.link} key={link.name} prefetch={false}>
                <li
                  className={`flex flex-row items-center gap-4 px-4 py-2 mx-2 rounded-md ${
                    pathname === link.link ? 'bg-zinc-900' : 'hover:bg-zinc-700'
                  } cursor-pointer`}>
                  {link.icon}
                  <span>{link.name}</span>
                </li>
              </Link>
            ))}
          </ul>
          <hr className='m-4' />
          <ul className='flex flex-col gap-2'>
            {navLink2.map((link) => (
              <Link href={link.link} key={link.name} prefetch={false}>
                <li
                  className={`flex flex-row items-center gap-4 px-4 py-2 mx-2 rounded-md ${
                    pathname === link.link ? 'bg-zinc-900' : 'hover:bg-zinc-700'
                  } cursor-pointer`}>
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
