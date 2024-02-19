import { useState, useEffect } from 'react';
import getProducts from "@/Components/dbData/Products";
import { Product } from '@/types/dbInterfaces';
import Pagination from '@/Components/globalComponents/Pagination/Pagination';

interface Props {
  selectedCategory?: string;
  searchTerm?: string;
}

export default function MobileProductList({ selectedCategory, searchTerm }: Props) {
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProductsData();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        (product.categories && product.categories.some(category =>
          category.category.toLowerCase().includes(lowerCaseSearchTerm)
        ))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(product =>
        product.categories && product.categories.some(category => category.category === selectedCategory)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  return <Pagination productsData={filteredProducts} isMobile={true}/>
};
