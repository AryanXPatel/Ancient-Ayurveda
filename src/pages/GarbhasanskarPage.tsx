import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import {
  Baby,
  Heart,
  Star,
  Calendar,
  Clock,
  Phone,
  CheckCircle,
  Gift,
  BookOpen,
  Sparkles,
} from "lucide-react";

export const GarbhasanskarPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const programComponents = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Prenatal Nutrition Guidance",
      description:
        "Traditional Ayurvedic nutrition plans tailored for each trimester",
      features: [
        "Personalized meal plans for optimal nourishment",
        "Foods to enhance baby's development",
        "Managing pregnancy symptoms naturally",
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
      icon: <Baby className="w-8 h-8 text-green-500" />,
      title: "Baby Development Support",
      description:
        "Ancient practices to enhance your baby's growth and development",
      features: [
        "Music and sound therapy for baby",
        "Reading and storytelling practices",
        "Bonding techniques with unborn baby",
        "Environmental considerations",
        "Cultural and spiritual practices",
      ],
    },
  ];

  const packages = [
    {
      title: "Essential Garbhasanskar",
      price: "£450",
      duration: "12 weeks",
      sessions: "6 sessions",
      popular: false,
      features: [
        "Initial comprehensive consultation",
        "Monthly follow-up consultations",
        "Personalized nutrition plan",
        "Basic meditation techniques",
        "Prenatal care guidelines",
        "WhatsApp support throughout",
      ],
      bestFor: "First-time mothers wanting foundational support",
    },
    {
      title: "Complete Garbhasanskar Program",
      price: "£750",
      duration: "24 weeks",
      sessions: "12 sessions",
      popular: true,
      features: [
        "Everything in Essential package",
        "Bi-weekly consultations",
        "3 gentle prenatal treatments",
        "Partner education sessions",
        "Advanced meditation & yoga",
        "Childbirth preparation guidance",
        "Postpartum planning included",
        "24/7 emergency support",
      ],
      bestFor: "Comprehensive prenatal care with full traditional support",
    },
    {
      title: "Premium Garbhasanskar Journey",
      price: "£1200",
      duration: "36 weeks",
      sessions: "18 sessions",
      popular: false,
      features: [
        "Everything in Complete package",
        "Weekly consultations from 28 weeks",
        "6 specialized treatments",
        "Home environment assessment",
        "Extended postpartum support (6 weeks)",
        "Baby development milestone tracking",
        "Family wellness planning",
        "Priority scheduling guarantee",
      ],
      bestFor:
        "Mothers wanting the most comprehensive traditional pregnancy journey",
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
        "Dr. Niyati's guidance was invaluable. My baby was born calm and alert, and I had a smooth delivery.",
      rating: 5,
    },
    {
      name: "Sarah P.",
      location: "Neasden",
      content:
        "Even as a non-Indian mother, I found the traditional practices beautiful and beneficial for both me and my baby.",
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
              Traditional Garbhasanskar - Ayurvedic Prenatal Wellness Program
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ancient wisdom for modern mothers - Supporting both you and your
              baby's wellbeing throughout your pregnancy journey
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <Button
                  size="lg"
                  variant="primary"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Baby className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
              </Link>
              <a href="tel:+447778147840">
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Discuss Your Needs: +44 7778 147840
                </Button>
              </a>
            </div>
          </div>

          {/* What is Garbhasanskar - Clean */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Garbhasanskar?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Garbhasanskar is an ancient Ayurvedic practice that recognizes
                  pregnancy as a sacred time of creation. 'Garbha' means womb
                  and 'Sanskar' means positive impressions, together creating a
                  program that nurtures both mother and baby's physical, mental,
                  and spiritual development.
                </p>
                <p>
                  This traditional wisdom teaches that a baby's development
                  begins from conception and is influenced by the mother's
                  thoughts, emotions, diet, lifestyle, and environment. Through
                  personalized guidance, we help create optimal conditions for
                  your baby's growth and your own well-being.
                </p>
                <p>
                  Dr. Niyati combines authentic Garbhasanskar principles with
                  modern prenatal care understanding, creating a comprehensive
                  program that honors tradition while supporting your
                  contemporary lifestyle.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center shadow-lg card-hover">
                <div className="text-center">
                  <Baby className="w-24 h-24 text-pink-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">
                    Holistic Pregnancy Care
                  </p>
                  <p className="text-gray-500 text-sm">
                    For Mother & Baby Wellness
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Program Components - Clean */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Comprehensive Prenatal Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programComponents.map((component, index) => (
                <Card key={index} className="p-6 card-hover">
                  <div className="flex items-center mb-4">
                    <div className="text-pink-500 mr-4">{component.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {component.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Program Packages - Clean */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {pkg.title}
                    </h3>
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {pkg.duration} • {pkg.sessions}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Program Includes:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-3 bg-pink-50 rounded-lg">
                    <p className="text-sm text-pink-800">
                      <strong>Best for:</strong> {pkg.bestFor}
                    </p>
                  </div>

                  <Link to="/contact" onClick={handleLinkClick}>
                    <Button
                      variant={pkg.popular ? "primary" : "outline"}
                      className="w-full hover:scale-105 transition-transform duration-200"
                    >
                      Choose This Program
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section - Clean */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Benefits for Mother
              </h2>
              <div className="space-y-3">
                {benefits.mother.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Heart className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Benefits for Baby
              </h2>
              <div className="space-y-3">
                {benefits.baby.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Baby className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Testimonials - Clean */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
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

          {/* When to Start - Clean */}
          <Card className="p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              When to Start Your Garbhasanskar Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Preconception (Ideal)
                </h3>
                <p className="text-gray-600 text-sm">
                  Start 3-6 months before trying to conceive for optimal
                  preparation of mind, body, and environment.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  First Trimester
                </h3>
                <p className="text-gray-600 text-sm">
                  Begin as soon as pregnancy is confirmed to establish healthy
                  foundations for development.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Any Time During Pregnancy
                </h3>
                <p className="text-gray-600 text-sm">
                  It's never too late to start! Benefits can be experienced at
                  any stage of pregnancy.
                </p>
              </div>
            </div>
          </Card>

          {/* FAQ Section - Clean */}
          <Card className="p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Common Questions About Garbhasanskar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Is Garbhasanskar only for Indian families?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Not at all! While rooted in Indian tradition, Garbhasanskar
                    principles benefit all families. Dr. Niyati adapts practices
                    to suit different cultural backgrounds and beliefs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Do I need to follow specific religious practices?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No religious requirements. The focus is on health, wellness,
                    and positive environments. Spiritual aspects are optional
                    and adapted to your comfort level.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Can my partner be involved?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Absolutely! Partner involvement is encouraged and
                    beneficial. We provide guidance for both parents to create
                    the best environment for your growing family.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How does this work with my NHS care?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Garbhasanskar complements NHS prenatal care perfectly. We
                    work alongside your medical team and encourage continued NHS
                    monitoring for optimal pregnancy care.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What if I have pregnancy complications?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We adapt the program to your specific needs and work closely
                    with your medical team. Safety is always our priority, and
                    practices are modified accordingly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Are treatments safe during pregnancy?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    All treatments are specifically designed for pregnancy and
                    use safe, gentle techniques. Dr. Niyati specializes in
                    prenatal care and ensures all practices are appropriate for
                    your stage of pregnancy.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Call to Action - Clean */}
          {/* Call to Action - Inverted Gradient Buttons */}
          <div className="text-center bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Begin Your Sacred Pregnancy Journey
            </h2>
            <p className="text-xl text-pink-50 mb-8 max-w-2xl mx-auto">
              Give your baby the best start in life with ancient wisdom and
              modern care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-purple-500 group-hover:from-pink-500 group-hover:to-purple-500 hover:text-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-pink-600 flex items-center">
                    <Gift className="w-5 h-5 mr-2" />
                    Start Your Journey
                  </span>
                </button>
              </Link>
              <a href="tel:+447778147840">
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-purple-500 group-hover:from-pink-500 group-hover:to-purple-500 hover:text-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-pink-600 flex items-center">
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
