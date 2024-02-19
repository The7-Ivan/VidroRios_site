import { mobileHomepage } from "@/Components/staticData/text";
import DesktopTitle from "../shared_components/DesktopTitle";
import DesktopVidTiImg from "./sub_components/DesktopVidTiImg";
import SwiperDesktopHorizontal from "@/Components/swipers/SwiperDesktopHorizontal";
import { openWhatsApp } from "@/utilities/whatsapp";
import DesktopServices from "./sub_components/DesktopServices";
import CompanyCards from "@/Components/globalComponents/company/CompanyCards";
import { getCategoryImagesArray } from "@/Components/dbData/CompanyImgs";
import { useState, useEffect } from "react";
import { ImageType } from "@/types/dbInterfaces";
import image1 from '../../../../../public/images/produtos/teste1.png'; 
import SwiperDesktopHorizontalFade from "@/Components/swipers/SwiperDesktopHorizontalFade";



export default function HomeDesktop() {

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
    <div className="w-full flex flex-col items-center justify-center">
      <section id="Header" className="w-full ">
        <DesktopVidTiImg className="relative w-full h-[85vh] drop-shadow-xl"/>
      </section>
      <section id="Somos_VidroRios" className="w-full mt-10 px-10">
        <DesktopTitle title={mobileHomepage.mobileTile1} />
        <p className="w-full text-[16px] text-center mt-2 text-dark-blue">{mobileHomepage.aboutUs}</p>
        <div className="w-full flex items-center mt-8">
          <div>
            <p className="text-[16px] text-center mt-2 pl-2 text-primary-blue">{mobileHomepage.companyValues}</p>
          </div>
          <div className="max-w-[50%] flex justify-center">
            {categoryImagesArray &&
              <SwiperDesktopHorizontal className="max-w-[80%]" images={categoryImagesArray}/>
            }
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="w-[40%] text-sm my-10 py-2 px-4 shadow-lg border-2 border-primary-red text-primary-red rounded-full flex justify-center uppercase"
            onClick={() => openWhatsApp(1)} 
            >Fale com nossos consultores
          </button>
        </div>
      </section>
      <section id="Nossas_Lojas" className="w-full flex flex-col items-center mt-10 px-10">
        <DesktopTitle title={mobileHomepage.mobileTile2} />
        <p className="w-full text-[16px] text-center mt-2 mb-10 text-dark-blue">{mobileHomepage.companyHistory}</p>
        <CompanyCards device="desktop"/>
      </section>
      <section id="Nossos_Produtos" className="w-full flex flex-col items-center mt-10 px-10">
        <DesktopTitle title={mobileHomepage.mobileTile3} />
        <div className="w-full flex flex-col gap-2 items-center">
          <p className="max-w-[80%] text-[16px] text-center mt-2 text-primary-blue">{mobileHomepage.productLines}</p>
          <div className="w-full h-auto flex gap-6 justify-center items-center mt-10">
            <div className="w-[60%] flex justify-center items-center">
              <SwiperDesktopHorizontal className="max-w-[80%]" images={categoryImagesArray}/>
            </div>
            <div className="w-[40%] flex flex-col">
              <p className="w-fit pl-1 pr-2 text-primary-blue">Temos serviço de:</p>
              <DesktopServices />
            </div>
          </div>
        </div>
      </section>
      <section id="Seja_Cliente" className="w-full flex flex-col items-center my-10 px-10">
        <DesktopTitle title={mobileHomepage.mobileTile4} />
        <p className="w-full text-[16px] text-center mt-2 text-dark-blue">{mobileHomepage.catalog}</p>
        <h5 className="text-[28px] text-primary-blue mt-10">Veja algumas das nossas obras nos clientes!</h5>
        <div className="w-full flex justify-center mt-2">
          <SwiperDesktopHorizontalFade images={categoryImagesArray} className={"max-w-[700px]"}/>
        </div>
        <div className="w-full mt-5">
          <h4 className="w-fit mt-5 pl-2 pr-4 text-[20px] text-start text-white bg-primary-blue ">Conte com uma equipe de profissionais</h4>
        </div>
        <div className="w-[80%] flex justify-center gap-2 items-center mt-5">
            <div className="w-[40%] max-w-[300px] h-full">
              <img
                src={'/images/websiteImages/qualified.jpg'} 
                alt="Imagem de trabalhadores qualificados" 
                width={768} height={1024}
                className="rounded-xl"
              />
            </div>
          <div className="max-w-[60%] flex flex-col items-center gap-4">
            <p className="w-full text-[16px] text-center mt-2 text-dark-blue">{mobileHomepage.qualifiedProfessionals}</p>
            <div className="max-w-[80%]">
            <div className="w-full h-[180px] px-5 mt-10 flex justify-center items-center">
              <SwiperDesktopHorizontal className="min-w-[300px] max-w-[80%]" images={categoryImagesArray}/>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};