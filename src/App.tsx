import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { SetPageFunction } from './types';

function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);
  
  const handlePageChange: SetPageFunction = (page) => {
    setActivePage(page);
    
    // Se si naviga alla sezione progetti, resetta il progetto corrente
    if (page === 'projects') {
      setCurrentProjectId(null);
    }
    
    // Scroll to top when changing page
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  
  // Assicuriamoci che ogni cambio di pagina o di progetto faccia tornare in cima
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage, currentProjectId]);
  
  // Esponiamo la funzione setActivePage per il RouterContext
  useEffect(() => {
    (window as any).__setActivePage = (page: string) => {
      setActivePage(page);
      // Se si naviga alla sezione progetti, resetta il progetto corrente
      if (page === 'projects') {
        setCurrentProjectId(null);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    
    return () => {
      delete (window as any).__setActivePage;
    };
  }, []);

  return (
    <Layout>
      {activePage === 'home' && <HomePage setActivePage={handlePageChange} />}
      {activePage === 'about' && <AboutPage />}
      {activePage === 'projects' && !currentProjectId && (
        <ProjectsPage setCurrentProjectId={setCurrentProjectId} />
      )}
      {activePage === 'projects' && currentProjectId && (
        <ProjectDetailPage 
          projectId={currentProjectId} 
          setActivePage={handlePageChange} 
          setCurrentProjectId={setCurrentProjectId} 
        />
      )}
      {activePage === 'contact' && <ContactPage />}
    </Layout>
  );
}

export default App;