import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow md:ml-60'>
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
