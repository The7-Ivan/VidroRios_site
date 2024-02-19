import { TbTruckDelivery } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";

export default function DesktopServices() {
  
  const iconColor = '#323691';
  const borderColor = '#323691';
  
  const servicesData = [
    {
      service: 'Serviço de Entrega',
      description: 'Nós entregamos seus produtos com segurança e rapidez.',
      icon: <TbTruckDelivery size={40} color={iconColor} />,
    },
    {
      service: 'Serviço de Montagem',
      description: 'Nossa equipe oferece montagem profissional para todos os produtos.',
      icon: <FaUsersGear size={40} color={iconColor} />,
    },
    // Adicione mais serviços conforme necessário
  ];

  return (
    <div className="w-[160px] h-auto flex flex-col justify-center items-center gap-4 px-4 py-5">
      {servicesData.map((service, index) => (
        <div key={index} className="w-full h-auto flex rounded-xl bg-gradient-to-tr from-primary-blue via-primary-blue/40 to-primary-blue/50 p-[1.2px]">
          <div className="w-full bg-white aspect-square flex flex-col justify-center items-center rounded-xl">
            {service.icon}
            <div className="text-center px-2">
              <h3 className="text-[12px] text-primary-red ">{service.service}</h3>
              <p className="text-[8px] text-gray">{service.description}</p>
            </div>
          </div>
        </div>  
      ))}
    </div>
  );
}