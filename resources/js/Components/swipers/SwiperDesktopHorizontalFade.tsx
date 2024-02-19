import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageType } from '@/types/dbInterfaces';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function SwiperDesktopHorizontalFade({ className, images }: { className: string, images: ImageType[] }) {
  return(
    <div className={className}>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='w-full flex justify-center items-center'>
              <img 
                src={image.path}
                alt={image.alt}
                className='aspect-video object-cover'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};