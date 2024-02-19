import { FaUsersGear } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

export default function DesktopFooterServices() {
  
  const iconColor = '#fff';
  const borderColor = '#323691';
  
  const servicesData = [
    {
      service: 'Serviço de Entrega',
      description: 'Nós entregamos seus produtos com segurança e rapidez.',
      icon: <TbTruckDelivery size={42} color={iconColor} />,
    },
    {
      service: 'Serviço de Montagem',
      description: 'Nossa equipe oferece montagem profissional para todos os produtos.',
      icon: <FaUsersGear size={50} color={iconColor} />,
    },
    // Adicione mais serviços conforme necessário {service.icon}
  ];
  
  return(
    <div className="max-w-[230px] flex flex-col gap-2">
      {servicesData.map((service, index) => (
        <div key={index} className="w-full h-auto flex gap-2 items-center">
          {service.icon}
          <div className="flex flex-col border-l px-2">
            <h4 className="text-[10px]">{service.service}</h4>
            <p className="text-[10px]">{service.description}</p>
          </div>
        </div>  
      ))}
    </div>
  );
};