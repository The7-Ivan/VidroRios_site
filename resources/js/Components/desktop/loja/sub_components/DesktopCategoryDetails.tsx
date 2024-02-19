import { useState, useEffect } from 'react';
import getCategories from "@/Components/dbData/Categories";
import { Category } from '@/types/dbInterfaces';

interface Props {
  category: string;
}

export default function DesktopCategoryDetails({ category }: Props) {
  const [categoryDetails, setCategoryDetails] = useState<Category | null>(null);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      const data = await getCategories();
      const categoryDetail = data.find((cat) => cat.category === category);
      if (categoryDetail) {
        setCategoryDetails(categoryDetail);
      }
    };

    if (category) {
      fetchCategoryDetails();
    }
  }, [category]);

  return (
    <div className='w-[200px] h-full flex flex-col'>
      {categoryDetails && (
        <div className='relative'>
          <img 
            src={categoryDetails.image} 
            alt={categoryDetails.category} 
            className='w-[200px] aspect-vertical'
          />
          <div className='absolute top-0 h-full w-full flex items-center'>
            <div className='h-[55%] w-full bg-white/40 flex flex-col justify-center items-center'>
              <h4 className='font-bold text-[24px] text-black'>{categoryDetails.category}</h4>
            </div>
          </div>
        </div>
      )}
      <p className='text-center text-black mt-2'>{categoryDetails?.description}</p>
    </div>
  );
};
