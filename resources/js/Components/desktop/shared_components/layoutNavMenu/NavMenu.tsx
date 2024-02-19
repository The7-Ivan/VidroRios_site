import { SocialIcon } from "react-social-icons";

interface Props{
  navigateTo: (page: string) => void
  currentPage: string;
}

export default function NavMenu({ navigateTo, currentPage }: Props) {
  
  const logo = '/images/websiteImages/vrblue_logo.png';
  
  function homepage () {

  }
 
  return(
      <div className="w-full h-auto flex justify-center mx-auto mt-3 select-none">
        <div className="max-w-[1100px] w-full mx-4 h-auto flex items-center p-2 bg-white/70 backdrop-blur-sm rounded-xl">
          <div className="w-fit h-full pb-3 flex items-center justify-center">
            <img src={logo} 
              alt="Navbar logo da empresa"
              width={1000} height={300}
              className="cursor-pointer w-full max-w-[230px]"
              onClick={() => homepage()}
            /> 
          </div>
          <div className="w-full h-full flex items-center gap-2">
            <div className="w-full h-full px-4 flex justify-center items-center gap-4 uppercase text-[20px] font-bold font-Garamond text-primary-blue grow">
              <p onClick={() => navigateTo('home')} className={`hover:text-primary-red cursor-pointer ${currentPage === 'home' ? 'text-primary-red' : ''}`}>Empresa</p>
              <p onClick={() => navigateTo('loja')} className={`hover:text-primary-red cursor-pointer ${currentPage === 'loja' ? 'text-primary-red' : ''}`}>Loja</p>
              <p onClick={() => navigateTo('contatos')} className={`hover:text-primary-red cursor-pointer ${currentPage === 'contatos' ? 'text-primary-red' : ''}`}>Contatos</p>
            </div>
            <div className='w-fit py-2 pr-4 flex gap-[1px] justify-end items-center grow-0'>
              <input type="text" placeholder="Procurar produtos..." className="min-w-[180px] max-w-[200px] w-full h-8 mr-2 border-dark-blue bg-white/30 focus:bg-white rounded-full"/>
              <SocialIcon network="instagram" style={{ width: '20px', height: '20px' }} className="min-w-[20px]"/>
              <SocialIcon network="facebook" style={{ width: '20px', height: '20px' }} className="min-w-[20px]"/>
              <SocialIcon network="whatsapp" style={{ width: '20px', height: '20px' }} className="min-w-[20px]"/>    
            </div>
          </div>
        </div>  
      </div>
  );
};