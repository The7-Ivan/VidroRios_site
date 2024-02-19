import { Category, ImageType } from "@/types/dbInterfaces";
import getCategories from "./Categories";

export async function getCategoryImagesArray(): Promise<{ dataImages: ImageType[] }> {
  const categoryImagesArray: ImageType[] = [];

  try {
    const categories: Category[] = await getCategories();

    categories.forEach((category) => {
      const image: ImageType = {
        path: category.image || '',
        alt: `Imagem da categoria ${category.category}`,
      };
      categoryImagesArray.push(image);
    });

    return { dataImages: categoryImagesArray };
  } catch (error) {
    console.error("Error retrieving category images:", error);
    return { dataImages: [] }; 
  }
}
