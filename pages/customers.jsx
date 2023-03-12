import React from 'react';
import Layout from '@/components/Layout';
import TableCustomer from '@/components/TableCustomer';

const customers = () => {
  return (
    <Layout>
      <div className='flex flex-row justify-between'>
        <h1>Customers</h1>
      </div>
      <TableCustomer />
    </Layout>
  );
};

export default customers;