import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Layout from '@/components/Layout';
import Button from '@/components/common/Button';
import AddCustomer from '@/components/forms/AddCustomer';

const add = () => {
  return (
    <Layout>
      <div className='flex flex-row justify-between'>
        <div className='w-full'>
          <h1>Add Customer</h1>
        </div>
        <div className='flex justify-end w-full'>
          <Link href='/customers'>
            <Button>
              <FaArrowLeft className='mr-3' />
              Back
            </Button>
          </Link>
        </div>
      </div>
      <AddCustomer />
    </Layout>
  );
};

export default add;
