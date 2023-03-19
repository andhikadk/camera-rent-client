import React from 'react';

const ModalCustomer = ({ setIsModal, details }) => {
  const customerDetail = [
    { label: 'ID', value: details.id },
    { label: 'Nama', value: details.name },
    { label: 'No Hp', value: details.phone },
    { label: 'Type', value: details.type },
    { label: 'Instagram', value: details.instagram },
    { label: 'Address', value: details.address },
    { label: 'District', value: details.district },
    { label: 'Sub District', value: details.sub_district },
    { label: 'PJ', value: details.pj },
    { label: 'Total Transaction', value: details.totalTransaction },
    { label: 'Status', value: details.status },
  ];

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='bg-zinc-50 dark:bg-zinc-700 min-w-[32rem] rounded-lg p-8 shadow-lg z-50'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold'>Customer Details</h1>
            <button
              onClick={() => setIsModal(false)}
              className='text-zinc-900 dark:text-zinc-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='mt-4 text-zinc-900 dark:text-zinc-100 text-start'>
            <table className='table-auto w-full'>
              <tbody>
                {customerDetail.map((d) => (
                  <tr className='border-y border-zinc-200 dark:border-zinc-600'>
                    <td className='py-2 pr-16'>{d.label}</td>
                    <td className='py-2'>{d.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div
          onClick={() => setIsModal(false)}
          className='fixed top-0 left-0 w-screen h-screen bg-zinc-900 bg-opacity-60 z-60'></div>
      </div>
    </>
  );
};

export default ModalCustomer;
