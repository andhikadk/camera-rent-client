const Pagination = ({
  totalItem,
  paginate,
  currentPage,
  lastPage,
  indexOfFirstItem,
  indexOfLastItem,
}) => {
  const displayRange = 3;
  let start = 1;
  let pages = [];

  for (let i = 1; i <= lastPage; i++) {
    pages.push(i);
  }

  if (currentPage <= Math.ceil(displayRange / 2)) {
    start = 1;
  } else if (currentPage > totalItem - Math.floor(displayRange / 2)) {
    start = totalItem - displayRange + 1;
  } else {
    start = currentPage - Math.floor(displayRange / 2);
  }

  const displayedPages = pages.slice(start - 1, start + displayRange - 1);
  const isFirstPageIncluded = displayedPages.includes(1);
  const isLastPageIncluded = displayedPages.includes(lastPage);

  if (!isFirstPageIncluded) {
    displayedPages.unshift(1);
  }

  if (!isLastPageIncluded) {
    displayedPages.push(lastPage);
  }

  return (
    <div
      className='flex items-center justify-between pt-4 mb-4'
      aria-label='Table navigation'>
      <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
        Showing{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {indexOfFirstItem + 1}
        </span>{' '}
        to{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {indexOfLastItem > totalItem ? totalItem : indexOfLastItem}
        </span>{' '}
        of{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {totalItem}
        </span>{' '}
      </span>
      <ul className='inline-flex items-center -space-x-px'>
        <li>
          <a
            onClick={() =>
              paginate(currentPage === 1 ? currentPage : currentPage - 1)
            }
            href='#'
            className='px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            Previous
          </a>
        </li>
        {displayedPages.map((page) => (
          <li key={page}>
            <a
              onClick={() => paginate(page)}
              href='#'
              className='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
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
            className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
