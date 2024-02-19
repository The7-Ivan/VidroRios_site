import { Category } from "@/types/dbInterfaces";

const fetchCategories = async () => {
  try {
    const response = await fetch('/api/categories');
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

let categoriesCache: Category[]; 

const getCategories = async () => {
  if (!categoriesCache) {
    categoriesCache = await fetchCategories();
  }
  return categoriesCache;
};

export default getCategories;

