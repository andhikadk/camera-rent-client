import React from 'react';
import Layout from '@/components/Layout';
import TableTransaction from '@/components/TableTransaction';

const transactions = () => {
  return (
    <Layout>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex flex-row justify-between'>
          <h1>Transactions</h1>
        </div>
        <TableTransaction />
      </div>
    </Layout>
  );
};

export default transactions;
