import { Company } from "@/types/dbInterfaces";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  company?: Company;
  className?: string;
}

export default function DesktopCompanyCardItem({company, className}: Props) {
  return(
    <div className="relative w-full flex flex-col justify-between max-w-[250px] aspect-vertical bg-dark-blue border-b-2 border-r-2 border-gray-700 overflow-hidden rounded-lg select-none cursor-pointer">
      <h3 className="w-full flex justify-center text-white font-Garamond font-bold text-[22px] my-2 z-20">{company?.name}</h3>
      <img src={company?.front_image_path} alt="Imagem da empresa" className="object-cover" />
      <div className="flex flex-col px-2 my-4 z-20">
        <p className="text-primary-red text-[10px]">{company?.section}</p>
        <div className="w-full flex gap-1 text-gray-400 text-[14px] mt-2">Horário: <p className="text-white">{company?.working_hours}</p></div>
        <div className="w-full flex gap-1 text-gray-400 text-[14px] mt-2">Endereço: <p className="text-white">{company?.address}</p></div>
        <div className="w-full flex gap-1 text-gray-400 text-[14px] mt-2">WhatsApp: <p className="text-green-500 flex gap-1 items-center border border-green-500 rounded-full px-2 font-bold"><FaWhatsapp />{company?.whatsapp}</p></div>
      </div>
      <div className="absolute top-0 z-10 bg-gradient-to-tr from-white/20 to-transparent w-full h-full"/>
    </div>
  );
};