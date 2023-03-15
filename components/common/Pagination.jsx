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
      <div className='text-sm font-normal text-zinc-500 dark:text-zinc-400'>
        Showing{' '}
        <span className='font-semibold text-zinc-900 dark:text-white'>
          {indexOfFirstItem + 1}
        </span>{' '}
        to{' '}
        <span className='font-semibold text-zinc-900 dark:text-white'>
          {indexOfLastItem > totalItem ? totalItem : indexOfLastItem}
        </span>{' '}
        of{' '}
        <span className='font-semibold text-zinc-900 dark:text-white'>
          {totalItem}
        </span>{' '}
      </div>
      <ul className='inline-flex items-center -space-x-px ml-12'>
        <li>
          <a
            onClick={() =>
              paginate(currentPage === 1 ? currentPage : currentPage - 1)
            }
            href='#'
            className='px-3 py-2 ml-0 leading-tight text-zinc-500 bg-white border border-zinc-300 rounded-l-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white'>
            Previous
          </a>
        </li>
        {displayedPages.map((page) => (
          <li key={page}>
            <a
              onClick={() => paginate(page)}
              href='#'
              className='block px-3 py-2 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white'>
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
            className='px-3 py-2 leading-tight text-zinc-500 bg-white border border-zinc-300 rounded-r-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white'>
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
