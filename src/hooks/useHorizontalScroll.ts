import { useEffect, RefObject, useState } from 'react';

const useHorizontalScroll = (ref: RefObject<HTMLElement>) => {
  const [isScrolling] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Fattore di sensibilità per lo scorrimento fluido
    const sensitivity = 1.5;
    
    const handleWheel = (e: WheelEvent) => {
      // Previeni lo scroll verticale della pagina
      e.preventDefault();
      
      // Applica lo scorrimento orizzontale direttamente, senza animazioni automatiche
      // Moltiplica per sensitivity per rendere lo scorrimento più naturale
      element.scrollLeft += e.deltaY * sensitivity;
    };
    
    // Gestisci anche lo scorrimento orizzontale con il touchpad o il trackpad
    const handleHorizontalScroll = (e: WheelEvent) => {
      if (e.deltaX !== 0) {
        e.preventDefault();
        element.scrollLeft += e.deltaX * sensitivity;
      }
    };
    
    // Aggiungi gestori eventi con passive: false per poter chiamare preventDefault()
    element.addEventListener('wheel', handleWheel, { passive: false });
    element.addEventListener('wheel', handleHorizontalScroll, { passive: false });
    
    return () => {
      element.removeEventListener('wheel', handleWheel);
      element.removeEventListener('wheel', handleHorizontalScroll);
    };
  }, [ref]);
  
  return { isScrolling };
};

export default useHorizontalScroll;