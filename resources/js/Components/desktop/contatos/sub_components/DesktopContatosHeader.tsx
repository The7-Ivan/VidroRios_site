import headerImg from '../../../../../../public/images/websiteImages/BackgroundImg.jpg';
import logo from '../../../../../../public/images/websiteImages/vrwhite_logo.png';
import contatoImg from '../../../../../../public/images/empresa/contato.jpg';

export default function DesktopContatosHeader() {
  return(
    <div className='relative w-full h-[400px]'>
      <img 
        src={headerImg} 
        alt="contatos imagem de topo"
        className='w-full h-full object-cover' 
      />
      <div className='absolute top-0 w-full h-full flex items-end justify-between'>
        <div className='w-full max-w-[60%] h-full flex flex-col items-center justify-center'>
          <img 
            src={logo} 
            alt="Logo branca do topo da barra"
            className='max-w-[400px]'  
          />
          <h3 className='text-white text-[40px]'>Fale conosco!</h3>
        </div>
        <div className='max-w-[40%] h-[80%] rounded-l-full overflow-hidden flex justify-end items-end'>
          <img 
            src={contatoImg} 
            alt="imagem da atendendte" 
            className='w-full h-full object-cover object-top'
          />
        </div>
      </div>
    </div>
  );
};