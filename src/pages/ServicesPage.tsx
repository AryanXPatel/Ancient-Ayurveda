import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import {
  UserCircle,
  Hand,
  Sparkles,
  Heart,
  Clock,
  Phone,
  CheckCircle,
} from "lucide-react";

export const ServicesPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const serviceCategories = [
    {
      id: "consultations",
      title: "Ayurvedic Consultations",
      description:
        "Comprehensive health assessments and personalized treatment plans",
      icon: <UserCircle className="w-8 h-8" />,
      services: [
        {
          name: "Initial Consultation",
          duration: "90 minutes",
          price: "£180",
          description:
            "Complete health assessment including pulse diagnosis, constitution analysis, and personalized treatment plan",
          features: [
            "Detailed health history review",
            "Traditional pulse diagnosis",
            "Constitution (Prakriti) analysis",
            "Current imbalance (Vikriti) assessment",
            "Personalized diet and lifestyle recommendations",
            "Herbal medicine prescription if needed",
            "Follow-up treatment plan",
          ],
        },
        {
          name: "Follow-up Consultation",
          duration: "45 minutes",
          price: "£90",
          description: "Progress review and treatment plan adjustments",
          features: [
            "Progress assessment",
            "Treatment plan modifications",
            "Herbal medicine adjustments",
            "Lifestyle guidance updates",
            "Q&A session",
          ],
        },
      ],
    },
    {
      id: "massages",
      title: "Therapeutic Massages",
      description:
        "Traditional Ayurvedic massage therapies for healing and relaxation",
      icon: <Hand className="w-8 h-8" />,
      services: [
        {
          name: "Abhyanga (Full Body Oil Massage)",
          duration: "60 minutes",
          price: "£85",
          description:
            "Traditional full-body oil massage for deep relaxation and detoxification",
          features: [
            "Warm herbal oil massage",
            "Improves circulation",
            "Relieves stress and tension",
            "Detoxifies the body",
            "Enhances skin health",
          ],
        },
        {
          name: "Pregnancy Massage",
          duration: "60 minutes",
          price: "£100",
          description: "Specialized massage for expecting mothers",
          features: [
            "Safe for all trimesters",
            "Reduces pregnancy discomfort",
            "Improves sleep quality",
            "Reduces swelling",
            "Prepares body for childbirth",
          ],
        },
      ],
    },
    {
      id: "facials",
      title: "Ayurvedic Facial Treatments",
      description:
        "Natural skincare treatments using traditional herbs and techniques",
      icon: <Sparkles className="w-8 h-8" />,
      services: [
        {
          name: "Mukhalepam (Herbal Facial)",
          duration: "75 minutes",
          price: "£75",
          description: "Traditional herbal facial for glowing, healthy skin",
          features: [
            "Customized herbal face pack",
            "Gentle cleansing and exfoliation",
            "Face and neck massage",
            "Natural ingredients only",
            "Suitable for all skin types",
          ],
        },
        {
          name: "Anti-Aging Facial",
          duration: "90 minutes",
          price: "£95",
          description:
            "Specialized treatment for mature skin using traditional anti-aging herbs",
          features: [
            "Age-defying herbal treatments",
            "Collagen-boosting ingredients",
            "Fine line reduction",
            "Skin brightening",
            "Long-lasting results",
          ],
        },
      ],
    },
    {
      id: "pregnancy",
      title: "Pregnancy & Postnatal Care",
      description:
        "Specialized care for mothers during pregnancy and after childbirth",
      icon: <Heart className="w-8 h-8" />,
      services: [
        {
          name: "Garbhasanskar Program",
          duration: "Monthly sessions",
          price: "£120/month",
          description:
            "Complete prenatal care program for mother and baby's wellbeing",
          features: [
            "Monthly consultations",
            "Pregnancy-safe treatments",
            "Nutritional guidance",
            "Stress management",
            "Birth preparation",
            "Postnatal recovery support",
          ],
        },
        {
          name: "Postnatal Recovery Package",
          duration: "6 sessions over 3 months",
          price: "£450",
          description: "Comprehensive recovery support for new mothers",
          features: [
            "Hormonal balance support",
            "Energy restoration",
            "Breastfeeding support",
            "Body recovery treatments",
            "Mental wellness support",
          ],
        },
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeInDown">
            <h1 className="text-hero mb-6">Comprehensive Ayurvedic Services</h1>
            <p className="text-body-large text-gray-600 max-w-4xl mx-auto mb-8">
              Experience authentic traditional healing with Dr. Niyati Patel's
              personalized treatments, brought directly to your home in North
              West London
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <Button
                  size="lg"
                  variant="primary"
                  className="text-button-large"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Service
                </Button>
              </Link>
              <a href="tel:+447778147840">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-button-large"
                >
                  Call for Consultation
                </Button>
              </a>
            </div>
          </div>

          {/* Service Categories */}
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.id} className="animate-fadeInUp">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4 text-green-600">
                    {category.icon}
                  </div>
                  <h2 className="text-display mb-4">{category.title}</h2>
                  <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {category.services.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className="p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-h2 mb-2">{service.name}</h3>
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-h3 text-green-600 font-bold">
                              {service.price}
                            </span>
                            <span className="flex items-center text-body-small text-gray-600">
                              <Clock className="w-4 h-4 mr-1" />
                              {service.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-body text-gray-700 mb-6">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-h3 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-body-small text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <Link to="/contact" onClick={handleLinkClick}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-button"
                          >
                            Book This Treatment
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Perfect For Section */}
                <div className="bg-green-50 rounded-lg p-6 animate-fadeInUp">
                  <h4 className="text-h3 mb-4">
                    {category.title} are Perfect for:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.id === "consultations" && (
                      <>
                        <p className="text-body-small text-gray-700">
                          • First-time Ayurveda clients
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Chronic health conditions
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Preventive health care
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Digestive issues
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Stress and anxiety
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Hormonal imbalances
                        </p>
                      </>
                    )}
                    {category.id === "massages" && (
                      <>
                        <p className="text-body-small text-gray-700">
                          • Stress relief and relaxation
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Muscle tension and pain
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Improving circulation
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Detoxification
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Pregnancy support
                        </p>
                        <p className="text-body-small text-gray-700">
                          • General wellness
                        </p>
                      </>
                    )}
                    {category.id === "facials" && (
                      <>
                        <p className="text-body-small text-gray-700">
                          • Natural skincare enthusiasts
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Sensitive skin conditions
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Anti-aging concerns
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Acne and blemishes
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Dull or tired-looking skin
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Chemical-free treatments
                        </p>
                      </>
                    )}
                    {category.id === "pregnancy" && (
                      <>
                        <p className="text-body-small text-gray-700">
                          • Expecting mothers
                        </p>
                        <p className="text-body-small text-gray-700">
                          • New mothers
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Pregnancy discomfort
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Postnatal recovery
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Breastfeeding support
                        </p>
                        <p className="text-body-small text-gray-700">
                          • Hormonal balance
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8 sm:p-12 animate-fadeInUp">
            <h2 className="text-h1 mb-4 text-white">
              Ready to Experience Authentic Ayurvedic Care?
            </h2>
            <p className="text-body-large text-green-50 mb-8 max-w-3xl mx-auto">
              Book your personalized consultation today and take the first step
              towards optimal health and wellness
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center text-button-large">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Your Consultation
                  </span>
                </button>
              </Link>
              <a
                href="https://wa.me/447778147840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center text-button-large">
                    WhatsApp for Questions
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
