import CategoriesMenu from "@/Components/globalComponents/CategoriesMenu";
import MobileLojaHeader from "./sub_components/MobileLojaHeader";
import { useState } from "react";
import MobileCategoryDetails from "./sub_components/MobileCategoryDetails";
import MobileProductList from "./sub_components/MobileProductList";
import MobileFooter from "../shared_components/MobileFooter";

export default function LojaMobile() {

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


  return(
    <div className="w-full h-full flex flex-col justify-between">
      <section id="header" className="">
      <MobileLojaHeader />
      </section>
      <section className="">
        <CategoriesMenu onCategorySelect={handleCategorySelect} onSearchTermChange={handleSearchTermChange}  device="mobile" />
      </section>
      <section className="w-full grow flex flex-col bg-gray-100">
        <MobileCategoryDetails category={selectedCategory} />
        <MobileProductList selectedCategory={selectedCategory} searchTerm={searchTerm} />
      </section>
      <section id="Loja_Mobile_Footer" className="w-full px-4 flex flex-col items-center my-10">
        <MobileFooter />
      </section>
    </div>
  );
};