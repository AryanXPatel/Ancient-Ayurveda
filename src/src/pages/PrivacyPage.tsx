import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageTransition } from "../components/ui/PageTransition";
import { ArrowLeft, Shield, Mail, Phone } from "lucide-react";

export const PrivacyPage: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Clean */}
          <div className="mb-8">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-4 hover:scale-105 transition-transform duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mt-2">Last updated: December 2024</p>
          </div>

          <Card className="p-8">
            <div className="prose max-w-none">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Your Privacy Matters
                  </h2>
                </div>
                <p className="text-gray-600">
                  At Ancient Ayurveda, we are committed to protecting your
                  privacy and ensuring the confidentiality of your personal and
                  health information. This policy explains how we collect, use,
                  and protect your information.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Information We Collect
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Personal details (name, contact information, address)
                    </li>
                    <li>• Health information shared during consultations</li>
                    <li>• Treatment preferences and appointment history</li>
                    <li>• Communication records (emails, calls, messages)</li>
                    <li>• Payment information for billing purposes</li>
                    <li>• Emergency contact details when provided</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How We Use Your Information
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Providing personalized Ayurvedic consultations and
                      treatments
                    </li>
                    <li>• Scheduling appointments and managing your care</li>
                    <li>• Communicating about your treatments and progress</li>
                    <li>• Improving our services and client experience</li>
                    <li>• Legal and regulatory compliance</li>
                    <li>
                      • Emergency situations when necessary for your safety
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Information Security
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • All health information is kept strictly confidential
                    </li>
                    <li>• Secure storage of physical and digital records</li>
                    <li>• Limited access to authorized personnel only</li>
                    <li>• Regular review of security practices</li>
                    <li>• Encrypted communication for sensitive information</li>
                    <li>• Secure disposal of outdated records</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Information Sharing
                  </h3>
                  <div className="text-gray-600 space-y-2">
                    <p>
                      We do <strong>not</strong> share your personal or health
                      information with third parties except:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• With your explicit written consent</li>
                      <li>• When required by law or court order</li>
                      <li>• In emergency situations to protect your safety</li>
                      <li>
                        • With healthcare providers when you request referrals
                      </li>
                      <li>• For insurance claims when you authorize it</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Your Rights
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Access to your personal information</li>
                    <li>• Request corrections to your records</li>
                    <li>• Withdraw consent for specific uses</li>
                    <li>
                      • Request deletion of your data (subject to legal
                      requirements)
                    </li>
                    <li>• Receive a copy of your health records</li>
                    <li>• Lodge a complaint about our data handling</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Data Retention
                  </h3>
                  <div className="text-gray-600 space-y-2">
                    <p>We retain your information for:</p>
                    <ul className="space-y-2 ml-4">
                      <li>
                        • Active client records: Duration of treatment plus 7
                        years
                      </li>
                      <li>
                        • Consultation notes: 8 years as per professional
                        guidelines
                      </li>
                      <li>
                        • Communication records: 3 years for service improvement
                      </li>
                      <li>
                        • Financial records: 6 years for tax and legal
                        compliance
                      </li>
                      <li>• Marketing preferences: Until you opt out</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Cookies and Website Data
                  </h3>
                  <div className="text-gray-600 space-y-2">
                    <p>Our website may use:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Essential cookies for website functionality</li>
                      <li>
                        • Analytics cookies to improve user experience (with
                        consent)
                      </li>
                      <li>
                        • Contact form data temporarily for inquiry processing
                      </li>
                      <li>• No tracking cookies or third-party advertising</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Professional Standards
                  </h3>
                  <div className="text-gray-600 space-y-2">
                    <p>
                      As a qualified Ayurvedic practitioner, Dr. Niyati Patel
                      adheres to:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Professional confidentiality standards</li>
                      <li>• UK data protection regulations (GDPR)</li>
                      <li>• Healthcare privacy best practices</li>
                      <li>
                        • Continuing professional development requirements
                      </li>
                      <li>• Professional indemnity insurance standards</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Changes to This Policy
                  </h3>
                  <p className="text-gray-600">
                    We may update this privacy policy periodically to reflect
                    changes in our practices or legal requirements. We will
                    notify you of any significant changes and post the updated
                    policy on our website with the revision date.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Contact Us About Privacy
                  </h3>
                  <div className="bg-green-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      If you have any questions about this privacy policy or how
                      we handle your information:
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
                    <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-500">
                      <p className="text-sm text-gray-600">
                        <strong>Data Protection:</strong> For formal data
                        protection inquiries or complaints, you can also contact
                        the Information Commissioner's Office (ICO) at
                        ico.org.uk
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Link to="/contact" onClick={handleLinkClick}>
              <Button
                size="lg"
                className="hover:scale-105 transition-transform duration-200"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
