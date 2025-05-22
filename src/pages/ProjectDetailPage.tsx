import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { SetPageFunction, SetProjectIdFunction } from '../types';

interface ProjectDetailPageProps {
  projectId: number;
  setActivePage: SetPageFunction;
  setCurrentProjectId?: SetProjectIdFunction;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ 
  projectId, 
  setActivePage,
  setCurrentProjectId
}) => {
  const project = projects.find(p => p.id === projectId);
  
  // Add video refs and intersection observer
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  
  useEffect(() => {
    // Scroll to top when page loads with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Soluzione per uno scrolling fluido
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
    
    // Impostazioni base per garantire lo scrolling
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    document.documentElement.style.position = 'relative';
    
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.body.style.minHeight = '150vh';
    document.body.style.position = 'relative';
    
    // Rimuoviamo qualsiasi overflow hidden che potrebbe bloccare lo scroll
    const allElements = document.querySelectorAll('*');
    const elementsWithHiddenOverflow = Array.from(allElements).filter(el => {
      const style = window.getComputedStyle(el);
      return style.overflow === 'hidden' || style.overflowY === 'hidden';
    });
    
    // Salviamo gli stili originali e applichiamo i nuovi
    const originalStyles = new Map();
    elementsWithHiddenOverflow.forEach(el => {
      originalStyles.set(el, {
        overflow: (el as HTMLElement).style.overflow,
        overflowY: (el as HTMLElement).style.overflowY
      });
      (el as HTMLElement).style.overflow = 'visible';
      (el as HTMLElement).style.overflowY = 'visible';
    });
    
    // Aggiungiamo spazio extra alla fine della pagina per garantire lo scrolling
    const footer = document.createElement('div');
    footer.style.height = '100px';
    footer.style.width = '100%';
    footer.style.position = 'relative';
    document.body.appendChild(footer);
    
    // Create intersection observer for videos
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
        threshold: 0.5, // Video will play when 50% is visible
        rootMargin: '0px'
      }
    );

    // Observe all videos
    videoRefs.current.forEach((video) => {
      observer.observe(video);
    });

    return () => {
      // Ripristina tutti gli stili originali
      document.documentElement.style.scrollBehavior = '';
      document.body.style.scrollBehavior = '';
      
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.documentElement.style.position = '';
      
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.minHeight = '';
      document.body.style.position = '';
      
      // Ripristina gli stili originali degli elementi modificati
      elementsWithHiddenOverflow.forEach(el => {
        const original = originalStyles.get(el);
        if (original) {
          (el as HTMLElement).style.overflow = original.overflow;
          (el as HTMLElement).style.overflowY = original.overflowY;
        }
      });
      
      // Rimuovi gli elementi aggiunti
      if (document.body.contains(footer)) {
        document.body.removeChild(footer);
      }

      // Cleanup observer
      videoRefs.current.forEach((video) => {
        observer.unobserve(video);
      });
    };
  }, [projectId]);
  
  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Project not found</h1>
          <button 
            onClick={() => {
              setActivePage('projects');
              if (setCurrentProjectId) setCurrentProjectId(null);
            }}
            className="inline-flex items-center px-4 py-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to projects
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative w-full pt-24 pb-64 px-6 md:px-12" style={{ height: 'auto', minHeight: '200vh', overflowY: 'visible', paddingBottom: '200px' }}>
      <button 
        onClick={() => {
          // Prima resetta lo scroll
          window.scrollTo({ top: 0, behavior: 'instant' });
          // Poi torna alla pagina dei progetti
          if (setCurrentProjectId) setCurrentProjectId(null);
          // Piccolo ritardo per assicurarsi che il progetto sia stato resettato
          setTimeout(() => {
            setActivePage('projects');
          }, 50);
        }}
        className="inline-flex items-center mb-12 px-4 py-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to projects
      </button>
      
      <div className="max-w-6xl mx-auto">
        {/* Hero section */}
        <div className="mb-16">
          <span className="text-sm text-gray-400 uppercase tracking-wide mb-2 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-8">
            {project.title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <p className="text-xl text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-6">
              {project.client && (
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-1">Client</h3>
                  <p className="text-lg">{project.client}</p>
                </div>
              )}
              
              <div>
                <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-1">Year</h3>
                <p className="text-lg">{project.year}</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-1">Category</h3>
                <p className="text-lg">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main media (image or video) */}
        <div className="w-full aspect-video mb-16 overflow-hidden rounded-lg">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              title={project.title}
              className="w-full h-full object-cover"
              controls
              playsInline
              autoPlay
              muted
              loop
              ref={(el) => {
                if (el) {
                  videoRefs.current.set('main', el);
                }
              }}
            />
          ) : (
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        
        {/* Contenuto personalizzato del progetto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {project.overview && (
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-tighter">Project Overview</h2>
              <div className="text-gray-300 leading-relaxed mb-6">
                <div dangerouslySetInnerHTML={{ __html: project.overview }} />
              </div>
            </div>
          )}
          
          {project.process && (
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-tighter">Creative Process</h2>
              <div className="text-gray-300 leading-relaxed mb-6">
                <div dangerouslySetInnerHTML={{ __html: project.process }} />
              </div>
            </div>
          )}
          
          {project.challenges && (
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-tighter">Challenges</h2>
              <div className="text-gray-300 leading-relaxed mb-6">
                <div dangerouslySetInnerHTML={{ __html: project.challenges }} />
              </div>
            </div>
          )}
          
          {/* Tecnologie utilizzate (se presenti) */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-light mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Galleria di immagini aggiuntive (se presente) */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-tighter">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imageItem, index) => {
                // Determina se l'elemento è una stringa o un oggetto MediaItem
                const imageUrl = typeof imageItem === 'string' ? imageItem : imageItem.url;
                const imageDescription = typeof imageItem === 'string' ? '' : imageItem.description;
                
                return (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={imageUrl} 
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {imageDescription && (
                      <div className="p-3 bg-white/5">
                        <p className="text-sm text-gray-300">{imageDescription}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Video aggiuntivi (se presenti) */}
        {project.additionalVideos && project.additionalVideos.length > 0 && (
          <section className="mb-16">
            <div className="space-y-16">
              {project.additionalVideos.map((media, index) => {
                // Determine media type based on file extension if type is not specified
                const isVideo = media.type === 'video' || (media.url && media.url.toLowerCase().endsWith('.mp4'));
                const isImage = media.type === 'image' || (media.url && /\.(jpg|jpeg|png|gif|webp)$/i.test(media.url));
                const isText = media.type === 'text' || (!media.url && media.description);

                return (
                  <div key={index} className="space-y-4">
                    {media.sectionTitle && (
                      <h2 className="text-2xl font-light mb-8">{media.sectionTitle}</h2>
                    )}
                    {media.subtitle && (
                      <h3 className="text-xl font-light text-gray-300">{media.subtitle}</h3>
                    )}
                    
                    {isVideo && media.url && (
                      <video 
                        className="w-full rounded-lg shadow-lg" 
                        controls
                        playsInline
                        autoPlay
                        muted
                        loop
                      >
                        <source src={media.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    
                    {isImage && media.url && (
                      <div className={`${media.secondImage ? 'grid grid-cols-1 md:grid-cols-3 gap-4' : 'block'}`}>
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-black/10">
                          <img 
                            src={media.url} 
                            alt={`${media.description || `Media ${index + 1}`}`}
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        </div>
                        {media.secondImage && (
                          <div className="relative aspect-video overflow-hidden rounded-lg bg-black/10">
                            <img 
                              src={media.secondImage} 
                              alt={`${media.description || `Media ${index + 1}`} - Second Image`}
                              className="absolute inset-0 w-full h-full object-contain"
                            />
                          </div>
                        )}
                        {media.thirdImage && (
                          <div className="relative aspect-video overflow-hidden rounded-lg bg-black/10">
                            <img 
                              src={media.thirdImage} 
                              alt={`${media.description || `Media ${index + 1}`} - Third Image`}
                              className="absolute inset-0 w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                    )}
                    
                    {media.description && (
                      <div 
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: media.description }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
        
        {/* Sezioni personalizzate (se presenti) */}
        {project.customSections && project.customSections.length > 0 && (
          <div className="mb-16 space-y-16">
            {project.customSections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-tighter">{section.title}</h2>
                <div className="text-gray-300 leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Spazio extra alla fine della pagina */}
        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
