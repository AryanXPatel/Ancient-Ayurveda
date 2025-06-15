import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ancient Ayurveda
            </h3>
            <p className="text-gray-400 mb-4">
              Authentic Ayurvedic healing brought to your door. Traditional
              wellness for modern lives with Dr. Niyati Patel.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Qualified • Experienced • Trusted
            </p>

            {/* Quick Contact */}
            <div className="space-y-2">
              <a
                href="tel:+447778147840"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+44 7778 147840</span>
              </a>
              <a
                href="https://wa.me/447778147840"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="hover:text-white transition-colors"
                >
                  About Dr. Niyati Patel
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={handleLinkClick}
                  className="hover:text-white transition-colors"
                >
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/online-consultations"
                  onClick={handleLinkClick}
                  className="hover:text-white transition-colors"
                >
                  Online Consultations
                </Link>
              </li>
              <li>
                <Link
                  to="/garbhasanskar"
                  onClick={handleLinkClick}
                  className="hover:text-white transition-colors"
                >
                  Garbhasanskar Program
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={handleLinkClick} className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="hover:text-white transition-colors"
                >
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Heart className="w-3 h-3 mr-2 text-pink-400" />
                <span className="text-sm">Ayurvedic Consultations</span>
              </li>
              <li className="flex items-center">
                <Heart className="w-3 h-3 mr-2 text-pink-400" />
                <span className="text-sm">Therapeutic Massages</span>
              </li>
              <li className="flex items-center">
                <Heart className="w-3 h-3 mr-2 text-pink-400" />
                <span className="text-sm">Facial Treatments</span>
              </li>
              <li className="flex items-center">
                <Heart className="w-3 h-3 mr-2 text-pink-400" />
                <span className="text-sm">Pregnancy Care</span>
              </li>
              <li className="flex items-center">
                <Heart className="w-3 h-3 mr-2 text-pink-400" />
                <span className="text-sm">Panchakarma Programs</span>
              </li>
              <li className="flex items-center">
                <Heart className="w-3 h-3 mr-2 text-pink-400" />
                <span className="text-sm">Wellness Packages</span>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">
                <strong>Service Areas:</strong> London, Birmingham, Manchester,
                Leeds, Bristol & UK-wide online
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Phone & WhatsApp
                  </p>
                  <p className="text-sm">+44 7778 147840</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm">info@ancientayurveda.co.uk</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Based In</p>
                  <p className="text-sm">Neasden, North West London</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Response Time</p>
                  <p className="text-sm">Within 2 hours</p>
                  <p className="text-xs text-gray-500">Mon-Fri: 9AM-7PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 Ancient Ayurveda. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Dr. Niyati Patel - Qualified Ayurvedic Physician (BAMS) • 15+ Years
                Experience
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link
                to="/privacy"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <a
                href="mailto:info@ancientayurveda.co.uk"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Professional Inquiries
              </a>
            </div>
          </div>

          {/* Trust & Credibility Footer */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              ✅ Qualified Medical Professional • ✅ Traditional Methods • ✅ Modern
              Convenience • ✅ 500+ Satisfied Clients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
