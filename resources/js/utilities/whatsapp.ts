export function openWhatsApp(companyID: number): void {
  
  console.log(companyID)
  
  const message = 'Olá, gostaria de obter mais informações sobre seus serviços';
  const whatsappWithCountryCode = '1234567890'; 
  const whatsappApiLink = `https://api.whatsapp.com/send?phone=${whatsappWithCountryCode}&text=${encodeURIComponent(message || '')}`;

  window.open(whatsappApiLink, '_blank');
}