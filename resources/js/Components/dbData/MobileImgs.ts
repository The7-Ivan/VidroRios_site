import image1 from '../../../../public/images/produtos/teste1.png';
import image2 from '../../../../public/images/produtos/teste2.png';
import image3 from '../../../../public/images/produtos/teste3.png';
import image4 from '../../../../public/images/produtos/teste4.png';
import image5 from '../../../../public/images/produtos/teste5.png';
import image6 from '../../../../public/images/produtos/teste6.png';
import image7 from '../../../../public/images/produtos/teste4.png';
import image8 from '../../../../public/images/produtos/teste3.png';
import image9 from '../../../../public/images/produtos/teste4.png';
import image10 from '../../../../public/images/produtos/teste3.png';
import { ImageType } from '@/types/dbInterfaces';

const products: { path: string; alt: string }[] = [
  { path: image1, alt: 'Image 1' },
  { path: image2, alt: 'Image 2' },
  { path: image3, alt: 'Image 3' },
  { path: image4, alt: 'Image 4' },
  { path: image5, alt: 'Image 5' },
  { path: image6, alt: 'Image 6' },
  { path: image7, alt: 'Image 7' },
  { path: image8, alt: 'Image 8' },
  { path: image8, alt: 'Image 9' },
  { path: image8, alt: 'Image 10' },
];

export const dataImages: ImageType[] = [];

for (let i = 0; i < products.length; i++) {
  const product: ImageType = {
    path: products[i].path,
    alt: products[i].alt,
  };
  dataImages.push(product);
}