export interface Service {
  id: string;
  title: string;
  icon: string;
  price: string;
  duration: string;
  features: string[];
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  contactMethod: 'phone' | 'email' | 'whatsapp';
  serviceInterest: string;
  location: 'home' | 'online';
  city: string;
  dateRange: string;
  timePreference: 'morning' | 'afternoon' | 'evening';
  healthConcerns: string;
  referralSource: string;
  questions: string;
}