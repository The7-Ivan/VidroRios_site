import CategoriesMenu from "@/Components/globalComponents/CategoriesMenu";
import DesktopLojaHeader from "./sub_components/DesktopLojaHeader";
import DesktopProductList from "./sub_components/DesktopProductList";
import { useState } from "react";
import DesktopCategoryDetails from "./sub_components/DesktopCategoryDetails";

export default function LojaDesktop() {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('Destaque');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
    setSelectedCategory('');
  };

  return (
    <div className="w-full">
      <section id="Header">
        <DesktopLojaHeader />
      </section>
      <section id="Body" className="w-full min-h-[730px] flex bg-blue-200 flex">
        <section id="Categories-container" className="w-[20%]">
          <CategoriesMenu onCategorySelect={handleCategorySelect} onSearchTermChange={handleSearchTermChange} />
        </section>       
        <section id="store-container" className="relative w-full">
          <div className="relative w-full h-full flex py-4">
            <div className="w-[300px] flex flex-col gap-2 itens-center mt-2 ml-2">
              <DesktopCategoryDetails category={selectedCategory} />
            </div>
              <DesktopProductList selectedCategory={selectedCategory} searchTerm={searchTerm} />
          </div>
        </section>
      </section>  
    </div>
  );
};
