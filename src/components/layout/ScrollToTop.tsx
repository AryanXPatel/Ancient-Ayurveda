import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    
    // Also try using smooth scroll after a small delay for better UX
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  }, [pathname]);

  return null;
};