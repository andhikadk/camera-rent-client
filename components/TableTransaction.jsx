import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Pagination from './Pagination';
import Search from './common/Search';

const SortIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-3 h-3 ml-1'
      aria-hidden='true'
      fill='currentColor'
      viewBox='0 0 320 512'>
      <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
    </svg>
  );
};

const TableTransaction = () => {
  const [data, setData] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('transactions');
      const newData = response.data.map((item) => {
        const parts = item.date_entry.split(' ');
        const dateParts = parts[0].split('-');
        const time = parts[1];
        const formattedDate = `${dateParts[1]}-${dateParts[0]}-${dateParts[2]} ${time}`;
        const timeStamp = Date.parse(new Date(formattedDate));
        return {
          ...item,
          date_entry: timeStamp,
        };
      });
      console.log(newData);
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetails = (e, id) => {
    e.preventDefault();
    router.push(`/transactions/${id}`);
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const filteredUnits = data.filter((item) => {
    if (query === '') {
      return item;
    } else if (
      item.no_invoice.toString().toLowerCase().includes(query.toLowerCase()) ||
      item.cust_id.name.toLowerCase().includes(query.toLowerCase()) ||
      item.pj_unit_keluar.toLowerCase().includes(query.toLowerCase()) ||
      item.pengambilan.toLowerCase().includes(query.toLowerCase()) ||
      item.pengembalian.toLowerCase().includes(query.toLowerCase()) ||
      item.total_biaya.toString().toLowerCase().includes(query.toLowerCase())
    ) {
      return item;
    }
  });
  const currentItems = filteredUnits.slice(indexOfFirstItem, indexOfLastItem);
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

    if (column === 'cust_id.name') {
      data.sort((a, b) => {
        if (a.cust_id.name < b.cust_id.name) {
          return direction ? -1 : 1;
        }
        if (a.cust_id.name > b.cust_id.name) {
          return direction ? 1 : -1;
        }
        return 0;
      });
    }

    setData(sortedData);
    setSortColumn(column);
    setSortDirection(direction);
  };

  return (
    <div className='overflow-x-auto'>
      <div className='flex flex-row items-center justify-between'>
        <Search query={query} setQuery={setQuery} />
        <Pagination
          totalItem={data.length}
          lastPage={lastPage}
          paginate={paginate}
          currentPage={currentPage}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
        />
      </div>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              <div className='flex items-center'>
                No
                <a onClick={() => handleSort('no_invoice')} href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-1/12'>
              <div className='flex items-center'>
                Nama Customer
                <a onClick={() => handleSort('cust_id.name')} href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-1/12'>
              <div className='flex items-center'>
                PJ
                <a onClick={() => handleSort('pj_unit_keluar')} href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-4/12'>
              <div className='flex items-center'>
                Unit
                <a href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-2/12'>
              <div className='flex items-center'>
                Pengambilan
                <a href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-2/12'>
              <div className='flex items-center'>
                Pengembalian
                <a href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-2/12'>
              <div className='flex items-center'>
                Total Biaya
                <a onClick={() => handleSort('total_biaya')} href='#'>
                  <SortIcon />
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 w-1/12'>
              <div className='flex items-center'>
                Status
                <a onClick={() => handleSort('status')} href='#'>
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
              <td className='px-6 py-2'>{d.no_invoice}</td>
              <th
                scope='row'
                className='px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {d.cust_id.name}
              </th>
              <td className='px-6 py-2'>{d.pj_unit_keluar}</td>
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
                {d.status === 'LUNAS' ? (
                  <div className='w-fit flex justify-center bg-green-700 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
                    {d.status}
                  </div>
                ) : d.status === 'BERMASALAH' ? (
                  <div className='w-fit flex justify-center bg-red-700 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>
                    {d.status}
                  </div>
                ) : (
                  <div className='w-fit flex justify-center bg-yellow-400 text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
                    {d.status}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransaction;
