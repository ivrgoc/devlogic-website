import type { Metadata } from 'next';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ProductsSection,
  WhyUsSection,
  PortfolioSection,
  TestimonialsSection,
  ContactSection,
} from '@/components/sections';

export const runtime = 'edge';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DevLogic | Logic Meets Innovation',
  description: 'Premium tech solutions for businesses. We build scalable web applications, mobile apps, and provide DevOps consulting.',
  openGraph: {
    title: 'DevLogic | Logic Meets Innovation',
    description: 'Premium tech solutions for businesses.',
    url: 'https://www.devlogic.hr',
    siteName: 'DevLogic',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.devlogic.hr',
    languages: {
      en: 'https://www.devlogic.hr/en',
      hr: 'https://www.devlogic.hr/hr',
    },
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <WhyUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
