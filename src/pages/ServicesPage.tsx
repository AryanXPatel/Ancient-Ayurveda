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
  RotateCcw,
  Gift,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  Star,
} from "lucide-react";

export const ServicesPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const serviceCategories = [
    {
      id: "consultations",
      title: "Ayurvedic Consultations",
      subtitle: "Personalized assessment and treatment planning",
      icon: <UserCircle className="w-12 h-12" />,
      description:
        "Traditional pulse diagnosis and constitution analysis to create your personalized wellness plan",
      services: [
        {
          name: "Initial Consultation",
          price: "£180",
          duration: "90 minutes",
          features: [
            "Comprehensive health history review",
            "Traditional pulse diagnosis (Nadi Pariksha)",
            "Constitution analysis (Prakriti assessment)",
            "Lifestyle and dietary recommendations",
            "Personalized treatment plan",
            "Follow-up guidance included",
          ],
        },
        {
          name: "Follow-up Consultation",
          price: "£90",
          duration: "45 minutes",
          features: [
            "Progress assessment and review",
            "Treatment plan adjustments",
            "Additional guidance and support",
            "Ongoing wellness coaching",
            "Seasonal health recommendations",
          ],
        },
      ],
      perfectFor:
        "Anyone seeking to understand their unique constitution and receive personalized wellness guidance based on traditional Ayurvedic principles.",
    },
    {
      id: "massage-therapy",
      title: "Therapeutic Massage Treatments",
      subtitle: "Traditional healing touch for body and mind",
      icon: <Hand className="w-12 h-12" />,
      description:
        "Authentic Ayurvedic massage techniques using traditional oils and methods for deep healing",
      services: [
        {
          name: "Abhyanga - Full Body Oil Massage",
          price: "£120",
          duration: "75 minutes",
          features: [
            "Warm herbal oil massage",
            "Improves circulation and flexibility",
            "Deep relaxation and stress relief",
            "Detoxification support",
            "Skin nourishment and rejuvenation",
            "Post-treatment herbal tea",
          ],
        },
        {
          name: "Shirodhara - Oil Pouring Therapy",
          price: "£150",
          duration: "60 minutes",
          features: [
            "Continuous warm oil flow on forehead",
            "Deeply calming for nervous system",
            "Excellent for stress and anxiety",
            "Improves mental clarity",
            "Promotes restful sleep",
            "Includes gentle head massage",
          ],
        },
        {
          name: "Therapeutic Back & Shoulder Massage",
          price: "£85",
          duration: "45 minutes",
          features: [
            "Targeted relief for tension areas",
            "Traditional Ayurvedic techniques",
            "Herbal oil therapy",
            "Pain and stiffness reduction",
            "Improved mobility",
          ],
        },
      ],
      perfectFor:
        "Those seeking deep relaxation, stress relief, pain management, or wanting to experience authentic Ayurvedic healing touch.",
    },
    {
      id: "facial-treatments",
      title: "Ayurvedic Facial Treatments",
      subtitle: "Natural beauty and skin rejuvenation",
      icon: <Sparkles className="w-12 h-12" />,
      description:
        "Traditional face treatments using natural herbs and oils for glowing, healthy skin",
      services: [
        {
          name: "Ayurvedic Rejuvenating Facial",
          price: "£110",
          duration: "75 minutes",
          features: [
            "Natural herb and oil treatment",
            "Deep cleansing and exfoliation",
            "Face massage with marma points",
            "Anti-aging and skin brightening",
            "Customized for your skin type",
            "Relaxing and rejuvenating",
          ],
        },
        {
          name: "Mukha Lepam - Herbal Face Pack",
          price: "£85",
          duration: "60 minutes",
          features: [
            "Traditional herbal face mask",
            "Addresses specific skin concerns",
            "Natural ingredients only",
            "Suitable for sensitive skin",
            "Immediate glow and freshness",
          ],
        },
      ],
      perfectFor:
        "Anyone wanting natural, chemical-free skincare that addresses skin concerns while providing deep relaxation.",
    },
    {
      id: "pregnancy-care",
      title: "Pregnancy & Postnatal Care",
      subtitle: "Specialized support for mothers and babies",
      icon: <Heart className="w-12 h-12" />,
      description:
        "Gentle, safe treatments designed specifically for pregnancy wellness and postpartum recovery",
      services: [
        {
          name: "Prenatal Massage",
          price: "£100",
          duration: "60 minutes",
          features: [
            "Safe pregnancy massage techniques",
            "Reduces pregnancy discomfort",
            "Improves circulation and mobility",
            "Stress and anxiety relief",
            "Supports healthy pregnancy",
            "Preparation for childbirth",
          ],
        },
        {
          name: "Postnatal Recovery Treatment",
          price: "£120",
          duration: "75 minutes",
          features: [
            "Postpartum healing support",
            "Hormone balance assistance",
            "Energy restoration",
            "Emotional wellness support",
            "Physical recovery acceleration",
            "Breastfeeding support guidance",
          ],
        },
        {
          name: "Garbhasanskar Consultation",
          price: "£150",
          duration: "90 minutes",
          features: [
            "Traditional prenatal wellness program",
            "Mental and emotional preparation",
            "Nutrition and lifestyle guidance",
            "Partner involvement and education",
            "Spiritual and cultural practices",
            "Ongoing support throughout pregnancy",
          ],
        },
      ],
      perfectFor:
        "Expecting mothers and new mothers seeking natural, traditional support for a healthy pregnancy and smooth recovery.",
    },
    {
      id: "detox-programs",
      title: "Panchakarma Detox Programs",
      subtitle: "Traditional cleansing and rejuvenation",
      icon: <RotateCcw className="w-12 h-12" />,
      description:
        "Comprehensive detoxification programs based on ancient Panchakarma principles",
      services: [
        {
          name: "Mini Panchakarma (3-day program)",
          price: "£450",
          duration: "3 days",
          features: [
            "Initial consultation and assessment",
            "Daily oil treatments",
            "Detoxification therapies",
            "Specialized diet plan",
            "Herbal support supplements",
            "Home care instructions",
          ],
        },
        {
          name: "Complete Panchakarma (7-day program)",
          price: "£950",
          duration: "7 days",
          features: [
            "Comprehensive detox protocol",
            "Multiple therapeutic treatments",
            "Supervised dietary cleansing",
            "Mental and emotional cleansing",
            "Energy restoration and rejuvenation",
            "Long-term wellness planning",
          ],
        },
      ],
      perfectFor:
        "Those wanting deep cleansing, those with chronic conditions, or anyone seeking comprehensive wellness renewal.",
    },
    {
      id: "wellness-packages",
      title: "Wellness Packages",
      subtitle: "Comprehensive care programs",
      icon: <Gift className="w-12 h-12" />,
      description:
        "Specially designed packages combining multiple treatments for optimal wellness outcomes",
      services: [
        {
          name: "Stress Relief Package",
          price: "£350",
          duration: "3 sessions",
          features: [
            "Initial consultation",
            "2 therapeutic massage sessions",
            "Stress management guidance",
            "Relaxation techniques training",
            "Herbal support recommendations",
          ],
        },
        {
          name: "Women's Wellness Package",
          price: "£500",
          duration: "4 sessions",
          features: [
            "Hormonal balance consultation",
            "2 therapeutic treatments",
            "Ayurvedic facial treatment",
            "Nutritional guidance",
            "Lifestyle coaching",
          ],
        },
      ],
      perfectFor:
        "Those wanting comprehensive wellness support with multiple treatments at a discounted rate.",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Clean */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Ayurvedic Services in North West London
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience authentic traditional healing with Dr. Niyati Patel's
              personalized treatments, brought directly to your home
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <Button
                  size="lg"
                  variant="primary"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Service
                </Button>
              </Link>
              <a href="tel:+447778147840">
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  Call for Consultation
                </Button>
              </a>
            </div>
          </div>

          {/* Service Categories - Clean */}
          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-sm p-8"
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4 text-green-600">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    {category.subtitle}
                  </p>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {category.services.map((service, index) => (
                    <Card key={index} className="p-6 card-hover">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {service.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">
                            {service.price}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{service.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-900 mb-3">
                          What's Included:
                        </h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <Link to="/contact" onClick={handleLinkClick}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full hover:scale-105 transition-transform duration-200"
                          >
                            Book This Treatment
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Perfect For Section */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Perfect for:
                  </h4>
                  <p className="text-gray-700">{category.perfectFor}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA - Clean */}
          <div className="text-center mt-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Experience Authentic Ayurvedic Care?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Choose from our comprehensive range of traditional treatments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center">
                    Book Your Treatment
                  </span>
                </button>
              </Link>
              <a
                href="https://wa.me/447778147840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center">
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
