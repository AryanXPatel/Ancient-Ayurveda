import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { PageTransition } from '../components/ui/PageTransition';
import { Home, Phone, MessageCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8 animate-fadeInDown">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 animate-fadeIn" style={{animationDelay: '0.2s'}}>
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 animate-fadeIn" style={{animationDelay: '0.3s'}}>
              Sorry, we couldn't find the page you're looking for. 
              Perhaps you'd like to visit our homepage or contact us directly?
            </p>
          </div>

          <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <Link to="/" onClick={handleLinkClick}>
              <Button size="lg" className="w-full hover:scale-105 transition-transform duration-200">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            
            <div className="grid grid-cols-2 gap-4">
              <a href="tel:+447778147840">
                <Button size="md" variant="outline" className="w-full hover:scale-105 transition-transform duration-200">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </a>
              <a href="https://wa.me/447778147840" target="_blank" rel="noopener noreferrer">
                <Button size="md" variant="outline" className="w-full hover:scale-105 transition-transform duration-200">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Looking for something specific?
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/services" className="text-green-600 hover:text-green-700">
                View Services
              </Link>
              <Link to="/about" className="text-green-600 hover:text-green-700">
                About Dr. Niyati
              </Link>
              <Link to="/contact" className="text-green-600 hover:text-green-700">
                Book Consultation
              </Link>
              <Link to="/faq" className="text-green-600 hover:text-green-700">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};