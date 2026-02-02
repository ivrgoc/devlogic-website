import type { Metadata } from 'next';
import {
  HeroSection,
  AboutSection,
  ClientsSection,
  ServicesSection,
  ProductsSection,
  ContactSection,
} from '@/components/sections';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'DevLogic — Software Development, QA Consulting & DevOps | Croatia',
  description: 'Web development, QA consulting, and DevOps services. 20+ years of IT experience. Zagreb, Croatia.',
  openGraph: {
    title: 'DevLogic — Software Development & QA Consulting',
    description: '20+ years of IT experience. Web development, QA consulting, and DevOps.',
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
            description: 'Software development, QA consulting, and DevOps services',
            url: 'https://www.devlogic.hr',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Zagreb',
              addressCountry: 'HR',
            },
            founder: {
              '@type': 'Person',
              name: 'Igor',
              jobTitle: 'Software Engineer & QA Consultant',
            },
            serviceType: [
              'Web Development',
              'QA Consulting',
              'Software Testing',
              'DevOps',
            ],
          }),
        }}
      />
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <ServicesSection />
      <ProductsSection />
      <ContactSection />
    </>
  );
}
