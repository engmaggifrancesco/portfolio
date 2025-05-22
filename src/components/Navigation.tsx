import React from 'react';
import { useNavigate } from './RouterContext';

interface NavigationProps {
  closeMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ closeMenu }) => {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    navigate(page);
    closeMenu();
  };

  return (
    <nav className="flex flex-col items-center justify-center text-center">
      {['home', 'about', 'projects', 'contact'].map((item) => (
        <button
          key={item}
          onClick={() => handleNavigation(item)}
          className="py-6 text-4xl md:text-6xl font-light uppercase tracking-wider hover:text-gray-400 transition-colors duration-300 transform hover:translate-x-2"
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;