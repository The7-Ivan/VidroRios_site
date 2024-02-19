import { SocialIcon } from 'react-social-icons'
import { useState } from 'react';

interface Props{
  theme?: string;
}

export default function MobileFooter({ theme = 'default' }: Props) {

  const [cartEmpty, setCartEmpty] = useState(true)
  const getCurrentYear = () => new Date().getFullYear();

  const logo = theme === 'default' ? 'images/websiteImages/vrblue_logo.png' : 'images/websiteImages/vrwhite_logo.png';
  const text = theme === 'default' ? 'text-primary-blue' : 'text-white';


  return (
    <div className={`w-screen flex justify-start items-center gap-2 p-2 ${text}`}>
      <div className='flex text-center text-[8px] justify-center grow ml-10'>
        <p>VidroRio® - Todos os direitos reservados {getCurrentYear()}.
        <br />
        Desenvolvido por <a className='text-[8px]' href="https://thesevenpublicidade.com.br" target="_blank" rel="noopener noreferrer">THE7</a>.</p>
      </div>
      <div className="w-auto flex flex-col items-start justify-center">
        <div className='w-full flex justify-center items-center'>
          <img src={logo} alt='logo footer' width={1000} height={300} className='w-20 h-auto'/>
        </div>
        <div className='w-full flex gap-[1px] justify-center items-center'>
          <SocialIcon network="instagram" style={{ width: '20px', height: '20px' }}/>
          <SocialIcon network="facebook" style={{ width: '20px', height: '20px' }}/>
          <SocialIcon network="whatsapp" style={{ width: '20px', height: '20px' }}/>
        </div>
      </div>
    </div>
  );
};