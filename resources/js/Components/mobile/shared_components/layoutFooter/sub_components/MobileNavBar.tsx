import { Link, usePage } from '@inertiajs/react';
import { BsBuildingExclamation } from "react-icons/bs";
import { LiaStoreAltSolid } from "react-icons/lia";
import { RiContactsLine } from "react-icons/ri";

interface Props{
  navigateTo: (page: string) => void
  currentPage: string;
}

export default function MobileNavBar({navigateTo, currentPage}: Props) {

  const { url, component } = usePage()

  return(
    <div className="w-full h-full flex justify-center text-gray-500/90 items-center gap-6">
      <p onClick={() => navigateTo('home')} className={currentPage === 'home' ? 'text-primary-blue' : ''}><BsBuildingExclamation size={20}/></p>
      <p onClick={() => navigateTo('loja')} className={currentPage === 'loja' ? 'text-primary-blue' : ''}><LiaStoreAltSolid size={25} /></p>
      <p onClick={() => navigateTo('contatos')} className={currentPage === 'contatos' ? 'text-primary-blue' : ''}><RiContactsLine size={20}/></p>
    </div>
  );
};
