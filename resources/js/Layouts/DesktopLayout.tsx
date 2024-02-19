
import DesktopLayoutFooter from '@/Components/desktop/shared_components/desktopLayoutFooter/DesktopLayoutFooter';
import NavMenu from '@/Components/desktop/shared_components/layoutNavMenu/NavMenu';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  navigateTo: (page: string) => void;
}

export default function Desktop({ children, currentPage, navigateTo }: LayoutProps) {
    return (
        <>
          <header className='w-full h-auto flex fixed top-[0rem] z-40'>
            <NavMenu navigateTo={navigateTo} currentPage={currentPage} />
          </header>
          <main>
            {children}
          </main>
          <footer className='py-4 bg-gray-800 border-t border-gray-700'>
            <DesktopLayoutFooter />
          </footer>
        </>
    );
}
