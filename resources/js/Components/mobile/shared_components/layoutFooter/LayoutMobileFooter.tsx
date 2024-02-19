import WhatsAppBar from "./sub_components/WhatsAppBar";
import MobileNavBar from "./sub_components/MobileNavBar";

interface Props{
  navigateTo: (page: string) => void
  currentPage: string;
}

export default function LayoutMobileFooter({ navigateTo, currentPage }: Props) {
  return(
    <div className="relative w-full h-full">
      <WhatsAppBar />
      <MobileNavBar navigateTo={navigateTo} currentPage={currentPage}/>
    </div>
  );
};