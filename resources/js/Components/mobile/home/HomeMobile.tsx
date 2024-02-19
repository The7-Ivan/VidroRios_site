import MobileTitle from "../shared_components/MobileTitle";
import MobileVidToImg from "./sub_components/MobileVidTiImg";
import { mobileHomepage } from "../../../Components/staticData/text"
import SwiperMobileHorizontal from "@/Components/swipers/SwiperMobileHorizontal";
import { openWhatsApp } from "@/utilities/whatsapp";
import MobileServices from "./sub_components/MobileServices";
import MobileQualifiedWorkers from "./sub_components/MobileQualifiedWorkers";
import MobileFooter from "../shared_components/MobileFooter";
import CompanyCards from "@/Components/globalComponents/company/CompanyCards";
import { getCategoryImagesArray } from "@/Components/dbData/CompanyImgs";
import { ImageType } from "@/types/dbInterfaces";
import { useState, useEffect } from "react";
import image1 from '../../../../../public/images/produtos/teste1.png'; 
import SwiperMobileHorizontalFade from "@/Components/swipers/SwiperMobileHorizontalFade";


export default function HomeMobile() {

  const initialImages: ImageType[] = Array.from({ length: 10 }, (_, index) => ({
    path: image1,
    alt: `Image ${index + 1}`
  }));
  
  const [categoryImagesArray, setCategoryImagesArray] = useState<ImageType[]>(initialImages);

  useEffect(() => {
    async function fetchCategoryImages() {
      try {
        const { dataImages: images } = await getCategoryImagesArray();
        setCategoryImagesArray(images);
      } catch (error) {
        console.error("Error getting category images array:", error);
      }
    }

    fetchCategoryImages();
  }, []);

  
  return(
    <>
      <div className="w-screen h-auto">
        <div className="flex flex-col items-center">
          <section id="header" >
            <MobileVidToImg className="relative w-screen h-auto mb-5 flex justify-center items-center overflow-hidden shadow-md"/> 
          </section>
          <section id="Somos_VidroRios" className="w-full px-4 flex flex-col items-center">
            <MobileTitle title={mobileHomepage.mobileTile1} />
            <p className="text-[8px] text-center mt-2 text-dark-blue">{mobileHomepage.aboutUs}</p>
            <SwiperMobileHorizontal className="w-[90%] h-auto mt-3" images={categoryImagesArray}/>
            <p className="text-[10px] text-center mt-5 px-1 text-dark-blue"> {mobileHomepage.companyValues} </p>
            <button
              className="w-fit text-sm mt-5 py-2 px-4 shadow-lg border-2 border-primary-red text-primary-red rounded-full flex justify-center uppercase"
              onClick={() => openWhatsApp(1)} 
              >Fale com nossos consultores
            </button>
          </section>
          <section id="Nossas_Lojas" className="w-full px-4 flex flex-col items-center mt-10">
            <MobileTitle title={mobileHomepage.mobileTile2} />
            <CompanyCards device="mobile"/>
            <p className="text-[10px] text-center mt-5 px-1 text-dark-blue"> {mobileHomepage.companyHistory} </p>
          </section>
          <section id="Nossos_Produtos" className="w-full px-4 flex flex-col items-center mt-10">
            <MobileTitle title={mobileHomepage.mobileTile3} />
            <p className="text-[10px] text-center mt-5 px-1 text-dark-blue"> {mobileHomepage.productLines} </p>
            <SwiperMobileHorizontal className="w-[90%] h-auto mt-3" images={categoryImagesArray}/>
            <MobileServices />
            <button
              className="w-fit text-sm mt-5 py-2 px-4 shadow-lg border-2 border-primary-red text-primary-red rounded-full flex justify-center uppercase"
              onClick={() => openWhatsApp(1)} 
              >Fale com nossos consultores
            </button>
          </section>
          <section id="Seja_Cliente" className="w-full px-4 flex flex-col items-center mt-10">
            <MobileTitle title={mobileHomepage.mobileTile4} />
            <SwiperMobileHorizontalFade className={"w-[90%] mt-5"} images={categoryImagesArray} />
            <p className="text-[10px] text-center mt-5 px-1 text-dark-blue"> {mobileHomepage.catalog} </p>
            <MobileQualifiedWorkers className="w-[95%] h-auto" />
          </section>
          <section id="Mobile_Footer" className="w-full px-4 flex flex-col items-center my-10">
            <MobileFooter />
          </section>
        </div>
      </div>
    </>
  );
};