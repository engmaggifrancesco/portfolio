import React, { createContext, useContext, useState } from 'react';

type NavigateFunction = (page: string) => void;

const RouterContext = createContext<NavigateFunction | null>(null);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [, setActivePage] = useState('home');

  const navigate = (page: string) => {
    setActivePage(page);
    // This would normally use actual routing, but for this example we're using state in App.tsx
    // Find the setActivePage function from App and call it
    const appSetActivePage = (window as any).__setActivePage;
    if (appSetActivePage) {
      appSetActivePage(page);
    }
  };

  return (
    <RouterContext.Provider value={navigate}>
      {children}
    </RouterContext.Provider>
  );
};

export const useNavigate = (): NavigateFunction => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useNavigate must be used within a RouterProvider');
  }
  return context;
};