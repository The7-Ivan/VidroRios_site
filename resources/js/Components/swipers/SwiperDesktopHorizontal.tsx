import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { ImageType } from '@/types/dbInterfaces';

export default function SwiperDesktopHorizontal({ className, images }: { className: string, images: ImageType[] }) {
  return (
    <div className={className}>
      <div className='max-w-[800px] p-2 relative'>
        <div className="absolute top-0 bottom-0 left-0 w-[35px] bg-gradient-to-r from-white via-white/95 to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-[35px] bg-gradient-to-l from-white via-white/95 to-transparent z-10"></div>
        <Swiper
          loop={true}
          loopAdditionalSlides={1}
          slidesPerView={3}
          centeredSlides={true}
          effect={'coverflow'}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[Autoplay, EffectCoverflow ]}
          className="mySwiper"
        >
          <div className=''>
              {images.map((image, index) => (
                <SwiperSlide key={index} className='px-1'>
                  <div className="w-auto">
                    <div className="aspect-square relative">
                      <img
                        src={image.path}
                        alt={image.alt}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
