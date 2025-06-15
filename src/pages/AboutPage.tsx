import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import {
  GraduationCap,
  Award,
  Heart,
  Users,
  BookOpen,
  Globe,
  Star,
  CheckCircle,
} from "lucide-react";

export const AboutPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const specializations = [
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Women's Health & Hormonal Balance",
      description:
        "Specialized care for PCOS, menstrual disorders, fertility support, and menopause management",
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: "Pregnancy & Postnatal Care",
      description:
        "Comprehensive support throughout pregnancy, childbirth preparation, and postpartum recovery",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Digestive Disorders & Gut Health",
      description:
        "Natural solutions for IBS, acid reflux, bloating, and digestive imbalances",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      title: "Stress Management & Mental Wellness",
      description:
        "Ayurvedic approaches to anxiety, depression, sleep disorders, and emotional balance",
    },
    {
      icon: <Award className="w-6 h-6 text-green-500" />,
      title: "Weight Management & Metabolic Health",
      description:
        "Natural weight loss, diabetes support, and metabolic balance through Ayurveda",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Skin Conditions & Anti-Aging",
      description:
        "Natural treatments for acne, eczema, psoriasis, and age-related skin concerns",
    },
  ];

  const qualifications = [
    "Bachelor of Ayurvedic Medicine & Surgery (BAMS) - Gujarat Ayurved University, 2007",
    "15+ years clinical practice in traditional Ayurvedic medicine",
    "Specialized training in women's health and pregnancy care",
    "Advanced certification in Panchakarma detoxification therapies",
    "Continuing education in modern integrative wellness approaches",
    "Professional indemnity insurance and UK practice compliance",
  ];

  const experience = [
    {
      period: "2020-Present",
      role: "Independent Ayurvedic Practitioner",
      organization: "Ancient Ayurveda, London",
      description:
        "Providing personalized Ayurvedic consultations and treatments across North West London",
    },
    {
      period: "2015-2020",
      role: "Senior Ayurvedic Consultant",
      organization: "Wellness Center, Manchester",
      description:
        "Led comprehensive wellness programs and specialized in women's health treatments",
    },
    {
      period: "2010-2015",
      role: "Ayurvedic Physician",
      organization: "Holistic Health Center, Birmingham",
      description: "Specialized in women's health and pregnancy care",
    },
    {
      period: "2007-2010",
      role: "Junior Physician",
      organization: "Traditional Ayurveda Hospital, India",
      description:
        "Foundation training in classical Ayurvedic practice and patient care",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Clean */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Dr. Niyati Patel
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in authentic Ayurvedic wellness with over 15
              years of traditional healing experience
            </p>
          </div>

          {/* Main Content - Clean */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-96 h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center shadow-lg card-hover">
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-700 font-semibold">
                    Dr. Niyati Patel
                  </p>
                  <p className="text-gray-500 text-sm">
                    BAMS, Ayurvedic Physician
                  </p>
                  <p className="text-gray-500 text-sm">15+ Years Experience</p>
                </div>
              </div>
            </div>

            {/* Professional Background */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Qualified Ayurvedic Physician with Traditional Training
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dr. Niyati Patel completed her Bachelor of Ayurvedic Medicine
                  & Surgery (BAMS) from Gujarat Ayurved University in India in
                  2007. With over 15 years of clinical practice, she has helped
                  thousands of patients achieve optimal health through authentic
                  Ayurvedic principles.
                </p>
                <p>
                  After establishing her practice in India, Dr. Niyati moved to
                  the UK to bring authentic Ayurvedic healing to families
                  seeking natural, holistic approaches to wellness. She combines
                  traditional diagnostic methods with modern understanding of
                  health challenges.
                </p>
                <p>
                  Dr. Niyati specializes in women's health, pregnancy care,
                  digestive disorders, and stress-related conditions. Her
                  approach focuses on treating the root cause of health issues
                  rather than just managing symptoms.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/contact" onClick={handleLinkClick}>
                  <Button
                    size="lg"
                    variant="primary"
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Book Consultation with Dr. Niyati
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Education & Qualifications - Clean */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Education & Qualifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{qualification}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Areas of Expertise - Clean */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Areas of Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((spec, index) => (
                <Card key={index} className="p-6 text-center card-hover">
                  <div className="flex justify-center mb-4">{spec.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {spec.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Experience - Clean */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-green-600">
                    {exp.period}
                  </div>
                  <div className="flex-grow ml-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-green-600 font-medium mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Philosophy & Approach - Clean */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                My Approach to Healing
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  "I believe in the ancient wisdom that every individual has a
                  unique constitution and requires personalized care. My
                  approach combines time-tested Ayurvedic principles with
                  compassionate, patient-centered care."
                </p>
                <p>
                  "Rather than treating symptoms in isolation, I work to
                  understand the root causes of imbalance and guide patients
                  toward sustainable wellness through natural methods."
                </p>
                <p>
                  "Living and practicing in London has taught me to adapt
                  traditional treatments to modern lifestyles while maintaining
                  their effectiveness and authenticity."
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why I Came to the UK
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  "I moved to the UK to share the authentic healing traditions
                  of Ayurveda with people who are seeking natural, holistic
                  approaches to wellness. I noticed that while there are many
                  wellness services available, few offer the depth of
                  traditional Ayurvedic knowledge combined with qualified
                  medical training."
                </p>
                <p>
                  "My mission is to make genuine Ayurvedic care accessible and
                  convenient for busy modern lives, while maintaining the
                  integrity and effectiveness of this ancient science."
                </p>
                <p>
                  "Living in North West London has allowed me to serve diverse
                  communities and help families discover the transformative
                  power of personalized, traditional wellness care."
                </p>
              </div>
            </Card>
          </div>

          {/* Call to Action - Clean */}
          <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Experience the difference that qualified, traditional Ayurvedic
              care can make in your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center">
                    Book Your Consultation
                  </span>
                </button>
              </Link>
              <Link to="/services" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center">
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
