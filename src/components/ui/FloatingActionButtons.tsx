import React, { useState, useEffect } from "react";
import { MessageCircle, ChevronUp } from "lucide-react";

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

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);

    // Use requestAnimationFrame for better mobile performance
    const smoothScrollToTop = () => {
      const scrollStep = -window.scrollY / (500 / 15);
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(smoothScrollToTop);
      } else {
        setIsScrolling(false);
      }
    };

    // Fallback for mobile devices
    if (window.scrollY > 0) {
      try {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setTimeout(() => setIsScrolling(false), 1000);
      } catch (error) {
        // Fallback for older mobile browsers
        smoothScrollToTop();
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col space-y-2 sm:space-y-3">
      {/* Scroll to Top Button - Fixed for mobile */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          disabled={isScrolling}
          className={`bg-gray-800 hover:bg-gray-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 animate-fadeIn active:scale-95 ${
            isScrolling ? "animate-bounce" : ""
          }`}
          style={{
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* WhatsApp Button - Mobile optimized */}
      <a
        href="https://wa.me/447778147840"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center animate-bounce-gentle active:scale-95"
        style={{
          touchAction: "manipulation",
          WebkitTapHighlightColor: "transparent",
        }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  );
};
