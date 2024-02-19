import { useState, useEffect, useRef } from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import logoImg from '../../../../../../public/images/websiteImages/vrwhite_logo.png';
import { Category } from '@/types/dbInterfaces';

interface Props {
  categoriesList: Category[];
  onCategorySelect: (category: string) => void;
  onSearchTermChange: (term: string) => void;
}

export default function DesktopCategoriesList({ categoriesList, onCategorySelect, onSearchTermChange }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleCategoryClick = (category: string) => {
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
    onCategorySelect(category);
    setActiveCategory(category);
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(e.target.value);
    setActiveCategory(null);
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-gradient-to-r from-dark-blue/90 via-dark-blue/85 to-dark-blue/80 pb-2">
      <div className='w-full px-4'>
        <input ref={searchInputRef} className="w-full my-2" placeholder='Procurar...' onChange={handleSearchTermChange} />
        <hr />
      </div>
      <div>
        {categoriesList.map((category, index) => (
          <div key={index} className={`px-4 cursor-pointer hover:bg-gradient-to-l hover:from-blue-700 rounded-full ${activeCategory === category.category ? 'bg-gradient-to-l from-blue-800' : ''}`} onClick={() => handleCategoryClick(category.category)}>
            <p className={`w-full flex justify-between items-center pl-2 py-4 border-b text-white `}>{category.category}<MdDoubleArrow /></p>
          </div>
        ))}
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <img src={logoImg} alt=" logo" className='opacity-30 max-w-[70%]' />
      </div>
    </div>
  );
};
