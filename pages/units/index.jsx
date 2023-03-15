import React from 'react';
import Layout from '@/components/Layout';
import TableUnit from '@/components/tables/TableUnit';
import { FaPlus } from 'react-icons/fa';
import Button from '@/components/common/Button';

const units = () => {
  return (
    <Layout>
      <div className='flex flex-row justify-between'>
        <h1>Units</h1>
        <Button
          icon={<FaPlus className='mr-3' />}
          text='Add Unit'
          link='/units/add'
        />
      </div>
      <TableUnit />
    </Layout>
  );
};

export default units;
