import FormularioContato from "@/Components/globalComponents/Form";
import CompanyCards from "@/Components/globalComponents/company/CompanyCards";
import MobileTitle from "../shared_components/MobileTitle";
import { mobileHomepage } from "@/Components/staticData/text";
import MobileFooter from "../shared_components/MobileFooter";
import MobileContatosHeader from "./sub_components/MobileContatosHeader";

export default function ContatosMobile() {

  
  return (
    <div className="w-full h-full bg-dark-blue">
      <section id="header">
        <MobileContatosHeader />
      </section>
      <section id="CompanyCards" className="py-4">
        <div className="w-full px-4 mb-2 flex justify-center">
          <MobileTitle title={mobileHomepage.mobileTile2} color={'white'} />
        </div>
        <CompanyCards device="mobile"/>
      </section>
      <section className="py-2 px-4 flex flex-col">
        <div className="w-full px-4 mb-2 flex justify-center">
          <MobileTitle title={mobileHomepage.mobileTile5} color={'white'} />
        </div>
        <p className="px-4 text-gray-500 text-center mb-4">{mobileHomepage.messageUS}</p>
        <FormularioContato />
      </section>
      <section id="footer" className="mb-10">
        <MobileFooter theme="white"/>
      </section>
    </div>
  );
};