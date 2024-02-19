import LayoutMobileFooter from '@/Components/mobile/shared_components/layoutFooter/LayoutMobileFooter';
import { ReactNode } from 'react';

interface MobileLayoutProps {
  children: ReactNode;
  currentPage: string;
  navigateTo: (page: string) => void;
}

export default function Mobile({ children, currentPage, navigateTo }: MobileLayoutProps) {
    return (
        <div className='w-full h-screen flex flex-col'>
          <header>

          </header>
          <main className='w-full h-auto mb-12 grow'>
            {children}
          </main>
          <footer className='flex w-full h-10 bg-white fixed bottom-[0rem] border-[0.2px] border-dark_blue/10 z-40'>
            <LayoutMobileFooter navigateTo={navigateTo} currentPage={currentPage}/>
          </footer>
        </div>
    );
}
