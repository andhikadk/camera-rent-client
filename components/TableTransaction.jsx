import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Pagination from './Pagination';

const TableTransaction = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('transactions');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const lastPage = Math.ceil(data.length / itemPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              Date
            </th>
            <th scope='col' className='px-6 py-3 w-1/12'>
              Nama
            </th>
            <th scope='col' className='px-6 py-3 w-4/12'>
              Unit
            </th>
            <th scope='col' className='px-6 py-3 w-2/12'>
              Pengambilan
            </th>
            <th scope='col' className='px-6 py-3 w-2/12'>
              Pengembalian
            </th>
            <th scope='col' className='px-6 py-3 w-2/12'>
              Total Biaya
            </th>
            <th scope='col' className='px-6 py-3 w-1/12'>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((d) => (
            <tr
              className='bg-gray-100 border-b dark:text-slate-300 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              key={d._id}>
              <th
                scope='row'
                className='px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {d.date_entry.slice(0, 16).replace('T', ' ')}
              </th>
              <td className='px-6 py-2'>{d.cust_id.name}</td>
              <td className='px-6 py-2'>
                {d.unit.slice(0, 2).map((u, index) => (
                  <div key={index}>{u}</div>
                ))}
                {d.unit.length > 4 && <div>...</div>}
              </td>
              <td className='px-6 py-2'>{d.pengambilan}</td>
              <td className='px-6 py-2'>{d.pengembalian}</td>
              <td className='px-6 py-2'>
                Rp {d.total_biaya.toLocaleString('id-ID').replace(',', '.')}
              </td>
              <td className='px-6 py-2'>
                <span class='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
                  {d.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransaction;
