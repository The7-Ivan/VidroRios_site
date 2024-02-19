import MobileContatosHeader from "@/Components/mobile/contatos/sub_components/MobileContatosHeader";
import DesktopContatosHeader from "./sub_components/DesktopContatosHeader";
import DesktopTitle from "../shared_components/DesktopTitle";
import { mobileHomepage } from "@/Components/staticData/text";
import CompanyCards from "@/Components/globalComponents/company/CompanyCards";
import FormularioContato from "@/Components/globalComponents/Form";

export default function ContatosDesktop() {
  return(
    <div className="relative w-full flex flex-col items-center justify-center">
      <section id="Header" className="w-full h-auto">
        <DesktopContatosHeader />
      </section>
      <section id="CompanyCards" className="w-full py-4">
        <div className="w-full px-4 mb-2 flex justify-center">
          <DesktopTitle title={mobileHomepage.mobileTile2}/>
        </div>
        <div className="mt-4">
          <CompanyCards device="desktop"/>
        </div>
      </section>
      <section id="From" className="w-full flex flex-col items-center gap-2 mt-4 bg-dark-blue pt-4 pb-10">
        <div className="w-full px-4">
          <DesktopTitle title={mobileHomepage.mobileTile5} color="white"/>
        </div>
        <div className="flex justify-center gap-2 px-4">
          <div className="max-w-[400px] mt-4">
            <FormularioContato />
          </div>
          <p className="max-w-[40%] mt-4 px-4 text-gray-300 text-center mb-4">{mobileHomepage.messageUS}</p>
        </div>
      </section>
    </div>
  );
};