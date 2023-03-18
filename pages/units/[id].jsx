import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Layout from '@/components/Layout';
import Button from '@/components/common/Button';
import EditUnit from '@/components/forms/EditUnit';
import axios from '../../utils/axios';
import { useRouter } from 'next/router';

const edit = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleDelete = async () => {
    confirm('Are you sure?');
    try {
      await axios.delete(`/units/${id}`);
      router.push('/units');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className='flex flex-row justify-between'>
        <div className='w-full'>
          <h1>Edit Customer</h1>
        </div>
        <div className='flex justify-end w-full'>
          <Link href='/units'>
            <Button>
              <FaArrowLeft className='mr-3' />
              Back
            </Button>
          </Link>
        </div>
      </div>
      <EditUnit />
      <h2 className='mt-4'>Danger zone</h2>
      <div
        className='flex p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-zinc-800 dark:text-red-400'
        role='alert'>
        <svg
          aria-hidden='true'
          className='flex-shrink-0 inline w-5 h-5 mr-3'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
            clipRule='evenodd'></path>
        </svg>
        <span className='sr-only'>Danger</span>
        <div className='flex flex-row justify-between w-full'>
          <div>
            <span className='font-medium'>Delete unit</span>
            <ul className='mt-1.5 ml-4 list-disc list-inside'>
              <li>All transactions with this unit will be deleted</li>
            </ul>
          </div>
          <button onClick={handleDelete} className='px-4 rounded-lg w-fit'>
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default edit;
