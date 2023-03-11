const Pagination = ({
  totalItem,
  itemPerPage,
  paginate,
  currentPage,
  indexOfFirstItem,
  indexOfLastItem,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav
      class='flex items-center justify-between pt-4 mb-4'
      aria-label='Table navigation'>
      <span class='text-sm font-normal text-gray-500 dark:text-gray-400'>
        Showing{' '}
        <span class='font-semibold text-gray-900 dark:text-white'>
          {indexOfFirstItem + 1}
        </span>{' '}
        to{' '}
        <span class='font-semibold text-gray-900 dark:text-white'>
          {indexOfLastItem > totalItem ? totalItem : indexOfLastItem}
        </span>{' '}
        of{' '}
        <span class='font-semibold text-gray-900 dark:text-white'>
          {totalItem}
        </span>{' '}
      </span>
      <ul class='inline-flex items-center -space-x-px'>
        <li>
          <a
            onClick={() =>
              paginate(currentPage === 1 ? currentPage : currentPage - 1)
            }
            href='#'
            class='block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            <span class='sr-only'>Previous</span>
            <svg
              class='w-5 h-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clip-rule='evenodd'></path>
            </svg>
          </a>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <a
              onClick={() => paginate(page)}
              href='#'
              class='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            onClick={() =>
              paginate(
                currentPage === pages.length ? currentPage : currentPage + 1
              )
            }
            href='#'
            class='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            <span class='sr-only'>Next</span>
            <svg
              class='w-5 h-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clip-rule='evenodd'></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
