import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import { ChevronDown, ChevronUp, Phone, MessageCircle } from "lucide-react";

export const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is Ayurveda and how can it help me?",
          answer:
            "Ayurveda is a 5,000-year-old system of natural healing from India that focuses on treating the root cause of health issues, not just symptoms. It works by balancing your unique constitution (dosha) through personalized treatments, diet, lifestyle changes, and natural therapies. Dr. Niyati uses traditional diagnostic methods like pulse reading to create customized wellness plans that address your specific health concerns.",
        },
        {
          question: "Is Dr. Niyati qualified to practice Ayurveda?",
          answer:
            "Yes, Dr. Niyati Patel holds a Bachelor of Ayurvedic Medicine & Surgery (BAMS) from Gujarat Ayurved University in India and has over 15 years of clinical experience. She is fully qualified to practice traditional Ayurveda and maintains professional indemnity insurance in the UK.",
        },
        {
          question: "Are Ayurvedic treatments safe?",
          answer:
            "When practiced by qualified practitioners like Dr. Niyati, Ayurveda is very safe. All treatments are natural and personalized to your constitution. Dr. Niyati will discuss any medications you're taking and ensure treatments complement your existing healthcare. Always continue any prescribed medical treatments unless advised otherwise by your GP.",
        },
        {
          question: "How is Ayurveda different from conventional medicine?",
          answer:
            "Ayurveda takes a holistic approach, treating you as a whole person rather than just addressing symptoms. It focuses on prevention and treating root causes through natural methods. While conventional medicine is excellent for acute conditions and emergencies, Ayurveda excels at chronic conditions, preventive care, and overall wellness optimization.",
        },
        {
          question: "Can Ayurveda work alongside my current medical treatment?",
          answer:
            "Absolutely! Ayurveda is complementary and can work alongside conventional medicine. Dr. Niyati will ask about your current medications and treatments to ensure everything works harmoniously. Never stop prescribed medications without consulting your GP first.",
        },
      ],
    },
    {
      category: "Booking & Scheduling",
      questions: [
        {
          question: "How do I book an appointment?",
          answer:
            "You can book by calling +44 7778 147840, WhatsApping us, or filling out our contact form. We respond within 2 hours during business hours. We'll discuss your needs and schedule a convenient time for your consultation or treatment.",
        },
        {
          question: "Do you offer home visits?",
          answer:
            "Yes! Home visits are our specialty. We serve Neasden, Wembley, Harrow, Kingsbury, Dollis Hill, Willesden, Cricklewood, Brent Cross, and nearby North West London areas with no travel charge. Small travel charges may apply for extended areas.",
        },
        {
          question: "What about online consultations?",
          answer:
            "We offer comprehensive online consultations UK-wide via secure video calls. These are perfect for initial consultations, follow-ups, dietary guidance, lifestyle coaching, and when physical treatments aren't needed. Many clients prefer the convenience of online sessions.",
        },
        {
          question: "How far in advance should I book?",
          answer:
            "We recommend booking 3-7 days in advance, especially for home visits. However, we often have same-day or next-day availability for urgent needs. Contact us as soon as possible to secure your preferred time slot.",
        },
        {
          question: "What's your cancellation policy?",
          answer:
            "We require 24 hours notice for cancellations to avoid fees. Same-day cancellations may incur a 50% service fee. We understand emergencies happen and will work with you on a case-by-case basis.",
        },
      ],
    },
    {
      category: "Treatment Questions",
      questions: [
        {
          question: "What happens during an initial consultation?",
          answer:
            "Your 90-minute initial consultation includes a comprehensive health history, traditional pulse diagnosis (Nadi Pariksha), constitution analysis (Prakriti assessment), lifestyle review, and creation of your personalized treatment plan. You'll receive detailed recommendations for diet, lifestyle, and any follow-up treatments needed.",
        },
        {
          question: "What should I expect during Ayurvedic massage?",
          answer:
            "Ayurvedic massages use warm herbal oils chosen for your constitution. The treatment is deeply relaxing and therapeutic, focusing on improving circulation, releasing tension, and balancing your energy. Sessions include consultation, treatment, and post-treatment guidance. Please wear comfortable clothing that you don't mind getting oil on.",
        },
        {
          question: "How often should I have treatments?",
          answer:
            "This depends on your individual needs and goals. Acute issues might need weekly treatments initially, while maintenance wellness might be monthly. Dr. Niyati will recommend a treatment schedule during your consultation based on your specific situation and goals.",
        },
        {
          question: "Are there any side effects?",
          answer:
            "Ayurvedic treatments typically have minimal side effects when performed correctly. You might experience temporary detox symptoms like mild fatigue or increased urination as your body eliminates toxins. Any reactions are usually mild and short-lived. Dr. Niyati will prepare you for what to expect.",
        },
        {
          question: "What should I do before and after treatment?",
          answer:
            "Before treatment: eat lightly, arrive clean and relaxed, wear comfortable clothing. After treatment: rest for a few hours, drink warm water, avoid heavy meals, cold drinks, and strenuous activity. Detailed pre and post-treatment guidelines will be provided for each specific treatment.",
        },
      ],
    },
    {
      category: "Pregnancy & Women's Health",
      questions: [
        {
          question: "Is Ayurveda safe during pregnancy?",
          answer:
            "Yes, when practiced by qualified practitioners. Dr. Niyati specializes in pregnancy care and uses safe, gentle treatments specifically designed for expecting mothers. All treatments are modified for pregnancy safety. The Garbhasanskar program provides comprehensive prenatal support using traditional wisdom.",
        },
        {
          question: "What is Garbhasanskar?",
          answer:
            "Garbhasanskar is a traditional Ayurvedic prenatal program that supports both mother and baby's physical, mental, and spiritual development during pregnancy. It includes nutrition guidance, gentle treatments, meditation practices, and lifestyle recommendations designed to promote optimal pregnancy outcomes.",
        },
        {
          question: "Can Ayurveda help with menstrual problems?",
          answer:
            "Absolutely! Ayurveda excels at addressing menstrual irregularities, PCOS, PMS, and hormonal imbalances through natural methods. Treatment typically includes dietary changes, herbal support, lifestyle modifications, and specific treatments to restore hormonal balance naturally.",
        },
        {
          question: "What about menopause support?",
          answer:
            "Ayurveda offers excellent natural support for menopause symptoms including hot flashes, mood changes, sleep issues, and energy fluctuations. Treatment focuses on nourishing the body during this transition using herbs, diet, lifestyle practices, and gentle treatments.",
        },
      ],
    },
    {
      category: "Costs & Packages",
      questions: [
        {
          question: "How much do consultations cost?",
          answer:
            "Initial consultations are £180 for 90 minutes, follow-up consultations are £90 for 45 minutes. This includes comprehensive assessment, personalized treatment plan, and detailed recommendations. Online consultations are the same price as in-person consultations.",
        },
        {
          question: "What about treatment prices?",
          answer:
            "Treatment prices vary by service: Therapeutic massages from £85-150, Ayurvedic facials from £85-110, pregnancy care from £100-150. Package deals offer better value for multiple treatments. Visit our Services page for complete pricing information.",
        },
        {
          question: "Do you offer package deals?",
          answer:
            "Yes! We offer several wellness packages that combine consultations and treatments at discounted rates. Popular packages include the Stress Relief Package (£350 for 3 sessions) and Women's Wellness Package (£500 for 4 sessions). Packages provide better value and comprehensive care.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept bank transfers, PayPal, and cash payments. Payment is required before or on the day of service. For package programs, we can arrange payment plans if needed. We provide receipts that many insurance providers accept for reimbursement.",
        },
      ],
    },
    {
      category: "Results & Expectations",
      questions: [
        {
          question: "How quickly will I see results?",
          answer:
            "This varies by individual and condition. Some people feel immediate benefits like reduced stress and better sleep. For chronic conditions, significant improvements typically occur within 4-6 weeks of regular treatment. Dr. Niyati will set realistic expectations during your consultation.",
        },
        {
          question: "What can I do to maximize results?",
          answer:
            "Follow the personalized lifestyle and dietary recommendations provided. Consistency with treatments and home practices significantly improves outcomes. Dr. Niyati provides detailed guidance to support your healing journey.",
        },
        {
          question: "Do I need to continue treatments long-term?",
          answer:
            "Not necessarily. Initial intensive treatment often resolves acute issues. For chronic conditions or optimal wellness, periodic maintenance treatments are beneficial. Dr. Niyati will create a sustainable long-term plan based on your needs and goals.",
        },
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Clean */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about Ayurvedic treatments, booking,
              and what to expect from your wellness journey with Dr. Niyati Patel
            </p>
          </div>

          {/* FAQ Categories - Clean */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const itemId = `${categoryIndex}-${index}`;
                    const isOpen = openItems.has(itemId);
                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset hover:scale-[1.01] transition-transform duration-200"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>

          {/* Still Have Questions - Clean */}
          <Card className="p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              We're here to help! Contact Dr. Niyati directly for personalized
              answers to your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+447778147840">
                <Button size="lg" variant="primary" className="hover:scale-105 transition-transform duration-200">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +44 7778 147840
                </Button>
              </a>
              <a
                href="https://wa.me/447778147840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-200">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <Link to="/contact" onClick={handleLinkClick}>
                <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-200">
                  Send Inquiry
                </Button>
              </Link>
            </div>
          </Card>

          {/* Popular Topics Quick Links - Clean */}
          <div className="mt-12 bg-green-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Popular Topics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200"
              >
                About Dr. Niyati Patel
              </Link>
              <Link
                to="/services"
                onClick={handleLinkClick}
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200"
              >
                Service Pricing
              </Link>
              <Link
                to="/online-consultations"
                onClick={handleLinkClick}
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200"
              >
                Online Consultations
              </Link>
              <Link
                to="/garbhasanskar"
                onClick={handleLinkClick}
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200"
              >
                Pregnancy Care
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200"
              >
                Book Appointment
              </Link>
              <a
                href="https://wa.me/447778147840"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow hover:scale-105 duration-200"
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
