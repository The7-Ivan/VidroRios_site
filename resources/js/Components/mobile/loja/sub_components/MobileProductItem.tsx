import { Product } from '@/types/dbInterfaces';

interface Props {
  filteredProducts: Product[];
}

export default function MobileProductItem({ filteredProducts }: Props) {
  return(
    <div>
      {filteredProducts.map((product) => (
            <div key={product.id} className="w-full px-4 mt-4">
              <div className='relative h-auto w-full rounded-xl flex flex-col bg-white border-b border-r border-gray-400 select-none hover:scale-[1.1] ease-in-out duration-300'>
                <h3 className="w-full text-center text-[18px] text-primary-blue font-bold my-2">{product.name}</h3>
                {product.images && product.images.length > 0 && (
                  <img 
                    src={product.images[0].img_path} 
                    alt={`imagem do produto ${product.name}`} 
                    className='w-full aspect-video'
                  />
                )}
                <div className='p-2 w-full flex flex-col items-center justify-between'>
                  <div className='w-full flex flex-col items-center'>
                    <p className='text-[12px]'>{product.description}</p>
                  </div>
                  <button className='border border-primary-blue text-primary-blue px-2 text-[16px] my-4 rounded-full'>Pedir Orçamento</button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};