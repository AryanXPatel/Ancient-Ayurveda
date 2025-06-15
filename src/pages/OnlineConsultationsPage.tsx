import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import {
  Globe,
  Clock,
  Heart,
  MessageCircle,
  Phone,
  Calendar,
  CheckCircle,
  Monitor,
  Wifi,
  Headphones,
  Video,
  Star,
  Shield,
  Award,
} from "lucide-react";

export const OnlineConsultationsPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const consultationTypes = [
    {
      title: "Initial Online Consultation",
      price: "£150",
      duration: "90 minutes",
      description:
        "Comprehensive virtual assessment with personalized treatment plan",
      features: [
        "Detailed health history review via secure video call",
        "Traditional constitution analysis",
        "Guided self-pulse reading instruction",
        "Personalized diet and lifestyle recommendations",
        "Herbal medicine prescription with home delivery",
        "Follow-up email summary with treatment plan",
        "One week email support included",
      ],
    },
    {
      title: "Follow-up Online Consultation",
      price: "£75",
      duration: "45 minutes",
      description: "Progress review and treatment adjustments via video call",
      features: [
        "Progress assessment and review",
        "Treatment plan modifications",
        "New concerns or questions addressed",
        "Updated herbal recommendations",
        "Continued lifestyle guidance",
        "Email summary of session",
      ],
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Book Your Session",
      description:
        "Schedule your preferred time slot through our contact form. Choose from initial consultation (90 mins) or follow-up (45 mins).",
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      step: 2,
      title: "Pre-Consultation Preparation",
      description:
        "Receive a detailed health questionnaire and video call link. Complete the forms to maximize our consultation time.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      step: 3,
      title: "Secure Video Consultation",
      description:
        "Join the private video call with Dr. Niyati for your comprehensive Ayurvedic assessment and consultation.",
      icon: <Video className="w-8 h-8" />,
    },
    {
      step: 4,
      title: "Personalized Treatment Plan",
      description:
        "Receive your customized treatment plan via email, including diet recommendations, lifestyle guidance, and herbal prescriptions.",
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Accessible Anywhere in the UK",
      description:
        "Get expert Ayurvedic care regardless of your location. Perfect for clients outside London or with busy schedules.",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Flexible Scheduling",
      description:
        "Evening and weekend appointments available. No travel time means more convenient scheduling options.",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Same Quality Assessment",
      description:
        "Traditional constitution analysis, health assessment, and personalized recommendations - all delivered online.",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Secure & Private",
      description:
        "GDPR-compliant video consultations with encrypted connections for complete privacy and confidentiality.",
    },
  ];

  const techRequirements = [
    {
      icon: <Monitor className="w-8 h-8" />,
      item: "Device",
      description:
        "Computer, tablet, or smartphone with camera and microphone",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      item: "Internet",
      description:
        "Stable broadband connection (minimum 1 Mbps upload/download)",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      item: "Audio/Video",
      description: "Working camera and microphone (headphones recommended)",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      item: "Platform",
      description: "Zoom or Google Meet (links provided before session)",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Manchester",
      content:
        "The online consultation was just as thorough as an in-person visit. Dr. Niyati's guidance has been life-changing for my digestive health.",
      rating: 5,
    },
    {
      name: "James L.",
      location: "Edinburgh",
      content:
        "Being able to access authentic Ayurvedic care from Scotland is amazing. The video quality was excellent and I felt very comfortable.",
      rating: 5,
    },
    {
      name: "Emma R.",
      location: "Birmingham",
      content:
        "Perfect for my busy schedule. Dr. Niyati explained everything clearly and the follow-up support has been excellent.",
      rating: 5,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeInDown">
            <h1 className="text-hero mb-6">Online Ayurvedic Consultations</h1>
            <p className="text-body-large text-gray-600 max-w-4xl mx-auto mb-8">
              Experience authentic Ayurvedic healing from the comfort of your home.
              Dr. Niyati Patel brings qualified expertise directly to you via secure
              video consultations, available anywhere in the UK.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <Button size="lg" variant="primary" className="text-button-large">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online Consultation
                </Button>
              </Link>
              <a
                href="https://wa.me/447778147840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="text-button-large">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask Questions First
                </Button>
              </a>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fadeInLeft">
              <h2 className="text-display mb-6">
                Why Choose Online Consultations?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">{benefit.icon}</div>
                    <div>
                      <h3 className="text-h3 mb-2">{benefit.title}</h3>
                      <p className="text-body text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fadeInRight">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8">
                <h3 className="text-h2 mb-6 text-center">
                  What Makes Our Online Consultations Special?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Award className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-body text-gray-700">
                      BAMS qualified physician with 15+ years experience
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-body text-gray-700">
                      Traditional pulse reading instruction included
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-body text-gray-700">
                      Herbal medicines delivered to your door
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-body text-gray-700">
                      Detailed follow-up support via email
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-body text-gray-700">
                      Same comprehensive assessment as in-person visits
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Types */}
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-display text-center mb-12">
              Online Consultation Options
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {consultationTypes.map((consultation, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-h2 mb-4">{consultation.title}</h3>
                    <div className="flex justify-center items-center space-x-6 mb-4">
                      <span className="text-h1 text-green-600 font-bold">
                        {consultation.price}
                      </span>
                      <span className="flex items-center text-body-small text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {consultation.duration}
                      </span>
                    </div>
                    <p className="text-body text-gray-700">
                      {consultation.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-h3 mb-4">Session Includes:</h4>
                    <ul className="space-y-3">
                      {consultation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-body-small text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" onClick={handleLinkClick}>
                    <Button variant="outline" className="w-full text-button">
                      Book This Consultation
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-display text-center mb-12">
              How Online Consultations Work
            </h2>
            <div className="space-y-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                    <span className="text-green-600 font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <div className="text-green-600 mr-3">{step.icon}</div>
                      <h3 className="text-h2">{step.title}</h3>
                    </div>
                    <p className="text-body text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Requirements */}
          <Card className="p-8 mb-16 animate-fadeInUp">
            <h2 className="text-h1 text-center mb-8">
              Technology Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techRequirements.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 text-green-600">
                    {tech.icon}
                  </div>
                  <h3 className="text-h3 mb-2">{tech.item}</h3>
                  <p className="text-body-small text-gray-600">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-body text-gray-600 mb-4">
                <strong>Platform:</strong> Secure video consultation via Zoom or
                Google Meet
              </p>
              <p className="text-body-small text-gray-500">
                Technical support available before sessions if needed
              </p>
            </div>
          </Card>

          {/* Testimonials */}
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-display text-center mb-12">
              What Our Online Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 card-hover">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-body text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="text-body-small">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-green-600">{testimonial.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="p-8 mb-16 animate-fadeInUp">
            <h2 className="text-h1 text-center mb-8">
              Common Questions About Online Consultations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-h3 mb-2">
                    How effective are online consultations?
                  </h3>
                  <p className="text-body-small text-gray-600">
                    Online consultations are highly effective for Ayurvedic
                    assessment. Dr. Niyati can perform constitution analysis,
                    provide dietary guidance, and prescribe treatments via video
                    call.
                  </p>
                </div>
                <div>
                  <h3 className="text-h3 mb-2">
                    Can I get herbal medicines online?
                  </h3>
                  <p className="text-body-small text-gray-600">
                    Yes, Dr. Niyati works with reputable suppliers who can ship
                    high-quality Ayurvedic herbs directly to your address
                    throughout the UK.
                  </p>
                </div>
                <div>
                  <h3 className="text-h3 mb-2">
                    What about pulse diagnosis?
                  </h3>
                  <p className="text-body-small text-gray-600">
                    Dr. Niyati will teach you basic pulse reading techniques
                    during your session, and uses detailed questionnaires to
                    gather comprehensive health information.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-h3 mb-2">
                    Is my consultation secure and private?
                  </h3>
                  <p className="text-body-small text-gray-600">
                    Yes, all consultations use encrypted video platforms and are
                    fully GDPR compliant. Your health information is kept strictly
                    confidential.
                  </p>
                </div>
                <div>
                  <h3 className="text-h3 mb-2">
                    What if I have technical difficulties?
                  </h3>
                  <p className="text-body-small text-gray-600">
                    Technical support is available before your session. If
                    needed, we can reschedule without penalty due to technical
                    difficulties.
                  </p>
                </div>
                <div>
                  <h3 className="text-h3 mb-2">
                    Can I switch to home visits later?
                  </h3>
                  <p className="text-body-small text-gray-600">
                    Absolutely! Many clients start online and then book home
                    visits for specific treatments. Your consultation history
                    carries forward seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8 sm:p-12 animate-fadeInUp">
            <h2 className="text-h1 mb-4 text-white">
              Ready to Start Your Online Wellness Journey?
            </h2>
            <p className="text-body-large text-green-50 mb-8 max-w-3xl mx-auto">
              Experience authentic Ayurvedic consultation from anywhere in the UK
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center text-button-large">
                    Book Online Consultation
                  </span>
                </button>
              </Link>
              <a href="tel:+447778147840">
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center text-button-large">
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Discuss: +44 7778 147840
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
