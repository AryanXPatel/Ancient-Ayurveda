import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  phone: string;
  contactMethod: "phone" | "email" | "whatsapp";
  serviceType: string;
  location: "home" | "online";
  city: string;
  timePreference: "morning" | "afternoon" | "evening";
  healthConcerns: string;
  referralSource: string;
  questions: string;
}

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // EmailJS configuration
      await emailjs.send(
        "your_service_id",
        "your_template_id",
        {
          ...data,
          to_email: "info@ancientayurveda.co.uk",
        },
        "your_public_key"
      );

      toast.success(
        "Thank you! Your inquiry has been sent. We'll respond within 2 hours."
      );
      reset();
    } catch (error) {
      toast.error(
        "Sorry, there was an error sending your message. Please try calling us directly."
      );
      console.error("EmailJS error:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeInDown">
            <h1 className="text-hero mb-4">
              Ready to Begin Your Wellness Journey?
            </h1>
            <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
              Get in touch to schedule your consultation or ask any questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fadeInLeft">
              <Card className="p-8">
                <h2 className="text-h1 mb-6">How to Reach Us</h2>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a
                        href="tel:+447778147840"
                        className="text-green-600 hover:text-green-700 text-body-large"
                      >
                        +44 7778 147840
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <a
                        href="https://wa.me/447778147840"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 text-body-large"
                      >
                        +44 7778 147840
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:info@ancientayurveda.co.uk"
                        className="text-green-600 hover:text-green-700 text-body-large"
                      >
                        info@ancientayurveda.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Response Time
                      </p>
                      <p className="text-gray-600 text-body">
                        Within 2 hours during business hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 text-h3">
                    Business Hours
                  </h3>
                  <div className="text-body-small text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: 11:00 AM - 4:00 PM</p>
                    <p className="text-green-600 font-medium mt-2">
                      Emergency support available for existing clients
                    </p>
                  </div>
                </div>
              </Card>

              {/* Service Areas */}
              <Card className="p-8 mt-8">
                <h2 className="text-h1 mb-6">
                  <MapPin className="w-6 h-6 text-green-600 inline mr-2" />
                  Service Areas
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-h3">
                      Primary Service Areas (No Travel Charge)
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-body-small text-gray-600">
                      <span>• Neasden</span>
                      <span>• Wembley</span>
                      <span>• Harrow</span>
                      <span>• Kingsbury</span>
                      <span>• Dollis Hill</span>
                      <span>• Cricklewood</span>
                      <span>• Willesden</span>
                      <span>• Colindale</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-h3">
                      Extended Areas (Small Travel Fee May Apply)
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-body-small text-gray-600">
                      <span>• Edgware</span>
                      <span>• Finchley</span>
                      <span>• Hendon</span>
                      <span>• Stanmore</span>
                      <span>• Mill Hill</span>
                      <span>• Golders Green</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-body-small text-blue-800">
                      <strong>Online consultations</strong> are available
                      anywhere in the UK
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fadeInRight">
              <Card className="p-8">
                <div className="mb-6">
                  <h2 className="text-h1 mb-2">Book Your Consultation</h2>
                  <p className="text-body text-gray-600">
                    Fill out the form below and we'll get back to you within 2
                    hours
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please enter a valid email",
                          },
                        })}
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="+44 7XXX XXX XXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        {...register("contactMethod")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="phone">Phone Call</option>
                        <option value="email">Email</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      {...register("serviceType")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select a service</option>
                      <option value="consultation">Initial Consultation</option>
                      <option value="massage">Therapeutic Massage</option>
                      <option value="facial">Ayurvedic Facial</option>
                      <option value="pregnancy">Pregnancy Care</option>
                      <option value="garbhasanskar">
                        Garbhasanskar Program
                      </option>
                      <option value="detox">Detox Program</option>
                      <option value="package">Wellness Package</option>
                      <option value="online">Online Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Location
                      </label>
                      <select
                        {...register("location")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="home">Home Visit</option>
                        <option value="online">Online Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City/Area
                      </label>
                      <input
                        {...register("city")}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="e.g., Neasden, Wembley, Harrow"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Health Concerns/Goals
                    </label>
                    <textarea
                      {...register("healthConcerns")}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Brief description of your health goals or concerns..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      {...register("referralSource")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select source</option>
                      <option value="google">Google Search</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend/Family Referral</option>
                      <option value="existing">Existing Client</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Any specific questions?
                    </label>
                    <textarea
                      {...register("questions")}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Any questions about our services, pricing, or treatments?"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-button-large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </Card>

              {/* Quick Action CTA - Simplified */}
              <Card className="p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-lg mt-6">
                <div className="text-center">
                  <h3 className="text-h3 text-white mb-3">
                    Prefer to Call Directly?
                  </h3>
                  <p className="text-green-50 mb-4 text-body-small">
                    Speak directly with Dr. Niyati for immediate assistance
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="tel:+447778147840">
                      <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center text-button-large">
                          {" "}
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </span>
                      </button>
                    </a>
                    <a
                      href="https://wa.me/447778147840"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-500 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-500 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <span className="relative px-8 py-4 transition-all ease-in duration-300 bg-transparent text-white rounded-md group-hover:bg-white group-hover:text-green-600 flex items-center text-button-large">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
