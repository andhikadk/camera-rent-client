import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import Layout from '@/components/Layout';
import TableCustomer from '@/components/tables/TableCustomer';
import Button from '@/components/common/Button';

const customers = () => {
  return (
    <Layout>
      <div className='flex flex-row justify-between'>
        <div className='w-full'>
          <h1>Customers</h1>
        </div>
        <div className='flex justify-end w-full'>
          <Link href='customers/add'>
            <Button>
              <FaPlus className='mr-3' />
              Add Customer
            </Button>
          </Link>
        </div>
      </div>
      <TableCustomer />
    </Layout>
  );
};

export default customers;
