import { useState, useEffect, useRef } from "react";
import backgroundImg from '../../../../../../public/images/websiteImages/BackgroundImg.jpg';
import introVid from '../../../../../../public/images/empresa/somosvidrorios2.mp4';

export default function DesktopVidTiImg({ className }: { className: string }) {

  const motoImg = '/images/websiteImages/ImagemMoto.png';
  
  const [showVideo, setShowVideo] = useState(true);
  const [opacityEffect, setOpacityEffect] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const checkTime = () => {
      if (video && video.currentTime >= video.duration - 1) {
        setOpacityEffect(true);
        setTimeout(() => {
          setShowVideo(false);
        }, 700);
      }
    };

    const interval = setInterval(checkTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={className}>
      {showVideo && (
        <div className={`absolute top-0 z-20 w-full h-full flex justify-center items-center transition-opacity duration-1000 ease-in-out ${opacityEffect ? 'opacity-0' : 'opacity-100'}`}>
          <video ref={videoRef} className="w-full h-full object-cover object-bottom" autoPlay muted preload="auto">
            <source src={introVid} type="video/mp4" />
          </video>
        </div>
      )}
      {opacityEffect &&
        <div className={`absolute w-full h-full top-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
          <img src={motoImg} alt="Imagem moto da empresa" className="w-[80%] max-w-[1100px] h-auto object-cover" />
        </div>
      }
      <img src={backgroundImg} alt="Imagem de fundo" className="w-full h-full object-cover" />
    </div>
  );
}
