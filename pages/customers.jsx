import React from 'react';
import Layout from '@/components/Layout';
import TableCustomer from '@/components/TableCustomer';
import { FaPlus } from 'react-icons/fa';
import Button from '@/components/common/Button';

const customers = () => {
  return (
    <Layout>
      <div className='flex flex-row justify-between'>
        <h1>Customers</h1>
        <Button
          icon={<FaPlus className='mr-3' />}
          text='Add Customer'
          link='/customers/add'
        />
      </div>
      <TableCustomer />
    </Layout>
  );
};

export default customers;
