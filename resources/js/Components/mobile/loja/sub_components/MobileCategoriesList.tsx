import { Category } from "@/types/dbInterfaces";
import { useState, useRef } from "react";

interface Props {
  categoriesList: Category[];
  onCategorySelect: (category: string) => void;
  onSearchTermChange: (term: string) => void;
}

export default function MobileCategoriesList({ categoriesList, onCategorySelect, onSearchTermChange }: Props) {
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
  
  return(
    <div className="w-full flex flex-col items-end gap-1 bg-dark-blue">
      <div className='w-full flex justify-center py-2 flex justify-end'>
        <input ref={searchInputRef} className="w-[80%] rounded-full h-6" placeholder='Procurar...' onChange={handleSearchTermChange} />
      </div>
      <div className="w-full flex items-center">
        <div className="text-white px-3">«</div>
        <div className="overflow-x-auto">
          <div className="w-full flex flex-nowrap gap-4">
            {categoriesList.map((category, index) => (
              <div key={index} className={` ${activeCategory === category.category ? 'bg-gradient-to-b from-blue-800' : ''}`} onClick={() => handleCategoryClick(category.category)}>
                <p className={`py-1 px-2 text-white text-nowrap`}>{category.category}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-white px-3">»</div>
      </div>
    </div>
  )
};