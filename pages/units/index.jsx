import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import Layout from '@/components/Layout';
import TableUnit from '@/components/tables/TableUnit';
import Button from '@/components/common/Button';

const units = () => {
  return (
    <Layout>
      <div className='flex flex-row justify-between'>
        <div className='w-full'>
          <h1>Units</h1>
        </div>
        <div className='flex justify-end w-full'>
          <Link href='units/add'>
            <Button>
              <FaPlus className='mr-3' />
              Add Unit
            </Button>
          </Link>
        </div>
      </div>
      <TableUnit />
    </Layout>
  );
};

export default units;
