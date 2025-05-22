import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { SetProjectIdFunction } from '../types';
import useHorizontalScroll from '../hooks/useHorizontalScroll';

interface ProjectsPageProps {
  setCurrentProjectId?: SetProjectIdFunction;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ setCurrentProjectId }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [indicators, setIndicators] = useState<HTMLElement[]>([]);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  
  // Function to navigate to a specific project
  const goToProject = useCallback((index: number) => {
    if (index < 0) index = projects.length - 1;
    if (index >= projects.length) index = 0;
    
    setActiveIndex(index);
    setIsAutoScrolling(true);
    
    if (scrollContainerRef.current) {
      const projectWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: projectWidth * index,
        behavior: 'smooth'
      });
      
      // Reset auto-scrolling state after animation completes
      setTimeout(() => {
        setIsAutoScrolling(false);
      }, 500);
    }
  }, []);
  
  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToProject(activeIndex - 1);
    } else if (e.key === 'ArrowRight') {
      goToProject(activeIndex + 1);
    }
  }, [activeIndex, goToProject]);
  
  // Set up scroll indicators
  useEffect(() => {
    if (indicators.length > 0) {
      indicators.forEach((indicator, i) => {
        if (i === activeIndex) {
          indicator.classList.add('bg-white');
          indicator.classList.remove('bg-gray-600');
        } else {
          indicator.classList.remove('bg-white');
          indicator.classList.add('bg-gray-600');
        }
      });
    }
  }, [activeIndex, indicators]);
  
  // Initialize indicators
  useEffect(() => {
    const indicatorElements = Array.from(document.querySelectorAll('.project-indicator')) as HTMLElement[];
    setIndicators(indicatorElements);
  }, []);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && !isAutoScrolling) {
        const scrollPosition = scrollContainerRef.current.scrollLeft;
        const projectWidth = scrollContainerRef.current.offsetWidth;
        const newIndex = Math.round(scrollPosition / projectWidth);
        
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
          setActiveIndex(newIndex);
        }
      }
    };
    
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeIndex, isAutoScrolling]);
  
  // Utilizziamo il nostro hook personalizzato per lo scorrimento orizzontale
  useHorizontalScroll(scrollContainerRef);
  
  // Aggiorniamo l'indice attivo in base alla posizione di scorrimento
  useEffect(() => {
    const element = scrollContainerRef.current;
    if (!element) return;
    
    let scrollTimeout: number;
    
    const handleScroll = () => {
      if (isAutoScrolling) return;
      
      // Usa requestAnimationFrame per limitare il numero di aggiornamenti
      cancelAnimationFrame(scrollTimeout);
      
      scrollTimeout = window.requestAnimationFrame(() => {
        const containerWidth = element.offsetWidth;
        const scrollPosition = element.scrollLeft;
        const newIndex = Math.round(scrollPosition / containerWidth);
        
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
          setActiveIndex(newIndex);
        }
      });
    };
    
    element.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      element.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(scrollTimeout);
    };
  }, [activeIndex, isAutoScrolling, projects.length]);
  
  // Add intersection observer for videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(error => {
              console.error('Error playing video:', error);
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    videoRefs.current.forEach((video) => {
      observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        observer.unobserve(video);
      });
    };
  }, []);
  
  return (
    <div 
      className="h-screen flex flex-col" 
      tabIndex={0} 
      onKeyDown={handleKeyDown}
    >
      {/* Projects carousel - full height */}
      <div className="relative flex-1 overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="absolute inset-0 flex overflow-x-auto hide-scrollbar"
          style={{ scrollBehavior: 'auto' }}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="w-full h-full flex-shrink-0 px-8 py-8"
            >
              <div className="h-full flex flex-col md:flex-row gap-8 relative">
                {/* Dividing line to separate projects */}
                {index > 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-600/30" />
                )}
                {/* Project media - larger (image or video) */}
                <div 
                  className="md:w-2/3 h-[65vh] md:h-full relative group overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setCurrentProjectId && setCurrentProjectId(project.id)}
                >
                  {/* Verifica se l'URL termina con un'estensione video */}
                  {/\.(mp4|webm|ogg)$/i.test(project.imageUrl) ? (
                    <video 
                      ref={(el) => {
                        if (el) {
                          videoRefs.current.set(`project-${project.id}`, el);
                        }
                      }}
                      src={project.imageUrl}
                      className="w-full h-full object-cover"
                      playsInline
                      muted
                      loop
                    />
                  ) : (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <span className="text-white flex items-center">
                      View Project <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
                
                {/* Project info */}
                <div className="md:w-1/3 flex flex-col justify-between">
                  <div>
                    <span className="text-sm text-gray-400 uppercase tracking-wide mb-2 block">
                      {project.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tighter">{project.title}</h2>
                    <p className="text-gray-300 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-y-4 mb-8">
                      {project.client && (
                        <>
                          <div className="text-sm text-gray-500 uppercase tracking-wide">Client</div>
                          <div>{project.client}</div>
                        </>
                      )}
                      <div className="text-sm text-gray-500 uppercase tracking-wide">Year</div>
                      <div>{project.year}</div>
                    </div>
                    
                    <button
                      onClick={() => setCurrentProjectId && setCurrentProjectId(project.id)}
                      className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors mb-8"
                    >
                      View Details <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                  
                  {/* Navigation controls */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {index + 1} / {projects.length}
                    </div>
                    
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => goToProject(activeIndex - 1)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Previous project"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <button 
                        onClick={() => goToProject(activeIndex + 1)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Next project"
                      >
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project navigation indicators - positioned at bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-20">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goToProject(i)}
            className={`project-indicator w-12 h-1 transition-all duration-300 ${activeIndex === i ? 'bg-white w-16' : 'bg-gray-600/50 hover:bg-gray-400/70'}`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;