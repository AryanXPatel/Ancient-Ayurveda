import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import {
  Baby,
  Heart,
  Sparkles,
  BookOpen,
  Users,
  Phone,
  CheckCircle,
  Star,
} from "lucide-react";

export const GarbhasanskarPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const programComponents = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Holistic Prenatal Care",
      description:
        "Complete wellness support throughout your pregnancy journey",
      features: [
        "Monthly comprehensive consultations",
        "Traditional constitution assessment",
        "Pregnancy-specific dietary guidance",
        "Seasonal nutrition adjustments",
        "Safe herbal support recommendations",
      ],
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "Gentle Pregnancy Treatments",
      description:
        "Safe, specialized treatments designed for expecting mothers",
      features: [
        "Prenatal massage with pregnancy-safe oils",
        "Stress-relief and relaxation techniques",
        "Natural remedies for common discomforts",
        "Preparation for natural childbirth",
        "Partner involvement and education",
      ],
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: "Mental & Emotional Wellness",
      description: "Supporting maternal mental health and emotional balance",
      features: [
        "Meditation and mindfulness practices",
        "Emotional support and counseling",
        "Stress management techniques",
        "Positive thinking and visualization",
        "Creating a peaceful mindset",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Family Preparation",
      description: "Preparing your entire family for the new arrival",
      features: [
        "Partner support and education",
        "Sibling preparation guidance",
        "Home environment optimization",
        "Birth preparation planning",
        "Postpartum transition support",
      ],
    },
  ];

  const monthlyStructure = [
    {
      trimester: "First Trimester",
      months: "Months 1-3",
      focus: "Foundation & Stabilization",
      activities: [
        "Foundation consultation and assessment",
        "Morning sickness management",
        "Emotional support and guidance",
        "Initial bonding practices",
      ],
    },
    {
      trimester: "Second Trimester",
      months: "Months 4-6",
      focus: "Growth & Energy",
      activities: [
        "Energy optimization treatments",
        "Nutrition enhancement program",
        "Stress management techniques",
        "Physical comfort therapies",
      ],
    },
    {
      trimester: "Third Trimester",
      months: "Months 7-9",
      focus: "Preparation & Comfort",
      activities: [
        "Birth preparation support",
        "Anxiety management",
        "Physical comfort treatments",
        "Postpartum planning",
      ],
    },
  ];

  const packages = [
    {
      title: "Complete Garbhasanskar Program",
      price: "£950",
      duration: "9 months",
      sessions: "9 sessions",
      popular: true,
      bestFor: "First-time mothers seeking comprehensive support",
      features: [
        "Monthly 90-minute consultations throughout pregnancy",
        "Personalized nutrition and lifestyle guidance",
        "Safe pregnancy treatments and massages",
        "Emotional and mental wellness support",
        "Birth preparation and planning",
        "Partner education and involvement",
        "Postpartum transition guidance",
        "24/7 WhatsApp support for urgent questions",
        "Herbal support where appropriate",
      ],
    },
    {
      title: "Trimester-Focused Program",
      price: "£350",
      duration: "3 months",
      sessions: "3 sessions",
      popular: false,
      bestFor: "Mothers who want focused support for specific pregnancy phases",
      features: [
        "3 comprehensive consultations",
        "Trimester-specific guidance and support",
        "Appropriate treatments for the phase",
        "Nutritional recommendations",
        "Emotional and physical wellness support",
        "Email follow-up and support",
      ],
    },
    {
      title: "Individual Consultation",
      price: "£120",
      duration: "Single session",
      sessions: "1 session",
      popular: false,
      bestFor: "Mothers with specific concerns or questions",
      features: [
        "Single 75-minute consultation",
        "Specific concern assessment",
        "Targeted recommendations",
        "Treatment if appropriate",
        "Follow-up email summary",
      ],
    },
  ];

  const benefits = {
    mother: [
      "Reduced pregnancy anxiety and stress",
      "Better sleep and energy levels",
      "Natural management of pregnancy symptoms",
      "Stronger emotional resilience",
      "Preparation for natural childbirth",
      "Faster postpartum recovery",
      "Enhanced mother-baby bonding",
      "Traditional wisdom and modern support",
    ],
    baby: [
      "Enhanced cognitive development",
      "Stronger immune system foundation",
      "Better sleep patterns after birth",
      "Increased emotional stability",
      "Improved physical development",
      "Enhanced learning capacity",
      "Stronger mother-baby bond",
      "Foundation for lifelong wellness",
    ],
  };

  const testimonials = [
    {
      name: "Priya S.",
      location: "Harrow",
      content:
        "The Garbhasanskar program transformed my pregnancy experience. I felt so supported and prepared for motherhood.",
      rating: 5,
    },
    {
      name: "Anjali M.",
      location: "Wembley",
      content:
        "Dr. Niyati's guidance helped me through a difficult pregnancy. My baby is so calm and content - I'm sure the program helped!",
      rating: 5,
    },
    {
      name: "Sarah K.",
      location: "Kingsbury",
      content:
        "The combination of traditional wisdom and practical support was exactly what I needed. Highly recommend to all expecting mothers.",
      rating: 5,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeInDown">
            <h1 className="text-hero mb-6">
              Traditional Garbhasanskar - Ayurvedic Prenatal Wellness Program
            </h1>
            <p className="text-body-large text-gray-600 max-w-4xl mx-auto mb-8">
              Ancient wisdom for modern mothers - Supporting both you and your
              baby's wellbeing through traditional Ayurvedic practices, adapted
              for contemporary life in London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <Button
                  size="lg"
                  variant="primary"
                  className="text-button-large"
                >
                  <Baby className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
              </Link>
              <a
                href="https://wa.me/447778147840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-button-large"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Discuss Your Needs
                </Button>
              </a>
            </div>
          </div>

          {/* What is Garbhasanskar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fadeInLeft">
              <h2 className="text-display mb-6">What is Garbhasanskar?</h2>
              <div className="space-y-4 text-body text-gray-700">
                <p>
                  Garbhasanskar is an ancient Ayurvedic practice that focuses on
                  the holistic development of both mother and baby during
                  pregnancy. This traditional approach recognizes that a
                  mother's physical, mental, and spiritual well-being directly
                  influences her baby's development.
                </p>
                <p>
                  The word "Garbhasanskar" comes from Sanskrit - "Garbha"
                  meaning womb and "Sanskar" meaning positive impressions. This
                  practice creates an optimal environment for your baby's growth
                  while supporting your own wellness throughout pregnancy.
                </p>
                <p>
                  Dr. Niyati's program adapts these time-tested principles for
                  modern life, combining traditional wisdom with contemporary
                  understanding of pregnancy wellness.
                </p>
              </div>
            </div>

            <div className="flex justify-center animate-fadeInRight">
              <div className="w-full max-w-md h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <Baby className="w-24 h-24 text-pink-500 mx-auto mb-4" />
                  <p className="text-h2 text-gray-700">
                    Holistic Pregnancy Care
                  </p>
                  <p className="text-body-small text-gray-500">
                    For Mother & Baby Wellness
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Program Components */}
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-display text-center mb-12">
              Comprehensive Prenatal Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programComponents.map((component, index) => (
                <Card key={index} className="p-6 card-hover">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{component.icon}</div>
                    <h3 className="text-h2">{component.title}</h3>
                  </div>
                  <p className="text-body text-gray-600 mb-4">
                    {component.description}
                  </p>
                  <ul className="space-y-2">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-body-small text-gray-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Monthly Structure */}
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-display text-center mb-12">
              Month-by-Month Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {monthlyStructure.map((trimester, index) => (
                <Card key={index} className="p-6 text-center card-hover">
                  <div className="mb-4">
                    <h3 className="text-h2 mb-2">{trimester.trimester}</h3>
                    <p className="text-h3 text-pink-600 font-semibold">
                      {trimester.months}
                    </p>
                    <p className="text-body-small text-gray-600">
                      {trimester.focus}
                    </p>
                  </div>
                  <ul className="space-y-2 text-left">
                    {trimester.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start">
                        <Heart className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-body-small text-gray-600">
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Program Packages */}
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-display text-center mb-12">
              Choose Your Garbhasanskar Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`p-6 relative card-hover ${
                    pkg.popular ? "ring-2 ring-pink-500 shadow-lg" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-h2 mb-2">{pkg.title}</h3>
                    <div className="text-h1 text-pink-600 font-bold mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-body-small text-gray-600">
                      {pkg.duration} • {pkg.sessions}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-h3 mb-3">Program Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-body-small text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-3 bg-pink-50 rounded-lg">
                    <p className="text-body-small text-pink-800">
                      <strong>Best for:</strong> {pkg.bestFor}
                    </p>
                  </div>

                  <Link to="/contact" onClick={handleLinkClick}>
                    <Button
                      variant={pkg.popular ? "primary" : "outline"}
                      className="w-full hover:scale-105 transition-transform duration-200 text-button"
                    >
                      Choose This Program
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 animate-fadeInLeft">
              <h2 className="text-h1 mb-6 text-center">Benefits for Mother</h2>
              <div className="space-y-3">
                {benefits.mother.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-body text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 animate-fadeInRight">
              <h2 className="text-h1 mb-6 text-center">Benefits for Baby</h2>
              <div className="space-y-3">
                {benefits.baby.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-body text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-display text-center mb-12">
              Happy Mothers Share Their Experience
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
                  <p className="text-body text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="text-body-small">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-pink-600">{testimonial.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="p-8 mb-16 animate-fadeInUp">
            <h2 className="text-h1 text-center mb-8">
              Common Questions About Garbhasanskar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-h3 mb-2">
                    When should I start the program?
                  </h3>
                  <p className="text-body-small text-gray-600">
                    Ideally, start as early as possible in pregnancy. The
                    program can begin from conception through to the third
                    trimester, with benefits at any stage.
                  </p>
                </div>
                <div>
                  <h3 className="text-h3 mb-2">
                    Is this safe during pregnancy?
                  </h3>
                  <p className="text-body-small text-gray-600">
                    Absolutely. All treatments and recommendations are
                    specifically designed for pregnancy safety. Dr. Niyati
                    specializes in prenatal care with 15+ years of experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-h3 mb-2">What if I miss sessions?</h3>
                  <p className="text-body-small text-gray-600">
                    We understand pregnancy can be unpredictable. Missed
                    appointments can be rescheduled and we offer flexible makeup
                    sessions.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-h3 mb-2">
                    Do you provide postpartum support?
                  </h3>
                  <p className="text-body-small text-gray-600">
                    Yes! All programs include postpartum transition guidance and
                    we offer separate postnatal recovery programs as well.
                  </p>
                </div>
                <div>
                  <h3 className="text-h3 mb-2">Is this available online?</h3>
                  <p className="text-body-small text-gray-600">
                    Yes, the entire program can be delivered online with some
                    modifications for clients outside our home visit areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-h3 mb-2">Can partners be involved?</h3>
                  <p className="text-body-small text-gray-600">
                    Partner involvement is encouraged and beneficial. We provide
                    education and guidance for partners to support the mother's
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg p-8 sm:p-12 animate-fadeInUp">
            <h2 className="text-h1 mb-4 text-white">
              Begin Your Garbhasanskar Journey Today
            </h2>
            <p className="text-body-large text-pink-50 mb-8 max-w-3xl mx-auto">
              Give your baby the best possible start in life with traditional
              Ayurvedic wisdom and modern prenatal care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-purple-500 group-hover:from-pink-500 group-hover:to-purple-500 hover:text-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-pink-600 flex items-center text-button-large">
                    <Baby className="w-5 h-5 mr-2" />
                    Start Your Program
                  </span>
                </button>
              </Link>
              <a
                href="tel:+447778147840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-purple-500 group-hover:from-pink-500 group-hover:to-purple-500 hover:text-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-pink-600 flex items-center text-button-large">
                    <Phone className="w-5 h-5 mr-2" />
                    Discuss Your Needs: +44 7778 147840
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
