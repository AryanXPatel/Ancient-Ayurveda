import React, { useState, useEffect } from "react";
import { MessageCircle, ChevronUp } from "lucide-react";

export const FloatingActionButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Show scroll-to-top button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      console.log("Scroll position:", scrollPosition); // Debug log

      if (scrollPosition > 300) {
        setShowScrollTop(true);
        console.log("Showing scroll-to-top button"); // Debug log
      } else {
        setShowScrollTop(false);
        console.log("Hiding scroll-to-top button"); // Debug log
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    // Check initial position
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const smoothScrollToTop = () => {
    console.log("Scroll to top button clicked"); // Debug log
    console.log("Current scroll position:", window.pageYOffset); // Debug log

    setIsScrolling(true);

    // Custom smooth scroll animation that works on mobile
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 800; // 800ms for smooth animation

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easedProgress = easeInOutCubic(progress);
      const currentPosition = startPosition * (1 - easedProgress);

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
        console.log("Smooth scroll animation completed"); // Debug log
      }
    };

    // Start the animation
    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={smoothScrollToTop}
          disabled={isScrolling}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "16px",
            zIndex: 999999,
            width: "56px",
            height: "56px",
            backgroundColor: isScrolling ? "#374151" : "#1f2937",
            color: "white",
            border: "none",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
            transform: isScrolling ? "scale(0.95)" : "scale(1)",
          }}
          onMouseEnter={(e) => {
            if (!isScrolling) {
              e.currentTarget.style.backgroundColor = "#374151";
              e.currentTarget.style.transform = "scale(1.1)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isScrolling) {
              e.currentTarget.style.backgroundColor = "#1f2937";
              e.currentTarget.style.transform = "scale(1)";
            }
          }}
          onTouchStart={(e) => {
            if (!isScrolling) {
              e.currentTarget.style.backgroundColor = "#374151";
              e.currentTarget.style.transform = "scale(0.95)";
            }
          }}
          onTouchEnd={(e) => {
            if (!isScrolling) {
              setTimeout(() => {
                e.currentTarget.style.backgroundColor = "#1f2937";
                e.currentTarget.style.transform = "scale(1)";
              }, 150);
            }
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp
            size={24}
            style={{
              transform: isScrolling ? "rotate(360deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/447778147840"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 999999,
          width: "56px",
          height: "56px",
          backgroundColor: "#10b981",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          transition: "all 0.3s ease",
          touchAction: "manipulation",
          WebkitTapHighlightColor: "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#059669";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#10b981";
          e.currentTarget.style.transform = "scale(1)";
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.backgroundColor = "#059669";
          e.currentTarget.style.transform = "scale(0.95)";
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.backgroundColor = "#10b981";
          e.currentTarget.style.transform = "scale(1)";
        }}
        aria-label="Contact us on WhatsApp"
        onClick={() => console.log("WhatsApp button clicked")} // Debug log
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
};
