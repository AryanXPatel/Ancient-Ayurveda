import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import {
  Monitor,
  Calendar,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  MessageCircle,
  Globe,
  Video,
  Users,
  Heart,
  BookOpen,
  Star,
} from "lucide-react";

export const OnlineConsultationsPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Convenient & Flexible",
      description:
        "Schedule consultations that fit your busy lifestyle, from anywhere in the UK",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Safe & Private",
      description:
        "Secure video calls with complete confidentiality and privacy protection",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "UK-Wide Access",
      description:
        "Access authentic Ayurvedic care regardless of your location across the UK",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Same Quality Care",
      description:
        "Receive the same comprehensive assessment and personalized treatment plans",
    },
  ];

  const consultationTypes = [
    {
      title: "Initial Online Consultation",
      price: "£180",
      duration: "90 minutes",
      features: [
        "Comprehensive health history review",
        "Traditional assessment methods adapted for online",
        "Constitution analysis and lifestyle evaluation",
        "Personalized diet and lifestyle recommendations",
        "Custom treatment plan creation",
        "Follow-up guidance and support",
        "Digital resources and handouts provided",
      ],
      bestFor: "First-time clients wanting comprehensive Ayurvedic assessment",
    },
    {
      title: "Follow-up Online Consultation",
      price: "£90",
      duration: "45 minutes",
      features: [
        "Progress review and assessment",
        "Treatment plan adjustments",
        "Ongoing wellness coaching",
        "Seasonal health recommendations",
        "Questions and concerns addressed",
        "Updated guidance based on your progress",
      ],
      bestFor: "Existing clients for ongoing support and plan refinements",
    },
    {
      title: "Specialized Online Sessions",
      price: "£120",
      duration: "60 minutes",
      features: [
        "Pregnancy wellness guidance (Garbhasanskar)",
        "Women's health and hormonal balance",
        "Stress management and mental wellness",
        "Digestive health optimization",
        "Weight management support",
        "Skin and beauty consultations",
      ],
      bestFor: "Targeted support for specific health concerns or life stages",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Book Your Session",
      description:
        "Schedule online via our contact form, WhatsApp, or phone call",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Receive Confirmation",
      description: "Get secure video link and pre-consultation questionnaire",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Prepare for Your Call",
      description:
        "Complete health questionnaire and ensure good internet connection",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Join Your Consultation",
      description: "Connect via secure video call at your scheduled time",
      icon: <Video className="w-6 h-6" />,
    },
    {
      step: "5",
      title: "Receive Your Plan",
      description: "Get personalized recommendations and follow-up materials",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Manchester",
      content:
        "The online consultation was incredibly thorough. Dr. Niyati's guidance has been life-changing for my PCOS management.",
      rating: 5,
    },
    {
      name: "James T.",
      location: "Birmingham",
      content:
        "So convenient! I received the same quality care as an in-person visit, with detailed recommendations perfectly tailored to my needs.",
      rating: 5,
    },
    {
      name: "Priya K.",
      location: "Edinburgh",
      content:
        "Living in Scotland, online consultations make authentic Ayurveda accessible. Dr. Niyati is knowledgeable and caring.",
      rating: 5,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Clean */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Online Ayurvedic Consultations Across the UK
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience authentic Ayurvedic care from the comfort of your home
              with Dr. Niyati Patel's comprehensive online consultations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <Button
                  size="lg"
                  variant="primary"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Monitor className="w-5 h-5 mr-2" />
                  Book Online Consultation
                </Button>
              </Link>
              <a href="tel:+447778147840">
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Discuss: +44 7778 147840
                </Button>
              </a>
            </div>
          </div>

          {/* Benefits Section - Clean */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose Online Consultations?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center card-hover">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Consultation Types - Clean */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Online Consultation Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <Card key={index} className="p-6 card-hover">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {consultation.title}
                    </h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {consultation.price}
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{consultation.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {consultation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Best for:</strong> {consultation.bestFor}
                    </p>
                  </div>

                  <Link to="/contact" onClick={handleLinkClick}>
                    <Button
                      variant="outline"
                      className="w-full hover:scale-105 transition-transform duration-200"
                    >
                      Book This Consultation
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works - Clean */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How Online Consultations Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-600">{step.icon}</div>
                  </div>
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Requirements - Clean */}
          <Card className="p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Technical Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What You'll Need:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Stable internet connection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Computer, tablet, or smartphone with camera
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Quiet, private space for consultation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Good lighting for video quality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Headphones or earbuds (recommended)
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  We Provide:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Secure, HIPAA-compliant video platform
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Pre-consultation questionnaire
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Digital consultation notes and plan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Follow-up resources and materials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Technical support if needed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Testimonials - Clean */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Our Online Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 card-hover">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section - Clean */}
          <Card className="p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Online Consultation FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Are online consultations as effective as in-person visits?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yes! Online consultations allow for comprehensive health
                    assessment, constitution analysis, and personalized
                    treatment planning. While physical treatments require
                    in-person visits, the consultation and guidance aspects are
                    equally effective online.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What if I have technical difficulties?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We provide technical support and backup options. If
                    connection issues occur, we can switch to phone consultation
                    or reschedule without penalty.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How do you assess my constitution online?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Through detailed questionnaires, visual assessment, voice
                    analysis, and comprehensive health history. While we can't
                    do pulse diagnosis online, other traditional assessment
                    methods provide accurate insights.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Can I get herbal recommendations online?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yes, Dr. Niyati can recommend suitable herbs and supplements
                    based on your assessment. We'll provide guidance on where to
                    source quality products and proper usage instructions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Is my consultation private and secure?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Absolutely. We use encrypted, HIPAA-compliant video
                    platforms that ensure complete privacy and confidentiality
                    of your health information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What happens after my consultation?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    You'll receive a detailed written plan with dietary
                    recommendations, lifestyle guidance, and treatment
                    suggestions. Follow-up support is available via email or
                    scheduled follow-up consultations.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Call to Action - Clean */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience Online Ayurvedic Care?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Join clients across the UK who have transformed their health
              through our convenient online consultations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-blue-500 to-indigo-500 group-hover:from-blue-500 group-hover:to-indigo-500 hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-blue-600 flex items-center">
                    <Monitor className="w-5 h-5 mr-2" />
                    Book Online Consultation
                  </span>
                </button>
              </Link>
              <a
                href="https://wa.me/447778147840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-blue-500 to-indigo-500 group-hover:from-blue-500 group-hover:to-indigo-500 hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-blue-600 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Your Questions
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
