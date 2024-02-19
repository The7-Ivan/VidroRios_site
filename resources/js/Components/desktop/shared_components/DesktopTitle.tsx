interface Props {
  title: String;
  color?: string;
}

export default function DesktopTitle({ title, color = 'primary-blue' }: Props) {
  
  const textColor: string = 'text-' + color; 
  const borderColor: string = 'border-' + color; 
  
  return(
    <div className="w-full text-primary-blue text-center">
      <h2 className={`font-Garamond font-bold text-[22px] uppercase m-0 p-0 ${textColor}`}>{title}</h2>
      <hr className={`w-full h-[0.2px] ${borderColor}`} />
    </div>
  );
};