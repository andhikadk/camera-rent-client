import React from 'react';
import Layout from '@/components/Layout';
import TableTransaction from '@/components/TableTransaction';

const transactions = () => {
  return (
    <Layout>
      <div className='flex flex-row justify-between'>
        <h1>Transactions</h1>
      </div>
      <TableTransaction />
    </Layout>
  );
};

export default transactions;
