import React from 'react';
import { useRouter } from 'next/router';

const Button = ({ icon, text, link }) => {
  const router = useRouter();

  const handleClick = (e, link) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <button
      onClick={(e) => handleClick(e, link)}
      className='flex flex-row items-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'>
      {icon}
      {text}
    </button>
  );
};

export default Button;
