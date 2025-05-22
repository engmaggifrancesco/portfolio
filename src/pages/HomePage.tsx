import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import videoBackground from '../data/videos/video26tagliato.mp4';

interface HomePageProps {
  setActivePage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Make the setActivePage function globally available for the router
    (window as any).__setActivePage = setActivePage;

    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  }, [setActivePage]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Video container with 16:9 aspect ratio */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          ref={videoRef}
          className="absolute w-full h-full object-cover object-center" 
          style={{
            aspectRatio: '16/9',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          autoPlay
          loop 
          muted 
          playsInline
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tighter text-white">
          VISUAL <br className="hidden md:block" />
          <span className="font-medium">DESIGNER</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          3D Artist & Visual Designer creating immersive digital worlds and cutting-edge visual narratives.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setActivePage('projects')}
            className="group flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>VIEW PROJECTS</span>
            <Play size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={() => setActivePage('about')}
            className="text-gray-200 hover:text-white transition-colors duration-300 uppercase tracking-wide"
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;