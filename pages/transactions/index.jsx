import React from 'react';
import Layout from '@/components/Layout';
import TableTransaction from '@/components/tables/TableTransaction';
import { FaPlus } from 'react-icons/fa';
import Button from '@/components/common/Button';

const transactions = () => {
  return (
    <Layout>
      <div className='flex flex-row justify-between'>
        <h1>Transactions</h1>
        <Button
          icon={<FaPlus className='mr-3' />}
          text='Add Transaction'
          link='/transactions/add'
        />
      </div>
      <TableTransaction />
    </Layout>
  );
};

export default transactions;
