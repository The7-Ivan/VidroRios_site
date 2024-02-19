import { SocialIcon } from "react-social-icons";

export default function DesktopInfoFooterBar() {
  return(
    <div className='w-full flex justify-between select-none items-center border-t border-white/30 '>
        <img 
          src={'/images/websiteImages/vrwhite_logo.png'} 
          alt="footer logo" 
          width={500} height={300}
          className="w-[200px] h-auto"
        />
        <div className='flex flex-col items-center'>
          <h4 className='text-xs'>© 2024 VIDRORIOS. Todos os direitos reservados</h4>
          <h5 className='text-xs'>Desenvolvido por <a className='text-white cursor-pointer'>THE7</a></h5>
        </div>
        <div className='flex gap-2'>
          <SocialIcon network="instagram" style={{ width: '20px', height: '30px' }} className="min-w-[30px]"/>
          <SocialIcon network="facebook" style={{ width: '20px', height: '30px' }} className="min-w-[30px]"/>
        </div>
      </div>
  );
};