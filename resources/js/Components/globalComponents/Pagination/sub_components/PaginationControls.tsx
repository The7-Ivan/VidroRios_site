interface PaginationControlsProps {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  isMobile?: boolean;
}

export default function PaginationControls({ productsPerPage, totalProducts, currentPage, paginate, isMobile = false }: PaginationControlsProps) {
  const pageNumbers = Math.ceil(totalProducts / productsPerPage);

  return (
    <>
    {isMobile ? (
      <div className="">
        <ul className='flex gap-2 select-none my-4'>
          {[...Array(pageNumbers)].map((_, index) => (
            <li key={index + 1} className='page-item'>
              <div onClick={() => paginate(index + 1)} className={`w-[30px] h-[30px] flex justify-center items-center text-primary-blue cursor-pointer border rounded-full bg-white ${
                  currentPage === index + 1 ? 'border-primary-red' : 'border-primary-blue'
                }`}>
                {index + 1}
              </div>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div className="">
        <ul className='flex gap-2 select-none mt-6'>
          {[...Array(pageNumbers)].map((_, index) => (
            <li key={index + 1} className='page-item'>
              <div onClick={() => paginate(index + 1)} className={`w-[30px] h-[30px] flex justify-center items-center p-4 text-primary-blue cursor-pointer border rounded-full bg-white ${
                  currentPage === index + 1 ? 'border-primary-red' : 'border-primary-blue'
                }`}>
                {index + 1}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )}
    </>
  );
};