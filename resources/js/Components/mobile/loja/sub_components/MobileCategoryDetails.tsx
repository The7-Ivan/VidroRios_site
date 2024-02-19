import { useState, useEffect } from 'react';
import getCategories from "@/Components/dbData/Categories";
import { Category } from '@/types/dbInterfaces';
import MobileTitle from '../../shared_components/MobileTitle';

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
    <div className='w-full flex flex-col items-center px-4 mt-4'>
      {categoryDetails && (
        <div className='w-full'>
          <MobileTitle title={categoryDetails?.category} />       
        </div>
      )}
      <p className='text-center text-[10px] text-black mt-2'>{categoryDetails?.description}</p>
    </div>
  );
};
