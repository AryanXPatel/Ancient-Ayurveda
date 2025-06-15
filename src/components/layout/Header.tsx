import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Online Consultations", href: "/online-consultations" },
  { name: "Garbhasanskar", href: "/garbhasanskar" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  const isActivePage = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const handleLinkClick = () => {
    setIsNavigating(true);
    setTimeout(() => {
      setIsNavigating(false);
    }, 300);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Loading Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        </div>
      )}

      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with your actual logo image */}
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center space-x-3 focus:outline-none hover:scale-105 transition-transform duration-200"
            >
              {/* Logo Image */}
              <div className="flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Ancient Ayurveda Logo"
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
                    e.currentTarget.style.display = "none";
                    const textLogo = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (textLogo) textLogo.style.display = "flex";
                  }}
                />
                {/* Fallback Text Logo */}
                <div className="h-12 w-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full hidden items-center justify-center text-white font-bold text-lg shadow-sm">
                  A
                </div>
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-green-600 leading-none">
                  Ancient Ayurveda
                </span>
                <span className="text-xs text-gray-500 leading-none hidden sm:block">
                  Dr. Niyati Patel
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`font-medium transition-colors focus:outline-none ${
                    isActivePage(item.href)
                      ? "text-green-600 border-b-2 border-green-600 pb-1"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+447778147840"
                className="text-green-600 hover:text-green-700 hover:scale-110 transition-all duration-200 focus:outline-none"
              >
                <Phone className="w-5 h-5" />
              </a>
              <Link to="/contact" onClick={handleLinkClick}>
                <Button
                  size="md"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-200"
              style={{
                outline: "none !important",
                border: "none !important",
                boxShadow: "none !important",
                WebkitTapHighlightColor: "transparent",
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
                background: "transparent",
                WebkitFocusRingColor: "transparent",
              }}
              onFocus={(e) => e.target.blur()}
              onTouchStart={(e) => e.preventDefault()}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleMenuToggle();
              }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      handleLinkClick();
                      setIsMenuOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:scale-105 focus:outline-none ${
                      isActivePage(item.href)
                        ? "text-green-600 bg-green-50"
                        : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
