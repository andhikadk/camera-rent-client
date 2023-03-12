import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Pagination from './Pagination';

const SortIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      class='w-3 h-3 ml-1'
      aria-hidden='true'
      fill='currentColor'
      viewBox='0 0 320 512'>
      <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
    </svg>
  );
};

const TableCustomer = () => {
  const [data, setData] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('customers');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetails = (e, id) => {
    e.preventDefault();
    router.push(`/customers/${id}`);
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const lastPage = Math.ceil(data.length / itemPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (column) => {
    const direction = sortColumn ? !sortDirection : false;
    const sortedData = data.sort((a, b) => {
      if (a[column] < b[column]) {
        return direction ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortColumn(column);
    setSortDirection(direction);
  };

  return (
    <div className='relative overflow-x-auto'>
      <Pagination
        totalItem={data.length}
        lastPage={lastPage}
        paginate={paginate}
        currentPage={currentPage}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
      />
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3 w-1/12'>
              <div class='flex items-center'>
                No Id
                <a onClick={() => handleSort('id')} href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-5/12'>
              <div class='flex items-center'>
                Nama
                <a onClick={() => handleSort('name')} href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-3/12'>
              <div class='flex items-center'>
                No HP
                <a href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-1/12'>
              <div class='flex items-center'>
                Role
                <a onClick={() => handleSort('role')} href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-2/12'>
              <div class='flex items-center'>
                Action
                <a href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((d) => (
            <tr
              onClick={(e) => getDetails(e, d._id)}
              className='bg-gray-100 border-b dark:text-slate-300 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer'
              key={d._id}>
              <th
                scope='row'
                className='px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {d.no_id}
              </th>
              <td className='px-6 py-2'>{d.name}</td>
              <td className='px-6 py-2'>{d.phone}</td>
              <td className='px-6 py-2'>{d.role}</td>
              <td className='px-6 py-2'>
                <div className='flex items-center space-x-4 text-sm'>
                  <button className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'>
                    Edit
                  </button>
                  <button className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-blue'>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCustomer;
