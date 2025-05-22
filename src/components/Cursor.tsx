import React, { useEffect, useState, useRef } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    let animationFrameId: number;
    let lastX = 0;
    let lastY = 0;
    
    // Use RAF for smoother cursor movement
    const updatePosition = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      
      // Cancel any pending animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Smooth cursor movement with lerp (linear interpolation)
      const render = () => {
        if (!cursorRef.current) return;
        
        // Calculate the interpolated position
        lastX = lastX + (e.clientX - lastX) * 0.2;
        lastY = lastY + (e.clientY - lastY) * 0.2;
        
        cursorRef.current.style.transform = `translate3d(${lastX}px, ${lastY}px, 0) translate(-50%, -50%) ${linkHovered ? 'scale(1.5)' : clicked ? 'scale(0.75)' : 'scale(1)'}`;
        
        // Continue animation until cursor reaches target position
        if (Math.abs(lastX - e.clientX) > 0.1 || Math.abs(lastY - e.clientY) > 0.1) {
          animationFrameId = requestAnimationFrame(render);
        }
      };
      
      // Start the animation
      animationFrameId = requestAnimationFrame(render);
      setIsVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEvents = () => {
      const handleLinkMouseEnter = () => setLinkHovered(true);
      const handleLinkMouseLeave = () => setLinkHovered(false);
      
      // Add hover styles to interactive elements
      document.querySelectorAll('a, button, [role="button"], input, select, textarea').forEach(el => {
        el.addEventListener('mouseenter', handleLinkMouseEnter);
        el.addEventListener('mouseleave', handleLinkMouseLeave);
        el.classList.add('cursor-none'); // Ensure native cursor is hidden on interactive elements
      });

      return () => {
        document.querySelectorAll('a, button, [role="button"], input, select, textarea').forEach(el => {
          el.removeEventListener('mouseenter', handleLinkMouseEnter);
          el.removeEventListener('mouseleave', handleLinkMouseLeave);
          el.classList.remove('cursor-none');
        });
      };
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    const cleanupLinkEvents = handleLinkHoverEvents();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cleanupLinkEvents();
    };
  }, [clicked, linkHovered]);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 top-0 left-0 mix-blend-difference
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          transition-opacity duration-300 ease-out`}
      >
        <div 
          className={`rounded-full bg-white transition-all duration-200 ease-out
            ${linkHovered ? 'w-8 h-8 opacity-70' : 'w-3 h-3 opacity-100'}
            ${clicked ? 'scale-75' : ''}`}
        />
      </div>
      <style jsx global>{`
        html, body {
          cursor: none !important;
        }
        
        /* Hide cursor on interactive elements to prevent double cursor */
        .cursor-none {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default Cursor;