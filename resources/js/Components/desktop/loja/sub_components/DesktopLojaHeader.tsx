import headerImg from '../../../../../../public/images/websiteImages/BackgroundImg.jpg';
import motoImg from '../../../../../../public/images/websiteImages/ImagemMoto.png';

export default function DesktopLojaHeader() {
  return(
    <div className='relative w-full h-[400px]'>
      <img 
        src={headerImg} 
        alt="contatos imagem de topo"
        className='w-full h-full object-cover' 
      />
      <div className='absolute top-0 w-full h-full flex items-center justify-center'>
          <img 
            src={motoImg} 
            alt="Logo branca do topo da barra"
            className='max-w-[600px] mt-20'  
          />
      </div>
    </div>
  );
};