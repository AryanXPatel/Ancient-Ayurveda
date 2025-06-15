import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import { ChevronDown, ChevronUp, Phone } from "lucide-react";

export const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "General Ayurveda Questions",
      faqs: [
        {
          question: "What is Ayurveda and how can it help me?",
          answer:
            "Ayurveda is a 5,000-year-old holistic healing system from India that focuses on balancing mind, body, and spirit. It helps by identifying your unique constitution (Prakriti) and current imbalances (Vikriti), then providing personalized treatments including diet, lifestyle recommendations, herbal medicines, and therapies to restore optimal health naturally.",
        },
        {
          question: "Is Dr. Niyati Patel qualified to practice Ayurveda?",
          answer:
            "Yes, Dr. Niyati Patel holds a BAMS degree (Bachelor of Ayurvedic Medicine and Surgery) and has over 15 years of clinical experience. She is trained in traditional diagnostic methods including pulse diagnosis and constitution analysis, with specialized expertise in women's health and pregnancy care.",
        },
        {
          question:
            "How is Ayurvedic treatment different from conventional medicine?",
          answer:
            "Ayurveda treats the root cause rather than just symptoms, focusing on prevention and holistic wellness. It uses natural remedies, considers your unique constitution, and integrates physical, mental, and spiritual aspects of health. It can complement conventional medicine but works differently by addressing the whole person.",
        },
      ],
    },
    {
      category: "Consultations & Appointments",
      faqs: [
        {
          question: "What happens during an initial consultation?",
          answer:
            "Your 90-minute initial consultation includes a comprehensive health history review, traditional pulse diagnosis, constitution analysis, examination of current imbalances, and creation of a personalized treatment plan with diet, lifestyle, and herbal recommendations tailored specifically for you.",
        },
        {
          question: "Do you offer home visits in my area?",
          answer:
            "We provide home visits primarily in North West London including Neasden, Wembley, Harrow, Kingsbury, Dollis Hill, Cricklewood, and surrounding areas with no travel charge. For other London areas, a small travel fee may apply. We also offer online consultations throughout the UK.",
        },
        {
          question: "How much do consultations cost?",
          answer:
            "Initial consultations are £180 for 90 minutes, and follow-up consultations are £90 for 45 minutes. This includes your personalized treatment plan, dietary recommendations, and herbal medicine prescriptions if needed. Home visits in our primary service areas have no additional travel charges.",
        },
      ],
    },
    {
      category: "Treatment & Services",
      faqs: [
        {
          question: "What conditions can Ayurveda help with?",
          answer:
            "Ayurveda can help with many conditions including digestive issues, stress and anxiety, hormonal imbalances, skin problems, arthritis, diabetes management, sleep disorders, chronic fatigue, menstrual irregularities, pregnancy support, and general wellness optimization.",
        },
        {
          question: "Are the herbal medicines safe?",
          answer:
            "Yes, all herbal medicines are prescribed based on your individual constitution and current health status. Dr. Patel uses traditional formulations with high-quality, tested herbs. However, it's important to inform her about any current medications or health conditions to ensure safe, personalized treatment.",
        },
        {
          question: "How long does it take to see results?",
          answer:
            "Results vary depending on the condition and individual response. Some people notice improvements in energy and digestion within 1-2 weeks, while chronic conditions may take 3-6 months for significant changes. Ayurveda works gradually to create lasting, sustainable health improvements.",
        },
      ],
    },
    {
      category: "Pregnancy & Women's Health",
      faqs: [
        {
          question: "Is Ayurvedic treatment safe during pregnancy?",
          answer:
            "Yes, Dr. Patel specializes in pregnancy care and Garbhasanskar programs. All treatments are specifically adapted for pregnancy safety. Prenatal Ayurveda can help with morning sickness, energy levels, emotional balance, and preparing the body for childbirth using gentle, traditional methods.",
        },
        {
          question: "What is the Garbhasanskar program?",
          answer:
            "Garbhasanskar is a traditional Ayurvedic prenatal program focusing on the physical, mental, and spiritual development of both mother and baby. It includes monthly consultations, pregnancy-safe treatments, nutritional guidance, stress management, and birth preparation over the course of pregnancy.",
        },
        {
          question: "Can Ayurveda help with hormonal imbalances?",
          answer:
            "Absolutely. Dr. Patel has extensive experience treating hormonal imbalances including PCOS, irregular periods, menopause symptoms, and fertility issues. Ayurvedic treatments work to restore natural hormonal balance through diet, herbs, lifestyle modifications, and stress management techniques.",
        },
      ],
    },
    {
      category: "Online Consultations",
      faqs: [
        {
          question: "How effective are online consultations?",
          answer:
            "Online consultations are highly effective for Ayurvedic assessment. Dr. Patel can perform constitution analysis, review symptoms, provide dietary guidance, and prescribe herbal treatments via video call. Pulse diagnosis can be taught for self-assessment, and detailed questionnaires help gather comprehensive health information.",
        },
        {
          question: "What do I need for an online consultation?",
          answer:
            "You'll need a stable internet connection, a device with camera and microphone (computer, tablet, or smartphone), a quiet private space, and any recent medical reports if relevant. Dr. Patel will send preparation guidelines and health questionnaires before your appointment.",
        },
        {
          question: "Can I get herbal medicines through online consultations?",
          answer:
            "Yes, Dr. Patel can prescribe herbal medicines during online consultations. She works with reputable suppliers who can ship high-quality Ayurvedic herbs and formulations directly to your address throughout the UK, ensuring you receive the same quality treatments as in-person visits.",
        },
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeInDown">
            <h1 className="text-hero mb-6">Frequently Asked Questions</h1>
            <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about Ayurvedic treatments,
              consultations, and Dr. Niyati Patel's services
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fadeInUp">
                <h2 className="text-display mb-8 text-center">
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <Card key={faqIndex} className="overflow-hidden">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="text-h3 pr-8">{faq.question}</h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-body text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="p-8 mt-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 animate-fadeInUp">
            <div className="text-center">
              <h2 className="text-h1 text-white mb-4">Still Have Questions?</h2>
              <p className="text-body-large text-green-50 mb-8 max-w-2xl mx-auto">
                Dr. Niyati Patel is happy to answer any specific questions about
                your health concerns or Ayurvedic treatments
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
                      Call Now: +44 7778 147840
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </Card>

          {/* Popular Topics Quick Links */}
          <div className="mt-12 bg-green-50 rounded-lg p-8 animate-fadeInUp">
            <h3 className="text-h2 text-center mb-6">Popular Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200 text-button"
              >
                About Dr. Niyati Patel
              </Link>
              <Link
                to="/services"
                onClick={handleLinkClick}
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200 text-button"
              >
                Service Pricing
              </Link>
              <Link
                to="/online-consultations"
                onClick={handleLinkClick}
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200 text-button"
              >
                Online Consultations
              </Link>
              <Link
                to="/garbhasanskar"
                onClick={handleLinkClick}
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200 text-button"
              >
                Pregnancy Care
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200 text-button"
              >
                Book Appointment
              </Link>
              <a
                href="https://wa.me/447778147840"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200 text-button"
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
