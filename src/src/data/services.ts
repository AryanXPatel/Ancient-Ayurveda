import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'consultations',
    title: 'Ayurvedic Consultations',
    icon: 'user-circle',
    price: 'Initial: £180 | Follow-up: £90',
    duration: '90 min | 45 min',
    features: ['Pulse diagnosis', 'Constitution analysis', 'Personalized plan', 'Lifestyle guidance']
  },
  {
    id: 'massages',
    title: 'Therapeutic Massages',
    icon: 'hand-raised',
    price: 'From £25',
    duration: '30 min - 1.5 hrs',
    features: ['Abhyanga massage', 'Marma therapy', 'Herbal treatments', 'Stress relief']
  },
  {
    id: 'facials',
    title: 'Facial Treatments',
    icon: 'sparkles',
    price: 'From £25',
    duration: '30 min - 1 hr',
    features: ['Gold facial', 'Ayurvedic facial', 'Traditional lift', 'Natural skincare']
  },
  {
    id: 'pregnancy',
    title: 'Pregnancy & Postnatal Care',
    icon: 'heart',
    price: 'From £45',
    duration: '1 - 1.5 hrs',
    features: ['Pregnancy massage', 'Postnatal care', 'Wellness support', 'Stress relief']
  },
  {
    id: 'panchakarma',
    title: 'Panchakarma Programs',
    icon: 'arrow-path',
    price: 'From £575',
    duration: '7-28 days',
    features: ['Detox programs', 'Weight loss', 'Home programs', 'Rejuvenation']
  },
  {
    id: 'packages',
    title: 'Wellness Packages',
    icon: 'gift',
    price: 'From £160',
    duration: '1.5 - 2.5 hrs',
    features: ['Combination treatments', 'Spa packages', 'Deep relaxation', 'Custom experiences']
  }
];