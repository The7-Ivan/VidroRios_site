interface MobileTitleProps {
  title: string;
  color?: string;
}

export default function MobileTitle({ title, color = 'primary-blue' }: MobileTitleProps) {
  
  const textColor: string = 'text-' + color; 
  const borderColor: string = 'border-' + color; 
  

  return (
    <div className="w-full text-center">
      <h2 className={`font-Garamond font-bold text-[16px] uppercase m-0 p-0 ${textColor}`}>{title}</h2>
      <hr className={`w-full h-[0.2px] ${borderColor}`} />
    </div>
  );
}