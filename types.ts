import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  originalPrice?: string; // Added for Anchoring
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  savings?: string; // Added for psychological trigger
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}