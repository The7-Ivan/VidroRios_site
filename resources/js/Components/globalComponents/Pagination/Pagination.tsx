import { Product } from "@/types/dbInterfaces";
import { useState } from "react";
import DesktopProductItem from "../../desktop/loja/sub_components/DesktopProductItem";
import PaginationControls from "./sub_components/PaginationControls";
import MobileProductItem from "@/Components/mobile/loja/sub_components/MobileProductItem";


interface PaginationProps {
  productsData: Product[];
  isMobile?: boolean;
}

export default function Pagination({ productsData, isMobile = false }: PaginationProps) {
  const productsPerPage = isMobile? 4 : 8;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const paginatedProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
        {isMobile ? (
          <div className="w-full h-full flex flex-col items-center justify-between">
            <MobileProductItem filteredProducts={paginatedProducts} />
            <PaginationControls
              productsPerPage={productsPerPage}
              totalProducts={productsData.length}
              currentPage={currentPage}
              paginate={paginate}
              isMobile={true}
            />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-between gap-2 items-center">
            <DesktopProductItem filteredProducts={paginatedProducts} />
            <PaginationControls
              productsPerPage={productsPerPage}
              totalProducts={productsData.length}
              currentPage={currentPage}
              paginate={paginate}
            />
        </div>
        )}
    </>
  );
}