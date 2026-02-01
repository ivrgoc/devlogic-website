import type { Metadata } from 'next';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ProductsSection,
  ContactSection,
} from '@/components/sections';

export const runtime = 'edge';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DevLogic | Software Development Services',
  description: 'I help businesses build reliable web applications, implement testing strategies, and set up DevOps infrastructure. Direct communication, quality results.',
  openGraph: {
    title: 'DevLogic | Software Development Services',
    description: 'Software development services focused on quality and reliability.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'DevLogic',
            description: 'Software development services focused on web applications, testing, and DevOps.',
            url: 'https://www.devlogic.hr',
            email: 'info@devlogic.hr',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'HR',
            },
            areaServed: 'Worldwide',
            serviceType: ['Web Development', 'Software Testing', 'DevOps'],
          }),
        }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ContactSection />
    </>
  );
}
