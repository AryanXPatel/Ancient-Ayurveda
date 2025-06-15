import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import { ArrowLeft, FileText, Mail, Phone } from "lucide-react";

export const TermsPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Remove all animate classes */}
          <div className="mb-8">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-4 hover:scale-105 transition-transform duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">
              Terms of Service
            </h1>
            <p className="text-gray-600 mt-2">Last updated: December 2024</p>
          </div>

          {/* Card - Remove animate class */}
          <Card className="p-8">
            <div className="prose max-w-none">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Service Terms & Conditions
                  </h2>
                </div>
                <p className="text-gray-600">
                  These terms govern your use of Ancient Ayurveda services
                  provided by Dr. Niyati Patel.
                </p>
              </div>

              {/* Rest of your content stays the same */}
              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Booking & Appointments
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Appointments are confirmed upon receipt of booking
                      inquiry response
                    </li>
                    <li>
                      • 24-hour cancellation notice required to avoid fees
                    </li>
                    <li>• Same-day cancellations may incur 50% service fee</li>
                    <li>
                      • We reserve the right to reschedule due to emergency
                      circumstances
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Payment Terms
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Payment required before or on the day of service</li>
                    <li>• Accepted methods: Bank transfer, PayPal, cash</li>
                    <li>
                      • Package programs may require payment plan arrangements
                    </li>
                    <li>• Receipts provided for insurance claim purposes</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Professional Scope
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Services are complementary wellness support, not medical
                      treatment
                    </li>
                    <li>• Always continue prescribed medical treatments</li>
                    <li>
                      • Inform us of any medical conditions or medications
                    </li>
                    <li>• Consult your GP for serious medical concerns</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Home Visit Terms
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Client provides safe, clean, and appropriate space
                    </li>
                    <li>• No travel charges within specified London areas</li>
                    <li>
                      • Travel charges apply for areas outside standard service
                      zone
                    </li>
                    <li>
                      • Weather or safety conditions may require rescheduling
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Liability & Disclaimers
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Services provided by qualified Ayurvedic practitioner
                    </li>
                    <li>• Individual results may vary</li>
                    <li>
                      • Not liable for outcomes beyond professional control
                    </li>
                    <li>• Professional indemnity insurance maintained</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Contact for Terms Inquiries
                  </h3>
                  <div className="bg-green-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Questions about these terms or our services:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-gray-700">
                          Email: info@ancientayurveda.co.uk
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-gray-700">
                          Phone: +44 7778 147840
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
