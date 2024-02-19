import getCompanies from "@/Components/dbData/Companies";
import { Company } from "@/types/dbInterfaces";
import { useState, useEffect } from "react";
import MobileCompanyCardItem from "./sub_components/MobileCompanyCardItem";
import DesktopCompanyCardItem from "./sub_components/DesktopCompanyCardItem";
import { openWhatsApp } from "@/utilities/whatsapp";
import React from "react";

interface Props {
  device: string;
  className?: string;
}

export default function CompanyCards({ device, className }: Props) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [cardItem, setCardItem] = useState<JSX.Element | null>(null);
  const [css, setCss] = useState<string>('');
  

  useEffect(() => {
    if (device === 'mobile') {
      setCardItem(<MobileCompanyCardItem />);
    } else if (device === 'desktop') {
      setCardItem(<DesktopCompanyCardItem />);
      const dskCss = "flex justify-center gap-4"
      setCss(dskCss)
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompanies();
      setCompanies(data);
    };

    fetchData();
  }, []);

  if (device) return (
    <>
      {cardItem && (
        <div className={css}>
          {companies.map((company) => (
            <div key={company.id} onClick={() => openWhatsApp(company.id)}>
              {React.cloneElement(cardItem, { company: company })}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
