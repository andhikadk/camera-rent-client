import { useState, useEffect } from 'react';
import Button from '../common/Button';
import axios from '../../utils/axios';
import { useRouter } from 'next/router';

const statuses = [
  { value: 'normal', label: 'Normal' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'problem', label: 'Problem' },
];

const EditUnit = () => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('normal');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [position, setPosition] = useState('');
  const [includes, setIncludes] = useState('');
  const [note, setNote] = useState('');
  const [rates, setRates] = useState({
    '24h': 0,
    '12h': 0,
    '6h': 0,
  });
  const [error, setError] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    getUnits(id);
  }, [id]);

  const getUnits = async (id) => {
    try {
      const response = await axios.get(`/units/${id}`);
      const unit = response.data;
      setCategory(unit.category);
      setType(unit.type);
      setStatus(unit.status);
      setCode(unit.code);
      setName(unit.name);
      setOwner(unit.owner);
      setPosition(unit.position);
      setIncludes(unit.includes);
      setNote(unit.note);
      setRates(unit.rates);
    } catch (error) {
      if (error.response.data.message) {
        router.push('/units');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/units/${id}`, {
        category,
        type,
        status,
        code,
        name,
        owner,
        position,
        includes,
        note,
        rates,
      });
      router.push('/units');
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
                  <div className='grid gap-6 mb-6 md:grid-cols-3'>
                    <div>
                      <label
                        htmlFor='category'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Category
                      </label>
                      <select
                        id='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option hidden> -- Choose category -- </option>
                        <option value='camera'>Camera</option>
                        <option value='iphone'>Iphone</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor='type'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Type
                      </label>
                      <input
                        id='type'
                        type='text'
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        placeholder='DSLR'
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='status'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Status
                      </label>
                      <select
                        id='status'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        {statuses.map((status) => (
                          <option key={status.value} value={status.value}>
                            {status.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                      <label
                        htmlFor='code'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Code
                      </label>
                      <input
                        id='code'
                        type='text'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder='OV-600D1'
                        required
                      />
                    </div>

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
                        placeholder='Name'
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='owner'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Owner
                      </label>
                      <input
                        id='owner'
                        type='text'
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        placeholder='Omah Visual'
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='position'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Position
                      </label>
                      <input
                        id='position'
                        type='text'
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder='A1.1'
                        required
                      />
                    </div>
                  </div>

                  <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                      <label
                        htmlFor='includes'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Unit Equipments
                      </label>
                      <input
                        id='includes'
                        type='text'
                        value={includes}
                        onChange={(e) => setIncludes(e.target.value)}
                        placeholder='Unit Equipments'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='note'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        Unit Note
                      </label>
                      <input
                        id='note'
                        type='text'
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder='Note'
                      />
                    </div>
                  </div>

                  {/* Rates */}
                  <h3 className='text-zinc-800 dark:text-zinc-200 font-bold mb-4'>
                    Rates
                  </h3>

                  <div className='grid gap-6 mb-6 md:grid-cols-3'>
                    <div>
                      <label
                        htmlFor='24h'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        24 hours
                      </label>
                      <input
                        id='24h'
                        type='number'
                        value={rates['24h']}
                        onChange={(e) =>
                          setRates({ ...rates, '24h': e.target.value })
                        }
                        placeholder='0'
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='12h'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        12 hours
                      </label>
                      <input
                        id='12h'
                        type='number'
                        value={rates['12h']}
                        onChange={(e) =>
                          setRates({ ...rates, '12h': e.target.value })
                        }
                        placeholder='0'
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='6h'
                        className='block mb-2 text-sm font-medium text-zinc-900 dark:text-white'>
                        6 hours
                      </label>
                      <input
                        id='6h'
                        type='number'
                        value={rates['6h']}
                        onChange={(e) =>
                          setRates({ ...rates, '6h': e.target.value })
                        }
                        placeholder='0'
                        required
                      />
                    </div>
                  </div>

                  <Button>Update</Button>

                  {error && (
                    <div
                      class='flex p-4 mt-4 w-fit text-sm text-red-800 rounded-lg bg-red-100 dark:bg-red-200'
                      role='alert'>
                      <svg
                        aria-hidden='true'
                        class='flex-shrink-0 inline w-5 h-5 mr-3'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fill-rule='evenodd'
                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                          clip-rule='evenodd'></path>
                      </svg>
                      <span class='sr-only'>Info</span>
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

export default EditUnit;
