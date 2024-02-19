import { mobileHomepage } from "@/Components/staticData/text";

export default function MobileQualifiedWorkers({ className } : {className?: string | ''}) {
  return(
    <div className={className}>
      <div className="w-full flex justify-center gap-2 items-center mt-5">
          <div className="w-[40%] max-w-[300px] h-full">
            <img 
              src={'/images/websiteImages/qualified.jpg'} 
              alt="Imagem de trabalhadores qualificados" 
              width={768} height={1024}
              className="rounded-xl"
            />
          </div>
        <p className="max-w-[60%] text-[12px] text-center">{mobileHomepage.qualifiedProfessionals}</p>
      </div>
    </div>
  );
};