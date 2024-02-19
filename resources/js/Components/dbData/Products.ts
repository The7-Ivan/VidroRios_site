import { Product } from "@/types/dbInterfaces";

const fetchProducts = async () => {
  try {
    const response = await fetch('/api/products');
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

let productsCache: Product[]; 

const getProducts = async () => {
  if (!productsCache) {
    productsCache = await fetchProducts();
  }
  return productsCache;
};

export default getProducts;
