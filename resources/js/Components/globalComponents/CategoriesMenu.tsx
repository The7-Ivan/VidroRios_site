import { useState, useEffect, useRef } from 'react';
import getCategories from "@/Components/dbData/Categories";
import { Category } from '@/types/dbInterfaces';
import DesktopCategoriesList from '../desktop/loja/sub_components/DesktopCategoriesList';
import MobileCategoriesList from '../mobile/loja/sub_components/MobileCategoriesList';

interface Props {
  onCategorySelect: (category: string) => void;
  onSearchTermChange: (term: string) => void;
  device?: string;
}

export default function CategoriesMenu({ onCategorySelect, onSearchTermChange, device = 'desktop' }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategoriesData();
  }, []);

  const handleCategorySelect = (category: string) => {
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
    onCategorySelect(category);
  };

  const handleSearchTermChange = (term: string) => {
    onSearchTermChange(term);
  };

  let CategoriesList;

  if (device === 'desktop') {
    CategoriesList = (
      <DesktopCategoriesList
        categoriesList={categories}
        onCategorySelect={handleCategorySelect}
        onSearchTermChange={handleSearchTermChange}
      />
    );
  } else {
    CategoriesList = (
      <MobileCategoriesList
        categoriesList={categories}
        onCategorySelect={handleCategorySelect}
        onSearchTermChange={handleSearchTermChange}
      />
    );
  }

  return CategoriesList;
}
