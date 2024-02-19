import { Company } from "@/types/dbInterfaces";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  company?: Company;
  className?: string;
}

export default function MobileCompanyCardItem({company, className}: Props) {
 
  if (company) return(
    <div className={`${className} px-4 mt-1 select-none`}>
      <div id="background" className="w-full h-full border border-gray-700 bg-gray-800 drop-shadow-md flex gap-3 justify-center rounded-xl">
        <div className="max-w-[35%] h-auto flex justify-center items-center">
          <img 
            src={company.front_image_path} 
            alt={`Foto da empresa ${company.name}`}
            loading="lazy"
            className="w-full h-full object-cover rounded-lg" 
          />
        </div>
        <div className="w-full flex flex-col text-gray-400 p-2">
          <p className="text-primary-red text-[10px]">{company.section}</p>
          <div className="w-full flex flex-col items-center">
            <h2 className="w-fit px-3 text-center rounded-full mb-1 text-white text-xl font-bold font-Garamond">{company.name}</h2>
            <div className="w-[90%] border-b border-white h-[1px] mb-2"/>
          </div>
          <div className="text-[12px] flex items-start gap-1 mb-1">Horário: <p className="text-white min-h-[36px]">{company.working_hours}</p></div>
          <div className="text-[12px] flex items-start gap-1 mb-1">Endereço: <p className="text-white min-h-[36px]">{company.address}</p></div>
          <div className="text-[12px] flex items-center gap-1 cursor-pointer">WhatsApp: <p className="text-green-500 flex gap-1 items-center border border-green-500 rounded-full px-2 font-bold"><FaWhatsapp />{company.whatsapp}</p></div>
        </div>
      </div>
    </div>
  );
};