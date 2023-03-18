import { useState, useEffect } from 'react';
import Button from '../common/Button';
import axios from '../../utils/axios';
import { useRouter } from 'next/router';

const types = [
  { value: 'general', label: 'General' },
  { value: 'student', label: 'Student' },
];

const EditCustomer = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [phone, setPhone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    getCustomers(id);
  }, [id]);

  const getCustomers = async (id) => {
    try {
      const response = await axios.get(`/customers/${id}`);
      const customer = response.data;
      setName(customer.name);
      setType(customer.type);
      setPhone(customer.phone);
      setInstagram(customer.instagram);
      setAddress(customer.address);
      setDistrict(customer.district);
      setSubDistrict(customer.sub_district);
    } catch (error) {
      if (error.response.status === 404) {
        router.push('/customers');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/token');
      const token = response.data.accessToken;
      await axios.put(
        `/customers/${id}`,
        {
          name,
          type,
          phone,
          instagram,
          address,
          district,
          sub_district: subDistrict,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      router.push('/customers');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <div className='flex justify-center items-center w-full mt-8 overflow-x-hidden overflow-y-auto'>
        <div className='relative w-full h-full'>
          <div className='relative bg-white rounded-lg shadow dark:bg-zinc-800'>
            <div className='px-6 py-6 lg:px-8'>
              <div className='mb-4'>
                <form onSubmit={handleSubmit}>
                  <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Name
                      </label>
                      <input
                        id='name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Customer Name'
                        autoFocus
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='type'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Type
                      </label>
                      <select
                        id='type'
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                        {types.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor='phone'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Phone number
                      </label>
                      <input
                        id='phone'
                        type='text'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='08XX'
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='instagram'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Instagram
                      </label>
                      <input
                        id='instagram'
                        type='text'
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        placeholder='@instagram'
                        required
                      />
                    </div>
                  </div>

                  <div className='mb-6'>
                    <label
                      htmlFor='address'
                      className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                      Full Address
                    </label>
                    <input
                      id='address'
                      type='address'
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder='Address'
                      required
                    />
                  </div>

                  <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                      <label
                        htmlFor='district'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        District
                      </label>
                      <input
                        id='district'
                        type='text'
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder='District'
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='subdistrict'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Sub District
                      </label>
                      <input
                        id='subdistrict'
                        type='text'
                        value={subDistrict}
                        onChange={(e) => setSubDistrict(e.target.value)}
                        placeholder='Sub District'
                        required
                      />
                    </div>
                  </div>

                  <Button>Update</Button>

                  {error && (
                    <div
                      className='flex p-4 mt-4 w-fit text-sm text-red-800 rounded-lg bg-red-100 dark:bg-red-200'
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
                      <span className='sr-only'>Info</span>
                      <div>{error}</div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCustomer;
