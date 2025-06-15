import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
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
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  healthConcerns: string;
  referralSource: string;
  questions: string;
  contactMethod: string;
}

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // EmailJS configuration
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_name: "Dr. Niyati Patel",
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          service_type: data.serviceType,
          preferred_date: data.preferredDate,
          preferred_time: data.preferredTime,
          health_concerns: data.healthConcerns,
          referral_source: data.referralSource,
          questions: data.questions,
          contact_method: data.contactMethod,
          message: `
New consultation inquiry from ${data.name}

Contact Details:
- Email: ${data.email}
- Phone: ${data.phone}
- Preferred Contact: ${data.contactMethod}

Service Interest: ${data.serviceType}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}

Health Concerns: ${data.healthConcerns}

Questions: ${data.questions}

How they heard about us: ${data.referralSource}
          `,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      toast.success(
        "Your inquiry has been sent successfully! We'll contact you within 2 hours."
      );
      reset();

      // Redirect to thank you page or show success message
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "There was an error sending your inquiry. Please try calling us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Clean */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Ayurvedic Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your wellness journey? Get in touch to schedule
              your personalized consultation with Dr. Niyati Patel
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information - LEFT SIDE */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  How to Reach Us
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a
                        href="tel:+447778147840"
                        className="text-green-600 hover:text-green-700 hover:scale-105 transition-transform duration-200"
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
                        className="text-green-600 hover:text-green-700 hover:scale-105 transition-transform duration-200"
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
                        className="text-green-600 hover:text-green-700 hover:scale-105 transition-transform duration-200"
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
                      <p className="text-gray-600">
                        Within 2 hours during business hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Business Hours
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: 11:00 AM - 4:00 PM</p>
                    <p className="text-green-600 font-medium mt-2">
                      Emergency support available for existing clients
                    </p>
                  </div>
                </div>
              </Card>

              {/* Service Areas - Clean */}
              <Card className="p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  <MapPin className="w-6 h-6 text-green-600 inline mr-2" />
                  Service Areas
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Primary Service Areas (No Travel Charge)
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <span>• Neasden</span>
                      <span>• Wembley</span>
                      <span>• Harrow</span>
                      <span>• Kingsbury</span>
                      <span>• Dollis Hill</span>
                      <span>• Willesden</span>
                      <span>• Cricklewood</span>
                      <span>• Brent Cross</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Extended Areas (Small Travel Charge May Apply)
                    </h3>
                    <p className="text-sm text-gray-600">
                      Edgware, Finchley, Hendon, Mill Hill, Stanmore, and other
                      North West London areas
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Online consultations available UK-wide</strong> -
                      Perfect for follow-ups or if you're outside our travel
                      area
                    </p>
                  </div>
                </div>
              </Card>

              {/* Quick Actions - Clean */}
              <div className="mt-8 space-y-4">
                <a href="tel:+447778147840">
                  <Button
                    size="lg"
                    variant="primary"
                    className="w-full hover:scale-105 transition-transform duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +44 7778 147840
                  </Button>
                </a>
                <a
                  href="https://wa.me/447778147840"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full hover:scale-105 transition-transform duration-200"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form - RIGHT SIDE */}
            <div>
              <Card className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Book Your Consultation
                  </h2>
                  <p className="text-gray-600">
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
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        {...register("preferredDate")}
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        {...register("preferredTime")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select time preference</option>
                        <option value="morning">Morning (9am-12pm)</option>
                        <option value="afternoon">Afternoon (12pm-5pm)</option>
                        <option value="evening">Evening (5pm-7pm)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Health Concerns or Goals
                    </label>
                    <textarea
                      {...register("healthConcerns")}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Tell us about your health goals or concerns..."
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
                    className="w-full hover:scale-105 transition-transform duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </Card>

              {/* What Happens Next - Clean */}
              <Card className="p-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">
                        1
                      </span>
                    </div>
                    <p>
                      <strong>Immediate Confirmation:</strong> You'll receive an
                      automatic email confirmation of your inquiry.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">
                        2
                      </span>
                    </div>
                    <p>
                      <strong>Personal Response (Within 2 hours):</strong> Dr.
                      Niyati or our team will contact you via your preferred
                      method.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">
                        3
                      </span>
                    </div>
                    <p>
                      <strong>Appointment Confirmation:</strong> You'll receive
                      detailed appointment information.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">
                        4
                      </span>
                    </div>
                    <p>
                      <strong>Pre-Appointment Support:</strong> We'll send
                      preparation guidelines and any forms to complete.
                    </p>
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
