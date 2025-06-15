import React, { useState, useEffect } from "react";
import { MessageCircle, ChevronUp } from "lucide-react";

export const FloatingActionButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Show scroll-to-top button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      console.log('Scroll position:', scrollPosition); // Debug log
      
      if (scrollPosition > 300) {
        setShowScrollTop(true);
        console.log('Showing scroll-to-top button'); // Debug log
      } else {
        setShowScrollTop(false);
        console.log('Hiding scroll-to-top button'); // Debug log
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    
    // Check initial position
    toggleVisibility();
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    console.log('Scroll to top button clicked'); // Debug log
    console.log('Current scroll position:', window.pageYOffset); // Debug log
    
    setIsScrolling(true);

    // Simple, reliable scroll methods
    try {
      // Method 1: Try smooth scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      // Fallback check after 1 second
      setTimeout(() => {
        if (window.pageYOffset > 50) {
          console.log('Smooth scroll failed, using instant scroll'); // Debug log
          // Method 2: Instant scroll fallback
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
        setIsScrolling(false);
      }, 1000);
      
    } catch (error) {
      console.error('Scroll failed:', error); // Debug log
      // Final fallback
      window.scrollTo(0, 0);
      setIsScrolling(false);
    }
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          disabled={isScrolling}
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '16px',
            zIndex: 999999,
            width: '56px',
            height: '56px',
            backgroundColor: '#1f2937',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#374151';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1f2937';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.backgroundColor = '#374151';
            e.currentTarget.style.transform = 'scale(0.95)';
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.backgroundColor = '#1f2937';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/447778147840"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 999999,
          width: '56px',
          height: '56px',
          backgroundColor: '#10b981',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#059669';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#10b981';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.backgroundColor = '#059669';
          e.currentTarget.style.transform = 'scale(0.95)';
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.backgroundColor = '#10b981';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Contact us on WhatsApp"
        onClick={() => console.log('WhatsApp button clicked')} // Debug log
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
};
