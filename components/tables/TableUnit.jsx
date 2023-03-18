import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import Pagination from '../common/Pagination';
import Search from '../common/Search';

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

const TableUnit = () => {
  const [units, setUnits] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    getUnits();
  }, []);

  const getUnits = async () => {
    try {
      const response = await axios.get('units');
      setUnits(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetails = (e, id) => {
    e.preventDefault();
    router.push(`/units/${id}`);
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const filteredUnits = units.filter((item) => {
    if (query === '') {
      return item;
    } else if (
      item.nama.toLowerCase().includes(query.toLowerCase()) ||
      item.kode.toLowerCase().includes(query.toLowerCase()) ||
      item.jenis.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase()) ||
      item.posisi.toLowerCase().includes(query.toLowerCase()) ||
      item.status.toLowerCase().includes(query.toLowerCase())
    ) {
      return item;
    }
  });
  const currentItems = filteredUnits.slice(indexOfFirstItem, indexOfLastItem);
  const lastPage = Math.ceil(units.length / itemPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (column) => {
    const direction = sortColumn ? !sortDirection : false;
    const sortedData = units.sort((a, b) => {
      if (a[column] < b[column]) {
        return direction ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction ? 1 : -1;
      }
      return 0;
    });

    setUnits(sortedData);
    setSortColumn(column);
    setSortDirection(direction);
  };

  return (
    <div className='overflow-x-auto'>
      <div className='flex flex-row items-center justify-between'>
        <Search query={query} setQuery={setQuery} />
        <Pagination
          totalItem={units.length}
          lastPage={lastPage}
          paginate={paginate}
          currentPage={currentPage}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
        />
      </div>
      <table className='w-full text-sm text-left text-zinc-500 dark:text-zinc-400'>
        <thead className='text-xs text-zinc-700 bg-white dark:bg-zinc-700 dark:text-zinc-400'>
          <tr>
            <th scope='col' className='px-6 py-3 w-1/12'>
              <button
                onClick={() => handleSort('no')}
                className='flex uppercase items-center cursor-pointer'>
                No Id
                <SortIcon />
              </button>
            </th>
            <th scope='col' className='px-6 py-3 w-3/12'>
              <button
                onClick={() => handleSort('nama')}
                className='flex uppercase items-center cursor-pointer'>
                Nama
                <SortIcon />
              </button>
            </th>
            <th scope='col' className='px-6 py-3 w-2/12'>
              <button
                onClick={() => handleSort('kode')}
                className='flex uppercase items-center cursor-pointer'>
                Kode
                <SortIcon />
              </button>
            </th>
            <th scope='col' className='px-6 py-3 w-2/12'>
              <button
                onClick={() => handleSort('jenis')}
                className='flex uppercase items-center cursor-pointer'>
                Jenis
                <SortIcon />
              </button>
            </th>
            <th scope='col' className='px-6 py-3 w-2/12'>
              <button
                onClick={() => handleSort('type')}
                className='flex uppercase items-center cursor-pointer'>
                Type
                <SortIcon />
              </button>
            </th>
            <th scope='col' className='px-6 py-3 w-1/12'>
              <button
                onClick={() => handleSort('posisi')}
                className='flex uppercase items-center cursor-pointer'>
                Posisi
                <SortIcon />
              </button>
            </th>
            <th scope='col' className='px-6 py-3 w-1/12'>
              <button
                onClick={() => handleSort('status')}
                className='flex uppercase items-center cursor-pointer'>
                Status
                <SortIcon />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((d) => (
            <tr
              onClick={(e) => getDetails(e, d._id)}
              className='bg-zinc-50 border-b dark:text-slate-300 dark:bg-zinc-800 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 cursor-pointer'
              key={d._id}>
              <td className='px-6 py-2'>{d.id}</td>
              <th
                scope='row'
                className='px-6 py-2 font-medium text-zinc-900 whitespace-nowrap dark:text-white'>
                {d.name}
              </th>
              <td className='px-6 py-2'>{d.code}</td>
              <td className='px-6 py-2'>{d.category}</td>
              <td className='px-6 py-2'>{d.type}</td>
              <td className='px-6 py-2'>{d.position}</td>
              <td className='px-6 py-2'>
                {d.status === 'normal' ? (
                  <div className='w-fit flex justify-center uppercase bg-green-700 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
                    {d.status}
                  </div>
                ) : d.status === 'problem' ? (
                  <div className='w-fit flex justify-center uppercase bg-red-700 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-200'>
                    {d.status}
                  </div>
                ) : (
                  <div className='w-fit flex justify-center uppercase bg-yellow-400 text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
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

export default TableUnit;
