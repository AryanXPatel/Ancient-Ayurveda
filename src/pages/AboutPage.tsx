import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import {
  GraduationCap,
  Award,
  Heart,
  Users,
  BookOpen,
  Star,
  CheckCircle,
} from "lucide-react";

export const AboutPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const specializations = [
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: "Women's Health & Hormonal Balance",
      description:
        "Specialized care for menstrual health, PCOS, menopause, and reproductive wellness",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Pregnancy & Postnatal Care (Garbhasanskar)",
      description:
        "Traditional prenatal wisdom and postnatal recovery support for mothers and babies",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      title: "Stress & Digestive Health",
      description:
        "Holistic approaches to manage stress, anxiety, and digestive disorders",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Chronic Conditions Management",
      description:
        "Long-term support for arthritis, diabetes, skin conditions, and autoimmune disorders",
    },
  ];

  const qualifications = [
    "BAMS (Bachelor of Ayurvedic Medicine and Surgery)",
    "15+ Years Clinical Experience",
    "Specialized training in Women's Health",
    "Traditional Pulse Diagnosis Certification",
    "Panchakarma Therapy Training",
    "Pregnancy & Postnatal Care Specialization",
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "500+ Satisfied Clients",
      description: "Across London and UK-wide online consultations",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: "15+ Years Experience",
      description: "Practicing traditional Ayurvedic medicine",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Women's Health Expert",
      description: "Specialized focus on hormonal balance and pregnancy care",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeInDown">
            <h1 className="text-hero mb-6">Meet Dr. Niyati Patel</h1>
            <p className="text-body-large text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A qualified BAMS Ayurvedic physician with over 15 years of
              experience, specializing in women's health, pregnancy care, and
              holistic wellness. Bringing authentic traditional healing to
              modern lives across London and beyond.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-start animate-fadeInLeft">
              <div className="w-full max-w-md h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-doctor-name">Dr. Niyati Patel</p>
                  <p className="text-body-small text-gray-500">
                    BAMS, Ayurvedic Physician
                  </p>
                  <p className="text-body-small text-gray-500">
                    15+ Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Background */}
            <div className="animate-fadeInRight">
              <h2 className="text-display mb-6">Professional Background</h2>
              <div className="space-y-6">
                <p className="text-body text-gray-700 leading-relaxed">
                  Dr. Niyati Patel is a qualified Ayurvedic physician holding a
                  BAMS degree (Bachelor of Ayurvedic Medicine and Surgery) with
                  over 15 years of dedicated practice in traditional Indian
                  medicine.
                </p>
                <p className="text-body text-gray-700 leading-relaxed">
                  Her journey began with classical Ayurvedic training in India,
                  where she mastered ancient diagnostic techniques including
                  pulse diagnosis, constitution analysis, and personalized
                  treatment protocols.
                </p>
                <p className="text-body text-gray-700 leading-relaxed">
                  Now based in London, Dr. Patel combines traditional wisdom
                  with modern convenience, offering home visits and online
                  consultations to make authentic Ayurvedic care accessible to
                  busy modern lives.
                </p>

                {/* Qualifications */}
                <div className="bg-green-50 rounded-lg p-6 mt-8">
                  <h3 className="text-h2 mb-4">
                    Qualifications & Certifications
                  </h3>
                  <ul className="space-y-2">
                    {qualifications.map((qualification, index) => (
                      <li
                        key={index}
                        className="flex items-center text-body-small text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                        {qualification}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-16 animate-fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-display mb-4">Areas of Specialization</h2>
              <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
                Dr. Patel's expertise spans multiple areas of Ayurvedic
                medicine, with special focus on women's health and family
                wellness
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializations.map((spec, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{spec.icon}</div>
                    <div>
                      <h3 className="text-h3 mb-2">{spec.title}</h3>
                      <p className="text-body-small text-gray-600">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16 animate-fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-display mb-4">Recognition & Achievements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-h3 mb-2">{achievement.title}</h3>
                  <p className="text-body-small text-gray-600">
                    {achievement.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mb-16 animate-fadeInUp">
            <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50">
              <div className="text-center">
                <h2 className="text-display mb-6">Dr. Patel's Philosophy</h2>
                <blockquote className="text-body-large text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
                  "Ayurveda teaches us that true health is not just the absence
                  of disease, but a state of complete physical, mental, and
                  spiritual well-being. My approach focuses on treating the
                  person, not just the symptoms, using time-tested traditional
                  methods adapted for modern life."
                </blockquote>
                <cite className="text-doctor-name mt-4 block">
                  - Dr. Niyati Patel, BAMS
                </cite>
              </div>
            </Card>
          </div>

          {/* Why Choose Dr. Patel */}
          <div className="mb-16 animate-fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-display mb-4">Why Choose Dr. Patel?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-h3 mb-2">Qualified & Experienced</h3>
                  <p className="text-body-small text-gray-600">
                    BAMS qualified with 15+ years of clinical experience in
                    traditional Ayurvedic medicine
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-h3 mb-2">Personalized Care</h3>
                  <p className="text-body-small text-gray-600">
                    Every treatment plan is tailored to your unique constitution
                    and health needs
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-h3 mb-2">Women's Health Expert</h3>
                  <p className="text-body-small text-gray-600">
                    Specialized expertise in women's health, pregnancy care, and
                    hormonal balance
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-green-50 rounded-lg p-8 sm:p-12 animate-fadeInUp">
            <h2 className="text-h1 mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-body-large text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience the difference that qualified, traditional Ayurvedic
              care can make in your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center text-button-large">
                    Book Your Consultation
                  </span>
                </button>
              </Link>
              <Link to="/services" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center text-button-large">
                    View All Services
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
