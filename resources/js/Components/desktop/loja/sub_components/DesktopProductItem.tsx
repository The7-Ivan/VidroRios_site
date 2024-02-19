import { Product } from '@/types/dbInterfaces';

interface Props {
  filteredProducts: Product[];
}

export default function DesktopProductItem({ filteredProducts }: Props) {
  return(
    <div className='w-full h-full grow flex flex-col items-center'>
      <div className='w-full flex justify-center'>
        <div className="w-min h-fit p-2 flex flex-wrap gap-4 basis-[1230px]">
          {filteredProducts.map((product) => (
            <div key={product.id} className="">
              <div className='h-fit w-[300px] rounded-xl flex bg-white border-b border-r border-gray-400 select-none hover:scale-[1.1] ease-in-out duration-300'>
                {product.images && product.images.length > 0 && (
                  <img 
                    src={product.images[0].img_path} 
                    alt={`imagem do produto ${product.name}`} 
                    className='w-[140px] aspect-vertical rounded-l-xl'/>
                )}
                <div className='p-2 w-full flex flex-col items-center justify-between'>
                  <div className='w-full flex flex-col items-center'>
                    <h3 className="text-[18px] text-primary-blue font-bold">{product.name}</h3>
                    <p className='text-[12px]'>{product.description}</p>
                  </div>
                  <button className='border border-primary-blue px-2 text-[12px] rounded-full'>Pedir Orçamento</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};