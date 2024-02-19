import { useState } from 'react';
import { searchProducts } from "@/utilities/searchProducts";
import { BsSearch } from "react-icons/bs";

export default function DesktopFooterSearchBar() {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    searchProducts({ search: searchText });
  };

  return (
    <div className='h-full flex flex-col gap-1 mb-2'>
      <h4 className="font-Garamond font-bold text-[18px]">Encontre Produtos: </h4>
      <div className='h-full flex justify-center items-center mb-2'>
        <div className='relative w-[240px]'>
          <BsSearch color="white" size={10} className="absolute h-9 w-16 p-2.5 top-0.5 right-0.5 bg-gray-800 rounded-full cursor-pointer" onClick={handleSearch} />
          <input 
            type="text" 
            placeholder='Procurar...' 
            className="h-10 w-full text-dark-blue pr-[68px] border-2 rounded-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
