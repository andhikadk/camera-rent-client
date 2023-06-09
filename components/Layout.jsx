import React from 'react';
import Head from 'next/head';
import Sidebar from './navbar/Sidebar';
import Topbar from './navbar/Topbar';

const Layout = ({ children }) => {
  const [name, SetName] = React.useState('');

  return (
    <>
      <Head>
        <title>SIRent</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex'>
        <Sidebar />
        <div className='flex-grow lg:ml-60'>
          <Topbar />
          <div className='mx-auto max-w-screen-2xl px-4 mt-16 sm:px-6 lg:px-8 py-6'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
