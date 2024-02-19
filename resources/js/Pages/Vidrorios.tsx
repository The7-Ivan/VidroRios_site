import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import MobileLayout from '@/Layouts/MobileLayout';
import DesktopLayout from '@/Layouts/DesktopLayout';
import { useState, useEffect, ComponentType } from 'react';
import loadingGif from '../../../public/images/websiteImages/blue_logo.gif';

export default function Vidrorios({ auth }: PageProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 700); 

    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  // Renderização dinâmica dos componentes com base na condição de mobile
  const Layout = isMobile ? MobileLayout : DesktopLayout;

  const [Home, setHome] = useState<ComponentType<any> | null>(null);
  const [Loja, setLoja] = useState<ComponentType<any> | null>(null);
  const [Contatos, setContatos] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    if (isMobile !== null) {
      Promise.all([
        isMobile ? import('@/Components/mobile/home/HomeMobile') : import('@/Components/desktop/home/HomeDesktop'),
        isMobile ? import('@/Components/mobile/loja/LojaMobile') : import('@/Components/desktop/loja/LojaDesktop'),
        isMobile ? import('@/Components/mobile/contatos/ContatosMobile') : import('@/Components/desktop/contatos/ContatosDesktop')
      ]).then(([homeModule, lojaModule, contatosModule]) => {
        setHome(() => homeModule.default || null);
        setLoja(() => lojaModule.default || null);
        setContatos(() => contatosModule.default || null);
      }).catch(error => {
        console.error('Error loading component:', error);
        setHome(null);
        setLoja(null);
        setContatos(null);
      });
    }
  }, [isMobile]);

  if (!loaded || isMobile === null) {
    return (
      <div className='w-screen h-screen bg-white flex justify-center items-center'>
        <img src={loadingGif} alt='teste Loading...' width={500} height={500} className='w-[300px] h-auto' />
      </div>
    );
  }

  return (
    <>
      <Head title='VIDRORIOS' />
      <Layout navigateTo={navigateTo} currentPage={currentPage}>
        {currentPage === 'home' && Home !== null && <Home />}
        {currentPage === 'loja' && Loja !== null && <Loja />}
        {currentPage === 'contatos' && Contatos !== null && <Contatos />}
      </Layout>
    </>
  );
}
