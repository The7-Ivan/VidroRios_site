export default function WhatsAppPane() {
  return(
    <div className="absolute z-30 bottom-10 select-none rounded-xl left-1 border border-gray-200/40">
      <div className="w-[250px] flex flex-col p-2 px-4 rounded-xl bg-whatsapp-dark-green/80 backdrop-blur-sm text-white pb-8">
        <div className="w-full text-center py-1.5"> WhatsApp </div>
        <div className="w-full py-2 border-b-[0.2px] border-white/50 cursor-pointer "> Loja All Glass </div>
        <div className="w-full py-2 border-b-[0.2px] border-white/50 cursor-pointer "> Loja Home Center </div>
        <div className="w-full py-2 border-b-[0.2px] border-white/50 cursor-pointer "> Indústria VIDRORIOS </div>
      </div>
    </div>
  );
};