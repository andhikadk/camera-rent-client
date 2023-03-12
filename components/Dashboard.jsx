import React from 'react';
import Layout from './Layout';
import ListCustomer from './ListCustomer';

const Dashboard = () => {
  return (
    <Layout>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex flex-row justify-between mb-4'>
          <h1>Dashboard</h1>
        </div>
        <ListCustomer />
      </div>
    </Layout>
  );
};

export default Dashboard;
