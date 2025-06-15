import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronUp } from 'lucide-react';

export const FloatingActionButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Show scroll-to-top button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset scrolling state after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col space-y-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          disabled={isScrolling}
          className={`bg-gray-800 hover:bg-gray-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 animate-fadeIn ${
            isScrolling ? 'animate-bounce' : ''
          }`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/447778147840"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center animate-bounce-gentle"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
};