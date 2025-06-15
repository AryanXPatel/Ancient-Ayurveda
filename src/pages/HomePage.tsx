import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import {
  GraduationCap,
  Star,
  Award,
  Car,
  UserCircle,
  Hand,
  Heart,
  Phone,
} from "lucide-react";

export const HomePage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const services = [
    {
      id: "consultations",
      title: "Ayurvedic Consultations in Neasden & London",
      icon: <UserCircle className="w-8 h-8" />,
      price: "Initial: £180 | Follow-up: £90",
      duration: "90 min | 45 min",
      features: [
        "Pulse diagnosis",
        "Constitution analysis",
        "Personalized plan",
        "Lifestyle guidance",
      ],
    },
    {
      id: "massages",
      title: "Therapeutic Ayurvedic Massages",
      icon: <Hand className="w-8 h-8" />,
      price: "From £85",
      duration: "60-90 min",
      features: [
        "Traditional oil massage",
        "Stress relief",
        "Pain management",
        "Detoxification",
      ],
    },
    {
      id: "pregnancy",
      title: "Pregnancy & Postnatal Care",
      icon: <Heart className="w-8 h-8" />,
      price: "From £100",
      duration: "60-90 min",
      features: [
        "Prenatal massage",
        "Postnatal recovery",
        "Hormonal balance",
        "Garbhasanskar program",
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-hero animate-fadeInDown mb-6">
                Authentic Ayurvedic Healing Brought to Your Door
              </h1>

              {/* Local Service Area Highlight */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-2xl mx-auto animate-fadeIn">
                <p className="text-body-large font-semibold text-green-700">
                  📍 Serving Neasden, Wembley, Harrow, Kingsbury, and nearby
                  areas
                </p>
                <p className="text-body-small text-gray-600">
                  Home visits available with no travel charge
                </p>
              </div>

              <p className="text-body-large text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed animate-fadeInUp">
                Experience traditional wellness with{" "}
                <span className="text-doctor-name">Dr. Niyati Patel</span>, a
                qualified Ayurvedic physician with over 15 years of practice.
                Specializing in{" "}
                <strong>
                  women's health, pregnancy care, hormonal balance, and
                  postnatal support
                </strong>
                .
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fadeInUp">
                <Link to="/contact" onClick={handleLinkClick}>
                  <Button
                    size="lg"
                    variant="primary"
                    className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 text-button-large"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Book Free Discovery Call
                  </Button>
                </Link>
                <a href="tel:+447778147840" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full hover:scale-105 transition-transform duration-200 text-button-large"
                  >
                    📞 Quick Inquiry? Tap to Call
                  </Button>
                </a>
              </div>

              {/* Google Reviews Badge */}
              <div className="mb-12 animate-fadeIn">
                <div className="flex justify-center items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current animate-fadeIn"
                    />
                  ))}
                </div>
                <p className="text-body-small text-gray-600">
                  Rated 4.9/5 by our clients • Trusted by 500+ families in North
                  West London
                </p>
              </div>
            </div>

            {/* Trust Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-stagger">
              <div className="flex flex-col items-center animate-fadeInUp">
                <GraduationCap className="w-8 h-8 text-green-600 mb-2" />
                <span className="text-body-small font-medium">
                  Qualified Ayurvedic Doctor
                </span>
              </div>
              <div className="flex flex-col items-center animate-fadeInUp">
                <Star className="w-8 h-8 text-yellow-600 mb-2" />
                <span className="text-body-small font-medium">
                  500+ Satisfied Clients
                </span>
              </div>
              <div className="flex flex-col items-center animate-fadeInUp">
                <Award className="w-8 h-8 text-green-600 mb-2" />
                <span className="text-body-small font-medium">
                  15+ Years Experience
                </span>
              </div>
              <div className="flex flex-col items-center animate-fadeInUp">
                <Car className="w-8 h-8 text-yellow-600 mb-2" />
                <span className="text-body-small font-medium">
                  North West London Home Visits
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-display mb-4">
                Our Most Popular Services
              </h2>
              <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
                Comprehensive Ayurvedic care tailored to your individual needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  className="p-6 text-center card-hover animate-fadeInUp"
                >
                  <div className="flex justify-center mb-4 text-green-600">
                    {service.icon}
                  </div>
                  <h3 className="text-h2 mb-2">
                    {service.title}
                  </h3>
                  <div className="mb-4">
                    <p className="text-xl font-bold text-green-600 mb-1">
                      {service.price}
                    </p>
                    <p className="text-body-small text-gray-600">{service.duration}</p>
                  </div>
                  <ul className="text-left space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-body-small text-gray-600"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" onClick={handleLinkClick}>
                    <Button
                      variant="outline"
                      className="w-full hover:scale-105 transition-transform duration-200 text-button"
                    >
                      Book Now
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>

            <div className="text-center animate-fadeInUp">
              <Link to="/services" onClick={handleLinkClick}>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-200 text-button-large"
                >
                  View All Services & Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-h1 mb-4 text-white animate-fadeInDown">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p
              className="text-body-large mb-8 text-green-50 animate-fadeIn"
            >
              Join hundreds of satisfied clients across North West London
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center text-button-large">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Free Discovery Call
                  </span>
                </button>
              </Link>
              <a href="tel:+447778147840">
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center text-button-large">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +44 7778 147840
                  </span>
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
