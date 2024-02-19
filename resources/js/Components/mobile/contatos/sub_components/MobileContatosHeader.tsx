import contatoImg from '../../../../../../public/images/empresa/contato.jpg'

export default function MobileContatosHeader() {
  return(
    <div className='w-full h-[150px] bg-primary-blue flex justify-end'>
      <div className='w-[70%] h-full text-[26px] text-white font-bold flex justify-center items-center'>Fale Conosco!</div>
      <div className='max-w-[35%] z-10 h-full rounded-l-full overflow-hidden'>
        <img 
          src={contatoImg} 
          alt="Imagem topo contato" 
          className='w-auto h-full object-cover object-top'
        />
      </div>
    </div>
  );
};