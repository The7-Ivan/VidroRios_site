import { useEffect, useRef, useState } from 'react';
import whatsappImg from '../../../../../../../public/images/websiteImages/whatapp.webp'
import WhatsAppPane from './WhatsAppPane';


export default function WhatsAppBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const imgSrc: string = whatsappImg
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function openMenu(){
    setIsOpen(!isOpen)
  };

  return(
    <div className="" ref={menuRef}>
      {isOpen && <WhatsAppPane />}
      <div onClick={() => openMenu()} className="absolute w-16 h-auto bottom-2 left-0 rounded-full z-40 cursor-pointer">
        <img 
          src={imgSrc} 
          alt="Whatsapp floating versão desktop" 
          width={300} height={300}
          loading="lazy"
          className=""
        />
      </div>
    </div>
  );
};