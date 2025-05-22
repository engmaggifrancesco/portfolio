import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import LoadingScreen from './LoadingScreen';
import { ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative bg-black text-white min-h-screen font-sans main-layout" style={{ overflow: 'visible' }}>
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-black z-40 transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-95 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute top-8 right-8">
          <button 
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-gray-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
        <div className="flex items-center justify-center h-full">
          <Navigation closeMenu={() => setMenuOpen(false)} />
        </div>
      </div>

      <header className="fixed top-0 left-0 w-full px-8 py-4 z-30 flex justify-between items-center">
        <div className="flex items-baseline space-x-6">
          <div 
            className="text-2xl font-semibold tracking-tighter cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => {
              // Torna alla home quando si clicca sul nome
              window.scrollTo({ top: 0, behavior: 'smooth' });
              // Usa il router context per navigare alla home
              const appSetActivePage = (window as any).__setActivePage;
              if (appSetActivePage) {
                appSetActivePage('home');
              }
            }}
          >
            SIYANG JIANG
          </div>
          {window.location.pathname.includes('projects') && (
            <div className="text-xl font-light tracking-tighter text-gray-300">/ PROJECTS</div>
          )}
        </div>
        <button 
          onClick={() => setMenuOpen(true)}
          className="uppercase tracking-widest text-sm hover:text-gray-400 transition-colors"
        >
          Menu
        </button>
      </header>

      <main className="relative z-10" style={{ minHeight: '100vh', overflow: 'visible', height: 'auto' }}>
        {children}
      </main>

      <footer className="fixed bottom-0 left-0 w-full px-8 py-4 z-20 flex justify-between items-center text-xs opacity-60 bg-gradient-to-t from-black/80 to-transparent">
        <div>&copy; {new Date().getFullYear()} Siyang Jiang</div>
        <div>3D Artist / Visual Designer</div>
      </footer>
    </div>
  );
};

export default Layout;