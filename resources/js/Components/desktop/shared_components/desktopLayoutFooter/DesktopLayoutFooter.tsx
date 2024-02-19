import { SocialIcon } from "react-social-icons";
import DesktopFooterSearchBar from "./sub_components/DesktopFooterSearchBar";
import DesktopInfoFooterBar from "./sub_components/DesktopInfoFooterBar";
import DesktopFooterServices from "./sub_components/DesktopFooterServices";

export default function DesktopLayoutFooter() {
  return(
    <div className="w-full h-full flex flex-col justify-center items-center px-16 text-white">
      <div className="w-full h-fit flex justify-between gap-6">
        <div>
          <DesktopFooterSearchBar />
        </div>
        <div className="pb-2 h-full select-none"> 
          <h4 className="font-Garamond font-bold text-[18px]">Lojas: </h4>
            <p className="cursor-pointer">All Glass</p>
            <p className="cursor-pointer">Home Center</p>
            <p className="cursor-pointer">Indústria VodroRios</p>
        </div>
        <div className="pb-2">
        <h4 className="font-Garamond font-bold text-[18px] ">Serviços: </h4>
          <DesktopFooterServices />
        </div>
      </div>
      <DesktopInfoFooterBar />
    </div>
  );
};